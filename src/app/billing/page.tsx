import { AdminShell } from "@/components/admin-shell";
import { PageHeader } from "@/components/page-header";
import { SummaryCardGrid } from "@/components/summary-card-grid";
import { StatusBadge } from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { billingRecords } from "@/data/billing";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const summaryCards = [
  {
    label: "Total Revenue",
    value: currencyFormatter.format(
      billingRecords.reduce((total, record) => total + record.amount, 0)
    ),
    description: "Across current invoices",
  },
  {
    label: "Due Invoices",
    value: billingRecords.filter((record) => record.status === "Due").length,
    description: "Awaiting payment",
  },
  {
    label: "Overdue",
    value: billingRecords.filter((record) => record.status === "Overdue")
      .length,
    description: "Past due date",
  },
  {
    label: "Failed Payments",
    value: billingRecords.filter((record) => record.status === "Failed").length,
    description: "Need payment recovery",
  },
];

export default function BillingPage() {
  return (
    <AdminShell activeItem="Billing">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <PageHeader
          title="Billing"
          description="Monitor invoices, payment status, and recurring revenue signals."
          actions={<Button>Create Invoice</Button>}
        />

        <SummaryCardGrid items={summaryCards} />

        <Card>
          <CardHeader>
            <CardTitle>Invoice queue</CardTitle>
            <CardDescription>
              A static overview of invoices and payment readiness.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              aria-label="Search billing records"
              placeholder="Search by invoice ID, customer, or plan"
            />

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Plan</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Payment Method</TableHead>
                  <TableHead>Last Updated</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {billingRecords.map((record) => (
                  <TableRow key={record.invoiceId}>
                    <TableCell className="font-medium">
                      {record.invoiceId}
                    </TableCell>
                    <TableCell>{record.customer}</TableCell>
                    <TableCell>{record.plan}</TableCell>
                    <TableCell>
                      <StatusBadge status={record.status} />
                    </TableCell>
                    <TableCell>{currencyFormatter.format(record.amount)}</TableCell>
                    <TableCell>{record.dueDate}</TableCell>
                    <TableCell>{record.paymentMethod}</TableCell>
                    <TableCell>{record.lastUpdated}</TableCell>
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
