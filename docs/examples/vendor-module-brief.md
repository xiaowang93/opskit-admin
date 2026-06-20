# Vendor Module Brief Example

This example shows how to fill out the Module Brief Template for OpsKit Scaffold, a B2B SaaS Admin UI Scaffold and AI-assisted admin demo kit. This brief can be used later as input for Codex to generate a Vendors module, but this step only adds documentation.

## Module overview

- Module name: Vendors
- Route: /vendors
- Business object: External service provider or supplier
- Primary user role: Operations manager
- Page pattern: List page with detail drawer
- Main user goal: Review vendor status, service coverage, and operational readiness
- Primary action: Add vendor
- Secondary actions: View details, filter by status, review vendor risk

## List page structure

- Page title: Vendors
- Page description: Review external service providers, service coverage, and operational readiness.
- Primary action label: Add Vendor
- Search placeholder: Search by vendor ID, name, service type, or coverage area
- Filter fields: Status, service type, coverage area
- Table columns: Vendor ID, Vendor name, Service type, Status, Coverage area, Open jobs, Last updated, Actions
- Row actions: View Details

## Summary cards

- Card 1 title: Total vendors
- Card 1 value: 24
- Card 1 helper text: External providers in the workspace

- Card 2 title: Active vendors
- Card 2 value: 18
- Card 2 helper text: Ready for operational assignment

- Card 3 title: Vendors needing review
- Card 3 value: 4
- Card 3 helper text: Require status or risk review

- Card 4 title: Open assigned jobs
- Card 4 value: 31
- Card 4 helper text: Work currently routed to vendors

## Status model

- Status field name: Vendor status
- Status values:
  - Active
  - Pending review
  - Inactive
  - At risk
- Default status: Pending review
- Statuses that need attention: Pending review, At risk
- Statuses that allow primary action: Active
- Statuses that should appear as warnings: At risk

Status should affect badge display, filtering, row priority, and detail drawer actions. For example, At risk vendors should be visually easy to spot, Pending review vendors should be filterable, and Active vendors can support assignment-related actions.

## Detail drawer structure

- Drawer title format: Vendor name
- Header metadata: Vendor ID, service type, coverage area
- Summary section fields: Status, service type, coverage area, open jobs, last updated, primary contact
- Context section fields: Service coverage notes, readiness notes, risk context
- Activity or timeline fields: Vendor added, service coverage reviewed, latest assignment update
- Recommendation or next action: Explain whether the vendor is ready for assignment, needs review, or should be paused
- Drawer actions: Assign job, Request review, Mark inactive

The drawer should help the operations manager quickly decide whether this vendor can continue receiving assigned work.

## Empty and loading states

- Empty state title: No vendors yet
- Empty state description: Add external providers so operations teams can assign work with clear coverage and readiness context.
- Empty state action: Add Vendor
- Loading state title: Loading vendor readiness
- Loading state description: Vendor status, coverage areas, and assigned jobs are being prepared.

## Expected files for future code generation

If this module is generated later, it may involve:

- `src/app/vendors/page.tsx`
- `src/data/vendors.ts`
- `src/components/vendor-detail-drawer.tsx`
- `src/components/admin-shell.tsx` only if navigation needs a new link

Current step: documentation only. Do not generate these code files now.

## Validation checklist

- [ ] Brief is complete enough for a scoped Codex prompt
- [ ] Module purpose is clear
- [ ] List fields are defined
- [ ] Summary cards are defined
- [ ] Status model is defined
- [ ] Detail drawer structure is defined
- [ ] Expected future files are listed
- [ ] No source code was changed in this documentation step
