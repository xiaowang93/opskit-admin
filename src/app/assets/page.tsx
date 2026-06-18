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
                      <StatusBadge status={asset.status} />
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
