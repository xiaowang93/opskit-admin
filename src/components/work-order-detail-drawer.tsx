import { StatusBadge } from "@/components/status-badge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import type { WorkOrder } from "@/data/work-orders";

const priorityVariant = {
  Low: "outline",
  Medium: "secondary",
  High: "default",
  Critical: "destructive",
} as const;

const recommendedNextAction = {
  Open: "Assign this work order to an operator.",
  Assigned: "Wait for the assignee to start progress.",
  "In Progress": "Monitor progress and review updates.",
  Review: "Review the work result and confirm completion.",
  Completed: "No further action required.",
} as const;

const availableActions = {
  Open: ["Assign", "Close"],
  Assigned: ["Start Progress", "Reassign"],
  "In Progress": ["Add Update", "Mark for Review"],
  Review: ["Approve", "Request Changes"],
  Completed: ["Reopen"],
} as const;

type WorkOrderDetailDrawerProps = {
  workOrder: WorkOrder | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function WorkOrderDetailDrawer({
  workOrder,
  open,
  onOpenChange,
}: WorkOrderDetailDrawerProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="overflow-y-auto sm:max-w-md">
        {workOrder ? (
          <>
            <SheetHeader>
              <SheetTitle>{workOrder.id}</SheetTitle>
              <SheetDescription>{workOrder.title}</SheetDescription>
            </SheetHeader>

            <Separator />

            <section className="grid gap-3 px-4">
              <h2 className="text-sm font-medium">Work Order Summary</h2>
              <dl className="grid gap-3 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-muted-foreground">Status</dt>
                  <dd>
                    <StatusBadge status={workOrder.status} />
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-muted-foreground">Priority</dt>
                  <dd>
                    <Badge variant={priorityVariant[workOrder.priority]}>
                      {workOrder.priority}
                    </Badge>
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Customer</dt>
                  <dd className="text-right">{workOrder.customer}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Asset / Location</dt>
                  <dd className="text-right">{workOrder.assetLocation}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Assignee</dt>
                  <dd className="text-right">{workOrder.assignee}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Scheduled Time</dt>
                  <dd className="text-right">{workOrder.scheduledTime}</dd>
                </div>
              </dl>
            </section>

            <Separator />

            <section className="grid gap-2 px-4">
              <h2 className="text-sm font-medium">Description</h2>
              <p className="text-sm text-muted-foreground">
                {workOrder.description}
              </p>
            </section>

            <Separator />

            <section className="grid gap-3 px-4">
              <h2 className="text-sm font-medium">Operational Timeline</h2>
              <ol className="grid gap-3 text-sm">
                <li className="grid gap-1">
                  <span className="font-medium">Created</span>
                  <span className="text-muted-foreground">
                    Work order created from the operational queue.
                  </span>
                </li>
                <li className="grid gap-1">
                  <span className="font-medium">Assigned</span>
                  <span className="text-muted-foreground">
                    Routed to {workOrder.assignee} for ownership.
                  </span>
                </li>
                <li className="grid gap-1">
                  <span className="font-medium">Latest Update</span>
                  <span className="text-muted-foreground">
                    Current status is {workOrder.status}.
                  </span>
                </li>
              </ol>
            </section>

            <Separator />

            <section className="grid gap-2 px-4 pb-4">
              <h2 className="text-sm font-medium">Recommended Next Action</h2>
              <p className="text-sm text-muted-foreground">
                {recommendedNextAction[workOrder.status]}
              </p>
            </section>

            <Separator />

            <section className="grid gap-3 px-4 pb-4">
              <h2 className="text-sm font-medium">Available Actions</h2>
              <div className="flex flex-col gap-2 sm:flex-row">
                {availableActions[workOrder.status].map((action, index) => (
                  <Button
                    key={action}
                    variant={
                      workOrder.status === "Completed" || index > 0
                        ? "outline"
                        : "default"
                    }
                  >
                    {action}
                  </Button>
                ))}
              </div>
            </section>
          </>
        ) : null}
      </SheetContent>
    </Sheet>
  );
}
