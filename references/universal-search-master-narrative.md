# Universal Search — Master Narrative
## SAP.com · UX Design Associate → Specialist · 2024–Present

---

## HOOK

Search.sap.com is SAP's front door for everything — products, support, community, news. After establishing search UX principles on SAP's product catalog, my manager handed me a bigger challenge: the universal search that had failed to launch twice. Her instruction: start from scratch.

---

## CONTEXT

| | |
|---|---|
| **My role** | UX lead — audit, research, vision design, interaction design, stakeholder management, launch |
| **Timeline** | 2024 — ongoing |
| **Team** | Search pod lead (business strategy + PM), internal dev team, community team, support team, news team |
| **Platform** | search.sap.com — universal search across SAP's full content ecosystem |
| **Status** | MVP shipped · v2 in progress |

---

## THE LEGACY PROBLEM

Before I touched it, universal search had a workaround for bad results.

The search engine was returning unreliable results — so unreliable that the previous wayfinding pod had resorted to manually curating a "best bets" list: specific results hardcoded to surface for certain queries. It wasn't a search system anymore. It was a maintenance burden masking a broken foundation.

When the wayfinding pod dissolved and the search pod took over, we inherited that burden alongside everything else. The intelligent search engine eventually resolved it at the root — once results were actually good, the manual list became unnecessary. But that was a technical fix, not a design fix. Getting to launch required solving a different kind of problem entirely.

---

## WHY IT HAD FAILED TWICE

The project hadn't stalled because of bad design. It had stalled because of unclear ownership and broken relationships.

Search.sap.com spans multiple teams — community, support, news, the dev team — each owning a piece of the ecosystem, none of them fully aligned on who had final say. The dev team had strong opinions on UX because they had their own vision of what the product should look like. The community team had business pressures driving their timeline. Nobody had successfully brought all of them together around a shared direction.

My manager's instinct was right: inheriting that history would have been a liability. Starting fresh meant starting with research, rebuilding relationships from scratch, and earning trust before asking for alignment.

---

## DESIGNING FROM THE IDEAL STATE BACKWARD

Before touching the existing experience, I started at the other end — what should universal search eventually become?

The north star was ambitious: search that behaves like Google. Not in brand, but in intelligence. When you search for shoes on Google, it doesn't show you a list of links — it shows you product tiles, because it knows you're in buying mode. That's contextual, dynamic, personalized search. The layout adapts to your intent. The results anticipate what you need before you finish asking.

That was the ideal state. And it was still a few years away — at the time, the company wasn't fully committed to AI yet. But we saw it coming. Designing with that future in mind shaped every decision about MVP.

Working backwards from the ideal state, three things became clear:

**What had to wait for later:**
- Dynamic layouts that adapt to search intent — requires AI infrastructure not yet ready
- Fully contextualized results by subdomain — requires cross-team data integration still unresolved
- Personalization — requires user data infrastructure
- Product Search tile system applied to universal results — too much front-end change for MVP scope

**What could be achieved in MVP:**
- Reliable results — the intelligent search engine fixed this at the root
- Products surfacing highest — directly impacts business
- Critical usability blockers resolved
- A foundation the ideal state could be built on

The lift-and-shift principle wasn't a compromise. It was a deliberate stepping stone — ship something solid, establish the foundation, then build toward the vision.

This ideal state thinking stayed internal — it was a compass for our own decisions, not a stakeholder presentation. Using it to make better MVP choices without overselling a future we couldn't guarantee.

---

## THE AUDIT

The first thing I did was re-audit the experience from scratch. The past PRDs were useful for context, but the design needed fresh eyes.

The audit surfaced four critical blockers — issues we recommended resolving before go-live:

- **No auto-suggestion and "No matches found"** — users who typed a query and got nothing had no path forward
- **Filters not contextualized** — applying filters was actually downgrading results. The "Resource" filter in particular was making search worse, not better
- **Very old SAP News results surfacing** — stale content was undermining trust in results
- **AI inconsistency** — the new intelligent search feature was behaving unpredictably

The audit also carried forward principles already proven on Product Search — NNG and Baymard search UX best practices, tile information hierarchy, filter usability standards. Universal Search inherited that foundation. What was new here was the organizational complexity and the AI layer.

**The filter constraint:**
Filters were particularly difficult — they're driven by metadata, and we don't fully own the metadata. When the dev team was sourcing data, design wasn't always in the room to influence those decisions. The result: filter quality was constrained by what the data could support, not just what the UX should be.

**The subdomain problem:**
The audit also revealed a structural issue that persists today: SAP's subdomains — community, support, news — weren't fully connected to universal search. A truly universal search requires that integration. We advocated for it. V2 hasn't fully addressed it yet. It's an infrastructure problem that goes beyond design scope.

---

## BUILDING THE RELATIONSHIPS

The dev team was the most complex relationship to navigate.

They had strong opinions on UX — spacing was one of the early friction points. We were following the design system; they felt the spacing was too generous. Rather than defending the position, we brought it to the design system lead and used the disagreement as an opportunity to strengthen the DS. That approach set the tone: not defending positions, but finding the right answer together.

The broader approach was consistent presence and transparency. Every piece of research we did, we shared. Every design decision, we explained the reasoning. Every testing finding — even ones we couldn't act on before launch — we documented and shared. Over time the dev team went from territorial to collaborative. By the end they were bringing us in as design partners on their own initiatives.

My pod lead led the business strategy and represented our org's POV — functioning like a PM but with broader organizational reach. I focused on the design. Where the two lanes overlapped, we made co-decisions and shared progress with each other regularly to stay aligned.

---

## THE COMMUNITY CHALLENGE

The community team was ready to go live before the experience was ready.

We had four critical blockers documented from research. Presenting those findings to the full team — including the dev team — was the moment that tested everything. The dev team wasn't happy. You could tell. But they couldn't argue with testing evidence.

We held the line. The community team agreed to MVP scope. The critical issues were resolved before launch.

---

## WHAT SHIPPED

- Four critical blockers resolved before go-live
- Intelligent search engine integrated — reliable results, best bets list no longer needed
- Products surfacing highest in results — directly impacts business
- AI search included in MVP
- Dev team relationship transformed — now a collaborative partnership

---

## WHAT COMES NEXT

V2 is moving toward the intelligent search vision: semantic understanding, dynamic result layouts that adapt to search intent, category tab suggestions, personalization, and eventually applying the Product Search tile system to universal results.

The subdomain connectivity remains the unresolved structural challenge — community, support, and news still not fully integrated. That's the right next problem to solve, and it requires cross-team commitment beyond design scope.

---

## WHAT I'D DO DIFFERENTLY

Get into the room earlier when decisions are being made about data sourcing and infrastructure. On filters especially — by the time design was involved, some data decisions had already been made that constrained what was possible. Earlier involvement would have given us more influence over the foundation the UX was built on.

---

## INTERVIEW VERSIONS — SPEAKING NOTES

### Recruiter (2 min)
"I led UX for SAP's universal search — search.sap.com, which spans products, support, community, and news. The project had failed to launch twice before I took it over. I started by designing the ideal state — intelligent, contextual search like Google — then worked backwards to a shippable MVP. I re-audited from scratch, resolved four critical usability blockers, rebuilt a fractured cross-team relationship with the dev team, and shipped MVP with intelligent search included. V2 is in progress."

### Design Manager (15-20 min)
Walk through the full narrative. Emphasize: the ideal state vision and working backwards approach, the filter metadata constraint as a lesson in design influence, the dev team relationship arc, the community go-live pressure and holding the line with evidence, and what V2 is building toward.

### Cross-Functional / PM / Engineer (10-15 min)
Lead with: the legacy best bets problem, the multi-team ownership complexity, the data sourcing constraint on filters, how the pod lead and you divided business vs design lanes, the MVP principle of lift and shift and why it worked where previous attempts failed.

### Portfolio Presentation Round (30-45 min)
Full narrative + Q&A. Likely questions:
- "Why had it failed twice before?"
- "How did you turn around the dev team relationship?"
- "What's the difference between ideal state and MVP — how did you decide?"
- "What's still broken and why?"
- "How does this connect to Product Search and AI Search?"
- "What would you do differently to get more influence over the data decisions?"
