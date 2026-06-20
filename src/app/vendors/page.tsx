import { AdminShell } from "@/components/admin-shell";
import { DataTableCard } from "@/components/data-table-card";
import { PageHeader } from "@/components/page-header";
import { StatusBadge } from "@/components/status-badge";
import { SummaryCardGrid } from "@/components/summary-card-grid";
import { Button } from "@/components/ui/button";
import { vendors, vendorSummaryCards } from "@/data/vendors";

export default function VendorsPage() {
  return (
    <AdminShell activeItem="Vendors">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <PageHeader
          title="Vendors"
          description="Review external service providers, service coverage, and operational readiness."
          actions={<Button>Add Vendor</Button>}
        />

        <SummaryCardGrid items={vendorSummaryCards} />

        <DataTableCard
          title="Vendor directory"
          description="A static overview of supplier readiness and operational coverage."
          searchPlaceholder="Search vendors..."
          columns={[
            "Vendor ID",
            "Vendor name",
            "Service type",
            "Status",
            "Coverage area",
            "Open jobs",
            "Last updated",
            "Actions",
          ]}
          rows={vendors.map((vendor) => [
            vendor.id,
            vendor.name,
            vendor.serviceType,
            <StatusBadge key={`${vendor.id}-status`} status={vendor.status} />,
            vendor.coverageArea,
            vendor.openJobs,
            vendor.lastUpdated,
            <Button
              key={`${vendor.id}-action`}
              variant="outline"
              size="sm"
              disabled
            >
              View Details
            </Button>,
          ])}
        />
      </div>
    </AdminShell>
  );
}
