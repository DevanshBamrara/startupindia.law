# Design Specification: Corridor Mobile Fix & Calm Reference Wall

**Date:** 2026-08-06  
**Target Files:** `index.html`, `src/style.css`, `src/main.js`

---

## 1. Corridor Responsiveness & Sleek Slider Indicators

### A. Mobile Card Overflow & Clipping Fix
- **Issue:** On mobile screens, `.corridor-panel` content clips right ("Advisor to ventures featured o1...") due to rigid `85vw` sizing and padding calculation without `min-width: 0` flex protection.
- **Solution:**
  - Set `.corridor-panel` on mobile to `flex: 0 0 100%`, `max-width: 100%`, `min-width: 0`, `padding: 32px 20px`.
  - Ensure `.panel-quote` wraps naturally with `word-break: break-word` / `overflow-wrap: break-word` and appropriate fluid font scaling (`clamp(18px, 4.5vw, 24px)` on small screens).

### B. Sleek Dot/Pill Slider Progress Indicators
- **Issue:** Mobile media query forcibly styled `.tally-mark` with `min-width: 24px !important; min-height: 24px !important`, creating heavy black square blocks.
- **Solution:**
  - Remove block `min-width: 24px` override.
  - Style `.tally-mark` as sleek, rounded indicators:
    - Default inactive dot: `width: 8px`, `height: 8px`, `border-radius: 50%`, `background-color: var(--color-line)`.
    - Active state `.tally-mark.active`: `width: 24px`, `height: 8px`, `border-radius: 4px`, `background-color: var(--color-ink)`.
    - Smooth CSS transitions (`width 300ms ease, background-color 300ms ease`).

---

## 2. Calm Reference Wall Architecture (Section A & Section B)

### Overview
Transform Frame 8 into a serene, uncluttered, publication-grade reference wall. Remove all interactive popups, modal buttons, links, and action triggers.

### Section A: Government Grants & Statutory Benefits
- **Heading:** `Government Grants & Statutory Benefits`
- **Lead Text:** `A curated overview of Indian government schemes that support early-stage ventures — for general awareness.`
- **Structure:** 7 Reference Cards (Single column on mobile, 2 columns on desktop). Each contains:
  - `<h3>` Scheme Name
  - `<p>` Description: Inter, weight 300, 16px, color `#4A4A4A`.

### Section B: Incubators & Institutional Networks
- **Heading:** `Incubators & Institutional Networks`
- **Lead Text:** `A non-exhaustive reference list of premier academic incubators and innovation hubs in India that support technology entrepreneurs.`
- **Structure:** 7 Reference Cards (Single column on mobile, 2 columns on desktop). Each contains:
  - `<h3>` Incubator Name
  - `<p>` Description: Inter, weight 300, 16px, color `#4A4A4A`.

---

## 3. Verification & Cleanup
- Verify build with `npm run build`.
- Remove dead JS scheme modal initialization logic if no longer needed.
