# Module Brief Template

OpsKit Scaffold is a B2B SaaS Admin UI Scaffold and AI-assisted admin demo kit. Use this template before asking Codex to generate a new admin module.

## How to use this template

- Copy this template before creating a new module.
- Fill in the module purpose, user role, page pattern, list fields, status model, and drawer structure.
- Keep the first version small and reviewable.
- Use this brief as the source material for a scoped Codex prompt.

## 1. Module overview

This section clarifies why the module exists.

- Module name:
- Route:
- Business object:
- Primary user role:
- Page pattern:
- Main user goal:
- Primary action:
- Secondary actions:

## 2. List page structure

- Page title:
- Page description:
- Primary action label:
- Search placeholder:
- Filter fields:
- Table columns:
- Row actions:

Start with only the fields needed for scanning, comparison, and action.

## 3. Summary cards

- Card 1 title:
- Card 1 value:
- Card 1 helper text:

- Card 2 title:
- Card 2 value:
- Card 2 helper text:

- Card 3 title:
- Card 3 value:
- Card 3 helper text:

- Card 4 title:
- Card 4 value:
- Card 4 helper text:

Summary cards should explain the module state, not just decorate the page.

## 4. Status model

- Status field name:
- Status values:
- Default status:
- Statuses that need attention:
- Statuses that allow primary action:
- Statuses that should appear as warnings:

Status should influence badge display, filtering, row priority, and drawer actions.

## 5. Detail drawer structure

- Drawer title format:
- Header metadata:
- Summary section fields:
- Context section fields:
- Activity or timeline fields:
- Recommendation or next action:
- Drawer actions:

The drawer should support quick review and decision-making without leaving the list page.

## 6. Empty and loading states

- Empty state title:
- Empty state description:
- Empty state action:
- Loading state title:
- Loading state description:

Use shared EmptyState and LoadingState patterns when possible.

## 7. Expected files

- New route file:
- New data file:
- New drawer component:
- Existing files allowed to change:
- Files that must not change:

The expected file list should be clear before asking Codex to generate code.

## 8. Validation checklist

- [ ] Module purpose is clear
- [ ] User role is clear
- [ ] Page pattern is selected
- [ ] List fields are defined
- [ ] Summary cards are defined
- [ ] Status model is defined
- [ ] Detail drawer structure is defined
- [ ] Expected files are listed
- [ ] Codex prompt can be scoped to one small task
- [ ] `npm run build` will be run after changes
- [ ] `git status` will be reviewed before commit
