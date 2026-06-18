# OpsKit Admin

OpsKit Admin is a B2B SaaS Admin Demo Kit for capturing common page patterns and interaction patterns found in complex back-office systems.

It is not a real commercial admin product. It is intended for design presentation, componentization practice, and validating AI-assisted development workflows.

## Completed Modules

- Admin Shell: Sidebar + Header
- Work Orders List
- Status Summary Cards
- Search Bar
- Filter Drawer
- Work Orders Table
- Work Order Detail Drawer
- Create Work Order Drawer
- Mock Data

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- Codex

## Component Structure

- `src/components/admin-shell.tsx`: Provides the shared admin layout with sidebar navigation and top header.
- `src/components/work-order-summary-cards.tsx`: Shows the Work Orders status summary cards.
- `src/components/work-orders-table.tsx`: Renders the Work Orders table and row action button.
- `src/components/work-order-filter-drawer.tsx`: Provides the static filter drawer for refining the work order queue.
- `src/components/work-order-detail-drawer.tsx`: Shows the selected work order details, timeline, recommendations, and available actions.
- `src/components/create-work-order-drawer.tsx`: Provides the static create work order form drawer.
- `src/data/work-orders.ts`: Stores Work Orders mock data and related TypeScript types.

## Development Principles

- Make one small change at a time.
- Run `npm run build` after each change.
- Commit only after the build succeeds.
- Make the page work first, then extract components.
- Start with mock data before connecting a backend.

## Next Steps

- Customers module
- Assets module
- Billing module
- Reports module
- Extract shared patterns
