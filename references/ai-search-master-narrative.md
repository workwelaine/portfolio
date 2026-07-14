# AI Search — Master Narrative
## SAP Store · UX Design Specialist · 2025

---

## HOOK

The question wasn't whether AI would change how users find products. It was whether users were ready for the leap — and what to do with the space in between.

---

## CONTEXT

| | |
|---|---|
| **My role** | UX lead — validation research, interaction design, variant exploration, launch |
| **Timeline** | 2025 — ongoing |
| **Team** | Search pod lead, internal dev team, AI/Joule team (separate) |
| **Platform** | SAP Store landing page, Partner Finding landing page |
| **Status** | Launched on Store and Partner Finding landing pages · A/B testing next phase |

---

## THE ORIGIN

The starting point wasn't "let's add AI." It was "this component is broken and we need to retire it."

SAP Store had a guided product search — a tree-sorting component designed to help users navigate to the right product through a structured flow. On paper, a reasonable idea. In practice, three compounding problems made it unsustainable:

The content was hardcoded. No dynamic updates, no CMS behind it. Every time SAP's product catalog changed — new products, retired ones, renamed categories — someone had to manually update the component. Nobody owned that responsibility consistently, so the content drifted out of date.

Because it was hardcoded, there was no tracking. No clicks, no exits, no path data. Nobody knew if users were actually using it, or if it was helping them find what they needed. It was invisible to the organization.

Leadership was ready to retire it. They had AI chat in mind as the replacement — a product advisor capable of understanding intent and surfacing relevant products conversationally. The question wasn't whether to move toward AI. The question was how.

---

## THE PROBLEM WITH JUMPING STRAIGHT TO AI

AI chat was already live on SAP Store. But we didn't assume it was working.

We waited 6 months after the AI chat launch before designing the bridge — deliberately gathering data on how the AI chat was actually performing before committing to a direction.

⚠️ FILL IN: what the 6-month data actually showed — this is what drove the bridge hypothesis

The hypothesis going in: the leap from a structured guided flow to an open-ended conversational interface might be too big for most users to make on their own. The data would tell us whether that was true — and what kind of bridge, if any, was needed.

A bridge experience was needed. Something that lived between "I know exactly what I want" (traditional search) and "talk me through it" (AI chat) — meeting users where they were while creating a path toward where the product was going.

---

## THE VALIDATION

We evaluated the direction across five dimensions before committing:

**Development effort** — Low barrier. AI chat was already built and live. The org was actively investing to expand it as part of SAP's company-wide "All In on AI" strategy. Building on existing infrastructure, not starting from scratch.

**Business maintenance** — Solved by the nature of AI. Unlike the hardcoded guided search that required manual updates and had no clear owner, AI chat is dynamic. No ownership problem.

**Content sourcing** — The AI chat draws from the same catalog as SAP's product search — the master data source. What users find through traditional search is the same pool the AI advisor draws from. Consistency is built in.

**User comfort** — ⚠️ FILL IN: circle back after reviewing research files

**Data evidence** — ⚠️ FILL IN: circle back after reviewing research files

---

## THE DESIGN CHALLENGE

The interaction spectrum problem: how do you design a bridge that works for users who are ready to embrace AI chat and users who aren't — without creating two completely separate experiences?

We explored a full spectrum of variants — from traditional-search-adjacent to completely AI-first:

**Variant 1 — Dual CTA**
Same input field as traditional search, but two buttons: one directs to search results, one triggers AI chat. Familiar entry point, two exit paths. Low commitment for the user.

**Variant 2 — Toggle**
Two separate input fields separated by a toggle — one for traditional search, one for AI chat. Makes the distinction explicit. Users choose their mode before they start.

**Variant 3 — Quick selections**
Predefined selections that trigger the AI chat — a structured on-ramp to a conversational experience. Lowers the barrier for users who don't know how to prompt.

**Additional variants explored across the full spectrum**
From minimal AI presence alongside traditional search to a fully AI-first experience with traditional search as the fallback.

⚠️ FILL IN: which variants tested best, what users responded to, key insight from testing

---

## THE KEY INSIGHT

⚠️ FILL IN: the core insight from variant testing that drove the final direction

---

## WHAT SHIPPED

The bridge experience launched on two surfaces:
- **SAP Store landing page** — the primary entry point for product discovery
- **Partner Finding landing page** — extending the pattern to partner discovery

The design connects users to Joule — SAP's LLM conversational widget — through an intentional entry point that doesn't assume users are ready for full AI chat, but creates a clear path for those who are.

Note: Joule itself was built by a separate team. My role was designing the entry point, the interaction spectrum, and the bridge experience that connects traditional search to Joule.

⚠️ FILL IN: any engagement data from launch — click-through on AI chat entry, adoption rate

---

## WHAT COMES NEXT

A/B testing is the next phase — comparing the bridge experience against traditional search to understand which users convert through AI chat vs traditional search, and under what conditions.

The bigger question this project is answering: does AI chat replace traditional search, or does it serve a different user with a different intent? A user who knows exactly what they want behaves differently from a user still exploring. The goal isn't to pick one — it's to serve both better.

---

## WHAT I'D DO DIFFERENTLY

⚠️ FILL IN: after reviewing files — what would you change about the approach or process?

---

## INTERVIEW VERSIONS — SPEAKING NOTES

### Recruiter (2 min)
"I designed SAP Store's transition from traditional search to AI-assisted product discovery. The starting point was retiring a broken guided search component with no tracking and stale content. Rather than jumping straight to AI chat, I designed a bridge experience that meets users where they are — a spectrum of interaction variants from search-adjacent to fully conversational. Launched on Store and Partner Finding landing pages. A/B testing is the next phase."

### Design Manager (15-20 min)
Walk through the full narrative. Emphasize: the 6-month wait for data before designing, the interaction spectrum thinking, the variant exploration, the Joule clarification, and the bigger question the project is answering about AI vs traditional search.

### Cross-Functional / PM / Engineer (10-15 min)
Lead with: the structural problems with the guided search (hardcoded, no tracking, no ownership), the 5-dimension validation framework, the dev and maintenance considerations, the launch surfaces, and what A/B testing will tell us.

### Portfolio Presentation Round (30-45 min)
Full narrative + Q&A. Likely questions:
- "Why did you wait 6 months before designing?"
- "How did you decide which variant to go with?"
- "What's the difference between what you designed and Joule?"
- "How does this connect to Product Search?"
- "What will A/B testing tell you that you don't know now?"
