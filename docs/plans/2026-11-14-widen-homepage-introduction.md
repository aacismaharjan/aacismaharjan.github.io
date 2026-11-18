# Widen the homepage introduction

Date: 2026-11-14
Status: Implemented and verified locally; not deployed.

## Request and inspected facts

The homepage introduction looked horizontally congested. The user selected a wider single column rather than a two-column redesign. The shared section had a 75rem maximum width, bio paragraphs were capped at 45rem, and the surname was always displayed as a block.

## Implementation

- Override only the about section's maximum width to 85rem, retaining shared responsive padding and other sections' widths.
- Increase about-section bio width to 56rem.
- Display the surname inline at viewport widths of 1200px and above; preserve the stacked name below that breakpoint.
- Preserve content, typography, colors, actions, navigation and disconnected 3D imports. No dependencies changed.

## Verification

- Production build and `npm run verify:disabled-3d` passed. Existing dependency/tooling warnings appeared during the build.
- Headless Chrome checked 375, 768, 1024, 1280 and 1920px in both themes: no horizontal overflow; surname remained stacked below 1200px and the name occupied one line at desktop sizes. Desktop bio width measured 896px (56rem).
- Inspected a desktop screenshot; `git diff --check` passed with existing Windows line-ending notices.
- No unresolved decisions or deployment requested.
