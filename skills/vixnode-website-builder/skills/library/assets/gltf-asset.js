import { disposeObject } from './immersive-scene.js';

// Embedded GLB only. Fetch size is bounded before the decoder receives data.
export function createGltfAssetLoader({ GLTFLoader, url, maxBytes = 4 * 1024 * 1024, fetchImpl = fetch }) {
  if (typeof GLTFLoader !== 'function' || !url || !Number.isFinite(maxBytes) || maxBytes <= 0)
    throw new Error('A loader, asset URL and positive byte budget are required.');
  return async ({ signal }) => {
    const response = await fetchImpl(url, { signal });
    if (!response.ok) throw new Error('Model request failed.');
    if (Number(response.headers.get('content-length')) > maxBytes) throw new Error('Model exceeds byte budget.');
    const reader = response.body?.getReader();
    if (!reader) throw new Error('A bounded readable response is required.');
    const chunks = [];
    let length = 0;
    try {
      while (true) {
        if (signal?.aborted) throw new DOMException('Aborted', 'AbortError');
        const { done, value } = await reader.read();
        if (done) break;
        length += value.byteLength;
        if (length > maxBytes) throw new Error('Model exceeds byte budget.');
        chunks.push(value);
      }
    } catch (error) { await reader.cancel().catch(() => {}); throw error; }
    finally { reader.releaseLock(); }
    const bytes = new Uint8Array(length);
    let offset = 0;
    for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
    const view = new DataView(bytes.buffer);
    if (length < 20 || view.getUint32(0, true) !== 0x46546c67 || view.getUint32(4, true) !== 2 || view.getUint32(8, true) !== length)
      throw new Error('An embedded GLB version 2 asset is required.');
    const jsonLength = view.getUint32(12, true);
    if (view.getUint32(16, true) !== 0x4e4f534a || jsonLength > length - 20) throw new Error('Missing GLB JSON chunk.');
    const metadata = JSON.parse(new TextDecoder().decode(bytes.subarray(20, 20 + jsonLength)).trim());
    if ([...(metadata.buffers ?? []), ...(metadata.images ?? [])].some(item => item.uri && !item.uri.startsWith('data:')))
      throw new Error('External model buffers and textures require a separately budgeted asset pipeline.');
    // This starter has no decoder deployment contract. Reject compressed assets explicitly.
    const unsupported = ['KHR_draco_mesh_compression', 'KHR_texture_basisu', 'EXT_meshopt_compression'];
    if ((metadata.extensionsUsed ?? []).some(name => unsupported.includes(name)))
      throw new Error('Configure matching decoders before accepting compressed models.');
    if (signal?.aborted) throw new DOMException('Aborted', 'AbortError');
    const gltf = await new GLTFLoader().parseAsync(bytes.buffer, '');
    const model = gltf.scene;
    if (signal?.aborted) { disposeObject(model); throw new DOMException('Aborted', 'AbortError'); }
    if (!model?.isObject3D) throw new Error('The GLB has no default scene.');
    let triangles = 0, meshes = 0;
    const textures = new Set();
    model.traverse(object => {
      const geometry = object.geometry;
      if (geometry) { triangles += (geometry.index?.count ?? geometry.attributes.position?.count ?? 0) / 3 * (object.isInstancedMesh ? object.count : 1); meshes++; }
      for (const material of (Array.isArray(object.material) ? object.material : [object.material]))
        for (const value of Object.values(material ?? {})) if (value?.isTexture) textures.add(value);
    });
    if (triangles > 100000 || meshes > 40 || textures.size > 8 || [...textures].some(texture => Math.max(texture.image?.width ?? 0, texture.image?.height ?? 0) > 2048)) {
      disposeObject(model); throw new Error('Model exceeds the starter geometry or texture budget.');
    }
    return model;
  };
}
