# B2B SaaS Admin Page Patterns

OpsKit Scaffold documents common B2B SaaS admin UI patterns that can be reused across modules. These patterns are intended for design exploration, componentization practice, and AI-assisted admin demo development.

## List page

### When to use it

Use a list page when users need to scan, search, compare, and act on many operational records.

### Typical UI structure

- Page header with title, description, and primary action.
- Summary cards for key metrics.
- Search input and optional filters.
- Data table with status badges and row actions.
- Optional detail drawer triggered from table rows.

### Notes for B2B SaaS admin design

Prioritize density, clarity, and predictable scanning. Avoid marketing-style hero layouts. Make status, ownership, timestamps, and action entry points easy to compare.

## Detail drawer

### When to use it

Use a detail drawer when users need to inspect a record without leaving the list context.

### Typical UI structure

- Drawer title with record identifier or name.
- Short description or metadata line.
- Summary section.
- Context or description section.
- Activity or timeline section.
- Recommended next action or available actions.

### Notes for B2B SaaS admin design

Keep the drawer focused on decision support. Avoid turning it into a full edit page unless the workflow truly requires it.

## Dashboard overview

### When to use it

Use a dashboard overview when users need a fast read on operational health across a workspace or module.

### Typical UI structure

- Page header.
- Metric summary cards.
- Recent activity or priority queues.
- Charts or tables for operational signals.
- Links into deeper list pages.

### Notes for B2B SaaS admin design

Make the dashboard actionable. Metrics should connect to operational decisions, not just decoration.

## Settings page

### When to use it

Use a settings page for workspace configuration, roles, permissions, notifications, billing controls, and system defaults.

### Typical UI structure

- Page header with a save action.
- Workspace profile card.
- Configuration tables or grouped settings.
- Status indicators for system controls.
- Loading or sync state examples for async configuration.

### Notes for B2B SaaS admin design

Settings should feel calm and structured. Group related controls clearly and avoid mixing operational queues with configuration.

## Reports page

### When to use it

Use a reports page when users need to review generated outputs, scheduled reports, or recurring operational summaries.

### Typical UI structure

- Page header with create action.
- Summary cards for report status.
- Searchable report table.
- Format and refresh cadence indicators.
- Empty state for custom templates or missing report groups.

### Notes for B2B SaaS admin design

Reports should emphasize freshness, owner, status, and format. Make failed or review-needed reports easy to spot.

## Empty state

### When to use it

Use an empty state when a page, section, or table has no data yet or no matching results.

### Typical UI structure

- Short title.
- Clear explanation.
- Optional action button.
- Minimal visual treatment inside a Card or section.

### Notes for B2B SaaS admin design

Explain what is missing and what the user can do next. Avoid playful copy that does not help the workflow.

## Loading state

### When to use it

Use a loading state when data, permissions, settings, or async operations are being prepared.

### Typical UI structure

- Short title.
- Description of what is loading.
- Skeleton blocks or reserved space.
- No fake interaction logic.

### Notes for B2B SaaS admin design

Reserve enough space to reduce layout shift. Loading states should communicate progress without overpromising completion.

## Responsive admin layout

### When to use it

Use a responsive admin layout whenever an admin screen must work across desktop and mobile viewports.

### Typical UI structure

- Desktop: persistent sidebar and top header.
- Mobile: top header with menu button.
- Mobile navigation inside a Sheet drawer.
- Tables with horizontal scrolling when columns are wide.

### Notes for B2B SaaS admin design

Desktop remains the primary admin surface, but mobile should support quick review and navigation. Do not force dense tables into unreadable narrow columns.
