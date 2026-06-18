import { Button } from "@/components/ui/button";
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
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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

export function WorkOrderFilterDrawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Filter</Button>
      </SheetTrigger>

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
            <Label htmlFor="scheduled-time-filter">Scheduled Time</Label>
            <Select defaultValue="Any time">
              <SelectTrigger id="scheduled-time-filter" className="w-full">
                <SelectValue placeholder="Select scheduled time" />
              </SelectTrigger>
              <SelectContent>
                {scheduledTimeOptions.map((scheduledTime) => (
                  <SelectItem key={scheduledTime} value={scheduledTime}>
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
  );
}
