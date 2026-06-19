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
import type { Asset } from "@/data/assets";

const recommendedNextAction = {
  Active: "Keep the asset in regular monitoring and review open work orders.",
  "Maintenance Due": "Schedule maintenance and assign the related work order.",
  Offline:
    "Investigate the outage and confirm operational readiness before reactivation.",
} as const;

type AssetDetailDrawerProps = {
  asset: Asset | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function AssetDetailDrawer({
  asset,
  open,
  onOpenChange,
}: AssetDetailDrawerProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="overflow-y-auto sm:max-w-md">
        {asset ? (
          <>
            <SheetHeader>
              <SheetTitle>{asset.name}</SheetTitle>
              <SheetDescription>
                {asset.id} · {asset.category}
              </SheetDescription>
            </SheetHeader>

            <Separator />

            <DetailSection title="Asset Summary">
              <dl className="grid gap-3 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-muted-foreground">Status</dt>
                  <dd>
                    <StatusBadge status={asset.status} />
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-muted-foreground">Category</dt>
                  <dd>
                    <Badge variant="secondary">{asset.category}</Badge>
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Owner</dt>
                  <dd className="text-right">{asset.owner}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Location</dt>
                  <dd className="text-right">{asset.location}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Open Work Orders</dt>
                  <dd className="text-right">{asset.openWorkOrders}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Last Inspected</dt>
                  <dd className="text-right">{asset.lastInspected}</dd>
                </div>
              </dl>
            </DetailSection>

            <Separator />

            <DetailSection title="Operational Context">
              <p className="text-sm text-muted-foreground">
                This asset profile highlights its current operational state,
                ownership context, and maintenance signals that may need team
                attention.
              </p>
            </DetailSection>

            <Separator />

            <DetailSection title="Recent Activity">
              <ol className="grid gap-3 text-sm">
                <li className="grid gap-1">
                  <span className="font-medium">Inspection completed</span>
                  <span className="text-muted-foreground">
                    The latest inspection record was reviewed.
                  </span>
                </li>
                <li className="grid gap-1">
                  <span className="font-medium">Work order reviewed</span>
                  <span className="text-muted-foreground">
                    Related open work orders were checked.
                  </span>
                </li>
                <li className="grid gap-1">
                  <span className="font-medium">Ownership confirmed</span>
                  <span className="text-muted-foreground">
                    Current owner and accountability were verified.
                  </span>
                </li>
              </ol>
            </DetailSection>

            <Separator />

            <DetailSection title="Recommended Next Action">
              <p className="text-sm text-muted-foreground">
                {recommendedNextAction[asset.status]}
              </p>
            </DetailSection>
          </>
        ) : null}
      </SheetContent>
    </Sheet>
  );
}
