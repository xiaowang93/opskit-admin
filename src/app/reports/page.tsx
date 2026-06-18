import { AdminShell } from "@/components/admin-shell";
import { DataTableCard } from "@/components/data-table-card";
import { PageHeader } from "@/components/page-header";
import { SummaryCardGrid } from "@/components/summary-card-grid";
import { StatusBadge } from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { reports } from "@/data/reports";

const summaryCards = [
  {
    label: "Ready Reports",
    value: reports.filter((report) => report.status === "Ready").length,
    description: "Available for review",
  },
  {
    label: "Generating",
    value: reports.filter((report) => report.status === "Generating").length,
    description: "Currently processing",
  },
  {
    label: "Needs Review",
    value: reports.filter((report) => report.status === "Needs Review").length,
    description: "Awaiting approval",
  },
  {
    label: "Failed",
    value: reports.filter((report) => report.status === "Failed").length,
    description: "Need rerun or support",
  },
];

export default function ReportsPage() {
  return (
    <AdminShell activeItem="Reports">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <PageHeader
          title="Reports"
          description="Review operational, customer, asset, and billing reporting outputs."
          actions={<Button>Create Report</Button>}
        />

        <SummaryCardGrid items={summaryCards} />

        <DataTableCard
          title="Report library"
          description="A static overview of reporting outputs and generation status."
          searchPlaceholder="Search by report name, category, or owner"
          columns={[
            "ID",
            "Report Name",
            "Category",
            "Owner",
            "Status",
            "Last Generated",
            "Refresh Cadence",
            "Format",
          ]}
          rows={reports.map((report) => [
            report.id,
            report.name,
            report.category,
            report.owner,
            <StatusBadge key={`${report.id}-status`} status={report.status} />,
            report.lastGenerated,
            report.refreshCadence,
            report.format,
          ])}
        />
      </div>
    </AdminShell>
  );
}
