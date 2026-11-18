# Temporarily hide the 3D features

Date: 2026-11-14
Status: Implemented and verified locally. The full plan was written before implementation; not deployed.

## Request and acceptance criteria

Temporarily hide `/character-preview` and the homepage's 3D horse (the chess knight). Retain enough source, assets and documentation to restore them later. Production must contain neither their JavaScript, including deferred chunks and Three.js, nor their models, posters or dedicated CSS. Keep the portfolio content, CV, navigation, responsive layout and themes working. No paid generation or deployment is required.

## Inspected facts

- `src/App.js` registers `/character-preview` through `React.lazy`. `src/pages/Home.jsx` mounts `ChessKnightPanel`, which lazy-loads the knight viewer. Lazy imports still create production chunks even if a visitor never opens the feature.
- Both scene implementations import `three`; the character also uses GLTFLoader, and both use OrbitControls. The only other Three.js consumers are the retained model-generation scripts.
- Create React App copies all of `public/` to `build/` independently of the JavaScript import graph. Hiding JSX alone leaves the models and fallback images in the deployment.
- The public feature assets total 26,502,574 bytes: `models/character.glb` (26,175,652), `models/person-character.glb` (215,452), `images/character-poster.png` (108,336), `images/chess-knight.svg` (1,700), and `images/person-character.svg` (1,434).
- `public/main.css` is a directly linked stylesheet, so unused feature CSS is still shipped. Its hero media rule also reserves a second column for the knight.
- `scripts/build-person-character.mjs` writes the older original model to `public/models/`; its output destination needs to follow the archive to prevent regeneration from adding production weight.
- Existing feature tests can continue testing retained, unmounted components. The working tree was clean at inspection.

## Implementation design

1. Remove the character lazy import and Suspense usage from App. Replace its exact route with a React Router redirect to `/`, avoiding a blank page for an old URL without loading feature code. Leave other route behavior unchanged.
2. Remove the knight panel import and mount from Home. Keep its text, actions, stats and social links. Remove the desktop two-column rule so the text uses the available space without a reserved empty scene column.
3. Move the five assets byte-for-byte to `archive/3d/public/`, retaining their `models/` and `images/` relative paths. This directory is outside both the application import graph and CRA's copied public directory. Retain all viewer/scene source and original generator scripts for future restoration.
4. Extract character and knight CSS from `public/main.css` into `archive/3d/features.css`. Preserve the original scene-specific responsive rules there; keep shared theme variables and hero typography in the active stylesheet. The archived stylesheet must not be linked or imported.
5. Change the original character generator to write into `archive/3d/public/models/`. Keep the supplied character model unchanged and distinct from generated artwork. Retain the pinned Three.js dependency for generator scripts and feature tests: an installed, unreachable dependency contributes zero browser bundle bytes. No dependency update or network access is needed.
6. Add a concise README reminder with source locations, archive location, historical plans/provenance and restoration instructions. Update AGENTS guidance and asset documentation so current locations and disabled status are explicit while historical implementation plans remain history.

## Build verification

Add a local `verify:disabled-3d` command that checks the actual production output. Require JavaScript source maps for module inspection and fail clearly if none exist. Inspect every emitted JavaScript map for Three.js and the retained feature modules; fail if any are present. Walk build output to reject GLB files and feature fallback filenames, and inspect copied `main.css` for character/knight selectors or the old two-column grid rule. This verifies deferred chunks as well as the initial bundle. Keep this check explicit rather than altering CRA configuration or adding a post-build deletion workaround.

Record pre-change build sizes from the existing build where available, run `npm run build`, then run the verifier and compare emitted files/sizes. Run all existing Jest suites. Add focused routing/homepage coverage only if needed to exercise actual route behavior; avoid tests that merely mirror import removal. Confirm archived assets retain their SHA-256 hashes. Inspect the final diff for accidental changes.

## Risks and restoration

- Old asset URLs will stop serving model/image bytes in the next deployment. Redirecting the page affects client routing; the hosting platform still needs its existing SPA fallback for direct deep links. No new server routing configuration is introduced.
- Assets remain in Git/repository storage; the size reduction applies to production output and browser downloads. Previously deployed files and browser caches change only after a new deployment and normal cache expiry.
- Retained components intentionally refer to their former public URLs. Before re-enabling, restore archived assets to `public/`, restore the archived CSS and the hero's two-column media rule, restore App/Home imports and route, review current provenance and constraints, and revise/remove the disabled-feature build check. Recheck on-demand rendering, accessibility, touch activation, cleanup, themes and performance using the historical plans.
- No open question blocks this reversible change. Treat “horse” as the currently implemented chess knight.

## Implementation and verification record

- Removed App's preview lazy import, added an exact redirect to `/`, and removed the knight import/mount from Home. The hero now retains a single column at every breakpoint.
- Archived all five binary/image assets and dedicated CSS under `archive/3d/`. SHA-256 hashes matched before/after each asset move, including the supplied model's recorded hash. Generator output now targets the archive.
- Added the README reminder/restoration pointers, refreshed AGENTS and provenance status, and added `verify:disabled-3d`.
- Production build succeeded using `node node_modules/react-scripts/scripts/build.js`, the script behind `npm run build`. The npm/react-scripts wrapper processes stalled in this sandbox and were stopped; running the underlying scripts directly succeeded. Existing Node `fs.F_OK` deprecation and outdated Browserslist data warnings appeared; compilation succeeded without code warnings.
- `node scripts/verify-disabled-3d-build.cjs` passed: inspected the only emitted JavaScript chunk and its 243 source entries, with no Three.js, viewer modules, models, fallback images or dedicated styles in production.
- Against the pre-existing local build, output decreased from 39,145,061 to 8,458,952 bytes (including source maps). JavaScript decreased from 1,145,274 bytes across five chunks to 413,911 bytes in one chunk: 731,363 fewer uncompressed JS bytes. The current main chunk is 134.37 kB gzipped. These are build artifact measurements, not browser network timing or a fresh baseline rebuild.
- All 12 tests across four suites passed using `CI=true` and `node node_modules/react-scripts/scripts/test.js --watchAll=false --runInBand`. New App tests cover `/` and the old preview URL, real homepage/CV/experience/education content and absence of either 3D feature. Existing viewer tests remain passing for restoration.
- Script syntax checks and `git diff --check` passed. Browser visual review was not performed; responsive layout was checked through the stylesheet change and rendered component coverage. Deployment and hosting-level deep-link behavior remain untested and unchanged.
