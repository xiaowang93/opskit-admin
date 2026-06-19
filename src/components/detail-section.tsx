import type { ReactNode } from "react";

type DetailSectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function DetailSection({
  title,
  description,
  children,
}: DetailSectionProps) {
  return (
    <section className="grid gap-3 px-4 last:pb-4">
      <div className="grid gap-1">
        <h2 className="text-sm font-medium">{title}</h2>
        {description ? (
          <p className="text-sm text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
