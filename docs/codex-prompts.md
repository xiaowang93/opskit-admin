# Codex Prompt Templates

These templates help designers and product builders use Codex safely when extending OpsKit Scaffold. Keep each task small, scoped, and easy to review.

## 1. Generate a new list module

### Goal

Create a first version of a new B2B SaaS admin list module using existing OpsKit shared patterns.

### Scope

Add one new route, one mock data file, and only the minimal navigation update needed to reach the page.

### Constraints

- Do not modify unrelated pages.
- Do not modify package.json or package-lock.json.
- Do not install dependencies.
- Use existing shared components first: AdminShell, PageHeader, SummaryCardGrid, DataTableCard, and StatusBadge.
- Keep the page static and do not connect a backend.
- Avoid broad refactors.

### Expected files

- `src/app/[module]/page.tsx`
- `src/data/[module].ts`
- `src/components/admin-shell.tsx` only if navigation needs a new link.

### Validation steps

- Run `npm run build`.
- Run `git status`.
- Confirm the new page route loads.
- Confirm only expected files changed.

## 2. Generate a detail drawer

### Goal

Add a right-side detail drawer for an existing list module.

### Scope

Add one detail drawer component and update the target list page to include an Actions column with a View Details button.

### Constraints

- Do not modify unrelated modules.
- Do not modify package.json or package-lock.json.
- Do not install dependencies.
- Use existing Sheet, Button, StatusBadge, and DetailSection patterns.
- Keep data static.
- Do not add route navigation for detail views.
- Preserve the existing table and page layout as much as possible.

### Expected files

- `src/components/[module]-detail-drawer.tsx`
- The target `src/app/[module]/page.tsx`
- Existing data file only if a missing exported type is required.

### Validation steps

- Run `npm run build`.
- Run `git status`.
- Confirm View Details opens the drawer.
- Confirm drawer close behavior still works.
- Confirm only expected files changed.

## 3. Add empty and loading states

### Goal

Add static empty or loading state examples to an existing module using shared state components.

### Scope

Add a small page section that demonstrates EmptyState or LoadingState without adding real async logic.

### Constraints

- Do not modify unrelated pages.
- Do not modify package.json or package-lock.json.
- Do not install dependencies.
- Use existing EmptyState and LoadingState components.
- Keep the state example static.
- Do not add backend calls, timers, or fake data fetching.

### Expected files

- The target `src/app/[module]/page.tsx`
- `src/components/empty-state.tsx` or `src/components/loading-state.tsx` only if the shared component does not already exist.

### Validation steps

- Run `npm run build`.
- Run `git status`.
- Confirm the state section appears in the intended module.
- Confirm only expected files changed.
