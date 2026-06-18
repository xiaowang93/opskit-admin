import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const statusSummary = [
  {
    status: "Open",
    count: 2,
    description: "Waiting for assignment",
  },
  {
    status: "Assigned",
    count: 1,
    description: "Assigned to an operator",
  },
  {
    status: "In Progress",
    count: 1,
    description: "Currently being worked on",
  },
  {
    status: "Review",
    count: 1,
    description: "Waiting for final review",
  },
];

export function WorkOrderSummaryCards() {
  return (
    <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {statusSummary.map((item) => (
        <Card key={item.status} size="sm">
          <CardHeader className="gap-2">
            <div className="flex items-center justify-between gap-3">
              <CardTitle>{item.status}</CardTitle>
              <span className="text-2xl font-semibold tabular-nums">
                {item.count}
              </span>
            </div>
            <CardDescription>{item.description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </section>
  );
}
