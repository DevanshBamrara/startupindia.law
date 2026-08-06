# StartupIndia.Law Website Enhancements — Design Specification

**Date:** 2026-08-06  
**Status:** Approved by User  
**Target Files:** `index.html`, `src/style.css`, `src/main.js`

## 1. Executive Summary
This design specification defines five key enhancements to `StartupIndia.Law` to improve visual clarity, heading hierarchy, typographic cleanliness, legal risk mitigation, and advisory positioning across public startup & grant ecosystems.

---

## 2. Detailed Requirements & Design Specifications

### Task 1: "Ask us how..." Inquiry Basin Visibility
- **Current State:** The placeholder text in the search basin `#queryVessel` uses `--color-grey` (`#8C8C8C`), making it faint against `#F8F8F8` background.
- **Design Specification:**
  - Change `.vessel-placeholder` color to `--color-ink` (`#1A1A1A`) with `font-weight: 500`.
  - Add a subtle obsidian border accent (`1.5px solid #1A1A1A`) and a crisp hover shadow to `#queryVessel` so visitors immediately recognize it as a prominent input trigger.
  - Keep search icon crisp (`stroke: #1A1A1A`).

### Task 2: Corridor Heading Alignment ("The Corridor of Experience")
- **Current State:** `.scroll-hint-label` is styled as a 12px grey uppercase label.
- **Design Specification:**
  - Replace `<span class="scroll-hint-label">The Corridor of Experience</span>` with `<h2 class="section-headline corridor-heading">The Corridor of Experience</h2>`.
  - Ensure `.corridor-heading` matches the typography scale (`clamp(28px, 5vw, 48px)`, Cormorant Garamond font, ink color) identical to `Ventures we've advised`.

### Task 3: Global Quotation Mark Removal (`"..."`)
- **Current State:** Decorative quotes `" "` surround titles, headlines, questions, lead paragraphs, card captions, and quote callouts across the site.
- **Design Specification:**
  - Strip all leading and trailing double quotes (`"`, `“`, `”`) from:
    - Hero question (`Ever had a great idea...`)
    - Search basin questions & preview string in `index.html` and `src/main.js`
    - All 8 Corridor of Experience panel quotes
    - Sanctum headline (`We help build companies...`)
    - Gallery headline (`Ventures we've advised.`)
    - All 6 Vitrine card captions (`India's first...`, etc.)
    - Philosophy Bodhi Tree headline (`Our time has arrived.`)
    - Pamphlet quote (`Only 2% of startups...`)
    - Events slider heading (`Where we've spoken and advised.`)
    - Frame 8 lead paragraphs (Government Grants & Policy Counsel, Incubators & Institutional Mentorship)

### Task 4: Ecosystem & Grant Copy Refactoring
- **Current State:** Frame 8 lead paragraphs and card descriptions could be misunderstood as StartupIndiaLaw operating government schemes or incubators directly.
- **Design Specification:**
  - Refine lead paragraph 1 (Government Grants & Policy Counsel):
    *We guide high-growth ventures through eligibility structuring, compliant application architecture, and institutional legal positioning to unlock non-dilutive government capital, tax exemptions, and statutory benefits.*
  - Refine lead paragraph 2 (Incubators & Institutional Mentorship):
    *We advise technology founders on bridging breakthrough innovations with premier academic incubators, university tech transfer labs, and global venture acceleration networks.*
  - Retain all specific program references (SISFS, NIDHI-SSS, SAMRIDH, DPIIT, SINE IIT Bombay, CIIE.CO, NSRCEL, iCreate, T-Hub) while maintaining clear advisory positioning.

### Task 5: Non-Affiliation Statutory Disclaimer & Footer Notice
- **Current State:** General legal disclaimer in footer does not explicitly address non-affiliation with `startupindia.gov.in`.
- **Design Specification:**
  - Add a dedicated, styled non-affiliation banner in the site footer:
    ```html
    <div class="non-affiliation-box">
      <strong class="disclaimer-alert-title">DISCLAIMER & NON-AFFILIATION NOTICE:</strong>
      <p>StartupIndia.Law (The Office of Adv. Ashish Gupta) is an independent private legal advisory practice. StartupIndia.Law is <strong>not</strong> affiliated, associated, authorized, endorsed by, or in any way officially connected with the Government of India, the Department for Promotion of Industry and Internal Trade (DPIIT), Startup India (startupindia.gov.in), or any government ministry or statutory body. All official government scheme names, incubator trademarks, and logos referenced on this site belong to their respective owners and are cited solely for informational context.</p>
    </div>
    ```
  - Also append point #9 in the initial statutory legal disclaimer modal (`disclaimerOverlay`) reiterating zero connection with `startupindia.gov.in` or DPIIT.

---

## 3. Verification Plan
- Verify site renders cleanly with zero console errors.
- Test inquiry basin interaction in browser (click, type, submit).
- Verify heading sizes, contrast, and font consistency across mobile and desktop breakpoints.
