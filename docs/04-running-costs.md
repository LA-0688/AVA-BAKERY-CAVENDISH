# Running costs and hosting choices

Researched 2 November 2026. Target: INR 1,000-3,000/month, excluding development and third-party courier charges. No subscriptions have been purchased and no deployment is planned before workflow review.

Prices below are provider list prices in USD before taxes, card conversion, and overages. For conservative planning only, use **INR 100 per USD**, not a live exchange-rate quote. Recalculate using the client's actual billed exchange rate before choosing a plan.

## Scenarios

| Scenario | Monthly provider base | Planning INR equivalent | Assessment |
| --- | --- | --- | --- |
| Local workflow prototype | USD 0: local Next.js, local Supabase/PostgreSQL, local email capture | INR 0 hosting | Recommended current phase; depends on a suitable local development environment. No public orders. |
| Controlled pilot after review | Cloudflare Workers Paid USD 5 + Supabase Free USD 0 + email within a provider's free allowance | About INR 500, plus domain/taxes/usage | Leaves room within budget, but free database limits and inactivity pausing require explicit acceptance. Cloudflare compatibility must be checked first. |
| Paid database option | Workers USD 5 + Supabase Pro from USD 25 for one small included project + free email allowance if sufficient | About INR 3,000 base, plus domain/taxes/usage | Likely exceeds the upper budget after extras under this conservative allowance. Prefer for fewer free-tier operational limitations if budget can increase. |
| More direct Next.js hosting | Vercel Pro from USD 20 + Supabase Free | About INR 2,000 base, plus extras | Potentially within target; keeps free database limitations and adds hosting cost. Recheck seat/usage billing. |
| Vercel with paid database | Vercel Pro USD 20 + Supabase Pro USD 25 | About INR 4,500 base, plus extras | Above target. |

**Recommendation:** spend nothing on hosting during planning/local prototype work. Compare Cloudflare runtime compatibility versus Vercel's lower setup effort after the workflow is accepted. Use a free-database pilot only with the client's informed acceptance of its limits; do not promise an always-available production service for INR 500/month.

Cloudflare's current Next.js guidance describes its supported deployment paths; this existing Next.js 14 application is not presumed compatible unchanged. A runtime migration may cost more developer time than the monthly hosting saving. Do not select a framework migration solely to save USD 15/month without a short compatibility assessment.

## Other costs and boundaries

- Domain: provisional budgeting allowance INR 1,200-2,400/year (INR 100-200/month equivalent), not a registrar quote. Final extension, availability and renewal cost remain unknown. No domain purchase now.
- Login email: required for real customer email OTP. Supabase's built-in sender is restricted and is not a production customer-mail service; budget/setup custom SMTP before public testing. Resend is one candidate with a free plan and a documented daily limit of 100 emails. Check the full monthly quota and login/confirmation volume before selection. Reuse an existing suitable client provider if available.
- SMS/WhatsApp automation: excluded; phone-based OTP or automated messaging requires a separate provider estimate.
- AI, native build subscriptions, payment gateway subscriptions/transaction fees, and courier integrations: INR 0 planned because deferred, not because those services are universally free.
- Free database pilot: monitor database/storage/egress/auth quotas, own backup/export/restore process, inactivity pausing, and email delivery. Pro has daily database backups; product-photo recovery still needs its own plan.
- Maintenance, client support, tax, domain renewal, and actual courier charges are outside provider base estimates. Courier cost is separately tracked per order, never assumed as a fixed amount.
- Before launch, define billing owner, usage alerts/spending controls where supported, expected order/login volume, backup/restore responsibilities, and an upgrade trigger. Do not keep a free project awake with artificial activity as a substitute for a reliability plan.

## Primary sources

- [Supabase pricing](https://supabase.com/pricing): Free USD 0; Pro from USD 25; first project and included limits; free inactivity pause and paid backup details.
- [Supabase free project pausing](https://supabase.com/docs/guides/platform/free-project-pausing).
- [Supabase custom SMTP](https://supabase.com/docs/guides/auth/auth-smtp): built-in sender restrictions and production SMTP requirement.
- [Cloudflare Workers pricing](https://developers.cloudflare.com/workers/platform/pricing/): paid subscription minimum USD 5 plus applicable usage.
- [Cloudflare Next.js guidance](https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/): verify a supported runtime path before committing.
- [Vercel pricing](https://vercel.com/pricing): Pro from USD 20/month.
- [Vercel Hobby restrictions](https://vercel.com/docs/plans/hobby): non-commercial personal use; do not budget the bakery's commercial site on Hobby.
- [Resend pricing](https://resend.com/pricing): free email plan and limits; final suitability depends on volume and domain setup.
