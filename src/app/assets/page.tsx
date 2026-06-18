import { AdminShell } from "@/components/admin-shell";
import { DataTableCard } from "@/components/data-table-card";
import { PageHeader } from "@/components/page-header";
import { SummaryCardGrid } from "@/components/summary-card-grid";
import { StatusBadge } from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { assets } from "@/data/assets";

const summaryCards = [
  {
    label: "Total Assets",
    value: assets.length,
    description: "Tracked operational assets",
  },
  {
    label: "Maintenance Due",
    value: assets.filter((asset) => asset.status === "Maintenance Due").length,
    description: "Require scheduled attention",
  },
  {
    label: "Offline",
    value: assets.filter((asset) => asset.status === "Offline").length,
    description: "Unavailable for operations",
  },
];

export default function AssetsPage() {
  return (
    <AdminShell activeItem="Assets">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <PageHeader
          title="Assets"
          description="Track operational assets, ownership, and maintenance readiness."
          actions={<Button>Add Asset</Button>}
        />

        <SummaryCardGrid items={summaryCards} />

        <DataTableCard
          title="Asset directory"
          description="A static overview of operational assets and maintenance context."
          searchPlaceholder="Search by asset name, ID, owner, or location"
          columns={[
            "ID",
            "Name",
            "Category",
            "Owner",
            "Status",
            "Location",
            "Open Work Orders",
            "Last Inspected",
          ]}
          rows={assets.map((asset) => [
            asset.id,
            asset.name,
            asset.category,
            asset.owner,
            <StatusBadge key={`${asset.id}-status`} status={asset.status} />,
            asset.location,
            asset.openWorkOrders,
            asset.lastInspected,
          ])}
        />
      </div>
    </AdminShell>
  );
}
