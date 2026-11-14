# Project guidance

- For experience and timeline work, read `docs/plans/2026-11-14-portfolio-experience-timeline.md` for resume evidence, unresolved dates, and implementation steps.
- For the implemented Three.js hero, read `docs/plans/2026-11-14-interactive-chess-knight.md` for the design and implementation record. `ChessKnightPanel` lazy-loads the viewer; `src/components/chess/` owns the original geometry and scene lifecycle. Asset provenance is in `docs/assets/chess-knight.md`.
- For `/character-preview`, read `docs/plans/2026-11-14-replace-character-preview-model.md` and `docs/assets/person-character.md`. The active asset is the user's supplied `public/models/character.glb`, displayed statically with a matching PNG poster. The earlier hand-modeled asset and its generator are retained separately; regenerating that asset does not update the active preview. Preserve the zero-paid-generation constraint.
- The updated ATS DOCX takes precedence over the March resume for conflicting facts: Varosa's current senior/lead title and BCIS CGPA 3.44/4.0 are recorded in the plan. Use the older PDF only for non-conflicting supplemental details.
- The site is a single-page React app. Sections become visible only when rendered in `src/App.js`; sidebar anchors and scrollspy targets come from `navItems` in `src/components/Navbar.jsx`.
- Reuse `src/components/Section.jsx` and the existing responsive Bootstrap layout when adding sections. Inspect `public/main.css` and `public/index.html` for styles and theme behavior.
- Experience and Education are mounted on the homepage and read static records from `src/constant/experience.js` and `src/constant/education.js`. Preserve month/year precision and omit unknown education dates.
- The CV button imports `src/assets/resume.pdf`; replacing a document elsewhere does not update the download. Page metadata exists in both `src/App.js` (Helmet) and `public/index.html`.
- Keep PDF files binary in `.gitattributes` so Git's Windows line-ending conversion preserves their byte offsets.
- Theme switching is defined in `public/index.html` through `window.computeDarkTheme` and the `theme-dark` body class; new timeline styles need both themes.
- The knight observes that body class and renders on demand. Keep GPU work paused offscreen, preserve touch activation before gesture capture, and dispose scene resources on teardown. Its SVG fallback must remain usable without WebGL.
- Project cards support optional images, links and technology tags. SnapSewa and QuickCafe use CSS covers and have no public URLs yet; add links only when supplied. The shared Card is also used by Blogs.
- Plans belong in `docs/plans/YYYY-MM-DD-slug.md`. Keep source facts separate from proposed copy and unresolved questions.
- Update this file when exploration reveals a new constraint or a non-obvious project convention; keep task-specific findings in the relevant plan.
