# Website Enhancements Implementation Plan

> **User Goal:** Improve visibility of "Ask us how...", equalize "The Corridor of Experience" heading size, remove all double quotes `"` across the website, refine ecosystem/grant copy, and add statutory non-affiliation legal disclaimers.

- **Spec Document:** `docs/superpowers/specs/2026-08-06-website-enhancements-design.md`
- **Target Files:**
  - `index.html` (HTML structure, copy, quotes, heading tags, footer disclaimer)
  - `src/style.css` (Query basin contrast/border, corridor heading styles, footer non-affiliation styling)
  - `src/main.js` (Question preview quotes strip, web3forms hidden input text handling)

---

## Proposed Changes

### Component 1: `index.html`

#### [MODIFY] [index.html](file:///c:/Users/Dev/Documents/StartupIndiaLaw/index.html)
- Update `#disclaimerOverlay` to include explicit point 9 regarding non-affiliation with `startupindia.gov.in`.
- Update `#frame-1` bell question and suggested inquiry question pill strings (remove quotation marks `" `).
- Update `#frame-2` header: change `<span class="scroll-hint-label">The Corridor of Experience</span>` to `<h2 class="section-headline corridor-heading">The Corridor of Experience</h2>`.
- Remove quotation marks from all 8 corridor quotes in `#frame-2`.
- Remove quotation marks from `#frame-3` sanctum headline.
- Remove quotation marks from `#frame-4` gallery headline and all 6 vitrine card captions.
- Remove quotation marks from `#frame-6` philosophy headline and pamphlet quote.
- Remove quotation marks from `#frame-7` events heading.
- Refine lead copy for `#frame-8` Section A (Government Grants & Policy Counsel) and Section B (Incubators & Institutional Mentorship). Remove quotation marks.
- Add `<div class="non-affiliation-box">` into site footer with non-affiliation disclaimer regarding `startupindia.gov.in`.

---

### Component 2: `src/style.css`

#### [MODIFY] [style.css](file:///c:/Users/Dev/Documents/StartupIndiaLaw/src/style.css)
- Increase contrast and visibility of `.vessel-placeholder` (font-color: `#1A1A1A`, weight 500, crisp icon stroke).
- Add crisp active/hover border & shadow styling to `.query-vessel` for high visibility.
- Style `.corridor-heading` to inherit `.section-headline` typography (`clamp(28px, 5vw, 48px)`, Cormorant Garamond font).
- Add `.non-affiliation-box` styling in the footer (clean bordered box, muted dark text, subtle accent bar).

---

### Component 3: `src/main.js`

#### [MODIFY] [main.js](file:///c:/Users/Dev/Documents/StartupIndiaLaw/src/main.js)
- Update `proceedToEmailStep(qText)` to set `previewQuestionText.textContent = qText` without surrounding quotes (`"${qText}"`).
- Update email form submission handler so `web3formsQuestionInput` gets clean string without regex quote replacement artifacts.

---

## Plan Tasks

### Task 1: Refactor `index.html` & Remove Quotes Across Website
1. Edit `index.html`:
   - Remove quotes from Frame 1 hero question, suggestion pills, preview text.
   - Upgrade Corridor label to `<h2 class="section-headline corridor-heading">The Corridor of Experience</h2>`.
   - Remove quotes from all 8 corridor panel quotes.
   - Remove quotes from Frame 3 sanctum, Frame 4 gallery, Frame 6 philosophy, Frame 7 events, Frame 8 advisory sections.
   - Refine Frame 8 lead paragraphs for Grants & Incubators.
   - Add non-affiliation point to disclaimer modal and footer disclaimer box.

### Task 2: Update CSS (`src/style.css`)
1. Edit `src/style.css`:
   - Elevate `.query-vessel` and `.vessel-placeholder` visibility & contrast.
   - Add styling rules for `.corridor-heading` and `.non-affiliation-box`.

### Task 3: Update Controller Logic (`src/main.js`)
1. Edit `src/main.js`:
   - Remove hardcoded quotes wrapping `previewQuestionText`.

### Task 4: Verification & Browser Validation
1. Verify no syntax errors exist in HTML/CSS/JS.
2. Preview site in browser subagent or dev server.
3. Confirm "Ask us how..." is high contrast, Corridor heading matches "Ventures we've advised", all quotes are gone, grant copy is advisory, and non-affiliation disclaimer is clearly displayed in footer.
