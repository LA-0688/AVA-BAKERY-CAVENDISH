# Decision log, open questions, and accounts

Updated 3 November 2026. Keep this document current after each client discussion. File cleanup is authorized; prototype implementation remains pending.

## Decisions

| ID | Decision | Status |
| --- | --- | --- |
| D01 | Business name: Ava Bakery Cavendish; Mumbai; bread-focused pre-orders. | Confirmed |
| D02 | Repository renamed by owner to `LA-0688/AVA-BAKERY-CAVENDISH`; stable ID verified. | Complete; local origin updated |
| D03 | Continue in planning; do not implement the prototype yet. | Confirmed by current instruction |
| D04 | Require customer login. | Confirmed |
| D05 | Bakery quotes courier fees separately after the order. | Confirmed |
| D06 | Monthly technology target INR 1,000-3,000, excluding development/couriers. | Confirmed |
| D07 | Reuse Next.js and Supabase; defer native app and AI work. | Proposed |
| D08 | Email OTP login; public catalog browsing. | Proposed; confirm customer preference for email vs phone |
| D09 | Submitted orders consume capacity immediately; explicit rejection/cancellation releases eligible quantities. | Proposed |
| D10 | One baking day per order; no customer self-service edits initially. | Proposed |
| D11 | Configure schedules, quantities, prices and areas from client inputs; no guessed live defaults. | Required |
| D12 | Choose hosting and any paid subscription after local workflow review. | Proposed within deployment restriction |
| D13 | Remove deferred native/AI/payment-demo files and organize the web/shared scaffold. | Authorized and completed 3 November; see cleanup record |

## Business inputs still needed

Collect these in one client conversation rather than guessing values during development:

1. Initial product list, sizes/variants, descriptions, approved photos, allergens and prices. Confirm whether each variant has its own independent capacity.
2. Weekly baking days, holidays/exception dates, how far ahead to accept orders, cut-off time for each bake, and collection/delivery windows.
3. Product quantities per baking date. Any shared oven/labour limit across products? The proposed MVP controls product/day quantities only; shared resource limits need explicit modelling.
4. When is an order considered accepted? How long may an unpaid/unconfirmed order consume capacity? Who cancels it and when does production start?
5. Initial delivery areas/postcodes, who books the courier, who collects the fee, and what happens if the customer declines a quote. Is pickup offered, and if so where/when?
6. Whether email OTP is practical for the existing customer base; required login is confirmed, but phone OTP would affect costs.
7. Who operates the dashboard, who enters phone/social orders, and who is authorized to record payment and quote acceptance?
8. Receipt/confirmation wording, customer contact method, data-retention expectations, and how the client wants backups and handover handled.

## Account and service register

Identifiers are configuration evidence, not proof that services are active or owned by the client. Do not store tokens/passwords in these documents.

| Service | Observed identifier / state | Planned treatment |
| --- | --- | --- |
| GitHub | `LA-0688/AVA-BAKERY-CAVENDISH`, repository ID `1246466503`, default branch `main`; connector reports admin permission. Public visibility observed. | Owner completed rename; local origin updated. Review client ownership/handover separately. |
| Supabase | Project reference `kimmnbpopbmutkowdssa`; account owner/environment purpose not verified. | Reuse provider; verify ownership/data before any migration. Use isolated test data/environment first. |
| Expo/EAS | Historical owner `lartisanbakery-at`, slug `lartisan-bakery`, project ID `cc6a4c6d-95d5-4bb2-8693-754b489f4664`. | Local native files removed; external account/project not changed. |
| Razorpay | Previously present integration; no local configured gateway credentials observed in prior review. | Local integration/dependencies removed; no external account modified. |
| Google AI / OpenAI | Previously present integration/dependencies; no local active credential configuration observed in prior review. | Local AI code/dependencies removed; no external account modified. |
| Cloudflare / Vercel | No verified connected hosting account. | Evaluate only; no account creation, plan purchase or deployment now. |
| Login email / domain | No verified client SMTP/domain account configured. | Confirm ownership/provider during implementation preparation; local email capture for prototype. |
| Unsplash / QRServer / fonts | External asset/service references exist. | Check client-approved imagery; remove payment QR dependency from the future prototype. |

## Repository rename handoff

The owner completed the rename, and GitHub metadata verified the same repository ID under `LA-0688/AVA-BAKERY-CAVENDISH`. Local `origin` now points to `https://github.com/LA-0688/AVA-BAKERY-CAVENDISH.git`.

Repository handoff:

1. Local origin has been updated with no embedded credential and remote history fetched successfully.
2. Keep the on-disk `BAKERY` folder and internal package names unchanged unless separately requested.

## Review record

- Planning pack created: 2 November 2026.
- Prototype start: not authorized yet under current planning instruction.
- Workflow acceptance: pending.
- Payment integration: deferred.
- Production deployment: deferred.
