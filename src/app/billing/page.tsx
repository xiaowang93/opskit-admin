import { AdminShell } from "@/components/admin-shell";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
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
    title: "Total Revenue",
    value: currencyFormatter.format(
      billingRecords.reduce((total, record) => total + record.amount, 0)
    ),
    description: "Across current invoices",
  },
  {
    title: "Due Invoices",
    value: billingRecords.filter((record) => record.status === "Due").length,
    description: "Awaiting payment",
  },
  {
    title: "Overdue",
    value: billingRecords.filter((record) => record.status === "Overdue")
      .length,
    description: "Past due date",
  },
  {
    title: "Failed Payments",
    value: billingRecords.filter((record) => record.status === "Failed").length,
    description: "Need payment recovery",
  },
];

const statusVariant = {
  Paid: "default",
  Due: "secondary",
  Overdue: "destructive",
  Failed: "outline",
} as const;

export default function BillingPage() {
  return (
    <AdminShell activeItem="Billing">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <PageHeader
          title="Billing"
          description="Monitor invoices, payment status, and recurring revenue signals."
          actions={<Button>Create Invoice</Button>}
        />

        <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {summaryCards.map((item) => (
            <Card key={item.title} size="sm">
              <CardHeader className="gap-2">
                <div className="flex items-center justify-between gap-3">
                  <CardTitle>{item.title}</CardTitle>
                  <span className="text-2xl font-semibold tabular-nums">
                    {item.value}
                  </span>
                </div>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </section>

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
                      <Badge variant={statusVariant[record.status]}>
                        {record.status}
                      </Badge>
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
