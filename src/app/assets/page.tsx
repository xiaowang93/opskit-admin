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
import { assets } from "@/data/assets";

const summaryCards = [
  {
    title: "Total Assets",
    value: assets.length,
    description: "Tracked operational assets",
  },
  {
    title: "Maintenance Due",
    value: assets.filter((asset) => asset.status === "Maintenance Due").length,
    description: "Require scheduled attention",
  },
  {
    title: "Offline",
    value: assets.filter((asset) => asset.status === "Offline").length,
    description: "Unavailable for operations",
  },
];

const statusVariant = {
  Active: "default",
  "Maintenance Due": "secondary",
  Offline: "outline",
} as const;

export default function AssetsPage() {
  return (
    <AdminShell activeItem="Assets">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-semibold tracking-tight">Assets</h1>
            <p className="text-sm text-muted-foreground">
              Track operational assets, ownership, and maintenance readiness.
            </p>
          </div>
          <Button>Add Asset</Button>
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
            <CardTitle>Asset directory</CardTitle>
            <CardDescription>
              A static overview of operational assets and maintenance context.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              aria-label="Search assets"
              placeholder="Search by asset name, ID, owner, or location"
            />

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Owner</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Open Work Orders</TableHead>
                  <TableHead>Last Inspected</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {assets.map((asset) => (
                  <TableRow key={asset.id}>
                    <TableCell className="font-medium">{asset.id}</TableCell>
                    <TableCell>{asset.name}</TableCell>
                    <TableCell>{asset.category}</TableCell>
                    <TableCell>{asset.owner}</TableCell>
                    <TableCell>
                      <Badge variant={statusVariant[asset.status]}>
                        {asset.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{asset.location}</TableCell>
                    <TableCell>{asset.openWorkOrders}</TableCell>
                    <TableCell>{asset.lastInspected}</TableCell>
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
