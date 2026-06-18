"use client";

import { StatusBadge } from "@/components/status-badge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { WorkOrder } from "@/data/work-orders";

const priorityVariant = {
  Low: "outline",
  Medium: "secondary",
  High: "default",
  Critical: "destructive",
} as const;

type WorkOrdersTableProps = {
  workOrders: WorkOrder[];
  onViewDetails: (workOrder: WorkOrder) => void;
};

export function WorkOrdersTable({
  workOrders,
  onViewDetails,
}: WorkOrdersTableProps) {
  return (
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
            <TableCell className="font-medium">{workOrder.id}</TableCell>
            <TableCell>{workOrder.title}</TableCell>
            <TableCell>{workOrder.customer}</TableCell>
            <TableCell>{workOrder.assetLocation}</TableCell>
            <TableCell>
              <StatusBadge status={workOrder.status} />
            </TableCell>
            <TableCell>
              <Badge variant={priorityVariant[workOrder.priority]}>
                {workOrder.priority}
              </Badge>
            </TableCell>
            <TableCell>{workOrder.assignee}</TableCell>
            <TableCell>{workOrder.scheduledTime}</TableCell>
            <TableCell>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onViewDetails(workOrder)}
              >
                View Details
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
