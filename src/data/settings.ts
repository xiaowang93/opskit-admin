export type WorkspaceProfileItem = {
  label: string;
  value: string;
};

export type RolePermissionRule = {
  role: string;
  accessLevel: string;
  users: string;
  status: string;
};

export type NotificationSystemRule = {
  rule: string;
  channel: string;
  trigger: string;
  status: string;
};

export const workspaceProfile: WorkspaceProfileItem[] = [
  { label: "Workspace Name", value: "OpsKit Workspace" },
  { label: "Region", value: "North America" },
  { label: "Default Currency", value: "USD" },
  { label: "Time Zone", value: "Pacific Time" },
  { label: "Data Retention", value: "24 months" },
];

export const rolePermissionRules: RolePermissionRule[] = [
  {
    role: "Admin",
    accessLevel: "Full Access",
    users: "4 users",
    status: "Active",
  },
  {
    role: "Manager",
    accessLevel: "Operational Access",
    users: "12 users",
    status: "Active",
  },
  {
    role: "Finance",
    accessLevel: "Billing Access",
    users: "5 users",
    status: "Active",
  },
  {
    role: "Viewer",
    accessLevel: "Read Only",
    users: "18 users",
    status: "Restricted",
  },
];

export const notificationSystemRules: NotificationSystemRule[] = [
  {
    rule: "Work Order Escalation",
    channel: "Email + In-app",
    trigger: "Overdue work order",
    status: "Active",
  },
  {
    rule: "Payment Reminder",
    channel: "Email",
    trigger: "Invoice due soon",
    status: "Active",
  },
  {
    rule: "Asset Maintenance Alert",
    channel: "In-app",
    trigger: "Maintenance due",
    status: "Active",
  },
  {
    rule: "Audit Log Review",
    channel: "System",
    trigger: "Weekly check",
    status: "Scheduled",
  },
];
