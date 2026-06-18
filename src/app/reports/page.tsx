import { AdminShell } from "@/components/admin-shell";
import { PageHeader } from "@/components/page-header";
import { SummaryCardGrid } from "@/components/summary-card-grid";
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

const statusVariant = {
  Ready: "default",
  Generating: "secondary",
  "Needs Review": "outline",
  Failed: "destructive",
} as const;

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

        <Card>
          <CardHeader>
            <CardTitle>Report library</CardTitle>
            <CardDescription>
              A static overview of reporting outputs and generation status.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              aria-label="Search reports"
              placeholder="Search by report name, category, or owner"
            />

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Report Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Owner</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Generated</TableHead>
                  <TableHead>Refresh Cadence</TableHead>
                  <TableHead>Format</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reports.map((report) => (
                  <TableRow key={report.id}>
                    <TableCell className="font-medium">{report.id}</TableCell>
                    <TableCell>{report.name}</TableCell>
                    <TableCell>{report.category}</TableCell>
                    <TableCell>{report.owner}</TableCell>
                    <TableCell>
                      <Badge variant={statusVariant[report.status]}>
                        {report.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{report.lastGenerated}</TableCell>
                    <TableCell>{report.refreshCadence}</TableCell>
                    <TableCell>{report.format}</TableCell>
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
