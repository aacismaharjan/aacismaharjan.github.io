# Chess knight assets

Current status (2026-11-14): the homepage knight is disabled. Its SVG is preserved at `archive/3d/public/images/chess-knight.svg`; `public/images/chess-knight.svg` below is its former runtime location. Geometry and scene source are retained but excluded from the app's import graph. See [the pause/restoration plan](../plans/2026-11-14-hide-3d-features.md).

The knight is an original procedural model created for this portfolio. Its source is `src/components/chess/createKnight.js`: a lathed base, beveled extruded horse profile, faceted mane, eyes and a four-by-four checkerboard plinth. No external model, texture, font or attribution-dependent mesh is loaded.

The matching static illustration at `public/images/chess-knight.svg` is also original, created for this feature. It appears during lazy loading and when WebGL is unavailable or lost.

Implementation choice: use the original-mesh option from the plan instead of a downloaded GLB. This removes asset-loading and license dependencies; the geometry travels with the deferred Three.js scene code. There is no separate model request or model-load failure state.

The viewer uses pinned Three.js 0.187.0 (MIT-licensed). See its installed package license for the library's terms. The portfolio's existing terms continue to govern its own code and artwork; this document adds no new license grant.
