# StartupIndia.Law : Complete Website Architecture, Content Catalog & Flow Documentation (Spec v2)

The official techno-legal practice portal for **StartupIndia.Law** (The Office of Aashish (Aash) Gupta, Director).

This document provides a comprehensive, section-by-section audit of all website content, directory structure, layout hierarchy, interactive components, user flows, and technical implementation across all 5 production pages based on Design & Content Spec v2.

---

## 1. Practice Overview & Direction Summary

StartupIndia.Law is a specialized techno-legal advisory chamber delivering finance-aware legal counsel to high-growth startups, deep-tech research spinouts, and technology investment funds across India, Silicon Valley, and global hubs.

### 1.1 Architectural Direction
- **Editorial Personal Practice Feel**: Designed with the restrained aesthetic of a venture studio or founder's personal practice, deliberately eschewing navy-and-gold legal templates, stock scales of justice, and security seals.
- **Concise Content Strategy**: Every section is disciplined and trimmed to avoid bullet fatigue and over-explanation.
- **Warm Light Aesthetic**: Built on a warm off-white canvas (`#FBFAF8`) with rich obsidian ink (`#111827`), readable slate body (`#4B5563`), ultra-fine hairline borders (`rgba(17, 24, 39, 0.08)`), and a single deep ink-blue accent (`#1E3A8A`).
- **Glass Surfaces**: Universal glassmorphism styling (`rgba(255, 255, 255, 0.6)` fill with 10 to 20px backdrop blur) applied consistently across all cards site-wide.
- **Client Anonymity**: Absolute confidentiality. Zero company names appear anywhere on the site. Every engagement is narrated by category, technological breakthrough, and counsel's legal/strategic work.
- **Zero Em Dashes and Emojis**: Clean typography and UI, replacing em dashes with colons or hyphens and replacing emojis with crisp inline SVG icons.

---

## 2. Directory Structure & File Inventory

The project is structured as a high-performance, multi-page application (MPA) built with modern HTML5, Vanilla CSS, and JavaScript, bundled via Vite:

```
StartupIndiaLaw/
├── index.html              # Homepage: Hero, Ask Your LLM, Moats, Cases, Testimonials Stream, Query Basin
├── services.html           # Specialties & Practice Scope: 10 Trimmed Practice Cards & Inline Industry Strip
├── work.html               # Client Work & Case Studies: 8 Anonymized Landmark Startup Narratives
├── updates.html            # Keynotes & Workshops: 22 Scannable Institutional Masterclasses (Flat List)
├── about.html              # About Counsel & Practice: Deep Schema, Director Bio, Credentials, AI Factsheet
├── contact.html            # Contact & Inquiries: Dedicated Advisory Brief Portal, Direct Channels, Form
├── package.json            # Project configuration and build scripts
├── vite.config.js          # Multi-page build configuration (6 HTML entrypoints)
├── src/
│   ├── main.js             # Client controller: cursor ring, binary canvas, chatbot, Calendly modal
│   └── style.css           # Design tokens, typography (Cormorant Garamond + Instrument Serif + Inter), glass surfaces
└── public/
    ├── favicon.svg         # Clean SVG favicon
    ├── llms.txt            # Machine-readable AI counsel dossier & practice catalog for LLM engines
    └── robots.txt          # Crawler instructions prioritizing GPTBot, ClaudeBot, PerplexityBot, etc.
```

### Key Source Files
- [index.html](file:///c:/Users/Dev/Documents/StartupIndiaLaw/index.html): Homepage featuring binary hover lens, floating island navbar, Ask Your LLM verification strip, practice areas, 6 case studies, minimalist typographic testimonials stream, and startup query basin.
- [services.html](file:///c:/Users/Dev/Documents/StartupIndiaLaw/services.html): Complete breakdown of 10 trimmed techno-legal practice areas (1 scope line + 2 deliverables each) and an inline industry strip.
- [work.html](file:///c:/Users/Dev/Documents/StartupIndiaLaw/work.html): Detailed case narratives of 8 venture achievements narrated as counsel's work with client confidentiality notice.
- [updates.html](file:///c:/Users/Dev/Documents/StartupIndiaLaw/updates.html): Scannable, hover-underlined flat list of 22 institutional masterclasses linking directly to contact prefill (`?inquiry=Speaking/Session`).
- [about.html](file:///c:/Users/Dev/Documents/StartupIndiaLaw/about.html): Dedicated about page with rich JSON-LD semantic schema (`ProfilePage`, `Person`, `LegalService`), Director bio card, standalone Apple v. Samsung note, 6-badge credentials grid, Ask Your LLM verification strip, and structured factsheet.
- [contact.html](file:///c:/Users/Dev/Documents/StartupIndiaLaw/contact.html): High-conversion dedicated inquiry portal with dynamic query routing, Resend email integration via Cloudflare Pages (`/api/submit`), direct WhatsApp and phone channels, and statutory Advocates Act confidentiality notice.
- [public/llms.txt](file:///c:/Users/Dev/Documents/StartupIndiaLaw/public/llms.txt): Machine-readable markdown dossier detailing counsel profile, credentials, practice taxonomy, and landmark accomplishments for Claude, ChatGPT, and Perplexity indexation.
- [main.js](file:///c:/Users/Dev/Documents/StartupIndiaLaw/src/main.js): JavaScript controller powering disclaimer modal, dual-stage cursor ring with lerp physics, magnetic buttons, binary canvas, standalone legal desk bot, and Calendly modal.
- [style.css](file:///c:/Users/Dev/Documents/StartupIndiaLaw/src/style.css): Unified CSS design system featuring Cormorant Garamond, Instrument Serif, and Inter font pairing, floating island pill navbar, luminous glow CTAs, glass surfaces, hairline borders, and responsive rules.

---

## 3. Global Components Present on Every Page

Every page shares a consistent editorial frame governed by the following global components:

### 3.1 Statutory Legal Disclaimer Modal (`#disclaimerOverlay`)
- **Regulatory Framework**: Mandated by the Bar Council of India Rules under the Advocates Act, 1961.
- **Trigger**: Appears automatically on first visit if `startupIndiaLaw_disclaimerAgreed` is not set in `localStorage`.
- **Content**:
  1. User access is voluntary and on own initiative.
  2. Information is educational and not formal legal advice.
  3. No attorney-client relationship is created by accessing the site or submitting forms.
  4. Website does not constitute advertising, solicitation, or inducement.
  5. Compliant with Bar Council of India professional standards.
  6. No express or implied warranty regarding completeness.
  7. Users must obtain independent legal counsel before acting.
  8. Electronic communications do not create professional obligations without written agreement.
  9. **Non-Affiliation Notice**: Explicit notice that StartupIndia.Law is an independent private practice not affiliated with the Government of India, DPIIT, or startupindia.gov.in.
- **Actions**:
  - **"I AGREE"** button: Stores agreement flag in `localStorage` and unlocks full page interaction.
  - **"I DISAGREE"** button: Redirects user away from the site to Google.

### 3.2 Site Header & Navigation (`#siteHeader`)
- **Wordmark**: `StartupIndia.law` set in Playfair Display serif with distinctive ink accent dot.
- **Desktop Nav Links**:
  - `Home` (`/index.html`)
  - `Services` (`/services.html`)
  - `Client Work` (`/work.html`)
  - `Insights & Keynotes` (`/updates.html`)
  - `Contact & About` (`/contact.html`)
- **Actions**:
  - **LinkedIn Button**: Direct link to official company page on LinkedIn.
  - **"Book Consultation" Button (`.btn-magnetic`)**: Opens the integrated Calendly booking modal.
  - **Hamburger Menu Button**: Toggles the full-screen mobile slide-down drawer.
- **Mobile Drawer (`#mobileNavDrawer`)**:
  - Vertical navigation links.
  - Primary CTA: "Book Consultation (Calendly)".
  - Secondary CTA: "Chat on WhatsApp".

### 3.3 Universal Site Footer (`#siteFooter`)
- **Column 1 (Brand & Practice)**:
  - Brand title: `StartupIndia.Law`.
  - Subtitle: `Aashish (Aash) Gupta, Director`.
  - Mission: "We bring technology, legal, and finance intelligence into one place. Advisory for high-growth ventures and funds worldwide."
  - Social link: Connect on LinkedIn.
- **Column 2 (Navigation)**:
  - Direct links to all 5 site pages.
- **Column 3 (Counsel & Hubs)**:
  - Presence: Mumbai and Delhi-NCR.
  - Global Scope: Silicon Valley, Europe, Asia.
  - Credentials: UC Berkeley Law Alumnus, USA Patent Bar Exam Cleared.
- **Column 4 (Direct Contact)**:
  - Direct Email: `info@startupindia.law`
  - Direct Phone / WhatsApp: `+91 78279 63285`
  - Office Address: 20th Floor, Galaxy Blue Sapphire Plaza, Greater Noida W Rd, Sector 4, Noida, UP - 201309.
  - Consultation CTA: "Book 1:1 Consultation" button (`.btn-magnetic`).
- **Bottom Legal Bar**:
  - Bar Council of India statutory legal notice.
  - Copyright line: `(c) Aashish (Aash) Gupta, Director. All rights reserved.`
  - Compliance tag: `Advocates Act, 1961 & Bar Council of India Compliant`.

### 3.4 Interactive Direct Legal Desk Chatbot (`#legalBotWidget`)
- **Autonomous Architecture**: Decoupled from page cards. Operates exclusively via the floating `#legalBotTrigger` at the bottom right.
- **Visual Design**: Sleek glassmorphism window with clean SVG icons (zero emojis). Sliding drawer on mobile with 16px inputs to prevent iOS auto-zoom.
- **Welcome Message**: "Hello. Connect directly with the Office of Aashish (Aash) Gupta, Director, for finance-aware techno-legal advisory. How can we assist your venture today?"
- **Interactive Quick Chips (SVG Icons)**:
  1. Schedule 1:1 Advisory Consultation (Calendar icon)
  2. Chat Directly on WhatsApp (Chat bubble icon)
  3. Client Work & Achievements (Rocket / Circle icon)
  4. Specialties & Practices (Globe icon)
  5. About Counsel & Background (Shield icon)
- **Response Engine**: Deterministic reply block ending in exit CTAs (Calendly / WhatsApp), with a 1-second delay and audio chime feedback.

### 3.5 Calendly Consultation Booking Modal (`#calendlyModal`)
- **Trigger**: Activated by any button calling `window.openCalendlyModal()` across header, hero, footer, and subpage banners.
- **Embed**: Clean inline iframe loading `https://calendly.com/startupindia-info/30min`.
- **Controls**: Dismissible via close button, Escape key, or background click.

---

## 4. Page-by-Page Content Catalog & Layout Breakdown

### 4.1 Homepage: `index.html`

#### Section 1: Editorial Hero (`#hero`, `.hero-editorial`)
- **Canvas Background (`#heroBinaryCanvas`)**:
  - Subtly reactive spotlight canvas.
  - When the cursor hovers over the hero, a soft 160px spotlight renders ultra-thin monospace binary `01` digits in low-contrast ink (`rgba(17, 24, 39, alpha)`).
  - Automatically goes to sleep when idle or off-screen.
- **Hero Title**: "We bring technology, legal, and finance intelligence into one place."
- **Hero Subtitle**: "Techno-legal counsel for high-growth ventures, deep-tech spinouts, and technology investment funds."
- **Primary CTAs**:
  - `Book Consultation` (`.btn-magnetic`): In-place Calendly modal.
  - `Chat on WhatsApp` (`.btn-magnetic`): Direct deep link to WhatsApp.
- **Clean Whitespace**: Floating social proof line removed per Spec v2 to eliminate redundancy.

#### Section 2: Practice Areas & Capabilities (`#services`, `.moats-section`)
- **Section Heading**: "Practice Areas & Capabilities"
- **Section Lead**: "Integrating financial, legal, and technical intelligence into an implementation-ready advisory."
- **Grid Layout**: 4 clickable `.moat-card` articles with shared glass styling, routing to `/services.html`:
  1. **Intellectual Property Rights & Strategy**: Patent claims architecture, technology transfer covenants, commercial IP licensing, and financial portfolio valuation.
  2. **Technology Law, Privacy & Media**: Advisory across emerging software, artificial intelligence compliance, enterprise vendor pacts, and digital privacy hygiene.
  3. **Investment Funds & Due Diligence**: Pre-investment techno-legal portfolio diligence, freedom-to-operate reviews, and term sheet defensibility.
  4. **Industry Practice Focus**: Deep-tech healthcare, advanced materials, cleantech, EV mobility, and precision agtech systems.

#### Section 3: Startups We've Helped (`#cases`, `.cases-section`)
- **Section Heading**: "Startups We've Helped"
- **Section Lead**: "Verifiable achievements of ventures advised by counsel. Company names withheld under professional confidentiality."
- **Grid Layout**: 6 `.case-card` articles narrated as counsel's work with zero company names:
  1. **FDA-Cleared Diagnostic Device**: IP strategy and patent defense for early breast screening technology; $3M Series A funding and unanimous TV commitment.
  2. **First-of-its-Kind AC Air Purifier**: Academic spinout IP architecture; ₹1 crore TV valuation and international grant funding.
  3. **Waterless Urinal Technology**: DST-backed sanitation engineering; national TV equity deal and multi-year IP protection.
  4. **Folding Electric Bicycle**: Proprietary diamond-frame EV hardware; patent prosecution and investment readiness.
  5. **Self-Balancing Electric Scooter**: Chief counsel for India's first self-balancing EV scooter; central ministry mentorship and Auto Expo launch.
  6. **Enterprise 3D & Immersive AI Platform**: Technology and investment strategy for Series A funded virtual showroom platform.

#### Section 4: Founder Perspectives & Endorsements (`#testimonials`, `.testimonials-stream-section`)
- **Format**: Minimalist, unboxed typographic line stream positioned immediately after "Startups We've Helped" with continuous smooth marquee motion:
  1. "Our engagement brought in around 60% reduction in our costs, which was a lifesaver for a startup like ours." &bull; Founder, Early-Stage Venture
  2. "One call saved us three weeks of back and forth with three different lawyers." &bull; Co-Founder, D2C Startup
  3. "They became our one-stop destination for everything legal, technical, and financial. No more juggling five advisors." &bull; Founder, DeepTech Venture
  4. "Our patent got filed in half the time we budgeted for, right before our Series A closed." &bull; CEO, MedTech Startup
  5. "We walked into due diligence fully ready. Investors noticed, and the round closed two weeks early." &bull; Founder, CleanTech Startup
  6. "Saved us from signing a term sheet that would have cost us control of our own IP." &bull; Co-Founder, Hardware Startup
- **Display**: Minimalist, unboxed typographic stream with centered tracked mono label `WHAT FOUNDERS & PARTNERS SAY ABOUT US`, slash dividers, zero card borders, enlarged high-legibility typography, and hover-pause interaction.

#### Section 5: The Startup Query Basin (`#inquiry`, `.inquiry-basin-section`)
- **Section Title**: "Ever had a great idea you wanted to build into a startup?"
- **Interactive Multi-Step Vessel**:
  - Idle state with search prompt.
  - Step 1: Query input with 6 common startup questions.
  - Step 2: Work email collection with question preview.
  - Step 3: Asynchronous submission to Resend via `/api/submit` and immediate confirmation.

---

### 4.2 Services Page: `services.html`

#### Subpage Hero
- **Title**: "Specialties & Practice Scope"
- **Lead**: "Integrating financial, legal, and technical intelligence into an implementation-ready advisory."

#### 10 Trimmed Practice Cards (`.service-card-deep`)
Each card is strictly trimmed to 1 scope line + 2 deliverables, with direct prefill links to `/contact.html`:
1. **Intellectual Property Rights (IPR)**: Patent drafting, prior art intelligence, and strategic portfolio claims architecture.
   - Deliverables: Strategic patent claims drafting; Prior art search & patentability analysis.
2. **Strategizing Innovation & Technology Transfer**: Structuring commercial technology transfer agreements and laboratory spinouts.
   - Deliverables: Technology Transfer Agreements (ToT); Academic & laboratory spin-out structuring.
3. **IP Transactions**: Structuring high-value IP assignments, global commercial licensing, and conveyance documentation.
   - Deliverables: Exclusive and non-exclusive commercial IP licenses; Cross-border intellectual asset assignment pacts.
4. **IP Valuation**: Rigorous techno-legal and financial valuation of intangible assets for funding rounds and M&A.
   - Deliverables: Patent portfolio financial valuation; Intangible asset assessment for funding rounds.
5. **Technology Law**: Legal and regulatory counsel for emerging software, artificial intelligence, and connected hardware.
   - Deliverables: AI and machine learning governance; Software-as-a-Service (SaaS) and API licensing.
6. **Advising Technology-Focused Investment Funds**: Pre-investment techno-legal due diligence and term sheet defensibility.
   - Deliverables: Techno-legal portfolio diligence for venture funds; Technical risk analysis in term sheets and SHAs.
7. **Structuring IP-Centric Alliances**: Designing strategic co-development pacts and cross-border commercial alliances.
   - Deliverables: Joint development and co-ownership agreements; Cross-licensing and mutual defensive alliances.
8. **IP Brokerage**: Intermediary counsel for discrete acquisition, commercial divestment, and monetization of patents.
   - Deliverables: Patent portfolio marketing and discreet matching; Intellectual property divestiture agreements.
9. **Privacy Law**: Data protection frameworks, statutory privacy compliance, and cross-border hygiene.
   - Deliverables: Data protection audits and compliance policies; Cross-border data transfer agreements.
10. **Media and Entertainment Law**: Guiding digital creators and platforms on rights acquisition, production pacts, and copyright.
    - Deliverables: Digital media and streaming distribution rights; Content creator representation and talent pacts.

#### Industries We Work In (`.industries-inline-strip`)
Consolidated into a single inline strip with accent dots (not a heavy 5-column grid):
- Healthcare & Diagnostics
- Advanced Materials & Cleantech
- Clean Air & Climate Tech
- Electric Mobility & Robotics
- Precision AgTech & Sensors

---

### 4.3 Client Work Page: `work.html`

#### Subpage Hero
- **Title**: "Startups We've Helped"
- **Lead**: "Real, verifiable achievements of ventures advised by counsel. All company names are withheld under client confidentiality. Prospective clients or strategic partners may contact our chamber directly for portfolio discussions."

#### 8 Anonymized Case Narratives
All 8 cards feature clickable `data-href="/contact.html?inquiry=portfolio"` routing:
1. **The FDA-Cleared Diagnostic Device** (`MedTech / Early Diagnostics`): Early breast lump screening device; $3M Series A; $1.2M corporate investment; unanimous TV commitment.
2. **India's First AC Air Purifier** (`CleanTech / Academic Spinout`): Multi-IIT research spinout; ₹1 crore TV valuation; US Embassy grant.
3. **The Waterless Urinal Technology** (`Sustainability / DST Backed`): Backed by DST and Lockheed Martin; ₹1 crore TV deal; decade of national innovation awards.
4. **Folding Electric Bicycle** (`Electric Mobility / Hardware`): Category-defining folding EV hardware; ₹50 lakh TV deal; patent protection.
5. **Self-Balancing Electric Scooter** (`Automotive / Self-Balancing Tech`): India's first self-balancing scooter; central ministry mentorship; Auto Expo launch.
6. **Enterprise 3D & Immersive AI Platform** (`DeepTech / 3D Virtual Spaces`): Technology and investment strategy for Series A funded virtual showroom platform.
7. **Environmental Sensor Infrastructure** (`Environmental IoT / Sensors`): Global air, noise, and radiation monitoring deployments with international certifications.
8. **Smoke-Free Advanced Material Heating** (`Advanced Materials / Cleantech`): Proprietary IIT-linked material powering clean heating; national innovation finalist.

---

### 4.4 Insights & Keynotes Page: `updates.html`

#### Subpage Hero
- **Title**: "Sessions & Masterclasses Conducted"
- **Lead**: "Sharing actionable techno-legal intelligence, intellectual property strategy, and venture building across premier engineering institutions, law schools, and global industry forums."

#### Flat Scannable Sessions List (`.sessions-flat-list`)
Replaced bulky cards with a dense, scannable list featuring smooth hover-underlines and right arrow indicators, linking to `/contact.html?inquiry=Speaking/Session`:
1. National Law School Gandhinagar: Technology Law and Intellectual Property Masterclass
2. IIT Patna: Workshop on Creating Awareness on Intellectual Property
3. CII Kutch: Industry Forum on IP Asset Management and Commercialization
4. CII Indore: Corporate Advisory on Patent Prosecution and Portfolio Hygiene
5. Gujarat Technological University (GTU): Training Program on IP for 200 Professors
6. Techstars Startup Weekend, STEAM Labs: Venture Mentor & Legal Strategist
7. UC Berkeley School of Law: Cross-Border Technology Transactions and Licensing (Two Sessions)
8. CII & Ministry of MSME / IPFC: IP Conclave on Changing IP Landscape in India
9. Intel AI For Youth Program: Rights Pertaining to Intellectual Creations, Branding & Privacy
10. Intel AI For Youth Program: Systematic Processes for Identifying Innovative Features
11. CII Training Masterclass: Intellectual Property Valuation and Balance Sheet Structuring
12. SINE, IIT Bombay: Strategic Technology Law Strategies for Deep-Tech Founders
13. Institution's Innovation Council: IP Frameworks for Early-Stage Inventors
14. Boeing BUILD 3.0: Intellectual Property Fundamentals for Early-Stage Aerospace Founders
15. SINE, IIT Bombay: Guidance Session for Biotechnology Ignition Grant (BIG) Startups
16. IIT Roorkee: Workshop on Innovation, IPR and Entrepreneurship Development
17. ITS Engineering College: Angel Investment and VC Funding Due Diligence Workshop
18. CII Conference: IPRs for MSMEs, Startups & Technopreneurs
19. Comprehensive Primers: Complete Primer on IP for Launching a New Business Idea
20. Licensing Executives Society (LES) APAC: IP Drives the Bottom Line
21. Indo-American Chamber of Commerce (IACC) x US Consulate General Mumbai: AI & Healthcare
22. US-India CXO Roundtable: AI-Driven Manufacturing Transformation (US Consulate & FICCI)

---

---

### 4.5 Dedicated About Counsel & Practice Page: `about.html`

#### Subpage Hero
- **Subpage Title**: "About Counsel & Practice"
- **Subpage Lead**: "We integrate intelligence from various domains: technology, legal, finance: to bring in the best of advisory at a single place."

#### Ask Your LLM About StartupIndia.Law Strip (`.llm-prompt-section`)
Direct, single-click query buttons with the prompt label `ASK YOUR LLM ABOUT STARTUPINDIA.LAW` featuring authentic brand SVG logos and clean labels (no "Ask" prefix):
1. **ChatGPT**: Deep search prompt verification for counsel track record and patent transactions.
2. **Gemini**: Multimodal intelligence prompt inquiring about StartupIndia.Law counsel.
3. **Claude**: Inquiry into Aashish Gupta's techno-legal achievements and reputation.
4. **Perplexity**: Real-time web indexation and citation query for independent verification.

#### Counsel Detailed Bio Card (`.counsel-bio-card`)
- **Top Line (Role & Scale Lead)**:
  - Badge: `DIRECTOR`
  - Name: **Aashish (Aash) Gupta**
  - Subhead: "Techno-legal counsel and investment advisor with nearly two decades across technology, law, and venture finance."
- **Narrative Flow**:
  - Silicon Valley path given up to build independent techno-legal practice in India.
  - Director of Intangible Asset Management at Pendrell Corporation subsidiary (NASDAQ: PCO) in Silicon Valley (2012-2015), leading licensing across half the global mobile phone market and Nokia memory due diligence in Helsinki.
  - **Standalone Sentence**: Separately from that role, he has advised on valuation strategy in the Apple v. Samsung patent dispute.
  - Chief counsel to Shark Tank-backed ventures (some generating ₹100+ crore revenue); worked with technologists connected to ISRO, DRDO, BEL, IIT Bombay, GTU, SINE, and SocialAlpha.
  - Prior roles: Partner at Krishna & Saurastri Associates LLP, and Senior Associate at Khaitan & Co.
  - Speaking at UC Berkeley Law, GLC Mumbai, IIT Bombay, GTU; invited expert at Google; Techstars global mentor.
- **Credentials Grid (`.credentials-badges-grid`)**:
  1. LL.M., Technology Law, UC Berkeley Law (2012)
  2. USA Patent Bar Exam, cleared
  3. Bar Council of India
  4. Indian Patent Bar (2006)
  5. B.Tech, Electronics & Telecommunication (2004)
  6. Advanced Licensing, BSKB, Virginia, USA

#### Machine-Readable Factsheet Grid (`.about-factsheet-grid`)
Structured key-value cards providing deterministic factual verification for AI engines and institutional partners:
- Leadership: Aashish Gupta, Director & Techno-Legal Counsel
- Global Foundation: UC Berkeley School of Law, USA Patent Bar Exam Cleared
- Venture Scale: Counsel to Shark Tank India alumni, ₹100Cr+ companies
- Technical Fluency: Degree in Electronics & Telecommunications, deep-tech research
- Cross-Border Deals: Silicon Valley, Helsinki Nokia Memory Acquisition, Asia
- Institutional Reach: IIT Bombay (SINE), DRDO, ISRO, Boeing, Intel, Berkeley Law

---

### 4.6 Dedicated Contact & Advisory Portal: `contact.html`

#### Subpage Hero
- **Subpage Title**: "Direct Advisory & Inquiries"
- **Subpage Lead**: "Connect directly with the Office of Aashish (Aash) Gupta for confidential venture counsel, IP architecture, and investment due diligence."

#### Left Column: Advisory Protocol & Channels (`.contact-protocol-card`)
- **Fast Response Guarantee**: Direct replies within a sunrise for qualified inquiries.
- **Strict Legal Privilege**: All inbound inquiries covered by attorney work-product and Advocates Act confidentiality.
- **Direct Phone & WhatsApp**: `+91 78279 63285` with pre-filled greeting links.
- **Direct Counsel Email**: `info@startupindia.law`.
- **Physical Chamber Address**: 20th Floor, Galaxy Blue Sapphire Plaza, Greater Noida W Rd, Sector 4, Noida, UP - 201309.
- **1:1 Calendly Booking**: Direct modal trigger to reserve dedicated video consultation.

#### Right Column: Confidential Inquiry Form (`#directContactForm`)
- Asynchronous POST to `/api/submit` (Cloudflare Pages Function powered by Resend API).
- Intelligent auto-routing: pre-fills inquiry scope based on URL query parameters:
  - `?inquiry=Roadmap`: Prefilled with Techno-Legal Readiness Roadmap inquiry from the homepage sandbox.
  - `?inquiry=Speaking/Session`: Prefilled for institutional keynotes from `updates.html`.
  - `?inquiry=portfolio`: Prefilled for venture portfolio discussions from `work.html`.
  - `?service=...`: Prefilled for specific practice areas from `services.html`.
- Magnetic submit CTA with statutory Advocates Act confidentiality assurance.

---

## 5. Technical Specifications & Developer Guide

### 5.1 Design Tokens & CSS Architecture
- **Font Stack**:
  - Display / Headlines: `Playfair Display`, Georgia, serif (tight tracking, large size jump).
  - Body / UI / Sans: `Inter`, system-ui, sans-serif (clean, high legibility).
  - Numerals / Tags: `SF Mono`, `Fira Code`, monospace (small-caps, wide letter-spacing).
- **Color Palette**:
  - Warm Canvas Background: `#FBFAF8`
  - Deep Ink Headlines: `#111827`
  - Slate Body Text: `#4B5563`
  - Hairline Border: `rgba(17, 24, 39, 0.08)`
  - Single Brand Accent: `#1E3A8A` (deep ink-blue)
- **Glass Surfaces**:
  - Fill: `rgba(255, 255, 255, 0.6)`
  - Backdrop blur: `14px`
  - Border: `1px solid rgba(17, 24, 39, 0.08)`
  - Shadow: Hover-only elevation (`0 16px 36px -8px rgba(17, 24, 39, 0.08)`)
- **Motion Principles**:
  - Scroll reveals: `.reveal-on-scroll` with staggered entry.
  - Magnetic buttons: `.btn-magnetic` pulling slightly toward cursor.
  - `prefers-reduced-motion` compliance built-in.

### 5.2 Running the Application Locally
1. Ensure Node.js (v18+) is installed.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the local development server:
   ```bash
   npm run dev
   ```
4. Build the production distribution bundle:
   ```bash
   npm run build
   ```
5. Preview the production build locally:
   ```bash
   npm run preview
   ```

### 5.3 "Ask Aash" Interactive Q&A Widget (Behavior Spec v2)
- **Persona & Direct Voice**: First-person ("I", never "we" or third-person brochure copy). No bot-identifying labels or artificial concierge badges.
- **Trigger & Header**:
  - Collapsed Pill: 32px Aash avatar + emerald status dot + "Hey, it's Aash".
  - Expanded Header: Clean title "Aash" (subtitle removed).
- **Opening Message**: "Hey, it's Aash. Type your question below or tap one to get started."
- **Performance & Interactions**:
  - Natural brief typing pause (~580ms) with typing indicator dots and Aash avatar.
  - Crystalline dual-tone notification chime synthesized via Web Audio API on response delivery.
  - Smooth micro-animation for messages.
- **Topic Matching & First-Person Response Matrix**:
  - WhatsApp / Direct Messaging: "You can message me directly on WhatsApp." (CTA: Open WhatsApp)
  - Booking a Call: "Happy to talk it through. Pick a slot that works for you and I'll block it." (CTA: Open Booking Calendar)
  - Client Track Record: Anonymous verifiable achievements across FDA device, Shark Tank IIT deals, DST tech, and ₹100Cr venture (CTA: Ask About a Similar Case)
  - Specialties & Practices: "I work across technology, law, and investment - IP, technology and privacy law, fund advisory, and venture strategy. Most often in healthcare, material science, green tech, automobiles, and agritech." (CTA: Talk Through Your Case)
  - Founder Credentials: B.Tech, LL.B., LL.M. Berkeley Law, US Patent Bar cleared, 20-year cross-border scope (CTA: Message Me Direct)
  - Practice Scope: Technology, law, and finance under one roof with engineering-grounded legal clarity (CTA: Get in Touch)
  - Clean Fallback: "That's a bit outside what I can answer here directly - message me on WhatsApp and I'll get back to you personally." Dual CTAs: WhatsApp / Book a Call.

---
*Documentation maintained by StartupIndia.Law engineering in accordance with Design & Content Spec v2.*
