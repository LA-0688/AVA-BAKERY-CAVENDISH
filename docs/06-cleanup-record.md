# File cleanup record

3 November 2026. Authorized scope: organize the existing project and remove files outside the agreed web-first plan. This is maintenance, not approval to implement the new order workflow or deploy it.

## Removed

- `apps/mobile`: native Expo/React Native app, Android project, mobile assets and generated output.
- `APK & Other FIles`: old Android installer.
- Root `eas.json` and Expo cache/configuration coupling.
- AI orchestrator route and `AgentLogsWorkspace` component/tab.
- Razorpay webhook, legacy payment-linked order route, `CheckoutModal`, and associated SDK dependencies. The future capacity-controlled order API is not yet implemented.
- `SyncDemo`: simulated native-app sync display, plus its navigation link.
- Old admin passcode dialog/entry and client-side admin role promotion, including the duplicate role-promotion effect in the retained admin scaffold.
- Fake order constants in the retained admin component; an empty/error order fetch no longer substitutes sample paid orders.
- Unsafe legacy `packages/supabase/src/schema.sql`. The new proposed schema remains documentation only; no database was changed.
- Six unused top-level bread PNGs. Kept `/japanese_bread.png` and the four `/images/` files referenced by current web components.
- `resize_images.py` (old mobile image workflow with stale absolute paths), empty `unsplash.json`, and superseded `BAKERY-PLAN.md`.
- Existing generated `.next`, `.turbo`, and `.expo` directories. These are reproducible, not authored application code.

## Retained and organized

- Website source, catalog/cart/login UI, styles, About page, and reusable admin dashboard scaffold.
- Shared Supabase client package and public client configuration. Existing local `.env.local` was not deleted; `.env.example` now documents required public settings.
- npm workspaces and Turborepo for the web/shared packages. Root scripts now start web only, and root TypeScript config no longer depends on Expo.
- Current planning pack. No real production values have been invented.
- Git history and unrelated working changes. No commit, push, repository-history rewrite, remote account deletion, payment, or deployment was performed.

npm install pruned 728 packages. Ignore rules now cover generated Next/Turbo output, local environment files, and TypeScript build metadata. Already tracked deleted artifacts will appear as deletions until a later reviewed commit; adding ignore patterns alone does not remove historical Git content.

## Remaining limitations

- Existing website still contains L'Artisan branding, example product data, legacy product IDs/cart persistence logic, and obsolete copy. Rebranding and authoritative database-backed offerings belong to the implementation milestone.
- The admin scaffold is deliberately disconnected from the storefront. It still needs verified admin authorization, transactional mutations, real capacity/day data, error handling, and replacement of legacy local product fallback behavior.
- Customer checkout is disabled. No new order API replaces the removed payment-linked route yet.
- Web typecheck now passes after deferred dependency pruning; the build no longer ignores TypeScript errors. The old lint skip remains until a proper lint configuration is added in the foundation milestone.
- No production database, external account, or remote repository content was modified by this cleanup.
- GitHub rename has been verified as `LA-0688/AVA-BAKERY-CAVENDISH`; local origin was updated during the subsequent authorized repository sync.

## Repository sync preparation

On 3 November 2026 the user authorized committing and pushing this cleanup and planning pack. Local origin was updated to the renamed repository and remote history fetched. The existing web `.env.local` is retained on this machine but removed from Git tracking; `.env.example` documents the public configuration placeholders instead. This does not rewrite previous history or change the external Supabase project.

## Verification

- Web TypeScript check: passed.
- Shared package and website build: passed, with TypeScript checking enabled. Lint is still skipped by the legacy setting.
- Next.js reports missing optional compiler-platform lockfile metadata and its automatic patch attempt fails; the installed Windows compiler still builds successfully. Resolve portable compiler lockfile metadata during foundation work before CI/hosting selection. Browserslist also reports outdated browser data.
- Documentation relative links and removal of deferred packages from the lockfile: passed.
- Diff whitespace check: passed.
- Build output was removed again after verification; dependencies remain locally installed and ignored. Removed a generated root `debug.log` and ignored future debug logs.
