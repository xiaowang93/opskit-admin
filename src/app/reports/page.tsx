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
import { reports } from "@/data/reports";

const summaryCards = [
  {
    title: "Ready Reports",
    value: reports.filter((report) => report.status === "Ready").length,
    description: "Available for review",
  },
  {
    title: "Generating",
    value: reports.filter((report) => report.status === "Generating").length,
    description: "Currently processing",
  },
  {
    title: "Needs Review",
    value: reports.filter((report) => report.status === "Needs Review").length,
    description: "Awaiting approval",
  },
  {
    title: "Failed",
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
        <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-semibold tracking-tight">Reports</h1>
            <p className="text-sm text-muted-foreground">
              Review operational, customer, asset, and billing reporting
              outputs.
            </p>
          </div>
          <Button>Create Report</Button>
        </header>

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
