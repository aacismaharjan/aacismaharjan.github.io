# Person character and separate preview

Status: Implemented locally; not deployed.

The original hand-modeled asset described below was subsequently replaced on the preview route by Aashish's supplied GLB. See `2026-11-14-replace-character-preview-model.md` for the current implementation; the original model and generator are retained separately.

## Decisions and provenance

- Aashish selected a stylized likeness, a separate preview, and no paid generation. The connected image-to-3D service reported no available free generations. No generation was submitted, and the reference photo was not uploaded.
- Aashish subsequently approved hand-modeling a stylized approximation. This replaces the deferred AI conversion with an original local mesh, not a scan or AI reconstruction. The page labels that distinction explicitly.
- Reference: `C:\Users\aashi\Downloads\IMG-20261021-WA0001.jpg`, inspected locally. Retain the swept hair, sunglasses, moustache, teal top, dark trousers, backpack, watch and draped jacket. Interpret shoes and unseen details. The source photograph is not copied into public assets.

## Implementation

- Separate lazy-loaded `/character-preview` route, with a return link to the portfolio and independent light/dark control. The homepage's knight remains intact.
- Original model source in `scripts/model-person.mjs`; regenerate the self-contained `public/models/person-character.glb` with `node scripts/build-person-character.mjs`. Current export: 215,452 bytes, 68 mesh instances, 21,436 triangles. Surface colors are PBR materials, not photographic textures. No rig or animation.
- Preview loads the GLB with GLTFLoader, normalizes its bounds, and frames it over a small plinth. Orbit, limited zoom, keyboard buttons, reset, touch activation/Done and direct download are included.
- GPU rendering occurs on demand and pauses offscreen/in hidden tabs. Reduced motion disables inertia. Model failure, unavailable WebGL and context loss retain a static original illustration. Cleanup aborts pending fetches and releases loaded resources, including late arrivals after teardown.
- Theme switching now tolerates pages without the portfolio sidebar's theme image.

## Validation

Production build and all 10 tests pass. Browser checks verified a real GLB load, light/dark rendering, rotation, zero draw calls while idle, no horizontal overflow at 320/390/768/1024 pixels, a valid binary GLB download, and context-loss fallback with controls removed. The source GLB header/version/length, embedded buffers and provenance extras are also validated. Existing Create React App/Browserslist maintenance warnings remain.

AI reconstruction and animation remain outside this implementation. The current deliverable is the explicitly approved, zero-credit hand-modeled approximation.
