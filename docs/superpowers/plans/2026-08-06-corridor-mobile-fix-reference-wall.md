# Implementation Plan: Corridor Mobile Fix & Calm Reference Wall

- **Spec:** `docs/superpowers/specs/2026-08-06-corridor-mobile-fix-reference-wall-design.md`
- **Target Files:** `index.html`, `src/style.css`, `src/main.js`

---

## Tasks

### Task 1: Update `index.html` Section A & Section B Copy
1. Update Frame 8 Section A:
   - Heading: `Government Grants & Statutory Benefits`
   - Lead: `A curated overview of Indian government schemes that support early-stage ventures — for general awareness.`
   - 7 cards (SISFS, NIDHI-SSS, SAMRIDH, DPIIT Recognition & Tax Benefits, State-Specific Innovation Policies, MSME Innovative Scheme, Patent & IP Fee Rebates) with exact requested titles and descriptions.
2. Update Frame 8 Section B:
   - Heading: `Incubators & Institutional Networks`
   - Lead: `A non-exhaustive reference list of premier academic incubators and innovation hubs in India that support technology entrepreneurs.`
   - 7 cards (SINE IIT Bombay, CIIE.CO IIM Ahmedabad, NSRCEL IIM Bangalore, iCreate Gujarat, T-Hub Hyderabad, Techstars Global, Boeing BUILD 3.0) with exact requested titles and descriptions.
3. Remove modal wrappers/triggers and any "Apply Now" or popup buttons.

### Task 2: Refactor CSS in `src/style.css`
1. Fix `.corridor-panel` on mobile:
   - `flex: 0 0 100%`, `max-width: 100%`, `min-width: 0`, `padding: 28px 20px`.
   - Prevent text clipping & line overflow.
2. Fix `.tally-mark` progress indicators:
   - Remove mobile `min-width: 24px !important; min-height: 24px !important` override.
   - Style `.tally-mark` as rounded dots/pills (`width: 8px`, `height: 8px`, `border-radius: 50%`; active state `width: 24px`, `border-radius: 4px`).
3. Style Calm Reference Wall cards:
   - Clean, quiet card container (`background-color: var(--bg-soft)`, `border: 1px solid var(--color-line)`, `padding: 24px`, `border-radius: 8px`).
   - `h3` title: Cormorant Garamond / Inter, 20px, font-weight 500, color `#1A1A1A`.
   - `p` description: Inter, weight 300, 16px, color `#4A4A4A`, line-height 1.6.

### Task 3: JS Cleanup & Build Verification
1. Remove dead modal handlers if scheme modals are no longer used in `src/main.js`.
2. Run `npm run build` to verify clean compilation.
