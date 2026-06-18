import { AdminShell } from "@/components/admin-shell";
import { DataTableCard } from "@/components/data-table-card";
import { PageHeader } from "@/components/page-header";
import { SummaryCardGrid } from "@/components/summary-card-grid";
import { StatusBadge } from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { customers } from "@/data/customers";

const summaryCards = [
  {
    label: "Active Customers",
    value: customers.filter((customer) => customer.status === "Active").length,
    description: "Currently engaged accounts",
  },
  {
    label: "At Risk",
    value: customers.filter((customer) => customer.status === "At Risk").length,
    description: "Need operational attention",
  },
  {
    label: "Open Work Orders",
    value: customers.reduce(
      (total, customer) => total + customer.openWorkOrders,
      0
    ),
    description: "Across all customers",
  },
];

export default function CustomersPage() {
  return (
    <AdminShell activeItem="Customers">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <PageHeader
          title="Customers"
          description="Manage customer profiles, activity, and operational context."
          actions={<Button>Add Customer</Button>}
        />

        <SummaryCardGrid items={summaryCards} />

        <DataTableCard
          title="Customer directory"
          description="A static overview of customer profiles and operational context."
          searchPlaceholder="Search by name, email, or customer ID"
          columns={[
            "ID",
            "Name",
            "Type",
            "Email",
            "Status",
            "Open Work Orders",
            "Total Spend",
            "Last Activity",
          ]}
          rows={customers.map((customer) => [
            customer.id,
            customer.name,
            customer.type,
            customer.email,
            <StatusBadge
              key={`${customer.id}-status`}
              status={customer.status}
            />,
            customer.openWorkOrders,
            customer.totalSpend,
            customer.lastActivity,
          ])}
        />
      </div>
    </AdminShell>
  );
}
