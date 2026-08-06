# Implementation Plan: Mobile Form & Unified Spacing Architecture

- **Spec:** `docs/superpowers/specs/2026-08-06-mobile-form-and-spacing-spec.md`
- **Target File:** `src/style.css`

---

## Tasks

### Task 1: Refactor Step Form & Suggested Inquiries in `src/style.css`
1. Update `.vessel-question-step` and `.vessel-email-step`:
   - Mobile padding `24px 16px !important; border-radius: 12px !important;`.
2. Update `.vessel-input-group`, `.vessel-text-input`, `.vessel-action-btn`:
   - Set `.vessel-text-input` to `min-width: 0; flex: 1 1 auto;`.
   - Set `.vessel-action-btn` to `flex-shrink: 0; padding: 10px 14px !important; font-size: 13px !important; white-space: nowrap;`.
3. Update `.questions-grid`, `.question-line`, `.ink-circle`, `.question-text`:
   - Remove alternating left/right margins on mobile.
   - Set `.question-line` to `width: 100% !important; display: flex !important; align-items: flex-start !important; gap: 12px !important; padding: 10px 12px !important; margin: 0 !important; text-align: left !important;`.
   - Align `.ink-circle` with top line of text (`margin-top: 5px; flex-shrink: 0;`).

### Task 2: Standardize Container Padding & Heading Margins
1. Unified container padding:
   - Apply `padding-left: clamp(24px, 4vw, 40px); padding-right: clamp(24px, 4vw, 40px);` to `.content-container`, `.corridor-wrapper`, `.bell-container`.
   - On mobile `@media (max-width: 767px)`, force `padding-left: 20px !important; padding-right: 20px !important;`.
2. Unified heading margins:
   - Apply `margin-bottom: clamp(24px, 4vw, 40px);` across `h2`, `.section-headline`, `.offering-main-title`, `.sanctum-headline`, `.events-heading`, `.tree-headline`, `.corridor-header`, `.events-header`.
   - Set `.bell-question` to `margin-bottom: clamp(32px, 6vw, 64px);`.

### Task 3: Build & Verification
1. Run `npm run build` to verify zero errors and clean build.
