import { AdminShell } from "@/components/admin-shell";
import { PageHeader } from "@/components/page-header";
import { SummaryCardGrid } from "@/components/summary-card-grid";
import { StatusBadge } from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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

        <Card>
          <CardHeader>
            <CardTitle>Customer directory</CardTitle>
            <CardDescription>
              A static overview of customer profiles and operational context.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              aria-label="Search customers"
              placeholder="Search by name, email, or customer ID"
            />

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Open Work Orders</TableHead>
                  <TableHead>Total Spend</TableHead>
                  <TableHead>Last Activity</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {customers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell className="font-medium">
                      {customer.id}
                    </TableCell>
                    <TableCell>{customer.name}</TableCell>
                    <TableCell>{customer.type}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>
                      <StatusBadge status={customer.status} />
                    </TableCell>
                    <TableCell>{customer.openWorkOrders}</TableCell>
                    <TableCell>{customer.totalSpend}</TableCell>
                    <TableCell>{customer.lastActivity}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AdminShell>
  );
}
