# Partner Finding — Master Narrative
## SAP.com · UX Design Specialist · 2025–Present

---

## HOOK

SAP's next phase of growth depends on mid-market companies choosing them over competitors. Most of those companies have never worked with SAP. And the first thing they need — before they buy anything — is the right partner. The partner finder was supposed to help them find one. It wasn't.

---

## CONTEXT

| | |
|---|---|
| **My role** | End-to-end UX — research collaboration, IA consolidation, interaction design, stakeholder management, go-live |
| **Timeline** | 2025 — ongoing |
| **Team** | Search pod lead, UX researcher, taxonomy team, business and technical stakeholders across 3 domains |
| **Platform** | SAP.com — partner discovery across 3 domains, 6 finders, 7 detail page types |
| **Status** | Detail page handed off · SRP in hi-fi · Contact form in wireframes · Go-live Q3 2026 |

---

## THE BUSINESS CONTEXT

SAP's large enterprise customer base is largely won. The next growth opportunity is mid-market — companies that are newer to SAP, often comparing SAP against competitors, and making high-stakes decisions about which software ecosystem to build their business on.

Partners are the bridge to these customers. They implement SAP, support onboarding, and provide the hands-on relationship that a global software company can't provide directly at that scale. If a mid-market company can't find the right partner — or doesn't trust the ones they find — SAP loses the deal. Not just the partner relationship. The customer.

This is what SAP calls NNN — net new names. And Project CUPID was the initiative to fix the digital experience at the center of it.

---

## THE PROBLEM

The partner ecosystem existed across 3 domains, 6 separate finders, and 7 different detail page types — accumulated over years of separate teams building separate solutions.

The fragmentation wasn't just a UX problem. It was a structural one:

**The landscape before CUPID:**
- 2 domains — sap.com and partnerfinder.sap.com
- 2 partner finders — QPPS and Partner Finder
- 3 detail page types — Better Together pages, Partner Profile pages, QPPS PDFs
- 3 teams owning different pieces — PES, GPM, and DX
- 2 separate data repositories

This fragmentation directly caused four user problems — and every one of them had the same consequence: the customer goes to a competitor.

**Problem 1 — Hard to find**
Users dropped off or landed on the wrong entry point entirely. With multiple domains, multiple finders, and no unified entry point, the path to finding a partner was unclear. Customers who rely on digital self-service — not SAP sales — had no reliable starting point.

**Problem 2 — Struggled to match the right partner**
Even users who found the finder struggled to identify the right partner for their needs. The information wasn't structured for comparison. The process was challenging enough that users dropped rather than persisted.

**Problem 3 — Information wasn't easy to digest or trust**
The detail pages didn't build confidence. Between marketing-focused pages, informative pages, and PDF outputs, there was no consistent trust-building experience. Users who didn't feel confident didn't reach out to partners.

**Problem 4 — Didn't know what to expect or how to track**
After finding a partner, users had no visibility into what came next. The process after contact was opaque — no expectation-setting, no tracking, no continuity.

**The critical context:** These are digitally self-served customers. They're not working through SAP sales. They're navigating this independently. Every friction point is a potential exit to a competitor.

**⚠️ Note for case study writing — parked, no answers needed yet:**
- The business problem (fragmented domains, finders, teams, data repositories) is solved by kicking off this project — consolidating everything into one unified experience and data repository. This is the organizational/structural decision, not design work.
- User pain point 1 (hard to find) is also largely resolved by the project kickoff — consolidating entry points is structural.
- The design work Elaine owns specifically addresses user pain points 2, 3, and 4 — helping users match the right partner, building trust through information design, and setting expectations post-contact.
- When writing the case study: be precise about what the project solved vs what the designs solved. Don't claim the structural consolidation as design work.

The result:

**For users:** Too many entry points, confusing Google search results, duplicate pages pointing to each other, inconsistent UI across every touchpoint. A mid-market buyer who doesn't yet know SAP well encounters a fragmented experience that actively undermines trust at the exact moment trust matters most.

**One specific example:** A single partner like Deloitte could have two separate pages on SAP's platform — one marketing-focused (Deloitte presenting themselves) and one informative (SAP-structured data). Two pages, same partner, neither explaining the other. For a user who doesn't know the SAP ecosystem, this is confusing at best and suspicious at worst.

**The four partner types — Sell, Build, Service, Consult & Implement — were unclear and overlapping.** Users couldn't tell the difference between them, which made comparison impossible before the search even started.

**Behind the scenes:** Partner detail page content was almost entirely managed by partners themselves, with no SAP quality control. Data wasn't properly tracked. Business outcomes were impossible to measure. And the gap between a user contacting a partner and what happened next was invisible to SAP — no visibility into whether the connection led anywhere.

---

## ADDITIONAL DETAIL — RESEARCH, DECISIONS, SOLUTIONS, OUTCOME
*(Added on top of master narrative — do not merge, keep as supplementary notes)*

### Research — How It Hooks Back to User Pain Points

**Pain point 2 — Struggling to match the right partner:**
Interview + copy testing findings:
- Users don't understand SAP language
- Users are not familiar with what SAP offers
- Users don't know how the site is structured
- Internal jargon and terminology created confusion before the search even started

**Pain point 3 — Information not easy to digest or build trust:**
Interview + survey findings:
- Too many signals and results — hard to know the difference
- Hard to quickly know what fits best
- Location may not be the most important factor — however that's the nature of how partner contracts and services work (locations vs service-centric model)
- On SRP: comparing partners is the most difficult step for users

**Pain point 4 — Don't know what to expect or track:**
Survey + interview findings:
- Contact form is very generic — can't tailor to specific needs
- Open question: do users mind signing on? What would make it worth it?

---

### Key Decisions — What Was Tried and How It Was Approached

**Pain point 2 decisions:**
- Copy testing and labeling adjustments — explored "show all" vs "show with context" approaches to language and partner type labels

**Pain point 3 decisions:**
- Need to consider fallback states and default states — locations vs service-centric: which should be the default?
- Is dynamic personalization really good when no competitors are doing this? We are ahead of them — but is that a risk or an advantage?
- ⚠️ Still working through: what's the right default when we don't have user data?

**Pain point 4 decisions:**
- Sign on or not — and when in the journey?
- Is requiring sign-on too risky? Could it cause drop-off before users see value?
- What are the right value props to make sign-on feel worth it?

---

### Solutions — How They Hook Back to Key Decisions

**Pain point 2 solution:**
- Language alignment — customer-centric, not SAP jargon
- Learning and guiding — helping users understand how to pick the right partner
- Giving the right trust signals at the right moments

**Pain point 3 solution:**
- Carry information from page to page — continuity across the discovery journey
- User-centric display — showing personalized info and trust signals relevant to the user's context
- Encouraging sign-on as part of the flow (not a wall)

**Pain point 4 solution:**
- Encouraging sign-on with clear value props
- Giving instructions on what to expect after contact
- Better ability to track the process — reducing the black box after reaching out

---

### Outcome — Current State

- Another round of testing planned (upcoming)
- Design is ready for development to understand how to start and where to bridge
- Consulting with dev on what can be achieved for MVP
- Structuring work into phases — MVP first, then layered improvements toward ideal state

---

## THE USERS

**Mid-market customers finding partners:**
These users are new-ish to SAP. They're evaluating SAP against competitors. Choosing the wrong implementation partner is a career risk — a failed rollout means wasted budget and damaged reputation. They need clarity, comparison, and proof that others like them have succeeded. They fear lack of trust and lack of real-world examples.

**Partners presenting themselves:**
The detail page has to work for them too — helping partners best represent their expertise, regional presence, and track record in a way that resonates with the buyers they're trying to reach.

**Users who don't know they need a partner yet:**
Some users are still in discovery mode — learning about SAP, not yet in partner-finding mode. The experience has to work for them too, surfacing partners proactively at the right moment in their journey rather than waiting for them to seek it out.

---

## RESEARCH

**Foundational studies** were led by our UX researcher. We worked closely together throughout — I collaborated on research planning and direction, and was present throughout. Key findings:

- Mid-market users need extra clarity compared to large enterprise — they don't speak SAP's internal language
- Comparison between partners is difficult — users need consistent, structured information to evaluate options without a comparison tool
- Trust is the central decision factor — real-world examples, verified credentials, and regional recognition matter more than marketing claims
- The ideal experience functions more like a working space than a marketing page — saving partners, tracking outreach, comparing options

**Copy test — led by me:**
Competitor research revealed that the four partner type names (Sell, Build, Service, Consult & Implement) were causing confusion. I ran a copy test with the content marketing team to diagnose whether this was a UX problem or a copywriting problem. It was copywriting. The definitions weren't wrong — they weren't explained. I connected the content marketing team to the copy team to resolve it in parallel with design.

The same copy test also revealed that trust signals — partner leveling, competency tiers, project delivery numbers — weren't positioned or explained in a way that meant anything to users. They existed but weren't building trust. That directly shaped how I designed the detail page.

**Contact form research:**
Our UX researcher led the foundational work. I cross-referenced competitors to understand what value propositions motivate users to sign in, and what information a contact form needs to capture to make the partner connection meaningful — not just a lead, but a qualified match.

---

## STAKEHOLDER ROADSHOWS

Before designing, we ran multiple rounds of roadshows with business and technical owners across the different domains. I presented alongside the researcher — sharing research findings and early wireframes, one page at a time, across multiple sessions.

Two things consistently got stakeholder buy-in:
1. **The experience should function as a working space** — not a marketing brochure, but a tool that helps partners present themselves and helps customers make real decisions
2. **Language needs to be customer-centric** — internal SAP terminology had crept into the experience everywhere. The roadshows were a chance to name that and get alignment on fixing it

The **ratings and reviews** question was the main point of tension. I advocated for them — users need third-party validation, not just SAP-curated content. The partner finder owner pushed back on two grounds: legal concerns and quality control concerns (partners being rated unfairly). We reached an impasse for now, but the door isn't closed.

---

## THE DESIGN DECISIONS

**Decision 1 — Informative over marketing**

The Deloitte dual-page problem couldn't be solved by picking one page type — both serve legitimate purposes. The solution was a unified detail page that holds both, but weighted toward informative. Partner credentials, project delivery numbers, regional recognition, customer stories — these lead. Marketing language follows.

This also meant designing for two users simultaneously: the customer who needs to evaluate, and the partner who needs to present. The same page has to serve both without compromising either.

**Decision 2 — Trust signals that feel earned, not claimed**

The copy test revealed that partner credentials existed but weren't landing. I redesigned how trust signals are structured on the detail page:

- Partner leveling and competency tiers — explained, not just labeled
- Partner awards — surfaced globally AND regionally (a partner's recognition looks different in Germany vs Singapore — both matter)
- Project delivery numbers — shown as data, not marketing copy
- Customer stories — real examples, not testimonials

One open question: the project delivery numbers currently show without a "SAP-verified" indicator. That distinction — verified data vs self-claimed — could meaningfully increase trust. It's on the list for v2.

**Decision 3 — Consistent information for comparison without a comparison tool**

Long term, the vision includes explicit comparison features and AI-assisted comparison through Joule — where users can not only compare partners side by side but have a follow-up conversation: "which of these is better for a manufacturing company my size?" That's a qualitatively different capability than a comparison chart.

For MVP, the approach is simpler but principled: surface the same structured information consistently across every partner tile and detail page, so users can compare mentally even without a dedicated comparison UI. Same fields, same hierarchy, same trust signals — every time.

**Decision 4 — Personalization with a principled fallback**

The ideal state is personalized from the moment a user lands — pre-filtered results based on their industry, company size, and SAP product usage if they're logged in. For logged-out users, behavioral signals (6sense, browsing history, page interactions) inform what surfaces.

When neither is available, the fallback isn't random. Partners surface based on number of projects delivered in the relevant area — verified delivery data, not partner self-reporting. That distinction matters: it means even the default state is grounded in real-world performance, not marketing priority.

**Decision 5 — Proactive surfacing**

The partner finder shouldn't only be a destination users seek out. Partners should appear where users already are — on product detail pages, at the moment a user is evaluating a specific SAP product. The hypothesis: surfacing a relevant partner in that context converts better than asking a user to start a separate partner-finding journey.

We're still planning testing around this. The design groundwork is laid; the validation comes next.

**Decision 6 — The contact form as a value exchange**

Getting users to sign in before contacting a partner is valuable — it enables personalization and makes the connection more qualified. But sign-in needs to feel worth it. The contact form design centers on value props that justify the ask, and captures just enough information to make the partner introduction meaningful rather than generic.

---

## THE IA WORK

Consolidating 3 domains, 6 finders, and 7 detail page types into a unified structure required mapping everything that existed — what content mattered to users, what was marketing vs informative, what was global vs regional.

The hardest part wasn't the mapping. It was making decisions about content that isn't fully ours to control. Partners manage most of their own content. SAP has limited quality control. The IA had to be designed to accommodate partner-managed content while creating enough structure to ensure consistency and trust.

My pod lead coordinated with domain owners to get alignment on the consolidation. I focused on the design rationale — explaining what the IA needed to achieve for users and why.

---

## GLOBAL VS REGIONAL COMPLEXITY

The same partner can be a fundamentally different entity depending on where you are. Deloitte in Germany has different expertise, different SAP recognition, and different awards than Deloitte in Singapore. A truly useful partner detail page reflects that.

The design handles this through location detection with user override — the page pre-selects the user's region but puts them in control. Regional content (local expertise, local awards, local recognition) surfaces alongside global content (overall partner level, global competencies). Same page, same partner, layered correctly by context.

This required new component pattern combinations — existing DS components used in ways they hadn't been used before, to hold the complexity of global + regional content without the page feeling overwhelming.

---

## WHAT'S SHIPPED SO FAR

- Detail page designs — MVP and ideal state — handed off to dev
- SRP — moving from wireframe to hi-fi
- Contact form — early wireframes
- Go-live Q3 2026 — design is ahead of schedule

---

## WHAT COMES NEXT

**Short term (MVP):** Landing page, finalized SRP, contact form refinement. Go-live Q3 2026.

**Medium term (v2):** Proactive surfacing on product detail pages, tested and validated. SAP-verified indicator on project delivery numbers. Improved regional content depth.

**Long term (ideal state):** Explicit comparison features. AI-assisted comparison via Joule — follow-up questions, broader analysis, personalized recommendations. The working space vision — saving partners, tracking outreach, managing the full relationship discovery process.

---

## WHAT I'D DO DIFFERENTLY

Get the content governance conversation started earlier. The lack of SAP quality control over partner-managed content is a structural problem that design can work around but can't solve. Earlier cross-functional alignment on content standards — before the IA is designed — would have given us more influence over what the detail page could reliably show.

---

## INTERVIEW VERSIONS — SPEAKING NOTES

### Recruiter (2 min)
"I'm leading end-to-end UX for SAP's partner discovery ecosystem — consolidating 3 domains, 6 finders, and 7 detail page types serving 3500+ partners across 120 countries into a unified experience. The project is tied to SAP's mid-market growth strategy — helping new-to-SAP companies find and trust the right implementation partner. Detail page is handed off, SRP in hi-fi, go-live Q3 2026."

### Design Manager (15-20 min)
Walk through the full narrative. Emphasize: the business context (NNN strategy, why partners matter for mid-market growth), the copy test finding (partner types = copywriting problem, not UX), the trust signal redesign, the personalization fallback principle (verified delivery data, not self-claimed), the global vs regional design complexity.

### Cross-Functional / PM / Engineer (10-15 min)
Lead with: the business stakes (mid-market growth, competitive pressure), the IA consolidation challenge, the content governance problem, the roadshow process, the personalization architecture (logged in vs logged out vs fallback states), what go-live metrics will tell us.

### Portfolio Presentation Round (30-45 min)
Full narrative + Q&A. Likely questions:
- "How did you handle the partner content quality control problem?"
- "Walk me through the personalization logic"
- "How did you design for users who don't know they need a partner yet?"
- "What's the difference between what ships in MVP and the ideal state?"
- "How did you approach the global vs regional complexity?"
- "What would you do differently on the content governance piece?"
