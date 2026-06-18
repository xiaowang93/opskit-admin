export type AssetStatus = "Active" | "Maintenance Due" | "Offline";
export type AssetCategory =
  | "Equipment"
  | "Workspace"
  | "Device"
  | "Vehicle"
  | "Facility";

export type Asset = {
  id: string;
  name: string;
  category: AssetCategory;
  owner: string;
  status: AssetStatus;
  location: string;
  openWorkOrders: number;
  lastInspected: string;
};

export const assets: Asset[] = [
  {
    id: "AST-1001",
    name: "Packaging Line A",
    category: "Equipment",
    owner: "Acme Operations",
    status: "Active",
    location: "Plant 01 / Floor 2",
    openWorkOrders: 1,
    lastInspected: "Jun 15, 2026",
  },
  {
    id: "AST-1002",
    name: "Executive Workspace",
    category: "Workspace",
    owner: "Northstar Labs",
    status: "Maintenance Due",
    location: "HQ / Level 8",
    openWorkOrders: 2,
    lastInspected: "Jun 02, 2026",
  },
  {
    id: "AST-1003",
    name: "Field Tablet 42",
    category: "Device",
    owner: "Summit Retail",
    status: "Active",
    location: "Store 18",
    openWorkOrders: 0,
    lastInspected: "Jun 17, 2026",
  },
  {
    id: "AST-1004",
    name: "Service Van 12",
    category: "Vehicle",
    owner: "Orbit Systems",
    status: "Offline",
    location: "Depot West",
    openWorkOrders: 3,
    lastInspected: "May 29, 2026",
  },
  {
    id: "AST-1005",
    name: "Customer Access Hub",
    category: "Facility",
    owner: "Vertex Cloud",
    status: "Maintenance Due",
    location: "Region East",
    openWorkOrders: 1,
    lastInspected: "Jun 08, 2026",
  },
  {
    id: "AST-1006",
    name: "Audit Workstation",
    category: "Device",
    owner: "Helio Manufacturing",
    status: "Active",
    location: "Finance Ops",
    openWorkOrders: 0,
    lastInspected: "Jun 18, 2026",
  },
];
