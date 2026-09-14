# StartupIndia.Law Hybrid Redesign & Interactive Features Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a hybrid website structure with a pinned frosted-glass header, dedicated sub-pages (`/services.html`, `/work.html`, `/team.html`, `/updates.html`), an interactive legal chatbot, a Calendly consultation booking modal, WhatsApp quick connect, and refined luxury minimalist aesthetics.

**Architecture:** Vanilla HTML/CSS + Modern JS (ES Modules) bundled via Vite. Shared design tokens for typography (`Cormorant Garamond` + `Inter`), hairline borders, monochromatic palette, and responsive modals/drawers.

**Tech Stack:** HTML5, CSS3, JavaScript (ES6+), Vite 5, Web3Forms, Calendly Embed API.

## Global Constraints
- Do NOT push code to remote git without user's explicit confirmation.
- Minimal luxury aesthetic: zero AI slop, generous whitespace, crisp typography, clean micro-animations.
- Preserve mandatory Bar Council statutory legal disclaimer modal across all pages.
- Ensure all interactive elements have unique IDs and touch targets &ge; 48px on mobile.

---

### Task 1: Global Header Component & Navigation Styling

**Files:**
- Modify: `index.html`
- Modify: `src/style.css`
- Modify: `src/main.js`

- [ ] **Step 1: Add `<header class="site-header">` to `index.html`**
  Add fixed header structure containing brand identity (`StartupIndia.Law` + `The Office of Adv. Ashish Gupta`), navigation links (`Home`, `Services`, `Client Work`, `Team`, `Insights`, `Contact`), LinkedIn link, and `Book Consultation` CTA button with mobile hamburger toggle.
- [ ] **Step 2: Add CSS rules for `.site-header` in `src/style.css`**
  Fixed position, z-index 990, `backdrop-filter: blur(16px)`, bottom hairline border `1px solid #EAEAEA`, desktop flex layout, mobile drawer animation, and active state indicators.
- [ ] **Step 3: Add mobile menu toggle and smooth scroll handler in `src/main.js`**
  Implement mobile toggle event listeners, click-outside-to-close behavior, and keyboard `Escape` closing.
- [ ] **Step 4: Verify header renders properly on desktop & mobile viewports**
  Run `npm run build` and verify bundle builds cleanly.

---

### Task 2: Build Dedicated Sub-Pages (`services.html`, `work.html`, `team.html`, `updates.html`)

**Files:**
- Create: `services.html`
- Create: `work.html`
- Create: `team.html`
- Create: `updates.html`
- Modify: `src/style.css`

- [ ] **Step 1: Create `services.html`**
  Comprehensive practice areas: Venture Building (India/US/SG), IP Fortification (Patents, Trademarks, USPTO), Founder Equity Design & Vesting, Investor Due Diligence & Shark Tank Readiness, Deep-Tech & Defense R&D Protection, Creator Economy & Media. Includes interactive service inquiry triggers.
- [ ] **Step 2: Create `work.html`**
  In-depth case studies with outcome metrics: Airth (Clean Air Tech, Shark Tank India, IIT Kanpur/Bombay), Zerodor (Waterless Urinal Tech), Hornback (Diamond-frame EV bike, Shark Tank), Liger Mobility (Self-Balancing Gyro Tech), Metadome (₹100Cr turnover, Series A), iBreastExam (FDA-cleared, BBC featured).
- [ ] **Step 3: Create `team.html`**
  Full leadership biography of Adv. Ashish Gupta (UC Berkeley Law, USPTO qualified, ex-Director Pendrell Corp USA, IIT Bombay SINE Mentor), with advisory network and practice philosophy.
- [ ] **Step 4: Create `updates.html`**
  Keynotes timeline (IIT Bombay, Google India Gurgaon, Berkeley Law, Boeing BUILD, CII, LES APAC) and legal insight articles for founders.
- [ ] **Step 5: Add page hero, breadcrumb, and grid styles in `src/style.css`**
- [ ] **Step 6: Verify all 4 pages build cleanly with Vite**
  Run `npm run build`.

---

### Task 3: Build Interactive Legal Inquiry Chatbot Widget

**Files:**
- Modify: `index.html`, `services.html`, `work.html`, `team.html`, `updates.html`
- Modify: `src/style.css`
- Modify: `src/main.js`

- [ ] **Step 1: Add `#legalBotWidget` markup across all HTML pages**
  Floating trigger button in bottom-right corner, chat popup window with header (*Office of Adv. Ashish Gupta - Legal Guide*), quick question chips (*"Shark Tank Due Diligence"*, *"Cross-Border US/India Entity"*, *"Patent vs Trademark"*, *"Book a 1:1 Consultation"*), message flow container, and inquiry submit form.
- [ ] **Step 2: Add Chatbot CSS styles in `src/style.css`**
  Floating pill badge, message bubble animations, quick chip pills with hover ink fill, responsive mobile drawer scaling.
- [ ] **Step 3: Implement Chatbot logic in `src/main.js`**
  Bot knowledge base with intelligent answers to common startup legal inquiries, fallback to direct email/message dispatch via Web3Forms, and direct transition to Calendly/WhatsApp.
- [ ] **Step 4: Verify chatbot open/close, prompt answering, and lead submission**
  Test interactive flow and run `npm run build`.

---

### Task 4: Direct Calendly Consultation Booking Modal & WhatsApp Quick Connect

**Files:**
- Modify: `index.html`, `services.html`, `work.html`, `team.html`, `updates.html`
- Modify: `src/style.css`
- Modify: `src/main.js`

- [ ] **Step 1: Add `#calendlyModal` markup & Calendly Embed script across all pages**
  Add modal overlay with close button and embedded Calendly consultation scheduler (`https://calendly.com/startupindialaw` or embedded scheduler interface with fallback consultation form).
- [ ] **Step 2: Add `#whatsappBtn` floating badge across all pages**
  Bottom-left quick connect badge with WhatsApp icon and tooltip (*"Chat directly with our legal advisory team"*).
- [ ] **Step 3: Add styles in `src/style.css` for Calendly modal and WhatsApp badge**
- [ ] **Step 4: Add modal open/close triggers to all "Book Consultation" buttons in `src/main.js`**
- [ ] **Step 5: Verify modal and WhatsApp link work across all viewports**

---

### Task 5: Final Quality Polish, Accessibility & Build Verification

**Files:**
- Modify: `src/style.css`
- Modify: `src/main.js`
- Modify: `index.html`, `services.html`, `work.html`, `team.html`, `updates.html`

- [ ] **Step 1: Run accessibility & contrast checks** (WCAG AA compliance, focus rings, keyboard navigability).
- [ ] **Step 2: Check mobile responsiveness on 375px, 768px, 1024px, 1440px viewports**.
- [ ] **Step 3: Run `npm run build` to verify production bundle generation**.
- [ ] **Step 4: Complete walkthrough and present results to user**.
