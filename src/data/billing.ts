export type BillingStatus = "Paid" | "Due" | "Overdue" | "Failed";
export type BillingPlan = "Starter" | "Growth" | "Enterprise";

export type BillingRecord = {
  invoiceId: string;
  customer: string;
  plan: BillingPlan;
  status: BillingStatus;
  amount: number;
  dueDate: string;
  paymentMethod: string;
  lastUpdated: string;
};

export const billingRecords: BillingRecord[] = [
  {
    invoiceId: "INV-1001",
    customer: "Acme Operations",
    plan: "Enterprise",
    status: "Paid",
    amount: 1240,
    dueDate: "Jun 20, 2026",
    paymentMethod: "ACH",
    lastUpdated: "Jun 18, 2026",
  },
  {
    invoiceId: "INV-1002",
    customer: "Northstar Labs",
    plan: "Growth",
    status: "Due",
    amount: 680,
    dueDate: "Jun 24, 2026",
    paymentMethod: "Visa ending 4021",
    lastUpdated: "Jun 17, 2026",
  },
  {
    invoiceId: "INV-1003",
    customer: "Summit Retail",
    plan: "Enterprise",
    status: "Overdue",
    amount: 2180,
    dueDate: "Jun 10, 2026",
    paymentMethod: "Wire transfer",
    lastUpdated: "Jun 16, 2026",
  },
  {
    invoiceId: "INV-1004",
    customer: "Orbit Systems",
    plan: "Starter",
    status: "Paid",
    amount: 240,
    dueDate: "Jun 15, 2026",
    paymentMethod: "Mastercard ending 1188",
    lastUpdated: "Jun 15, 2026",
  },
  {
    invoiceId: "INV-1005",
    customer: "Vertex Cloud",
    plan: "Growth",
    status: "Failed",
    amount: 920,
    dueDate: "Jun 18, 2026",
    paymentMethod: "Amex ending 7004",
    lastUpdated: "Jun 18, 2026",
  },
  {
    invoiceId: "INV-1006",
    customer: "Helio Manufacturing",
    plan: "Enterprise",
    status: "Due",
    amount: 1640,
    dueDate: "Jun 28, 2026",
    paymentMethod: "ACH",
    lastUpdated: "Jun 18, 2026",
  },
];
