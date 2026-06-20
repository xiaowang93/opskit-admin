# OpsKit Scaffold Component Map

OpsKit Scaffold is a B2B SaaS Admin UI Scaffold and AI-assisted admin demo kit. Its components are organized in layers so teams can move from base UI primitives to reusable admin page patterns, then to module pages and future industry-specific templates.

## Component Layers

### shadcn/ui base components

These are low-level UI primitives used as the visual foundation of the scaffold.

Examples include Button, Card, Input, Table, Badge, Sheet, Select, Label, Separator, and Textarea. They provide consistent styling and interaction primitives, but they do not define admin-specific product patterns by themselves.

### OpsKit shared patterns

OpsKit shared patterns are reusable admin page pattern components built on top of base UI components. They capture common B2B SaaS admin structures so new modules can be created with less repeated layout work.

Current shared patterns:

- AdminShell: Shared application shell with desktop sidebar, top header, and mobile Sheet navigation.
- PageHeader: Shared page title, description, and action area.
- SummaryCardGrid: Shared metric card grid for module overview summaries.
- DataTableCard: Shared search and table card pattern with responsive horizontal scrolling.
- StatusBadge: Shared status display for consistent status badges across modules.
- DetailSection: Shared section wrapper for detail drawers with title, optional description, spacing, and layout.
- EmptyState: Shared empty state component for blank or unavailable data scenarios.
- LoadingState: Shared loading state component for async or pending data scenarios.

### Page templates

Page templates combine shared patterns into complete admin module screens.

Current examples:

- Work Orders list page: List, search, status summary, filter drawer, table, create drawer, and detail drawer.
- Customers list page: Customer list table with customer detail drawer.
- Assets list page: Asset list table with asset detail drawer.
- Billing list page: Invoice list table with billing detail drawer.
- Reports page: Report list table plus an empty state example.
- Settings page: Workspace profile, permission rules, notification rules, and loading state example.

Current detail drawer components:

- Work Order detail drawer: Shows work order summary, description, timeline, recommendation, and available actions.
- Customer detail drawer: Shows customer profile, operational context, recent activity, and recommendation.
- Asset detail drawer: Shows asset summary, maintenance context, recent activity, and recommendation.
- Billing detail drawer: Shows invoice summary, payment context, payment activity, and recommendation.

### Future industry templates

Future industry templates can specialize the generic B2B SaaS patterns for specific domains without changing the base scaffold.

Examples:

- Field operations admin
- Customer support operations
- Subscription billing operations
- Asset maintenance operations
- Compliance and audit operations

These templates should reuse OpsKit shared patterns first, then add domain-specific data, labels, and workflows where needed.
