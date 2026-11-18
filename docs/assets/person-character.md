# Person character

Current status (2026-11-14): the preview is disabled. All paths below beginning with `public/` describe former runtime locations; their files now live under `archive/3d/public/`. The original generator writes to `archive/3d/public/models/person-character.glb`. See [the pause/restoration plan](../plans/2026-11-14-hide-3d-features.md). The supplied model's bytes and provenance are unchanged.

## Supplied preview asset (archived)

The active `/character-preview` model is supplied by Aashish from `C:\Users\aashi\Downloads\model.glb`, copied unchanged to `public/models/character.glb`. Its SHA-256 is `BE64F2521B266150ADAF3DA2B3AC5B8F31FB5B0A375279BF148C8BBBBC75A8F8`. The original download remains untouched.

This self-contained GLB v2 is 26,175,652 bytes and contains one mesh, one material, three embedded WebP images/textures, one skin and one animation clip. It has 575,464 vertices and 3,228,972 indices (1,076,324 triangles). Required extensions are `KHR_mesh_quantization` and `EXT_texture_webp`; the installed GLTFLoader supports both. Generator metadata identifies `gltfpack 0.25`, which does not establish authorship or licensing.

The preview shows the default pose without animation playback. No optimization or paid generation was performed. The download serves the original bytes. `public/images/character-poster.png` is a still captured from the active Three.js preview for loading and fallback states.

The source/creator/license of this user-supplied asset has not been independently established; it must not be described as original project artwork or as the earlier hand-modeled approximation.

## Earlier hand-modeled asset (retained, inactive)

An original hand-modeled approximation of the person in Aashish's supplied photograph. No paid generation, external upload, third-party character mesh or texture was used.

- Model source: `scripts/model-person.mjs`.
- Export command: `node scripts/build-person-character.mjs`.
- Deliverable: `public/models/person-character.glb` (self-contained binary glTF).
- Fallback: `public/images/person-character.svg`, an original matching illustration.
- This asset previously appeared at `/character-preview`; the route now uses the supplied model above.

The GLB includes named meshes, material colors and provenance extras. It has no embedded photograph, photographic textures, skeleton or animation. Shoes and hidden details are artistic interpretations. The portrait's face is simplified; the result is not a faithful reconstruction or biometric likeness.

The model is original project artwork and inherits the project's applicable terms. Three.js is used under its own MIT license; this document adds no new license grant for project artwork.
