import { StatusBadge } from "@/components/status-badge";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import type { Customer } from "@/data/customers";

const recommendedNextAction = {
  Active: "Maintain regular engagement and monitor open work orders.",
  "At Risk": "Review open issues and follow up with the customer.",
  Inactive: "Check recent activity and consider reactivation outreach.",
} as const;

type CustomerDetailDrawerProps = {
  customer: Customer | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function CustomerDetailDrawer({
  customer,
  open,
  onOpenChange,
}: CustomerDetailDrawerProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="overflow-y-auto sm:max-w-md">
        {customer ? (
          <>
            <SheetHeader>
              <SheetTitle>{customer.name}</SheetTitle>
              <SheetDescription>
                {customer.id} · {customer.email}
              </SheetDescription>
            </SheetHeader>

            <Separator />

            <section className="grid gap-3 px-4">
              <h2 className="text-sm font-medium">Customer Summary</h2>
              <dl className="grid gap-3 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-muted-foreground">Status</dt>
                  <dd>
                    <StatusBadge status={customer.status} />
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-muted-foreground">Type</dt>
                  <dd>
                    <Badge variant="secondary">{customer.type}</Badge>
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Email</dt>
                  <dd className="text-right">{customer.email}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Open Work Orders</dt>
                  <dd className="text-right">{customer.openWorkOrders}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Total Spend</dt>
                  <dd className="text-right">{customer.totalSpend}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Last Activity</dt>
                  <dd className="text-right">{customer.lastActivity}</dd>
                </div>
              </dl>
            </section>

            <Separator />

            <section className="grid gap-2 px-4">
              <h2 className="text-sm font-medium">Operational Context</h2>
              <p className="text-sm text-muted-foreground">
                This customer profile summarizes current account activity,
                operational workload, and support context for account teams.
              </p>
            </section>

            <Separator />

            <section className="grid gap-3 px-4">
              <h2 className="text-sm font-medium">Recent Activity</h2>
              <ol className="grid gap-3 text-sm">
                <li className="grid gap-1">
                  <span className="font-medium">Profile updated</span>
                  <span className="text-muted-foreground">
                    Customer profile details were reviewed.
                  </span>
                </li>
                <li className="grid gap-1">
                  <span className="font-medium">Work order reviewed</span>
                  <span className="text-muted-foreground">
                    Open operational work orders were checked.
                  </span>
                </li>
                <li className="grid gap-1">
                  <span className="font-medium">Billing status checked</span>
                  <span className="text-muted-foreground">
                    Billing readiness and account standing were verified.
                  </span>
                </li>
              </ol>
            </section>

            <Separator />

            <section className="grid gap-2 px-4 pb-4">
              <h2 className="text-sm font-medium">Recommended Next Action</h2>
              <p className="text-sm text-muted-foreground">
                {recommendedNextAction[customer.status]}
              </p>
            </section>
          </>
        ) : null}
      </SheetContent>
    </Sheet>
  );
}
