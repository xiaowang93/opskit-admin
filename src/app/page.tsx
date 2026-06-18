import { AdminShell } from "@/components/admin-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WorkOrderSummaryCards } from "@/components/work-order-summary-cards";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { workOrders } from "@/data/work-orders";

const tabs = ["All", "Open", "Assigned", "In Progress", "Review", "Completed"];
const statusOptions = [
  "All",
  "Open",
  "Assigned",
  "In Progress",
  "Review",
  "Completed",
];
const priorityOptions = ["All", "Critical", "High", "Medium", "Low"];
const assigneeOptions = [
  "All",
  "Maya Chen",
  "Owen Brooks",
  "Priya Shah",
  "Leo Martins",
  "Nina Patel",
  "Ethan Walker",
];
const scheduledTimeOptions = ["Any time", "Today", "This week", "This month"];
const createPriorityOptions = ["Critical", "High", "Medium", "Low"];
const createAssigneeOptions = [
  "Unassigned",
  "Maya Chen",
  "Owen Brooks",
  "Priya Shah",
  "Leo Martins",
  "Nina Patel",
  "Ethan Walker",
];

const statusVariant = {
  Open: "outline",
  Assigned: "secondary",
  "In Progress": "default",
  Review: "secondary",
  Completed: "outline",
} as const;

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

export default function Home() {
  return (
    <AdminShell>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-semibold tracking-tight">
              Work Orders
            </h1>
            <p className="text-sm text-muted-foreground">
              Track, assign, and review operational work orders.
            </p>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button>Create Work Order</Button>
            </SheetTrigger>
            <SheetContent side="right" className="overflow-y-auto sm:max-w-md">
              <SheetHeader>
                <SheetTitle>Create Work Order</SheetTitle>
                <SheetDescription>
                  Capture the basic information needed to route a new
                  operational request.
                </SheetDescription>
              </SheetHeader>

              <Separator />

              <div className="grid gap-4 px-4">
                <div className="grid gap-2">
                  <Label htmlFor="create-title">Title</Label>
                  <Input
                    id="create-title"
                    placeholder="Enter work order title"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="create-customer">Customer</Label>
                  <Input
                    id="create-customer"
                    placeholder="Enter customer name"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="create-asset-location">
                    Asset / Location
                  </Label>
                  <Input
                    id="create-asset-location"
                    placeholder="Enter asset or location"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="create-priority">Priority</Label>
                  <Select>
                    <SelectTrigger id="create-priority" className="w-full">
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      {createPriorityOptions.map((priority) => (
                        <SelectItem key={priority} value={priority}>
                          {priority}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="create-assignee">Assignee</Label>
                  <Select>
                    <SelectTrigger id="create-assignee" className="w-full">
                      <SelectValue placeholder="Select assignee" />
                    </SelectTrigger>
                    <SelectContent>
                      {createAssigneeOptions.map((assignee) => (
                        <SelectItem key={assignee} value={assignee}>
                          {assignee}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="create-scheduled-time">Scheduled Time</Label>
                  <Input
                    id="create-scheduled-time"
                    placeholder="Jun 24, 2026 10:00"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="create-description">Description</Label>
                  <Textarea
                    id="create-description"
                    placeholder="Describe the work order context and expected outcome"
                  />
                </div>
              </div>

              <SheetFooter>
                <SheetClose asChild>
                  <Button variant="outline">Cancel</Button>
                </SheetClose>
                <Button>Create Work Order</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </header>

        <WorkOrderSummaryCards />

        <Tabs defaultValue="All" className="gap-4">
          <TabsList className="flex h-auto w-full flex-wrap justify-start sm:w-fit">
            {tabs.map((tab) => (
              <TabsTrigger key={tab} value={tab}>
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>

          <Card>
            <CardHeader>
              <CardTitle>Work order queue</CardTitle>
              <CardDescription>
                A static overview of current operational requests.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Sheet>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Input
                    aria-label="Search work orders"
                    className="sm:flex-1"
                    placeholder="Search by ID, title, customer, or assignee"
                  />
                  <SheetTrigger asChild>
                    <Button variant="outline">Filter</Button>
                  </SheetTrigger>
                </div>

                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Filter Work Orders</SheetTitle>
                    <SheetDescription>
                      Refine the work order queue by operational attributes.
                    </SheetDescription>
                  </SheetHeader>

                  <Separator />

                  <div className="grid gap-4 px-4">
                    <div className="grid gap-2">
                      <Label htmlFor="status-filter">Status</Label>
                      <Select defaultValue="All">
                        <SelectTrigger id="status-filter" className="w-full">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          {statusOptions.map((status) => (
                            <SelectItem key={status} value={status}>
                              {status}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="priority-filter">Priority</Label>
                      <Select defaultValue="All">
                        <SelectTrigger id="priority-filter" className="w-full">
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                          {priorityOptions.map((priority) => (
                            <SelectItem key={priority} value={priority}>
                              {priority}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="assignee-filter">Assignee</Label>
                      <Select defaultValue="All">
                        <SelectTrigger id="assignee-filter" className="w-full">
                          <SelectValue placeholder="Select assignee" />
                        </SelectTrigger>
                        <SelectContent>
                          {assigneeOptions.map((assignee) => (
                            <SelectItem key={assignee} value={assignee}>
                              {assignee}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="scheduled-time-filter">
                        Scheduled Time
                      </Label>
                      <Select defaultValue="Any time">
                        <SelectTrigger
                          id="scheduled-time-filter"
                          className="w-full"
                        >
                          <SelectValue placeholder="Select scheduled time" />
                        </SelectTrigger>
                        <SelectContent>
                          {scheduledTimeOptions.map((scheduledTime) => (
                            <SelectItem
                              key={scheduledTime}
                              value={scheduledTime}
                            >
                              {scheduledTime}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <SheetFooter>
                    <Button variant="outline">Reset</Button>
                    <Button>Apply Filters</Button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Asset / Location</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Assignee</TableHead>
                    <TableHead>Scheduled Time</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {workOrders.map((workOrder) => (
                    <TableRow key={workOrder.id}>
                      <TableCell className="font-medium">
                        {workOrder.id}
                      </TableCell>
                      <TableCell>{workOrder.title}</TableCell>
                      <TableCell>{workOrder.customer}</TableCell>
                      <TableCell>{workOrder.assetLocation}</TableCell>
                      <TableCell>
                        <Badge variant={statusVariant[workOrder.status]}>
                          {workOrder.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={priorityVariant[workOrder.priority]}>
                          {workOrder.priority}
                        </Badge>
                      </TableCell>
                      <TableCell>{workOrder.assignee}</TableCell>
                      <TableCell>{workOrder.scheduledTime}</TableCell>
                      <TableCell>
                        <Sheet>
                          <SheetTrigger asChild>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </SheetTrigger>
                          <SheetContent
                            side="right"
                            className="overflow-y-auto sm:max-w-md"
                          >
                            <SheetHeader>
                              <SheetTitle>{workOrder.id}</SheetTitle>
                              <SheetDescription>
                                {workOrder.title}
                              </SheetDescription>
                            </SheetHeader>

                            <Separator />

                            <section className="grid gap-3 px-4">
                              <h2 className="text-sm font-medium">
                                Work Order Summary
                              </h2>
                              <dl className="grid gap-3 text-sm">
                                <div className="flex items-center justify-between gap-4">
                                  <dt className="text-muted-foreground">
                                    Status
                                  </dt>
                                  <dd>
                                    <Badge
                                      variant={statusVariant[workOrder.status]}
                                    >
                                      {workOrder.status}
                                    </Badge>
                                  </dd>
                                </div>
                                <div className="flex items-center justify-between gap-4">
                                  <dt className="text-muted-foreground">
                                    Priority
                                  </dt>
                                  <dd>
                                    <Badge
                                      variant={
                                        priorityVariant[workOrder.priority]
                                      }
                                    >
                                      {workOrder.priority}
                                    </Badge>
                                  </dd>
                                </div>
                                <div className="flex justify-between gap-4">
                                  <dt className="text-muted-foreground">
                                    Customer
                                  </dt>
                                  <dd className="text-right">
                                    {workOrder.customer}
                                  </dd>
                                </div>
                                <div className="flex justify-between gap-4">
                                  <dt className="text-muted-foreground">
                                    Asset / Location
                                  </dt>
                                  <dd className="text-right">
                                    {workOrder.assetLocation}
                                  </dd>
                                </div>
                                <div className="flex justify-between gap-4">
                                  <dt className="text-muted-foreground">
                                    Assignee
                                  </dt>
                                  <dd className="text-right">
                                    {workOrder.assignee}
                                  </dd>
                                </div>
                                <div className="flex justify-between gap-4">
                                  <dt className="text-muted-foreground">
                                    Scheduled Time
                                  </dt>
                                  <dd className="text-right">
                                    {workOrder.scheduledTime}
                                  </dd>
                                </div>
                              </dl>
                            </section>

                            <Separator />

                            <section className="grid gap-2 px-4">
                              <h2 className="text-sm font-medium">
                                Description
                              </h2>
                              <p className="text-sm text-muted-foreground">
                                {workOrder.description}
                              </p>
                            </section>

                            <Separator />

                            <section className="grid gap-3 px-4">
                              <h2 className="text-sm font-medium">
                                Operational Timeline
                              </h2>
                              <ol className="grid gap-3 text-sm">
                                <li className="grid gap-1">
                                  <span className="font-medium">Created</span>
                                  <span className="text-muted-foreground">
                                    Work order created from the operational
                                    queue.
                                  </span>
                                </li>
                                <li className="grid gap-1">
                                  <span className="font-medium">Assigned</span>
                                  <span className="text-muted-foreground">
                                    Routed to {workOrder.assignee} for
                                    ownership.
                                  </span>
                                </li>
                                <li className="grid gap-1">
                                  <span className="font-medium">
                                    Latest Update
                                  </span>
                                  <span className="text-muted-foreground">
                                    Current status is {workOrder.status}.
                                  </span>
                                </li>
                              </ol>
                            </section>

                            <Separator />

                            <section className="grid gap-2 px-4 pb-4">
                              <h2 className="text-sm font-medium">
                                Recommended Next Action
                              </h2>
                              <p className="text-sm text-muted-foreground">
                                {recommendedNextAction[workOrder.status]}
                              </p>
                            </section>

                            <Separator />

                            <section className="grid gap-3 px-4 pb-4">
                              <h2 className="text-sm font-medium">
                                Available Actions
                              </h2>
                              <div className="flex flex-col gap-2 sm:flex-row">
                                {availableActions[workOrder.status].map(
                                  (action, index) => (
                                    <Button
                                      key={action}
                                      variant={
                                        workOrder.status === "Completed" ||
                                        index > 0
                                          ? "outline"
                                          : "default"
                                      }
                                    >
                                      {action}
                                    </Button>
                                  )
                                )}
                              </div>
                            </section>
                          </SheetContent>
                        </Sheet>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Tabs>
      </div>
    </AdminShell>
  );
}
