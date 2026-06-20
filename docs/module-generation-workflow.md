# Module Generation Workflow

OpsKit Scaffold is a B2B SaaS Admin UI Scaffold and AI-assisted admin demo kit. It is not a production-ready frontend framework.

This workflow helps UI/UX designers and product builders define a module before asking Codex to generate code. The goal is to keep AI coding tasks small, reviewable, and easy to validate while building runnable admin demos.

## Why This Workflow Exists

OpsKit Scaffold is a practical scaffold for capturing reusable admin page patterns. It helps teams explore common B2B SaaS workflows such as lists, detail drawers, settings, reports, empty states, loading states, and responsive admin layouts.

This workflow helps by:

- Keeping Codex tasks smaller.
- Making changes easier to inspect.
- Reducing unexpected file changes.
- Making validation clearer.
- Encouraging reuse of existing shared patterns before creating new UI.

Every new module should reuse existing OpsKit shared patterns first.

## Step 1: Define the Module Purpose

Before generating a module, answer:

- What business object does this module manage?
- Who will use this page?
- What decision or action should the page support?
- Is it a list page, dashboard, settings page, reports page, or another admin pattern?

The clearer the module purpose, the safer and more useful the Codex task will be.

## Step 2: Define the List Fields

Common list fields include:

- Primary identifier
- Main name or title
- Status
- Owner or assignee
- Date or timestamp
- Key operational metric
- Row action

Do not start with too many fields. First make the list scannable, comparable, and actionable.

## Step 3: Define Summary Cards

Summary cards can show a module-level overview, such as:

- Total records
- Active or open items
- Items needing review
- Recent changes
- Risk or exception count

Summary cards should help users quickly understand the current module state. They should not be decorative filler.

## Step 4: Define the Status Model

Each module should define its status field before code generation.

Common statuses include:

- Draft
- Active
- Pending review
- In progress
- Completed
- Failed
- Archived

Status affects badge display, filtering, row priority, and detail drawer actions.

## Step 5: Define the Detail Drawer Structure

A detail drawer is useful when users need to inspect a record without leaving the list page.

Recommended structure:

- Header
- Summary section
- Context section
- Activity or timeline section
- Recommendation or next action section

The drawer should support decision-making. Do not start by turning it into a complex edit page.

## Step 6: Prepare the Codex Prompt

A safe Codex prompt should include:

- Goal
- Scope
- Constraints
- Expected files
- Validation steps

Ask Codex to complete one small goal at a time. Do not ask it to generate multiple complex modules in one step.

## Step 7: Generate and Review

After Codex finishes, review:

- Did it modify only the expected files?
- Did it reuse existing shared patterns?
- Is the page structure clear?
- Are the table fields and statuses easy to understand?
- Does the detail drawer support the intended decision?

If the change is too large or unclear, stop and narrow the next prompt.

## Step 8: Validate Locally

Run:

```bash
npm run build
git status
```

If the build failed, do not commit.

If `git status` shows unexpected files, do not commit. First inspect what Codex changed.

## Step 9: Commit Safely

Commit only when:

- Build passed.
- Browser check passed.
- `git status` only shows expected files.
- The change is small and understandable.

Suggested commit message:

```bash
git commit -m "docs: add module generation workflow"
```

## Recommended Module Creation Checklist

- [ ] Module purpose is clear
- [ ] User role is clear
- [ ] Page pattern is selected
- [ ] List fields are defined
- [ ] Summary cards are defined
- [ ] Status model is defined
- [ ] Detail drawer structure is defined
- [ ] Codex prompt is scoped
- [ ] `npm run build` passed
- [ ] `git status` reviewed
- [ ] Changes committed
