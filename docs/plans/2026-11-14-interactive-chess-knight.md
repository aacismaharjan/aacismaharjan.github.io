# Interactive chess knight

Date: 2026-11-14
Status: Implemented locally; not deployed. Optional knight-move interaction remains deferred.

## Implementation record

- Integrated a lazy-loaded original copper knight into About, with a checkerboard plinth, constrained orbit, left/right/reset buttons and touch activation/Done controls. Matches the existing light/dark theme.
- Used the original procedural-model option instead of sourcing a GLB. No model or texture downloads are required; provenance is recorded in `docs/assets/chess-knight.md`. Full scene: 25 meshes, 8 unique geometries and 2,576 triangles. The original SVG fallback is 1.7KB.
- Pinned Three.js 0.187.0, using direct scene integration with React 16.13. The deferred scene/library chunks add approximately 153KB gzipped; main JavaScript grew about 1.25KB gzipped. These are production-build measurements, not network timing measurements.
- Rendering stops when settled, offscreen or in a hidden tab. Reduced motion removes easing and damping. Theme updates reuse the renderer. WebGL failure/context loss and lazy-chunk errors retain the static illustration; scene teardown releases GPU resources and subscriptions.
- Validation: six tests pass across the viewer controls/failure/cleanup hooks and existing career content. Production build passes with existing Create React App/Browserslist maintenance warnings. Browser review covered light/dark, desktop/mobile, rotation/reset, idle rendering, reduced motion and context loss. Actual touch gestures scroll the page before activation and remain within the viewer after activation.
- Scope adjustment: GLTFLoader and model-load handling are unnecessary because the original geometry is constructed synchronously. The fallback covers module, initialization and rendering failures instead. No React upgrade, downloaded model or full chess game was introduced.

## Chess.com profile addition (2026-11-14)

- Source facts: the owner supplied username `aacismaharjan`, highest rapid rating **1843**, and reference URL https://www.chess.com/member/aacismaharjan/stats/rapid?time=0. The rating was not independently verified; the statistics page was inaccessible to the browsing tool.
- Confirmed choice: display the supplied personal best as a static, manually maintained value, with no API request, avatar or additional statistics.
- Initial copy included the username and a separate rating block below the viewer. The owner rejected that presentation and requested a compact scene with integrated profile details and no reset/rotation button row.
- Current design: one rounded scene with a subtle circular backdrop and an inset, translucent bottom overlay displaying `1843`, `Rapid`, `Personal best`, and a compact `Chess.com` pill link. No visible username, caption or Three.js credit. The link opens https://www.chess.com/member/aacismaharjan in a new tab with `noopener noreferrer` and an accessible profile label.
- Hero composition: the name, role, location, introduction and actions now share the left column, with the scene alongside. The name uses two lines; narrower layouts stack the panel after the introduction/actions. Panel height is 390px alongside text, 360px stacked, or 330px on the narrowest phones.
- Removed the visible left/right/reset controls. Drag remains available; the focused scene supports left/right arrow keys and Home. Touch retains a small overlaid Explore in 3D/Done button, with Escape also releasing gesture capture. Scene rendering, visibility pausing and disposal remain unchanged.
- The profile overlay remains outside lazy-loading and scene error boundaries, available during loading and viewer failure. Styles use existing light/dark theme variables, with an opaque fallback when translucent backgrounds are unsupported.
- Validation: all ten tests across three suites pass and the production build succeeds. The updated viewer test covers keyboard rotation/reset and the absence of the old button row. Existing maintenance warnings remain, and Jest reported delayed shutdown. Local headless Chrome review covered desktop light/dark (1440px), mobile light (390px), and narrow mobile dark (320px), with no horizontal overflow. Browser checks confirmed the profile URL, touch activation/release with restored `pan-y`, and persistent profile/fallback after WebGL context loss. Screenshots were inspected for desktop light and narrow mobile dark. Live navigation to Chess.com was not tested.

## Concept

A sculptural chess knight beside the About introduction: a personal reference to Aashish's chess interest and a small, explorable demonstration of Three.js. The first version is a model viewer, with a possible chess-move interaction later.

Visual direction: a recognizable, stylized Staunton knight in warm copper, seated on a compact charcoal plinth with a faint checkerboard surface. Use a three-quarter camera angle that shows the horse silhouette clearly. A broad soft key light and gentle rim light reveal the shape. Keep the surrounding canvas transparent and adapt the plinth and lighting to the site's light/dark themes.

Suggested caption: “A little strategy, a little curiosity.” A quieter “Built with Three.js” label makes the implementation discoverable without adding a skill claim to the resume.

## Placement and composition

- Keep the existing name and role at the top of About. Below them, place introduction/actions on the left and the knight on the right when the content area has enough room. Keep stats and social links full-width below.
- Reserve approximately 35–40% of that row for the scene, around 320–400px high. Use the actual available content width, accounting for the fixed sidebar, when choosing the stacking breakpoint.
- Stack the scene below the introduction/actions on narrower screens, around 240–280px high. The CV and experience links remain prominent before the decorative interaction.
- Reserve the scene dimensions before loading to prevent layout shifts. Keep one canvas confined to its panel.

## First-version interactions

1. **Explore:** drag horizontally to rotate around the knight, with limited vertical orbit so the model stays upright and well framed. Disable zoom and pan. Show “Drag to rotate” on desktop.
2. **Keyboard:** provide ordinary Rotate left, Rotate right and Reset view buttons with accessible names. The same rotation state drives these controls and pointer interaction.
3. **Touch:** begin with a static view and an “Explore in 3D” button. Before activation, vertical swipes scroll the page normally; after activation, confine orbit gestures to the panel and offer “Done” to restore scrolling. Keep button-based rotation available.
4. **Reset:** return to the original three-quarter view. Use a brief eased transition unless reduced motion is enabled, in which case reset immediately.

Keep the resting scene still. Rendering and lighting provide depth without constant spinning, cursor following, particles, sound or a second competing motion system.

## Model approach

Use one optimized, locally hosted `.glb` knight with a clear silhouette and simple materials. Start by sourcing a model with an explicit license permitting portfolio use, or create an original stylized mesh. Confirm the chosen asset and its attribution before implementation; no model has been selected or downloaded yet.

Target: model under 500KB, approximately 5–15k triangles, ideally with material colors rather than large textures. These are design budgets to verify, not measured asset sizes. Avoid extra compression decoders unless the chosen asset needs them.

Save the selected model under `public/models/chess-knight.glb`, its source/license in `docs/assets/chess-knight.md`, and a matching lightweight static fallback under `public/images/`. Credit third-party work as required and describe the interaction/rendering work accurately.

If a suitable licensed asset is unavailable, build an original faceted knight with a lathed base and custom extruded horse profile. This is a fallback asset approach, not an additional first-release feature.

## Technical approach

- The current site uses React 16.13 and does not have Three.js installed. Add a compatible, pinned Three.js version after checking its build/browser requirements; use direct Three.js inside a React component rather than introducing React Three Fiber or upgrading React for this feature.
- Lazy-load `src/components/ChessKnight.jsx` from Home, with a stable fallback panel. Create a renderer, camera and scene in an effect; load the model with GLTFLoader and constrain interaction with OrbitControls. Keep the scene independent of career data and Redux.
- Use ResizeObserver for the panel dimensions, cap pixel ratio at 1.5 initially, and use simple lights/materials without bloom or expensive post-processing. Begin with a simple shadow plane rather than real-time shadow maps.
- Render on changes; while damping/reset animation is active, request frames until it settles. Pause work when offscreen or the tab is hidden. Avoid a permanent animation loop for a stationary model.
- Respect `prefers-reduced-motion`: no inertia or animated resets; manual view changes remain available.
- Read the existing `theme-dark` body class and observe changes to update scene colors without recreating the renderer. The existing theme toggle remains the source of truth.
- Show the static knight image when WebGL is unavailable, the model fails to load, or the WebGL context is lost. Remove or disable unavailable interaction controls and retain the caption. Keep all portfolio text independent of the canvas.
- Clean up controls, observers, event listeners, scheduled frames, geometries, textures, materials and renderer on unmount. Ignore/dispose late model loads after teardown.

## Implementation steps

1. Select/create the model and its matching fallback. Verify license, silhouette, size and attribution. Done when both assets work locally and are recorded.
2. Build the isolated viewer with constrained drag, button controls, touch activation and fallback states. Done when mouse, touch and keyboard can explore/reset without disrupting the page.
3. Integrate into Home and add scoped styles in `public/main.css`. Done when text, actions and stats retain their hierarchy in both themes and stacked layouts.
4. Validate the production build and inspect desktop/mobile rendering, page scrolling, theme changes, keyboard focus, reduced motion, slow loading and unavailable WebGL. Verify resource cleanup when the component unmounts. Record actual asset size and load impact.

First-release acceptance: one recognizable knight, responsive layout without overflow or loading jumps, functioning rotation/reset, usable fallbacks, no continuous idle rendering, and no regression in the existing career content tests or production build.

## Optional second iteration

Add a “Make a knight move” interaction on a small board: show legal destinations and animate one L-shaped move after a tile is selected. Provide the destinations as keyboard-accessible buttons, with immediate transitions under reduced motion. This demonstrates picking/raycasting and animation, but is separate from the first version so the initial feature stays small.

A full chess game, AI opponent, animated character rig and scroll-driven page takeover are outside this plan.

## References

- [GLTFLoader](https://threejs.org/docs/pages/GLTFLoader.html): glTF model loading.
- [OrbitControls](https://threejs.org/docs/pages/OrbitControls.html): constrained orbit behavior; damping requires updates while moving.
- [Rendering on demand](https://threejs.org/manual/pages/rendering-on-demand.html): event-driven rendering and settling animations.
- [Cleanup](https://threejs.org/manual/pages/cleanup.html): explicit GPU resource disposal.
