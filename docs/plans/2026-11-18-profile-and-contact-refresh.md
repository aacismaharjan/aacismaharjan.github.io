# Profile photo and email-only contact

Date: 2026-11-18
Status: Implemented and verified locally. Not deployed.

## Source facts and scope

- User supplied `C:\Users\aashi\Downloads\IMG-20261021-WA0001.jpg`: 960 × 1280 JPEG, 388,847 bytes. The original remains unchanged outside the repository.
- The sidebar imports `src/assets/avatar.jpg`, displayed at up to 160 pixels on desktop and 50 pixels on mobile.
- Contact previously displayed a form posting to Formspree, a phone number and a Google Maps iframe. The existing public email is `aashishmaharjan2001@gmail.com`.
- User requested removal of Blogs and CodePen and selected retaining only LinkedIn and GitHub among the introduction's social links.
- Existing uncommitted work hides the 3D features. Preserve it and verify production remains free of their code/assets.

## Research and decisions

- [MDN anchor documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) describes native `mailto:` email links. Use a visible, selectable email address and an “Email me” link; explain that it opens the visitor's email app. No delivery confirmation is implied.
- [MDN Clipboard.writeText](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText) documents secure-context requirements and possible rejection. Attempt copying only from the button action; catch both an unavailable API and permission failures and retain manual copying as fallback.
- [W3C ARIA22](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA22.html) recommends `role="status"` for announcing status updates without moving focus. Keep the status region mounted and update it after copying resolves.
- [web.dev image compression guidance](https://web.dev/articles/compress-images) recommends matching image dimensions and compression to usage and checking visual quality. Use a 320 × 320 crop for the 160-pixel desktop avatar, preserving detail at 2× density. JPEG avoids new tooling or dependencies for this small asset.
- Removing the map, form and sections is the user's product choice; the sources support the replacement interactions rather than prescribing these removals.

## Implementation

- Cropped head and shoulders from source rectangle `(335, 510, 410, 410)` and resized with Windows System.Drawing high-quality bicubic interpolation. JPEG quality 82 produces a 29,642-byte avatar, 92.4% smaller than the supplied source. Replaces the existing avatar, with intrinsic dimensions added to reserve its square layout.
- Contact copy: “Let’s work together” and “Have a frontend role or a project to discuss? Send me an email and tell me what you’re building.” A themed card contains the address, email action, copy action, helper text and polite status feedback.
- Contact is compact rather than full-height, wraps the address, stacks actions on small screens and uses the existing light/dark theme variables. Retained footer attribution.
- Removed homepage imports/mounts and sidebar/scrollspy entries for Blogs and CodePen. Retained unused source and shared Card. Removed Blog, Twitter and Fiverr introduction links. No dependency changes or deployment.
- Removed obsolete contact/map/form styles. Clipboard tests cover success, unavailable API and rejection; application tests use the real navigation and Contact to check removal and retained profile links.

## Validation

- All 16 tests across five Jest suites passed, including native mailto links, clipboard success with retained focus, denial/unavailable fallback, real homepage navigation and the retained 3D component tests. Ran `CI=true` with `node node_modules/react-scripts/scripts/test.js --watchAll=false --runInBand`.
- Production build passed using `node node_modules/react-scripts/scripts/build.js` (the command behind the build script). Existing outdated Browserslist and Create React App Babel dependency warnings remain. Main JavaScript is 118.52 kB gzipped, compared with the earlier disabled-3D plan's 134.37 kB measurement.
- `npm run verify:disabled-3d` passed: one JavaScript chunk, 194 source entries, no disabled 3D modules/assets/styles. Additional source-map inspection found neither Blogs/CodePen page modules nor Axios in production.
- Headless Chrome checked 1440- and 375-pixel viewports in light and dark themes. No horizontal overflow, forms, iframes, removed sections, removed-service requests or runtime exceptions. Theme surfaces changed correctly; actions used a row on desktop and a column on mobile. Avatar remained square at 144 CSS pixels inside the desktop border and 50 pixels on mobile.
- Visually inspected the compressed avatar and production desktop/light and mobile/dark screenshots. Screenshots were saved to the system temporary directory. Clipboard focus and fallback behavior were exercised in component tests; opening an external email application was not automated.
- `git diff --check` passed. Preserved existing unrelated working-tree changes. No deployment performed.

## Visual refinement requested after review

- Tightened the original-photo crop to `(421, 530, 225, 225)` before resizing to 320 × 320. The face and shoulders now fill the circular avatar. JPEG quality 85 produces 23,610 bytes; the original remains unchanged.
- Replaced the large single contact card with a responsive editorial layout: conversational headline and location on the left, a focused inbox card on the right. Smaller screens stack the two regions. A full-width email action, copy row, concise helper text and single-line status area reduce empty space and clarify the primary action.
- Used matching Feather outline icons from the existing react-icons dependency for mail, copy/check feedback, location, footer, hero actions, skill categories and project links. Icons are decorative and hidden from assistive technology; visible labels remain.
- Refined skills-card headers and button alignment without changing career facts, project links, section order or email-only communication.
- Updated the existing email-link test to find the anchor around its label now that the CTA includes a separate arrow icon.
- All 16 tests across five suites pass after the refinement. Production build succeeds (118.95 kB gzipped main JavaScript); `npm run verify:disabled-3d` passes with 195 source entries. Existing tooling warnings remain unchanged.
- Headless Chrome verifies 1440, 768, 375 and 320 pixels in both themes: no horizontal overflow, runtime exceptions or removed-service requests. Desktop uses two contact columns; tablet and phone use one. Visually reviewed desktop/light, desktop/dark and phone/light screenshots, including the tighter circular crop. Adjusted project-button padding and typography to keep icon labels on one line.
- `git diff --check` passes. No deployment or new dependency.

## Default theme and midpoint crop

- At the user's request, adjusted the crop to `(378, 520, 318, 318)`, the rounded midpoint between the original 410-pixel crop and the tighter 225-pixel crop. The 320-pixel JPEG is 27,477 bytes; visually inspected it for balanced head-and-upper-body framing.
- Dark mode is now present on the initial body markup. Restore a saved light preference synchronously before mounting React, then sync the theme bulb after load. Removed the obsolete time-of-day condition. A saved light choice remains respected, and blocked localStorage does not prevent theme switching.
- Executed the actual inline HTML scripts in an isolated Node VM for absent, light, dark, invalid and inaccessible storage. Verified startup theme, load-time bulb synchronization and both toggle directions in all five cases. `git diff --check` passes.
- Production build and `npm run verify:disabled-3d` both pass for this follow-up. Not deployed.
