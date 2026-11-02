# Ava Bakery Cavendish

Planning workspace for a bread pre-ordering system for a Mumbai bakery.

**Stage: planning.** The existing L'Artisan code is a reusable prototype, not a production order system. No payment processing, production deployment, or new application implementation is authorized by the current planning stage.

## Start here

1. [Business brief and scope](docs/01-business-brief.md)
2. [Proposed architecture and database](docs/02-architecture-and-data.md)
3. [Milestones and acceptance checks](docs/03-delivery-plan.md)
4. [Running costs and hosting options](docs/04-running-costs.md)
5. [Decisions, open questions, and account register](docs/05-decisions-and-accounts.md)

The client brief and confirmed decisions in these documents are the current source of truth. The old L'Artisan roadmap has been removed. Features described as proposed are not implemented. See the [cleanup record](docs/06-cleanup-record.md) for removed files and remaining limitations.

## Existing files and reuse

| Location | Intended treatment after planning review |
| --- | --- |
| `apps/web` | Main implementation starting point: reuse Next.js, styles, catalog layouts, and parts of login/admin UI; replace order, capacity, and authorization logic. |
| `packages/supabase` | Retained shared client scaffold. The unsafe legacy SQL is removed; new versioned migrations and database tests are still to be designed/implemented. |
| `apps/web/public` | Retained images referenced by the website. Client approval remains necessary. |
| `docs` | Business brief, architecture, milestones, costs, decisions, and cleanup record. |
| `node_modules` | Local generated dependencies. npm has pruned deferred packages; do not commit this directory. |

Native mobile/Expo files, APK, AI orchestration, payment demos, the old payment-linked order API, and stale generated caches have been removed. The reusable admin component remains an unconnected scaffold until secure admin authorization is implemented. Checkout is disabled.

## Repository identity

- Verified GitHub repository: `LA-0688/AVA-BAKERY-CAVENDISH`, ID `1246466503`. The owner completed the rename.
- Local origin points to `https://github.com/LA-0688/AVA-BAKERY-CAVENDISH.git`.
- Root npm package is now `ava-bakery-cavendish`; internal `@bakery/*` package names remain stable.
- Local folder remains `BAKERY`. No external Supabase or Expo account/project was changed or deleted.

## Local commands

- `npm install` installs the remaining web/shared-package workspaces.
- `npm run dev` starts the website only.
- `npm run typecheck` checks the web source.
- `npm run build` builds the shared package and website.

Copy `apps/web/.env.example` to `apps/web/.env.local` and supply a suitable test project's public Supabase settings. Existing local settings have been preserved. Do not connect real customer data for prototype review.

## Development handoff

The next step is to resolve business rules and review this plan. Then explicitly start the remaining milestone M1 work. File cleanup is complete; the new ordering workflow and secure admin access are not implemented. Do not treat this scaffold as a production order system.
