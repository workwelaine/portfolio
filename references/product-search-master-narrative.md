# Product Search — Master Narrative
## SAP.com · UX Design Associate → Specialist · 2024–Present

---

## HOOK

SAP's product search had two jobs: help users find what they need, and help the business surface what matters. It wasn't doing either.

---

## CONTEXT

| | |
|---|---|
| **My role** | End-to-end UX — research, tile redesign, filter system, DS advocacy, stakeholder management, intake process design |
| **Timeline** | 2024 — ongoing |
| **Team** | Search pod lead, taxonomy team, product category managers, UX researcher, internal dev team |
| **Platform** | SAP Store — B2B enterprise, 3600+ products, used by buyers across global organizations |
| **Status** | MVP shipped · v2 ongoing |

---

## THE PROBLEM

When a buyer landed on SAP's product search, they faced two compounding failures working against each other.

The tiles — the cards showing each product result — were filled with marketing copy. Not product names. Not specs. Marketing language written to impress, not inform. A buyer who had already applied the right filters, narrowed to the right category, was still staring at blurbs that didn't tell them if they'd found the right thing.

And the filters themselves were the second failure. Long, internally organized, built around how SAP categorizes products — not around how buyers think about them. Some filter groups existed purely for internal sales usage. Others were so vague they meant nothing to an external buyer. The length alone was overwhelming.

The result: a user could do everything right — apply every correct filter, scroll through every result — and still not be confident they'd found what they needed. The system was failing at the exact moment it mattered most.

---

## THE TENSION

When I started talking to stakeholders, I quickly understood why the search looked the way it did.

Everyone with a product in the SAP Store saw the search results page as marketing real estate. More tags meant more visibility. More badges meant more chances to stand out. The ask was always additive — add this label, surface this credential, show this promotion.

But search isn't a billboard. It's a decision-making tool. Users come to it with intent — they're trying to narrow, compare, and choose. And with limited information on each tile, users will commit to one or a few results to dig in further. That means what's on the tile has to be good enough to earn that click. Every element has one job: help them decide faster. Not sell harder.

That tension — functional search vs marketing space — became the spine of everything that followed.

---

## RESEARCH & INSIGHTS

We ran usability testing and competitive research, grounding decisions in NNG Group and Baymard Institute's search UX best practices.

Three insights shaped the direction:

**Insight 1 — Users were filtering actively, but not converting**
Data showed above-average filter usage — users were engaging with the search tools. But CTR was low, and filter usage was uneven — some filters were heavily used while others were barely touched. Users were trying to narrow down to the right result, but once they got there, the tiles weren't compelling enough to click through. The filters weren't the whole problem. The tiles were failing at the moment that mattered most — when a user had already done the work of narrowing, and needed the result to confirm they'd found the right thing.
⚠️ FILL IN: confirm exact filter usage rate and CTR from analytics dashboard

**Insight 2 — The discount tag backfired**
Stakeholders wanted a "Discount Available" tag on tiles. In usability testing, users noticed it — but not in the way intended. In B2B, a discount on an enterprise software product raises a question: why is it discounted? It's like seeing Chanel or Gucci go on sale. You want the deal, but you start wondering what's wrong with it. We ran follow-up copy testing specifically on this. The tag itself wasn't wrong — the framing was. We tested alternatives until we found language that communicated value without triggering doubt.

**Insight 3 — Filters were built for the org chart, not the user**
Some filter groups mapped directly to internal SAP sales structures. Users had no frame of reference for them. Others could have been consolidated — long lists that represented the same conceptual group. The filter wasn't a navigation tool. It was an org chart made visible.

---

## THE DECISIONS

**Decision 1 — Information hierarchy: show what users can't get elsewhere**

The hardest ongoing challenge was deciding how much information to show on each tile. Stakeholders wanted everything visible. Users needed clarity.

The principle we landed on: show what users can't get elsewhere on that page.

On the search results page, filters already handle specs — product type, industry focus, compatibility. A tile on SRP should stay clean. Name, credential, key differentiator. That's it.

But on a product page promoting related extensions, there are no filters. Users can't narrow — they can only compare what's in front of them. Those tiles need to show specs, industry fit, and compatibility details, because that's the only way a user can evaluate whether a recommendation is relevant to them.

This logic produced four tile variants — each designed for its context:
- **SRP** — minimal, functional, filters do the heavy lifting
- **Product pages** — spec-rich, comparison-friendly
- **Campaign pages** — promotional but purposeful
- **Partner detail pages** — trust-focused, credential-forward

The same component, different information density, based on what job the user is doing at that moment. Designed once — and adopted independently by other teams working on headless commerce and campaign pages without any onboarding from me. That's how I knew the system worked.

**Decision 2 — The best seller rejection**

A stakeholder from SAP Store's business team requested a "Best Seller" tag on result tiles. The instinct made sense — social proof works in B2C.

But SAP is B2B. Enterprise buyers don't choose software because it's popular. They choose it because it fits their industry, technical stack, team size, and implementation timeline. "Best seller" collapses all of that complexity into a single signal that doesn't actually help them decide.

We said no — but we didn't just say no. We understood what the stakeholder was trying to achieve: surface products with proven traction. So we proposed an alternative: best seller as a sort-by option, baked into ranking logic. Users who want to see popular products can sort for it. Users who don't aren't distracted by it. The signal exists — it just lives where it belongs.

**Decision 3 — The DS filter: a principled short-term tradeoff**

The grouped filter component in SAP's design system was new, untested in production, and had known usability issues. It would have been the right solution for consolidating long filter groups — but shipping a non-compliant component to production wasn't the right call.

We flagged the issue to the creative director who owns the design system. With go-live approaching, we made a deliberate choice: ship the old filter without groupings. Users were familiar with it. A new but broken experience would have been worse than an imperfect but functional one.

Then we didn't drop it. I joined the DS team's office hours periodically over the following months, following up without a formal tracking system — just consistent presence. Six months later, the improved component shipped with no usability issues. We updated the search filters.

The short-term tradeoff was right. The long-term follow-through is what made it count.

**Decision 4 — Building the intake process**

Every time we rejected a stakeholder request, the same question came back: why is this a design decision?

It was a fair question. Without a formal process, our "no" looked like a design opinion. Arbitrary. Easy to challenge.

So we built a structure. Any request to add a tag, badge, or filter now goes through a co-approval process:
- **Business review** (pod lead) — is there a strong business reason?
- **UX validation** (me) — does this serve user needs?
- **Taxonomy assessment** — are there risks or gaps?

All three have to align. If they don't, the request doesn't move forward — and everyone knows why.

We also launched monthly office hours: a standing space for stakeholders to ask questions, share new requests, and understand the rationale behind past decisions. Stakeholders stopped feeling like they were hitting a wall. The process made the reasoning visible.

The result: stakeholders became more receptive. Not because we said yes more — because the process made it clear that "no" was never personal.

---

## SOLUTION

Four tile variants designed around user context, not organizational preference. A filter system grounded in how buyers think, not how SAP is structured. A badge business logic that governs what appears when space is limited. A co-approval intake process that institutionalized design decisions. Monthly office hours that kept stakeholders engaged rather than frustrated.

And a design system component — adopted independently by multiple teams — that proved the system was built to scale.

---

## OUTCOME

- **1.7% improvement in discoverability** *(to be confirmed from analytics)*
- ⚠️ FILL IN: CTR improvement, filter usage data from analytics dashboard
- Stakeholder requests became more considered and better reasoned
- Intake process officially published across the search team
- Component adopted by headless commerce and campaign page teams without onboarding
- DS grouped filter shipped with no usability issues 6 months post-launch

---

## WHAT I'D DO DIFFERENTLY

Start the intake process earlier. The first few months of rejections would have landed differently with a formal structure behind them. We built it reactively — it should have been proactive.

---

## WHAT COMES NEXT

This project surfaced a bigger question: as AI chat becomes more prominent, does it replace traditional search — or do they serve different purposes?

The tile system, ranking logic, and stakeholder relationships we built here fed directly into exploring that question. The next phase wasn't replacing search with AI — it was understanding how AI can assist product discovery alongside traditional search, serving users who know exactly what they want differently from users still exploring.

---

## INTERVIEW VERSIONS — SPEAKING NOTES

### Recruiter (2 min)
"I redesigned SAP's product search — a 3600+ product catalog used by enterprise buyers globally. The core problem was that search was being treated as a marketing space instead of a decision-making tool. I redesigned the tile system with four contextual variants, overhauled the filters to match how users actually think, and built a stakeholder intake process that institutionalized design decisions. MVP shipped, v2 ongoing. Discoverability improved 1.7%."

### Design Manager (15-20 min)
Walk through the full narrative above. Emphasize: the tension between functional search and marketing space, the four decisions and the reasoning behind each, the intake process as organizational design, the DS filter follow-through.

### Cross-Functional / PM / Engineer (10-15 min)
Lead with: the data (filter usage vs CTR gap), the business decisions (best seller rejection → sort-by, discount tag → copy testing), the intake process (business + UX + taxonomy co-approval), the outcome metrics. Less visual craft, more organizational thinking and business impact.

### Portfolio Presentation Round (30-45 min)
Full narrative + Q&A. Know every corner of this project. Likely questions:
- "How did you handle stakeholder pushback?"
- "Walk me through the business logic for the badge system"
- "How did you decide what information to show on each tile variant?"
- "What would you do differently?"
- "How does this connect to your AI search work?"
