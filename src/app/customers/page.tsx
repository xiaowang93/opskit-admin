import { AdminShell } from "@/components/admin-shell";
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
import { customers } from "@/data/customers";

const summaryCards = [
  {
    title: "Active Customers",
    value: customers.filter((customer) => customer.status === "Active").length,
    description: "Currently engaged accounts",
  },
  {
    title: "At Risk",
    value: customers.filter((customer) => customer.status === "At Risk").length,
    description: "Need operational attention",
  },
  {
    title: "Open Work Orders",
    value: customers.reduce(
      (total, customer) => total + customer.openWorkOrders,
      0
    ),
    description: "Across all customers",
  },
];

const statusVariant = {
  Active: "default",
  "At Risk": "secondary",
  Inactive: "outline",
} as const;

export default function CustomersPage() {
  return (
    <AdminShell activeItem="Customers">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-semibold tracking-tight">
              Customers
            </h1>
            <p className="text-sm text-muted-foreground">
              Manage customer profiles, activity, and operational context.
            </p>
          </div>
          <Button>Add Customer</Button>
        </header>

        <section className="grid gap-3 md:grid-cols-3">
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
                      <Badge variant={statusVariant[customer.status]}>
                        {customer.status}
                      </Badge>
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
