# Design Specification: Mobile Form Responsiveness & Unified Spacing Architecture

**Date:** 2026-08-06  
**Target Files:** `src/style.css`, `index.html`

---

## 1. Step Form & Suggested Inquiry Responsiveness (Mobile)

### A. Next → Button & Input Sizing
- **Problem:** On small mobile screens (320px–375px), `.vessel-question-step` padding (36px left/right) and fixed button padding caused the `Next →` button to overflow past the card container border.
- **Fix:**
  - On mobile (`@media (max-width: 767px)`), set `.vessel-question-step` and `.vessel-email-step` padding to `24px 16px`.
  - For `.vessel-text-input`: `min-width: 0; flex: 1 1 auto; font-size: 15px;`.
  - For `.vessel-action-btn`: `flex-shrink: 0; padding: 10px 14px; font-size: 13px; white-space: nowrap;`.

### B. Suggested Inquiries Alignment
- **Problem:** `margin: 0 auto 12px 0` / `margin: 0 0 12px auto` caused odd alternating left/right indentation of question lines with huge gaps on mobile.
- **Fix:**
  - Remove alternating margins.
  - Set `.question-line` to `width: 100%; display: flex; align-items: flex-start; gap: 12px; padding: 10px 12px; margin: 0; text-align: left;`.
  - Top-align `.ink-circle` (`margin-top: 5px; flex-shrink: 0;`) so it stays aligned with the first line of text.

---

## 2. Unified Spacing & Container System

### A. Horizontal Container Padding
- Set a unified horizontal container padding across all frames:
  - Desktop: `padding-left: clamp(24px, 4vw, 40px); padding-right: clamp(24px, 4vw, 40px);`
  - Mobile (`<= 767px`): `padding-left: 20px !important; padding-right: 20px !important;`
  - Apply to `.content-container`, `.corridor-wrapper`, `.bell-container`.

### B. Heading & Section Margin Standardization
- Standardize all section headlines (`h2`, `.section-headline`, `.offering-main-title`, `.sanctum-headline`, `.events-heading`, `.tree-headline`) to:
  `margin-bottom: clamp(24px, 4vw, 40px);`
- Standardize header flex wrappers (`.corridor-header`, `.events-header`):
  `margin-bottom: clamp(24px, 4vw, 40px);`
- Standardize section gap (`.offering-section`):
  `margin-bottom: clamp(48px, 8vw, 80px);`

---

## 3. Verification Plan
- Build clean with `npm run build`.
- Verify mobile step form layout and question alignment.
