export type CustomerStatus = "Active" | "At Risk" | "Inactive";
export type CustomerType = "Enterprise" | "SMB" | "Individual";

export type Customer = {
  id: string;
  name: string;
  type: CustomerType;
  email: string;
  status: CustomerStatus;
  openWorkOrders: number;
  totalSpend: string;
  lastActivity: string;
};

export const customers: Customer[] = [
  {
    id: "CUS-1001",
    name: "Acme Operations",
    type: "Enterprise",
    email: "ops@acme.example",
    status: "Active",
    openWorkOrders: 3,
    totalSpend: "$128,400",
    lastActivity: "Jun 18, 2026",
  },
  {
    id: "CUS-1002",
    name: "Northstar Labs",
    type: "SMB",
    email: "admin@northstarlabs.example",
    status: "Active",
    openWorkOrders: 1,
    totalSpend: "$42,800",
    lastActivity: "Jun 17, 2026",
  },
  {
    id: "CUS-1003",
    name: "Summit Retail",
    type: "Enterprise",
    email: "support@summitretail.example",
    status: "At Risk",
    openWorkOrders: 4,
    totalSpend: "$96,250",
    lastActivity: "Jun 16, 2026",
  },
  {
    id: "CUS-1004",
    name: "Orbit Systems",
    type: "SMB",
    email: "hello@orbitsystems.example",
    status: "Active",
    openWorkOrders: 2,
    totalSpend: "$31,600",
    lastActivity: "Jun 15, 2026",
  },
  {
    id: "CUS-1005",
    name: "Nina Patel",
    type: "Individual",
    email: "nina.patel@example.com",
    status: "Inactive",
    openWorkOrders: 0,
    totalSpend: "$8,900",
    lastActivity: "Jun 10, 2026",
  },
  {
    id: "CUS-1006",
    name: "Helio Manufacturing",
    type: "Enterprise",
    email: "accounts@heliomfg.example",
    status: "At Risk",
    openWorkOrders: 2,
    totalSpend: "$174,300",
    lastActivity: "Jun 12, 2026",
  },
];
