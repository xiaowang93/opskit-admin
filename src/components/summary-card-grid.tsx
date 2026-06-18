import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type SummaryCardItem = {
  label: string;
  value: string | number;
  description: string;
};

type SummaryCardGridProps = {
  items: SummaryCardItem[];
};

export function SummaryCardGrid({ items }: SummaryCardGridProps) {
  const gridClassName =
    items.length === 3
      ? "grid gap-3 md:grid-cols-3"
      : "grid gap-3 sm:grid-cols-2 lg:grid-cols-4";

  return (
    <section className={gridClassName}>
      {items.map((item) => (
        <Card key={item.label} size="sm">
          <CardHeader className="gap-2">
            <div className="flex items-center justify-between gap-3">
              <CardTitle>{item.label}</CardTitle>
              <span className="text-2xl font-semibold tabular-nums">
                {item.value}
              </span>
            </div>
            <CardDescription>{item.description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </section>
  );
}
