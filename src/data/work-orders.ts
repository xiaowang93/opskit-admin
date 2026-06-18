export type WorkOrderStatus =
  | "Open"
  | "Assigned"
  | "In Progress"
  | "Review"
  | "Completed";

export type WorkOrderPriority = "Low" | "Medium" | "High" | "Critical";

export type WorkOrder = {
  id: string;
  title: string;
  customer: string;
  assetLocation: string;
  status: WorkOrderStatus;
  priority: WorkOrderPriority;
  assignee: string;
  scheduledTime: string;
  description: string;
};

export const workOrders: WorkOrder[] = [
  {
    id: "WO-1001",
    title: "Configure approval routing",
    customer: "Acme Operations",
    assetLocation: "Workflow Engine",
    status: "Open",
    priority: "High",
    assignee: "Maya Chen",
    scheduledTime: "Jun 20, 2026 09:00",
    description:
      "Set up routing rules so incoming approval requests are assigned to the correct operations reviewers.",
  },
  {
    id: "WO-1002",
    title: "Review invoice exception queue",
    customer: "Northstar Labs",
    assetLocation: "Finance Ops",
    status: "Assigned",
    priority: "Medium",
    assignee: "Owen Brooks",
    scheduledTime: "Jun 20, 2026 11:30",
    description:
      "Review failed invoice exceptions and prepare the queue for finance operations follow-up.",
  },
  {
    id: "WO-1003",
    title: "Update access policy mapping",
    customer: "Summit Retail",
    assetLocation: "Identity Console",
    status: "In Progress",
    priority: "High",
    assignee: "Priya Shah",
    scheduledTime: "Jun 21, 2026 14:00",
    description:
      "Update role-to-policy mappings to keep customer access aligned with the latest operating model.",
  },
  {
    id: "WO-1004",
    title: "Validate data sync checkpoint",
    customer: "Orbit Systems",
    assetLocation: "Integration Hub",
    status: "Review",
    priority: "Low",
    assignee: "Leo Martins",
    scheduledTime: "Jun 22, 2026 10:15",
    description:
      "Validate the latest integration checkpoint and confirm downstream systems received complete data.",
  },
  {
    id: "WO-1005",
    title: "Resolve SLA notification issue",
    customer: "Vertex Cloud",
    assetLocation: "Notification Service",
    status: "Open",
    priority: "Critical",
    assignee: "Nina Patel",
    scheduledTime: "Jun 22, 2026 16:45",
    description:
      "Investigate missed SLA notifications and restore reliable alert delivery for customer operations.",
  },
  {
    id: "WO-1006",
    title: "Complete quarterly account audit",
    customer: "Helio Manufacturing",
    assetLocation: "Customer Success",
    status: "Completed",
    priority: "Medium",
    assignee: "Ethan Walker",
    scheduledTime: "Jun 23, 2026 13:00",
    description:
      "Complete a scheduled account audit and document any operational follow-up items.",
  },
];
