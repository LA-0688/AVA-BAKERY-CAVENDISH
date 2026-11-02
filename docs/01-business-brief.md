# Business brief and scope

Status: draft for review, updated 2 November 2026.

## Business facts supplied by the client brief

Ava Bakery Cavendish is a bread-focused bakery in Mumbai. Customers currently order through existing relationships and social media, using mixed channels. Baking happens on fixed days each week. Production planning is based on experience and expected demand. Third-party couriers deliver orders and charge separately per order. There is no existing website/order system and the technology budget is low.

## Outcome

Provide one simple, mobile-friendly place to take pre-orders, control quantities per baking day, and manage fulfilment. An order must never exceed the configured available capacity, including when multiple customers submit at the same time.

## Confirmed choices

- Customer login is required for ordering. Public browsing is allowed as a proposal.
- The bakery quotes courier charges separately after the bread order is placed.
- Monthly technology budget target: INR 1,000-3,000, excluding development and courier charges.
- Reuse the existing repository and code where appropriate.
- Remain in planning now. Implement the prototype only after planning review.
- No payment processing or production deployment before the initial order workflow is reviewed and tested.

## MVP scope

| Capability | Minimum useful behavior |
| --- | --- |
| Products | Admin creates/edits bread name, description, approved photo, price, active flag. Archive products used in orders. |
| Baking calendar | Admin configures weekly baking pattern, generates dated baking days, edits exceptions and exact cut-offs. Nothing is automatically offered without capacity settings. |
| Capacity | Each dated baking day has explicitly configured product offerings and quantity limits. Zero means unavailable; a missing limit never means unlimited. |
| Ordering | Logged-in customer chooses one baking date, quantities, contact details, and delivery address/area, then submits one complete order. |
| Order dashboard | Admin sees orders by baking day/status, item quantities, contact/delivery details, and production totals. |
| Payment tracking | Separate manually recorded status and notes; no card collection, gateway call, payment simulation, or claims that unpaid orders are paid. |
| Courier tracking | Store requested delivery area, quote status, separately quoted amount, courier name/reference, and fulfilment progress. |
| Reporting | Baking-day production list, order count, bread value, payment status, and fulfilment summary; simple CSV export. |

## Smallest working prototype after review

Include customer/admin login, product management, dated baking-day setup, capacity-safe order submission, customer order confirmation/history, and basic admin order/production views. Store payment state and delivery quote state, but automate neither. Use only clearly marked test products and test orders.

The recurring schedule editor, polished photo upload, courier quote editor, richer reports, and CSV export can follow once that vertical workflow passes review. One-off dated baking days must already enforce real cut-offs and limits.

## Proposed operating rules to review

- Use Mumbai time (`Asia/Kolkata`) for all business dates and displayed cut-offs; store instants in UTC.
- One order covers one baking day. Ordering for two dates means two orders.
- A submitted request immediately consumes capacity, even while awaiting bakery acceptance or payment. Label it "Order received; awaiting bakery confirmation".
- Payment status never controls whether the application reserves capacity in this first workflow.
- No automatic expiry of unpaid orders in the first prototype; the bakery explicitly rejects/cancels them to release capacity.
- Customer cancellations/edits initially require contacting the bakery. An admin can cancel before production; after production starts, cancellation does not automatically put baked stock back on sale.
- Courier charges are visibly excluded from the bread subtotal. A missing quote is "to be quoted", never INR 0 or "free delivery".
- All social-media/phone orders must be entered into the same capacity-controlled admin order form before a quantity is promised. Otherwise the website cannot prevent overselling across channels.
- Never substitute a demo catalog or fake orders when live data fails. Show an explicit error or empty state.

These are proposals, not confirmed bakery policies. Actual weekdays, cut-off rules, production capacities, prices, delivery coverage, and courier fees remain unset.

## Deferred scope

Native Android/iOS development, AI agents, automated customer messages, loyalty/CRM, supplier automation, ingredient-level inventory, courier booking APIs, subscriptions, discounts, and advanced analytics. No Redis, queue, separate microservice, or real-time subscription is needed for this MVP. Native app and AI/payment-demo files were removed in the authorized [3 November cleanup](06-cleanup-record.md).
