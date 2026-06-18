import { Badge } from "@/components/ui/badge";

const statusVariant: Record<
  string,
  "default" | "secondary" | "destructive" | "outline"
> = {
  Active: "default",
  Paid: "default",
  Ready: "default",
  Open: "outline",
  Assigned: "secondary",
  "In Progress": "secondary",
  Review: "secondary",
  Completed: "outline",
  "At Risk": "secondary",
  Inactive: "outline",
  "Maintenance Due": "secondary",
  Offline: "outline",
  Due: "secondary",
  Overdue: "destructive",
  Failed: "destructive",
  Generating: "secondary",
  "Needs Review": "outline",
};

type StatusBadgeProps = {
  status: string;
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return <Badge variant={statusVariant[status] ?? "outline"}>{status}</Badge>;
}
