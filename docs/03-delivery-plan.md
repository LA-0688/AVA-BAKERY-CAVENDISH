# Delivery plan

Status: planning only. Milestones describe future work, not completed functionality.

## Milestones

Estimates are focused developer working days, not a delivery commitment; allow additional time for client responses, environment setup, and existing dependency problems.

| Milestone | Scope | Evidence / exit check | Estimate |
| --- | --- | --- | --- |
| M0: planning review | Agree order lifecycle, login method, scheduling, delivery coverage, cancellation and budget; confirm account ownership and repository rename. | Reviewed plan and filled business inputs; explicit instruction to start prototype. | 1-2 days plus client review |
| M1: safe reusable foundation | Stabilize web dependency/types; isolate mobile build; remove passcode/self-promotion from active flow; disable active legacy payment/AI paths; version migrations; local test environment; Ava text updates. Fix ignore/tracking rules while retaining existing working files. | Web typecheck/build passes without ignored errors; signed-in customer cannot become admin or call admin actions. | 1-3 days |
| M2: capacity-safe core | New tables and transactional reservation/cancellation functions; idempotency; permissions; cut-off and rollback checks. | Real database concurrency and authorization tests pass. | 2-3 days |
| M3: smallest usable prototype | Product editor, dated baking-day editor, required login, date-specific catalog, checkout/contact/address, own-order confirmation/history, protected order list and production totals. Admin can enter off-platform orders through same capacity logic. | Client completes full workflow on phone using synthetic data; errors are visible and no fake success is shown. | 2-4 days |
| M4: workflow review and hardening | Client dry run, courier quote/payment-status editing, basic reports/export, schedule templates, edge-case fixes, accessibility and mobile checks. | Written acceptance of order workflow and regression checks; no money processed. | 2-3 days |
| M5: separate launch decision | Select hosting, SMTP/domain, backups/recovery, operational owner and budget; compatibility spike if Cloudflare selected. | Explicit approval before production deployment. Any payment integration requires a separate reviewed scope and tests. | Estimate after review |

M1-M3 prototype estimate: 5-10 focused days, depending on dependency repair and setup. M4 adds 2-3 days. No implementation has started in this planning change.

## Acceptance scenarios

| Scenario | Required result |
| --- | --- |
| Concurrent last-item orders | With synthetic capacity 1 and 20 simultaneous submissions, exactly one order succeeds and allocated quantity is 1. |
| Multiple items, one unavailable | Entire order fails; no partial order, item, or capacity increment remains. |
| Retry / double click | Same actor and request key produces one order and one reservation. Same key/different payload is rejected. |
| Cut-off | Reject at/after exact cut-off, including requests waiting for a lock. A retry of an existing committed order still returns that order. |
| Availability changes | Admin closure and customer submission serialize; no submission passes against a closed day's committed state. |
| Capacity edit | Cannot set capacity below current allocation. No missing limit behaves as unlimited. |
| Cancellation | Eligible cancellation releases once. Repeated cancellation changes nothing. Completion and post-production cancellation do not automatically reopen capacity. |
| Invalid/tampered data | Reject fractional/negative/zero quantities, cross-day IDs, inactive offerings, invented prices, customer IDs, and payment flags. |
| Login/access | Anonymous checkout rejected; customer A cannot see B's order or call admin mutations; editing a profile cannot grant admin rights. |
| Quote handling | Bread subtotal remains separate; pending courier quote never displays as free delivery. |
| Off-platform order | Admin entry consumes the same capacity as a website order. |
| Failure recovery | Database/network failure leaves no phantom success; retry is safe; basket remains recoverable. |
| Reporting | Production sums match capacity-consuming quantities by day/product. Cancelled/released items are excluded; courier quotes are not bread revenue. |

Use actual PostgreSQL transactions for concurrency tests, not only mocked API tests. Local-time boundary tests use `Asia/Kolkata`. Capacity numbers in tests are synthetic and are not proposed bakery limits.

## Planning-stage changes and later cleanup

Completed: README and numbered planning documents. The subsequently authorized 3 November cleanup removed deferred files and the superseded roadmap; see [the cleanup record](06-cleanup-record.md). Preserved the reusable web/shared scaffold and unrelated authored work.

Cleanup work now completed: generated-output/environment ignore rules, web `.env.example`, explicit web-only development command, pruning deferred dependencies and updating the lockfile. Native app removal was explicitly authorized as part of file cleanup. Remaining M1 work includes dependency/type stability, honest build gates, secure admin authorization, and the isolated test environment. Do not rewrite repository history.

The previous source review found unsafe admin role changes, optional webhook verification, demo IDs incompatible with UUID database products, mixed demo/live data, unimplemented cart subscriptions, mobile currency errors, and failing web/mobile type checks. Treat these as known legacy blockers, not MVP requirements to reproduce.
