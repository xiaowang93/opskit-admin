import { DetailSection } from "@/components/detail-section";
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
import type { BillingRecord } from "@/data/billing";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const recommendedNextAction = {
  Paid: "No further action required. Keep this invoice for reporting and reconciliation.",
  Due: "Monitor the due date and prepare a reminder if needed.",
  Overdue:
    "Send a payment reminder and review the customer's billing history.",
  Failed:
    "Review the payment method and contact the customer for resolution.",
} as const;

type BillingDetailDrawerProps = {
  billingRecord: BillingRecord | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function BillingDetailDrawer({
  billingRecord,
  open,
  onOpenChange,
}: BillingDetailDrawerProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="overflow-y-auto sm:max-w-md">
        {billingRecord ? (
          <>
            <SheetHeader>
              <SheetTitle>{billingRecord.invoiceId}</SheetTitle>
              <SheetDescription>
                {billingRecord.customer} · {billingRecord.plan}
              </SheetDescription>
            </SheetHeader>

            <Separator />

            <DetailSection title="Invoice Summary">
              <dl className="grid gap-3 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-muted-foreground">Status</dt>
                  <dd>
                    <StatusBadge status={billingRecord.status} />
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Customer</dt>
                  <dd className="text-right">{billingRecord.customer}</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-muted-foreground">Plan</dt>
                  <dd>
                    <Badge variant="secondary">{billingRecord.plan}</Badge>
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Amount</dt>
                  <dd className="text-right">
                    {currencyFormatter.format(billingRecord.amount)}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Due Date</dt>
                  <dd className="text-right">{billingRecord.dueDate}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Payment Method</dt>
                  <dd className="text-right">{billingRecord.paymentMethod}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Last Updated</dt>
                  <dd className="text-right">{billingRecord.lastUpdated}</dd>
                </div>
              </dl>
            </DetailSection>

            <Separator />

            <DetailSection title="Payment Context">
              <p className="text-sm text-muted-foreground">
                This invoice summary captures the current payment state,
                customer billing context, and finance follow-up signals for the
                revenue operations team.
              </p>
            </DetailSection>

            <Separator />

            <DetailSection title="Payment Activity">
              <ol className="grid gap-3 text-sm">
                <li className="grid gap-1">
                  <span className="font-medium">Invoice created</span>
                  <span className="text-muted-foreground">
                    Invoice details were generated for customer billing.
                  </span>
                </li>
                <li className="grid gap-1">
                  <span className="font-medium">Payment status checked</span>
                  <span className="text-muted-foreground">
                    Current invoice status and due date were reviewed.
                  </span>
                </li>
                <li className="grid gap-1">
                  <span className="font-medium">
                    Reminder workflow reviewed
                  </span>
                  <span className="text-muted-foreground">
                    Follow-up readiness was checked against the billing state.
                  </span>
                </li>
              </ol>
            </DetailSection>

            <Separator />

            <DetailSection title="Recommended Next Action">
              <p className="text-sm text-muted-foreground">
                {recommendedNextAction[billingRecord.status]}
              </p>
            </DetailSection>
          </>
        ) : null}
      </SheetContent>
    </Sheet>
  );
}
