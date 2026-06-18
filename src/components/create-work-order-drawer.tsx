import { Button } from "@/components/ui/button";
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
import { Textarea } from "@/components/ui/textarea";

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

export function CreateWorkOrderDrawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Create Work Order</Button>
      </SheetTrigger>
      <SheetContent side="right" className="overflow-y-auto sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Create Work Order</SheetTitle>
          <SheetDescription>
            Capture the basic information needed to route a new operational
            request.
          </SheetDescription>
        </SheetHeader>

        <Separator />

        <div className="grid gap-4 px-4">
          <div className="grid gap-2">
            <Label htmlFor="create-title">Title</Label>
            <Input id="create-title" placeholder="Enter work order title" />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="create-customer">Customer</Label>
            <Input id="create-customer" placeholder="Enter customer name" />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="create-asset-location">Asset / Location</Label>
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
  );
}
