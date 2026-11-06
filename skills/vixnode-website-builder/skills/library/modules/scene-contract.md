# Scene, Camera and Interaction Contract

## Specify Before Coding

Record the industry's real subject, visitor task and why spatial presentation helps. Read [spatial-composition.md](spatial-composition.md), then select line/plane composition, a threshold journey, product angles or assembly explanation. Start with a whole-page composition map: text, evidence, spatial vocabulary, color, negative space and chapter rhythm. Keep action/contact/program information available outside the scene. No real product geometry or process claims may be inferred from the procedural starter.

Define semantic HTML chapters with unique IDs, headings, actual localized copy, chapter links and a static poster. A chapter needs enough natural height for its content; never fix the text panel height to force a cinematic layout. Use locale typography and approved headline segments from the base library.

## Configuration

```js
const controller = mountImmersive(root, {
  variant: 'journey', // weave (default) | journey | product | exploded
  loadEngine: () => import('three'), // Resolve through an actual bundle/import map.
  autoStart: true, // Compact screens and reduced motion still override this.
  timeoutMs: 8000,
  colors: { background: '#090E18', accent: '#D5AF72' },
  labels: {
    enable: 'Enable 3D', text: 'View text version',
    ready: '3D view available', loading: 'Loading 3D view',
    fallback: 'Text view available', reduced: 'Reduced-motion text view'
  },
  cameraKeys: [
    { at: 0, position: [0, 0, 8], target: [1.5, 0, 0] },
    { at: 0.5, position: [0.8, 0.3, 0], target: [1.5, 0, -8] },
    { at: 1, position: [-0.5, 0.2, -8], target: [1.5, 0, -16] }
  ]
});
// In the real host's unmount callback:
controller.destroy();
```

Keys cover 0 through 1 with strictly increasing finite `at` values and finite 3D vectors. Position and target cannot coincide. The starter validates endpoints; an author must also inspect the path between keys for target crossings, clipping and excessive camera travel. Units are scene units, unrelated to physical measurements unless authored that way.

Camera: perspective FOV 45 degrees, near 0.1, far 70. Resize updates aspect and backing buffer dimensions. Initial frame uses actual scroll position, including a deep-linked chapter. Each segment uses smoothstep position/target interpolation; the demand loop approaches target progress using elapsed time, not frame count. Large chapter jumps preserve normal anchors and do not block the reading path while the view settles.

## DOM Contract

- Root: `data-immersive-root`, scoped `.immersive-story` styling.
- Required viewport: `data-scene-viewport`; renderer-owned canvas is decorative and `aria-hidden`.
- At least two readable sections: `data-scene-chapter`, unique nonempty `id`, semantic headings.
- Chapter links: `data-scene-link` with actual `#section-id` targets. Active link gets `aria-current="step"`.
- Optional mode button: `data-scene-toggle`, real button with localized label and `aria-pressed`.
- Optional status: `data-scene-status`, polite status announcement only when lifecycle state changes.
- Poster and all copy exist before module execution. No important text is rasterized into the canvas.

Pass translated labels for each site locale. CSS provides only initial script-sensitive leading; instantiate full locale font stacks, tracking and headline plans in the generated site.

## Interaction Matrix

| Trigger | Scene behavior | Content/input behavior |
| --- | --- | --- |
| Ordinary scroll | Recompute chapter-relative target; render until settled | Normal touch, wheel and keyboard scrolling remain intact |
| Chapter anchor | Normal page jump updates progress and camera target | Direct linking/history preserved; respect sticky navigation offset |
| Text-mode button | Cancel pending load/render and release GPU resources | All chapters/poster remain; focus stays on the button |
| Explicit enable/retry | New load generation, fresh canvas and scene | No repeated automatic retry loop |
| Reduced-motion change | Abort and release immediately | Complete static story; enable button disabled while preference applies |
| Compact screen at mount | Do not load the engine until explicit enable | Show static poster and low-tier option |
| Resize | Re-measure actual sections and render size | Never crop text or convert semantic units to arbitrary CJK breaks |
| Hidden/offscreen | Pause frames and reset interpolation clock | Resume on visibility without time-jump animation |
| Context loss or failure | Release and stay in fallback until explicit retry | Explain availability with a calm localized label; no blocking modal |
| Unmount/remount | Abort, remove listeners/observers, dispose resources | One canvas maximum per root; no stale callbacks |

## Extensions

Hotspots must have equivalent semantic buttons/links with meaningful labels and focus behavior; optional raycasting may activate the same action, never create a canvas-only affordance. Real exploded models need named part IDs, initial/final transforms and a verified mechanical story. Background audio is off by default and only starts through an explicit user action. Shader/postprocessing additions require measured budgets and the same fallback path; they are not implemented by the starter.
