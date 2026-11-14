# Portfolio experience and timeline plan

Date: 2026-11-14
Status: Implemented locally; optional content items below remain open. Not deployed.
Updated: 2026-11-14 with the revised ATS resume and Aashish's confirmation of current Varosa employment and college/GPA information. The revised resume supplies CGPA 3.44/4.0, superseding the March PDF's 3.5/4.
Scope: Add an accurate career timeline, supporting education, and selected professional/personal project highlights to the existing portfolio. Implementation was subsequently authorized by Aashish and completed locally; deployment remains separate.

## Sources and evidence rules

- Primary resume: `C:\Users\aashi\Downloads\Aashish_Maharjan_ATS_Resume_Updated.docx`, supplied by Aashish and extracted locally from `word/document.xml`. Use this newer document for current title, achievements, professional positioning and BCIS grade.
- Supplemental resume: `C:\Users\aashi\Documents\Resume\AashishMaharjanResume2026MarAngelswing.pdf`, extracted locally with `pdftotext -layout`; last modified March 22, 2026. Retain non-conflicting historical details omitted from the shorter ATS resume; newer facts take precedence.
- Aashish confirmed that Varosa employment is ongoing and affirmed the college/GPA information. Use the updated resume's explicit BCIS value, 3.44/4.0, rather than the older rounded value. College completion is confirmed; +2 dates remain unspecified.
- Repository inspection: `src/App.js`, `src/components/Navbar.jsx`, `src/components/Section.jsx`, `src/pages/{Home,Experience,Education,Skills,Portfolio,Awards}.jsx` as applicable, `src/constant/portfolio.js`, `public/index.html`, `public/main.css`, and `package.json`. Awards content has not been validated; use resume evidence if adding awards.
- Resume dates are authoritative for the proposed content unless Aashish supplies corrections. Existing template copy is not employment evidence. Project dates and links absent from the resume stay unspecified.
- Preserve exact job titles and month/year precision. Keep employment, education, and personal projects distinguishable. Do not infer employment from project ownership or add unsupported metrics.
- Publish only relevant resume content. References and their contact details are outside this plan's public content scope.

## Current portfolio findings

| Area | Current state | Planned change |
| --- | --- | --- |
| Home composition | `src/App.js` renders About, Skills, Portfolio, Codepen, Blogs, Contact | Mount Experience and Education in the home page |
| Experience | Existing page contains Intelitec Solutions and Shout! Media Productions template jobs dating to 2008; it is unmounted | Replace the entire employment dataset and copy |
| Navigation | `navItems` drives links and scrollspy target IDs | Add Experience and Education anchors matching mounted sections |
| Education | Unmounted legacy entries include conflicting dates and grades | Replace with Apex College and the resume's Gyanodaya +2 entry |
| About | Describes a current BCIS student and part-time freelancer, with a frontend focus | Position as Senior Frontend Engineer / Frontend Team Lead and BCIS graduate, with supporting full-stack experience |
| Projects | Includes Epasale and Natours, but not SnapSewa or QuickCafe | Add the two missing flagship projects and reconcile Natours technology wording |
| Skills | Existing list emphasizes older frontend skills | Include relevant resume-backed full-stack skills without proficiency ratings |
| Download | Home imports `src/assets/resume.pdf` | Replace with the supplied resume during implementation and check the downloaded file |
| Metadata | Helmet in `src/App.js` and fallback tags in `public/index.html` describe a frontend React developer | Align both with the agreed professional positioning |
| Styling | Shared Section wrapper, Bootstrap responsive utilities, `public/main.css`, body-level dark theme | Extend the current layout with a readable vertical timeline |

The existing Natours card calls the project MERN, while the resume names Node.js, Express, MongoDB, and Stripe. Verify whether a React frontend exists before retaining MERN. Epasale's resume stack is vanilla HTML/CSS/JavaScript, PHP, and MySQL.

## Proposed content inventory

### Career timeline — newest first

The bullets below are proposed portfolio summaries derived from resume claims, not additional accomplishments.

| Dates from resume | Employer / title / location | Proposed highlights |
| --- | --- | --- |
| Apr 2025 – Present (ongoing employment confirmed by Aashish) | Varosa Technology Pvt. Ltd.; Senior Frontend Engineer / Frontend Team Lead; Anamnagar, Kathmandu (location from March resume) | Led frontend initiatives and mentored 11 junior developers; built Calilio VoIP workflows including Twilio number purchasing, Bulk SMS, Power Dialer and subscriptions; integrated Google OAuth, MFA, Stripe, Chargebee, 3DS, Apple Pay and Google Pay; reduced frontend build time from 3.2 to 2.2 minutes (31.25%); introduced Zustand and improved GraphQL caching; expanded Playwright/Vitest coverage; strengthened authentication, cross-portal navigation, Service Workers and PWA capabilities; established Claude Code workflows and engineering standards |
| Jul 2024 – Dec 2024 | RISKflo; Mid-Level React.js Developer; Naxal, Kathmandu | Maintained SmartScript, SmartForm and Register collaborative form workflows; fixed defects, delivered features and upgraded legacy dependencies; collaborated through Jira, Confluence and Bitbucket |
| Oct 2020 – May 2023 | UPTECHSYS Pvt. Ltd.; Frontend React.js Developer; Dhumbarahi, Kathmandu | Built React/TypeScript/Redux/MUI dashboards spanning municipal planning, education, inventory, accounting and ecommerce; integrated REST APIs, permissions, dynamic forms and reports |

For Varosa, use these four proposed bullets on the initial view, with additional detail in a native disclosure:

1. Led frontend engineering for Calilio and mentored 11 junior developers through code reviews, technical guidance and peer debugging.
2. Delivered VoIP, onboarding and subscription workflows, including Twilio number purchasing, Bulk SMS, Power Dialer, Google OAuth/MFA and Stripe/Chargebee payments.
3. Reduced frontend build time by 31.25%, from 3.2 to 2.2 minutes, and improved maintainability through modular architecture, lazy loading and reusable TypeScript components.
4. Expanded Playwright end-to-end automation and Vitest unit testing; improved Zustand/GraphQL data handling and promoted engineering standards through documentation and reviews.

Expanded Varosa details: 3DS, Apple Pay and Google Pay integrations; authentication hardening; cookie-based cross-portal navigation; Service Workers/PWA; Claude Code and custom skills. The March resume also supports Chrome extension maintenance and TanStack Query. Treat those as supplemental details rather than newer accomplishments. The updated resume does not supply a promotion date: show the current title on the overall employment entry without claiming it was held throughout the entire tenure. Split progression into dated roles only if Aashish supplies the transition date. Preserve the build-time metric's scope; it is not a runtime-performance claim.

Use the same compact structure for the other employers. Keep UPTECHSYS project highlights in an expandable native disclosure or a short list:

- MIS Municipal-Planning: project status, contract management, consumer committees and deposit processes.
- HamroAcademy: authentication/permissions, Nepali calendar and customized MUI components.
- Inventory System: point of sale, orders, tax calculations, products and batches.
- Hamro Accounting: dashboard, dynamic calculations/reports and REST integration.
- Erke Dashboard: products, batches, staff, suppliers and orders.

These are employer projects, not independent employment entries. Use public-safe descriptions; source code and internal dashboard URLs are optional and must be suitable for public sharing.

### Education and optional milestones

| Dates | Entry | Treatment |
| --- | --- | --- |
| 2021 – 2025 | Apex College, Pokhara University; Bachelor of Computer Information Systems (BCIS); CGPA 3.44/4.0 | College completion confirmed by Aashish; replace “pursuing” with graduate wording and use the updated resume's grade |
| Not supplied | Gyanodaya Higher Secondary School (+2), Management, Computer Science & Business Mathematics; CGPA 3.67/4 | Show the credential without dates until confirmed; discard conflicting legacy dates/grades |
| 2018 | Web Design Certified | Optional learning milestone; provider is unspecified |
| 2020 | Winner, SXC Computer Festival web design | Optional award milestone; reconcile with the existing Hamro Journey card's 2019 competition claim before linking them |
| 2023 | Best group, Apex Smart; group leader, research and presentation | Optional award milestone |
| 2023 | Second runner-up, Apex Sports chess competition | Optional personal milestone, lower priority for a technical portfolio |
| 2024 | Second runner-up, SXC Sandbox hackathon | Optional technical milestone |

Keep education separate from the employment list so overlapping dates are natural. Awards can follow later; they are not required for the first release of the career timeline. Undated Spring Boot and Java coursework should not receive invented timeline positions.

### Selected personal projects

| Project | Resume-backed scope | Required portfolio action |
| --- | --- | --- |
| SnapSewa | On-demand home services; Next.js and Flutter clients; Spring Boot, Spring AI/MCP, MySQL, Docker, AWS; JWT roles, email verification, Khalti payments; Ollama/Groq conversational interface; EC2/S3 deployment | Add a featured card emphasizing full-stack ownership; collect a suitable screenshot and confirmed demo/repository links |
| QuickCafe | Multi-vendor cafeteria system; React/TypeScript, Spring Boot, Hibernate, MySQL, Docker; eSewa payments, roles, reviews, menu management, maps and filtering; project leadership and A grade | Add a featured card; separate leadership from feature summary; collect screenshot and confirmed public links |
| Natours | Tour booking, reviews, maps, Stripe, REST API, JWT, email, deployment; Node.js/Express/MongoDB | Update existing card after reconciling the frontend stack; verify whether the current source link should remain a demo URL |
| Epasale | Online food ordering; HTML/CSS/JavaScript, PHP, MySQL | Keep existing card and align technology wording with the resume |

The resume gives no dates for these projects. Display them as selected projects without dates for now; add month/year ranges only when provided. Feature SnapSewa and QuickCafe first for relevance, without claiming that display order represents chronology. Do not assign these projects to a particular employer or degree without evidence.

## Experience timeline design

- Add `#experience` after About and before Skills; add `#education` after Experience. Retain the existing Portfolio anchor and other sections.
- Use a single vertical ordered list, newest role first. Each item contains role title, employer, month/year range, location, 3–4 achievements and a short technology list. Keep the date inline on narrow screens and aligned beside the content on wider screens.
- Start with all essential role summaries visible. A disclosure may hold UPTECHSYS project detail; navigation and reading do not depend on expanding it.
- Use semantic headings and `<time dateTime="YYYY-MM">` for known dates. Render “Present” as text only for an employment record confirmed as current. Year-only education dates retain year precision.
- A decorative rail and dots may reinforce order; the text and list structure must convey the same information without color or animation. Hide decorative elements from assistive technology.
- Reuse existing Section spacing, colors and typography. Verify contrast in both themes and honor reduced-motion preferences if animation is added. No new timeline dependency is needed.
- Preserve gaps (Jun 2023–Jun 2024 and Jan–Mar 2025) without filler entries or explanations unless Aashish supplies relevant activities. Overlap between employment and college is supported by the supplied dates.

## Implementation sequence and completion criteria

### 1. Resolve content and create shared data

Files: new `src/constant/experience.js` and `src/constant/education.js`.

- Store plain arrays following the existing `src/constant/` convention; these static records do not need Redux.
- Experience fields: stable `id`, `company`, `role`, `location`, `start` (`YYYY-MM`), `end` (`YYYY-MM` or null for confirmed current employment), `highlights`, `technologies`, optional `projects`.
- Education fields: stable `id`, `institution`, `qualification`, optional start/end years, grade, optional specialization. Missing dates are omitted.
- Keep source provenance and open questions in this plan rather than exposing confirmation notes in public cards. Varosa is confirmed current: use `end: null`, with the updated senior/lead title. Keep promotion timing unspecified.
- Done when every visible record maps to resume evidence or an explicit correction, and unresolved facts are omitted or accurately qualified.

### 2. Replace legacy pages and connect navigation

Files: `src/pages/Experience.jsx`, `src/pages/Education.jsx`, `src/App.js`, `src/components/Navbar.jsx`, `public/main.css`.

- Replace template jobs and conflicting education entries with data-driven lists.
- Mount both sections and add their anchors to `navItems`; the existing scrollspy target derivation will include them.
- Add scoped timeline styling for responsive layout and `theme-dark`. Reuse Section without introducing extra routes.
- Done when both sections render on `/`, each sidebar link lands on its section, mobile navigation remains usable, and all three real roles appear in the expected order.

### 3. Align supporting portfolio content

Files: `src/pages/Home.jsx`, `src/pages/Skills.jsx`, `src/constant/portfolio.js`, `src/assets/resume.pdf`, `src/App.js`, `public/index.html`; new project images under `src/assets/portfolio/` if supplied.

- Suggested About direction: “Senior frontend engineer and frontend team lead building React and TypeScript applications, including the Calilio VoIP platform. Experienced in frontend architecture, authentication, payments and automated testing, with additional Java/Spring Boot experience.” Mention BCIS graduation where appropriate. Avoid an unsupported total years-of-experience claim.
- Refresh skills with resume-backed TypeScript, Java/Spring Boot, MySQL, REST, testing and deployment experience; distinguish AWS basics from deeper expertise. Varosa's bullets support TanStack Query, Zustand, Vitest and Playwright; its header also lists Jest, so preserve that distinction when describing actual test work.
- Add SnapSewa and QuickCafe cards and reconcile existing project descriptions. Missing links should be omitted, with no empty or fabricated buttons. Keep screenshots optional until suitable assets exist.
- Export the updated ATS DOCX to PDF during implementation and replace `src/assets/resume.pdf`; verify the export's content and layout. The updated DOCX supersedes the March PDF for public download. Keep the existing PDF import/button behavior, rather than storing DOCX bytes under a PDF filename.
- Align both metadata sources with the senior frontend/lead positioning. Use Kathmandu, Nepal from the updated ATS resume for the public About location.
- Done when About, skills, project cards, metadata and downloadable resume describe a consistent professional profile.

### 4. Verify and prepare release

- Run `npm run build` and record any pre-existing warnings separately from new failures. A documentation-only planning change does not require an application build.
- If adding automated coverage, focus on meaningful behavior: all supplied employers render, reverse chronology is correct, unknown dates remain omitted, and navigation targets exist. Use the installed Jest/React Testing Library setup; no framework migration is required.
- Manually inspect at a narrow mobile width and desktop in light/dark themes: no horizontal overflow, dates stay readable, keyboard navigation/disclosures work, scrollspy tracks the new sections, and reduced-motion behavior is respected.
- Open the CV button and verify it serves the intended PDF. Check provided public project links before publishing; link existence and public suitability are separate checks.
- Review every visible title, date, grade, project claim and technology against the final content inventory. Search the mounted experience content for Intelitec and Shout template remnants.
- Done when build and content checks pass and the changes are reviewable. Deployment is a separate action, not part of this planning task.

## Confirmation items for implementation

1. Optional: supply the month/year of the Varosa senior/lead promotion if separate career-progression milestones are desired. Current employment and title are already established.
2. Supply +2 start/end years if you want them displayed. BCIS college/completion and the updated CGPA of 3.44/4.0 are recorded; no further confirmation is required to plan that entry.
3. Supply dates, public links and suitable screenshots for SnapSewa and QuickCafe if they should have dated milestones or linked case studies. Confirm what employer project details can be shared.
4. Clarify the 2019 Hamro Journey competition versus the resume's 2020 SXC web design award; preserve them as separate claims until their relationship is established.
5. Supply any further experience absent from the updated ATS resume. Use Kathmandu, Nepal from the updated resume for the public About location; confirm a more specific address only if wanted.

These questions do not block implementation of confirmed historical roles, the timeline layout, or project cards without dates/links. They do block presenting unknown information as settled fact.

## Work estimate

After content confirmation: approximately 0.5 day for data/copy, 1 day for timeline/education/navigation, and 0.5–1 day for supporting content and validation. Screenshot collection and answers to open questions may add elapsed time. These are implementation estimates, separate from the career dates above.

## Exploration and handoff notes

- Root `AGENTS.md` was created during exploration and updated with CV download, metadata and theme findings.
- Revised the Varosa entry from mid-level frontend developer to Senior Frontend Engineer / Frontend Team Lead using the newer ATS resume; recorded ongoing employment, mentorship, integrations, automation, architecture and the supplied build-time metric. Replaced the BCIS grade with 3.44/4.0. The source DOCX itself remains unchanged.
- Existing working-tree changes were present in `README.md`, `package-lock.json`, and `src/App.js`, with untracked Docker files and `path/`. Preserve these during implementation.
- Implementation: mounted the data-driven career timeline and education, updated navigation, About, skills, metadata and selected projects, and replaced the downloadable PDF. Preserved pre-existing user changes.
- The updated DOCX was extracted locally and typeset as a two-page text-based PDF after Word automation failed to export reliably. Source DOCX remains unchanged. Verified extracted PDF text against the updated title, achievements and CGPA.
- Validation: production build passed; three content tests cover employment ordering/current status, corrected education with unknown dates omitted, and featured projects without invented links plus load-more behavior. Reviewed desktop/mobile screenshots in light/dark themes and exercised native disclosures. Optional project links/screenshots and promotion dates remain omitted.
