# Replace the character preview model

Status: Implemented locally; not deployed.

## Result

- `/character-preview` now loads `public/models/character.glb`, copied byte-for-byte from `C:\Users\aashi\Downloads\model.glb`. The original remains unchanged. Asset provenance and its SHA-256 are recorded in `docs/assets/person-character.md`.
- Retained the viewer's automatic framing, rotation, constrained zoom, reset and touch controls. The default orientation fits the model without an additional rotation correction.
- Updated the download and accessible descriptions, and replaced the previous hand-modeling/photographic reconstruction claims with neutral user-supplied asset information.
- Captured a still of the supplied model as `public/images/character-poster.png` for loading and fallback. The homepage knight and the older hand-modeled asset remain intact.

## Constraints

The 26.18 MB file is served unchanged. Its rig and animation clip are preserved in the download but are not played in the preview. Optimization, paid generation and deployment are outside this change.

## Verification

- Source and copied asset SHA-256 match. The download returns HTTP 200, binary glTF and 26,175,652 bytes.
- Production build and all 10 tests pass. Browser checks confirm textured rendering, rotation, idle rendering stops, and no overflow at 320/390/768/1024 pixels.
- The 108 KB poster loads after context loss with unavailable controls removed. Zoom/reset work; touch activation changes gesture capture from `pan-y` to `none` and Done restores it. Return navigation renders the homepage knight and removes the preview-only body class.
