import { DetailSection } from "@/components/detail-section";
import { StatusBadge } from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import type { Vendor } from "@/data/vendors";

const recommendedNextAction = {
  Active: "Ready for assignment",
  "Pending review": "Review service coverage before assigning new work",
  Inactive: "Do not assign new work until vendor is reactivated",
  "At risk": "Pause assignment and request operational review",
} as const;

type VendorDetailDrawerProps = {
  vendor: Vendor | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function VendorDetailDrawer({
  vendor,
  open,
  onOpenChange,
}: VendorDetailDrawerProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="overflow-y-auto sm:max-w-md">
        {vendor ? (
          <>
            <SheetHeader>
              <SheetTitle>{vendor.name}</SheetTitle>
              <SheetDescription>
                {vendor.id} · {vendor.serviceType} · {vendor.coverageArea}
              </SheetDescription>
            </SheetHeader>

            <Separator />

            <DetailSection title="Vendor Summary">
              <dl className="grid gap-3 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-muted-foreground">Status</dt>
                  <dd>
                    <StatusBadge status={vendor.status} />
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Open jobs</dt>
                  <dd className="text-right">{vendor.openJobs}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Last updated</dt>
                  <dd className="text-right">{vendor.lastUpdated}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Primary contact</dt>
                  <dd className="text-right">{vendor.primaryContact}</dd>
                </div>
              </dl>
            </DetailSection>

            <Separator />

            <DetailSection title="Operational Context">
              <dl className="grid gap-3 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Service type</dt>
                  <dd className="text-right">{vendor.serviceType}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Coverage area</dt>
                  <dd className="text-right">{vendor.coverageArea}</dd>
                </div>
              </dl>
              <div className="grid gap-2 text-sm text-muted-foreground">
                <p>{vendor.readinessNote}</p>
                <p>{vendor.riskNote}</p>
              </div>
            </DetailSection>

            <Separator />

            <DetailSection title="Recent Activity">
              <ol className="grid gap-3 text-sm">
                {vendor.recentActivity.map((activity) => (
                  <li key={activity} className="grid gap-1">
                    <span className="font-medium">{activity}</span>
                    <span className="text-muted-foreground">
                      Recorded in the vendor operations profile.
                    </span>
                  </li>
                ))}
              </ol>
            </DetailSection>

            <Separator />

            <DetailSection title="Recommended Next Action">
              <p className="text-sm text-muted-foreground">
                {recommendedNextAction[vendor.status]}
              </p>
            </DetailSection>

            <Separator />

            <DetailSection title="Drawer Actions">
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button>Request Review</Button>
                <Button variant="outline">Mark Inactive</Button>
              </div>
            </DetailSection>
          </>
        ) : null}
      </SheetContent>
    </Sheet>
  );
}
