# Elaine Shih — Portfolio Project

## Project Overview
Personal UX design portfolio for Elaine Shih, targeting Senior Product Designer roles at Google and Apple. Built with vanilla HTML, CSS, and JavaScript. Hosted on GitHub Pages.

---

## Tech Stack

### Build & Development
- **Claude Code** — primary build tool, terminal + Claude Code desktop app
- **No VS Code** — all editing through Claude Code only

### Content & Data
- **Notion** — content drafting, case study notes, raw project materials
- **projects.js** — single source of truth for all project data on the site
- Migration path: projects.js → Notion API when site is stable and ready

### Resume
- **Working copy:** Google Drive (Figma → export PDF → save here)
- **Site copy:** `/assets/elaine-shih-resume.pdf` in GitHub repo
- **Filename:** always `elaine-shih-resume.pdf` — never change it, just overwrite
- **Why fixed filename:** URL never breaks when resume is updated
- **Update workflow:** Figma → export PDF → overwrite in Google Drive → overwrite in GitHub → done
- **Never link to Google Drive directly** — unreliable for downloads, requires login on some browsers

### Version Control & Hosting
- **GitHub** — version control, all code lives here
- **GitHub Pages** — free hosting, push to deploy

### Future CMS Migration (when ready)
When migrating projects.js to Notion:
- Each project object → one Notion database row
- Same fields (title, subtitle, tags, image, url, featured, protected) → Notion properties
- Swap static import for Notion API fetch — one file change, nothing else breaks

---

## About Elaine
Elaine is a UX designer — this portfolio should reflect the same standards she holds her own work to. Accessibility, interaction quality, typographic precision, and mobile experience are non-negotiable. The site is a design artifact, not just a code project.

**Language:** English primary. Traditional Chinese (繁體中文) planned for future bilingual version.
- Font choices must support CJK characters — ensure fallback fonts are specified
- Text containers should be sized to accommodate Chinese character density (generally shorter line length needed)
- Content structure should be designed with bilingual expansion in mind — avoid hardcoding English-only assumptions
- Do not implement Chinese content yet — flag areas that will need consideration when the time comes

---

## Working Rules — Token Efficiency & Code Quality

### Session Startup (always do this first)
1. Read CLAUDE.md
2. Read the relevant files before touching anything
3. State what you're about to do and why in one sentence
4. Wait for confirmation before executing if the change affects multiple files

### Token Efficiency
- Read existing files before writing anything — never assume what's there
- Make surgical edits with str_replace, not full file rewrites
- Ask before making changes that affect multiple files
- Never duplicate code — if something exists, reference it
- Confirm the plan in one sentence before executing
- Batch related changes into one operation rather than multiple back-and-forth edits

### Code Quality
- CSS variables always — never hardcode colors, sizes, or spacing
- One source of truth — data in projects.js, styles in style.css, behavior in main.js
- No inline styles ever
- No duplicate HTML — if you're writing the same structure twice, make it a template or function
- Components should be reusable by design
- Comment only what's non-obvious — clean code explains itself
- Consistent naming: kebab-case for CSS classes, camelCase for JS variables
- Mobile-first always — small screen first, min-width breakpoints up

### What Never to Do
- Never hardcode project data in HTML — always use projects.js
- Never rewrite a whole file when a targeted edit will do
- Never add a new color outside the design system variables
- Never use !important
- Never add external libraries without flagging it first

---

## Design System

### Colors
```css
--color-bg:          #FFFFFF   /* pure white — main background */
--color-text:        #2E211F   /* warm dark brown — primary text (ink) */
--color-teal:        #3D8080   /* brand teal — site chrome ONLY */
--color-brown:       #6B4E45   /* brown-mauve — case study body accents */
--color-brown-light: #F4F3F1   /* cool neutral — subtle surfaces, dividers */
--color-dark:        #1E2E2E   /* dark teal-black — password gate, footer */
--color-mid:         #666666   /* mid grey — secondary text */
```

**Color usage rules (binding):**
- `--color-teal` = site chrome ONLY: nav logo hover, footer links, resume badge, password gate, tag outlines, nav active states
- `--color-brown` = case study body accents: pull quote borders, card numbers (01/02/03), hero eyebrows, pending labels, draft notice pip
- `--color-text` = everything else (headings, body, labels)
- Never mix both accent colors on the same element

### Typography
- **Headings:** Spectral (Google Fonts) — serif, weight 300/400/600
- **Body:** DM Sans (Google Fonts) — sans-serif, weight 300/400/500
- Always load both from Google Fonts in every HTML file

### Font Sizes (use these variables, never hardcode)
```css
--text-xs:   0.75rem
--text-sm:   0.875rem
--text-base: 1rem
--text-lg:   1.125rem
--text-xl:   1.25rem
--text-2xl:  1.5rem
--text-3xl:  2rem
--text-4xl:  2.75rem
--text-5xl:  3.75rem
```

### Spacing (use these variables, never hardcode)
```css
--space-1: 0.25rem  --space-2: 0.5rem   --space-3: 0.75rem
--space-4: 1rem     --space-6: 1.5rem   --space-8: 2rem
--space-12: 3rem    --space-16: 4rem    --space-24: 6rem
--space-32: 8rem
```

### Other Variables
```css
--max-width:       1200px
--nav-height:      64px
--transition-fast: 150ms ease
--transition-base: 250ms ease
--transition-slow: 400ms ease
--radius-sm:       4px
--radius-md:       8px
```

---

## File Structure
```
elaineshih-portfolio/
├── CLAUDE.md           — project context for Claude Code
├── index.html          — homepage with hero + featured projects
├── work.html           — full filterable project grid
├── about.html          — about page with sidebar
├── contact.html        — contact page
├── css/
│   └── style.css       — all styles, design system variables at top
├── js/
│   ├── projects.js     — single source of truth for all project data
│   └── main.js         — navigation, project rendering, interactions
├── images/             — project thumbnails and photos
├── assets/
│   └── elaine-shih-resume.pdf  — downloadable resume, overwrite to update
└── work/               — individual case study pages
```

---

## Data Architecture
All project data lives in `js/projects.js` as a JSON array. Never hardcode project content in HTML. The site renders dynamically from this file.

Each project object:
```javascript
{
  id: "project-slug",
  title: "Project Title",
  subtitle: "One-line hook",
  description: "2-3 sentence summary.",
  category: "product" | "graphic" | "process",
  tags: ["Tag1", "Tag2"],        // capability tags, 3-5 max
  image: "images/filename.jpg",
  url: "work/page.html",         // or null if no case study
  featured: true | false,        // true = shows on homepage
  protected: true | false,       // true = password protected (SAP work)
  year: "2025"
}
```

---

## Design Principles

### Aesthetic
- Cold, minimal, editorial, light, playful
- Think: a beautifully typeset magazine that occasionally winks at you
- Playfulness through restraint — subtle moments, not decoration

### Component System

**Borders:**
- 0.5px hairline borders everywhere — no 1px or heavier borders, no box-shadows anywhere
- Card hover state: border-color shift to ink (`--color-text`), NOT lift or shadow

**Corner radius:**
- `--radius-sm: 6px`, `--radius-md: 8px` — nothing sharp, nothing very round

**Navigation:**
- Logo: always teal
- Active page indicator: teal underline
- All other nav links: ink, fade to 0.6 opacity on hover

**Buttons and CTAs — no filled buttons anywhere:**
- Default: plain text link (`.btn-primary`, `.btn-secondary`)
- Hover: underline appears + arrow (→) fades in and slides in from left
- Color: teal for chrome/nav-level actions; ink for in-content actions
- Exception: resume download badge — keep the rotating circle motif (not a plain text link)

**Filter tabs (work page):**
- Default: ink color
- Active: teal color + teal 0.5px underline

### Motion & Interaction
**YES:**
- Card hover: border-color shift (brown-light → ink)
- Smooth page transitions (fade)
- Scroll-triggered reveals (one or two per page)
- Rotating resume badge (CSS animation, pauses on hover)
- Nav border appears on scroll (0.5px)
- CTA hover: underline + arrow slides in

**NO:**
- translateY lifts on cards
- Box-shadows anywhere
- Parallax backgrounds
- Auto-playing anything
- Loading animations
- Complex animations that break on mobile

**Rule:** Motion should feel like the site is alive, not performing.

### Typography Rules
- Headings: Spectral, font-weight 300 or 400, never bold
- Letter-spacing: -0.02em to -0.03em on large headings
- Body: DM Sans, line-height 1.7
- Eyebrows/labels: DM Sans, uppercase, letter-spacing 0.08em, teal color

### CSS Rules
- All colors, sizes, and spacing from CSS variables — never hardcode values
- No one-off styles — if you're writing the same thing twice, make it a variable
- Mobile-first approach — style for small screen first, use min-width breakpoints
- All interactive elements: minimum 44px touch target

---

## Accessibility Requirements
- Semantic HTML always — proper heading hierarchy (h1 → h2 → h3)
- Alt text on every image
- Keyboard navigable — all interactive elements reachable without mouse
- Visible focus states — never `outline: none` without a replacement
- Color contrast: WCAG 2.1 AA minimum
- ARIA labels on icon-only buttons
- Touch targets minimum 44px

---

## Password Protection
SAP case studies are password protected. Public pages: homepage, work page grid, about, contact, older non-SAP work. Protected: individual SAP case study pages.

---

## Pages

### index.html — Homepage
- Full-height hero with tagline
- Featured projects grid (2-column, 4 projects)
- AI Portfolio case study callout (full-width band, separate from grid)
- Footer

### work.html — Work Page
- Filterable grid: Product / Graphic / Process
- All projects from projects.js
- SAP work shows lock icon, links to password gate

### about.html — About Page
- Two-column: content left, sticky sidebar right
- Rotating resume badge in sidebar
- Final copy already written (see COPY section below)

### contact.html — Contact Page
- Minimal, just copy and links
- No contact form — direct email only

---

## Copy

### Tagline (use everywhere)
"A UX designer who thinks in systems, sweats the right details, and considers what comes next."

### Homepage One-liner (working draft — revisit before launch)
"A UX design lead at SAP who thinks in systems, sweats the right details, and considers what comes next."

### About Page (final)
Hi, I'm Elaine Shih — a UX designer at SAP who thinks in systems, sweats the right details, and considers what comes next.

I design experiences that connect people to what they need — across search, discovery, and AI-assisted products on SAP's global platform. Before this, I was at Studio Simpatico and CGH, where I learned that good design starts long before the first frame is drawn.

I keep my closet organized by type, season, textile, and color, donating or selling what I no longer need. Every morning is a small exercise in decision-making — balancing constraints, taste, and context all at once. I bring that exact same instinct to my work. Files are meticulously categorized, decisions are clearly documented, and nothing is ever lost in a handoff. I think strategically, I focus on the right details, and I know when to ship.

I didn't start in product; I came from graphic design. Identity systems, packaging, typeface design — the kind of work where every curve and weight is a deliberate choice. What pulled me toward product wasn't a loss of interest in the visual craft, but finding a space where my strengths and passions could scale. It's the same underlying drive, just applied differently: systematic thinking, research-backed choices, and the craft of making something complex feel entirely simple.

Outside of design, you'll find me building Spotify playlists 24/7, wandering scenic nature trails, savoring time in the kitchen, or hoarding washi tapes and Blackwing pencils. I'm also the person with arms up high in the front row of a rollercoaster, or casually eating a whole lemon like a tangerine. If I were to start a completely different second career, I'd spend my days designing furniture and sculpting objects I couldn't quite explain.

### Contact Page (final)
Let's connect.

I'm always open to conversations about design, collaboration, or just what's coming next in the industry. If something I've made resonates with you, I'd love to hear about it.

---

## Target Companies
- **Google:** Systems thinking, scale, measurable impact, research-backed decisions
- **Apple:** Craft, taste, restraint, how something feels not just how it tested

## Case Study Structure (per page)
1. Hook — one powerful sentence, write last
2. Context — role, team, timeline, constraints
3. The Problem — user AND business problem
4. Research & Insights — evidence-backed
5. Key Decisions — max 3, show tradeoffs
6. Solution — what shipped
7. Outcome — metrics, what you'd do differently
8. Next — link to next case study

---

## Case Study Pages

### Philosophy
Not a rigid template — a component library. Each case study picks from the same set of blocks but arranges and emphasizes them differently. Consistent enough to be scannable, flexible enough to feel authored. Think magazine, not form.

### Section Order (skeleton — always this order, depth varies per project)
1. Hero
2. Overview / Context
3. The Problem
4. Research & Insights
5. Key Decisions
6. Solution
7. Outcome
8. Next Project

### Component Library

**hero**
Full-width opening block. Two variants: dark (#1E2E2E background, white text) and light (default parchment). Always includes: project title in Spectral, one-line subtitle, and a metadata block.

Metadata block format — small teal labels, DM Sans, scannable in 5 seconds:
- Role — specific, e.g. "End-to-end UX, self-PM'd dev relationship"
- Timeline — duration, e.g. "8 months · 2024–2025"
- Team — who else was involved
- Status — shipped / in progress / MVP live
- Platform — web, mobile, enterprise (only if adds context)

**two-col-text-image**
Text on left, image on right (or reversed). Most common layout. Used for research findings, solution walkthroughs, process explanation alongside visuals.

**full-width-image**
Image edge to edge, no padding. Used for impactful moments — a key screen, a before/after, a research artifact. Caption below in small DM Sans.

**decision-card**
The most distinctive component. Each key decision gets its own card:
- THE DECISION — what was being decided, one line
- THE OPTIONS — 2-3 options considered, brief
- WE CHOSE X — BECAUSE — the reasoning, 2-3 sentences max

Max 3 decision cards per case study. Shows thinking without burying it in paragraphs.

**metrics-row**
Horizontal band of 3-4 numbers. Large Spectral numerals, small DM Sans labels below. Teal accent. Used in Outcome section. Only include confirmed metrics — never placeholder numbers in the live site.

**process-timeline**
Visual flow showing the arc of the project: research → insights → decision → outcome. Horizontal or vertical depending on complexity. Simple, not decorative. Partner Finding especially needs this.

**pull-quote**
Large italic Spectral quote, teal left border accent. Use only when a genuinely strong quote exists — from user testing, a stakeholder, or your own synthesis. Skip if the quote isn't exceptional.

**before-after**
Split comparison — old experience on left, new on right. Perfect for Content Hubs (fragmented vs unified) and Product Search (old tile vs new tile). Only use when the contrast is stark and telling.

### What varies per project
- Hero variant (dark vs light)
- Which components appear and in what depth
- Image layouts within two-col blocks
- Whether pull-quote and before-after are used
- The hook — every project's opening line should feel completely different

### What never varies
- Section order
- Typography system
- Color system
- The metadata block in every hero
- "Next project" link at the bottom

---

## Portfolio Benchmarks — Reference Designers

Study these before building case study pages. Focus on structure, pacing, and how they balance text vs visuals.

### Google Designers

**Alex Lakas — alexlakas.com** (Google Maps/Local Search, now LA)
- Homepage: almost no text, photo grid, skill list, confident silence
- Case studies live separately on Medium — portfolio just points there
- Key lesson: at senior level, credentials do the talking. Minimal homepage works when the work is strong.
- Relevant for: homepage confidence, letting work speak

**Pratibha Joshi — pratibhajoshi.com** (Senior Interaction Designer, Google Seattle — site currently suspended)
- Known for: thorough case studies, full process visible, strong narratives
- Has an "Experiments" section for personal/side work — similar to your Process category
- Key lesson: document everything, including side explorations. Shows curiosity.
- Relevant for: case study depth, personal projects section

**Sebastien Gabriel — sebastien-gabriel.com** (Senior Staff Designer, Google SF)
- Strong visual identity, experimental layout
- Relevant for: visual confidence at senior level

### Apple Designers

**Michelle Gore — michellegore.com** (Senior Product Designer, Apple)
- Video-heavy homepage, each role gets its own section with video background
- Role descriptions are crisp one-liners — "Leading UX design and product strategy for Apple Subscription Platform"
- Case studies are password-protected — normalizes the password gate
- Key lesson: motion and video make enterprise work feel alive without showing NDA screens
- Relevant for: password gate approach, how to present enterprise work with motion

**Adrian Zumbrunnen — azumbrunnen.me** (Human Interface Designer, Apple)
- Distinctive personality throughout, minimal but warm
- Known for: the About page especially — personal without being unprofessional
- Key lesson: personality at senior level is a differentiator, not a risk
- Relevant for: About page tone, personal voice in portfolio

### New York Based — Worth Studying
**Dribbble: suddenpanic** — UX Designer at Google 2018–2025, NYC, BFA RIT
- Check dribbble.com/suddenpanic for current work and portfolio link

### Additional References — Apple

**Jessie Ren** (Senior UX Designer at Apple, former Product Design Lead at Evernote)
- Profile on bestfolios.com/portfolio/jessieren
- Relevant for: enterprise-to-Apple transition, similar background trajectory to Elaine

### How to Find More NY-Based References
LinkedIn itself can't be crawled, but:
- Search "Senior Product Designer Google New York" on LinkedIn → check Featured sections for portfolio links
- bestfolios.com → filter by Google or Apple → most curated source updated regularly
- productdesignportfolios.com → designers from top tech companies

### Critical 2026 Insights to Apply
- 78% of design managers consider AI tool proficiency when evaluating candidates — Elaine's Prompt Party and AI Search work directly addresses this
- "A portfolio that says 'I design complex data interfaces for enterprise SaaS' competes with a much smaller pool" — Elaine's search + discovery + AI positioning is a niche, not a weakness
- Designers who get hired fastest are findable before they apply — LinkedIn presence and building in public matters
- Niche expertise beats generalist positioning at senior level

### What Hiring Managers Actually Do
- Homepage loads in under 3 seconds, hero visible without scrolling
- Hiring managers spend 6-8 seconds deciding — hook must work immediately
- Case studies: screenshot of final result first, then process (not the other way)
- Short sections with strong headings — scannable, not wall-of-text
- Role clearly stated at top of every case study — "what did YOU do specifically?"
- Metrics appear early, not buried at the end
- Mobile looks as good as desktop — hiring managers check on phone
- Password-protected enterprise work is standard and expected, not a red flag

### What to Avoid (common mistakes at senior level)
- Case studies that start with "I was tasked with..." — passive, junior-sounding
- Long background sections before getting to the interesting part
- Showing every step of the process equally — edit ruthlessly
- Generic skill tags (Figma, Sketch) instead of capability tags (Systems Thinking, Research-backed)
- Portfolio that looks like a template — every case study identical in feel

---

## Important Notes
- Never claim Joule (SAP's LLM widget) as Elaine's work — she designed the entry point and bridge to it
- SAP NDA: HR response pending — don't show SAP screens publicly until confirmed
- projects.js is the single source of truth — never hardcode project data in HTML
- Prompt Party site is completely separate — different brand, don't mix
- Resume has TWO versions — Google (numbers/scale/impact first) and Apple (craft/elegance/feeling first) — same content, different framing
- Resume ⚠️ placeholders = unconfirmed metrics, never include in submissions until verified
- Wemore Design (Sep 2020 – Jul 2021, Kaohsiung Taiwan) — graphic design role, in resume but not in portfolio
- Tagline is finalized as: "A UX designer who thinks in systems, sweats the right details, and considers what comes next." — use exactly this everywhere
