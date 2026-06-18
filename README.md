# OpsKit Admin

OpsKit Admin is a B2B SaaS Admin Demo Kit for capturing common page patterns and interaction patterns found in complex back-office systems.

It is not a real commercial admin product. It is intended for design presentation, componentization practice, and validating AI-assisted development workflows.

## Completed Modules

- Admin Shell: Sidebar + Header
- Work Orders List
- Customers List
- Assets List
- Billing List
- Reports List
- Settings
- Status Summary Cards
- Search Bar
- Filter Drawer
- Work Orders Table
- Work Order Detail Drawer
- Customer Detail Drawer
- Asset Detail Drawer
- Billing Detail Drawer
- Create Work Order Drawer
- Shared PageHeader
- Shared SummaryCardGrid
- Shared StatusBadge
- Shared DataTableCard
- Settings module
- Workspace Profile card
- Role & Permission Rules table
- Notification & System Rules table
- Mock Data

## Current Page Routes

- `/`: Work Orders
- `/customers`: Customers
- `/assets`: Assets
- `/billing`: Billing
- `/reports`: Reports
- `/settings`: Workspace configuration, roles, notification rules, and system controls

## Project Status

The current Demo Kit covers 6 common B2B SaaS admin modules:

- Work Orders
- Customers
- Assets
- Billing
- Reports
- Settings

The project has moved from page-by-page stacking into shared pattern extraction for reusable admin UI structures.

The current Demo Kit includes foundational shared list page patterns:

- PageHeader
- SummaryCardGrid
- StatusBadge
- DataTableCard

The current Demo Kit now covers the common B2B SaaS admin list + detail drawer pattern across:

- Work Orders
- Customers
- Assets
- Billing

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- Codex

## Component Structure

- `src/components/admin-shell.tsx`: Provides the shared admin layout with sidebar navigation and top header.
- `src/components/page-header.tsx`: Shared page title, description, and action area.
- `src/components/summary-card-grid.tsx`: Shared summary card layout for module overview metrics.
- `src/components/status-badge.tsx`: Shared status badge for consistent status display across modules.
- `src/components/data-table-card.tsx`: Shared search + table card pattern for list pages.
- `src/components/work-order-summary-cards.tsx`: Shows the Work Orders status summary cards.
- `src/components/work-orders-table.tsx`: Renders the Work Orders table and row action button.
- `src/components/work-order-filter-drawer.tsx`: Provides the static filter drawer for refining the work order queue.
- `src/components/work-order-detail-drawer.tsx`: Shows the selected work order details, timeline, recommendations, and available actions.
- `src/components/customer-detail-drawer.tsx`: Customer profile and activity detail drawer.
- `src/components/asset-detail-drawer.tsx`: Asset summary and maintenance context drawer.
- `src/components/billing-detail-drawer.tsx`: Invoice and payment context detail drawer.
- `src/components/create-work-order-drawer.tsx`: Provides the static create work order form drawer.
- `src/data/work-orders.ts`: Stores Work Orders mock data and related TypeScript types.
- `src/data/customers.ts`: Stores Customers mock data and related TypeScript types.
- `src/data/assets.ts`: Stores Assets mock data and related TypeScript types.
- `src/data/billing.ts`: Stores Billing mock data and related TypeScript types.
- `src/data/reports.ts`: Stores Reports mock data and related TypeScript types.
- `src/data/settings.ts`: Stores Settings mock data and related TypeScript types.

## Development Principles

- Make one small change at a time.
- Run `npm run build` after each change.
- Commit only after the build succeeds.
- Make the page work first, then extract components.
- Start with mock data before connecting a backend.

## Next Steps

- Improve responsive layout
- Polish visual consistency
- Extract shared detail drawer patterns
- Add screenshots to README later
