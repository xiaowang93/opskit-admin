export type VendorStatus =
  | "Active"
  | "Pending review"
  | "Inactive"
  | "At risk";

export type Vendor = {
  id: string;
  name: string;
  serviceType: string;
  status: VendorStatus;
  coverageArea: string;
  openJobs: number;
  lastUpdated: string;
};

export const vendors: Vendor[] = [
  {
    id: "VEN-1001",
    name: "Northline Services",
    serviceType: "Field Operations",
    status: "Active",
    coverageArea: "Pacific Northwest",
    openJobs: 8,
    lastUpdated: "Jun 18, 2026",
  },
  {
    id: "VEN-1002",
    name: "BrightPath Contractors",
    serviceType: "Facilities",
    status: "Pending review",
    coverageArea: "California",
    openJobs: 3,
    lastUpdated: "Jun 17, 2026",
  },
  {
    id: "VEN-1003",
    name: "Summit Repair Group",
    serviceType: "Maintenance",
    status: "Active",
    coverageArea: "Mountain West",
    openJobs: 6,
    lastUpdated: "Jun 16, 2026",
  },
  {
    id: "VEN-1004",
    name: "Atlas Response Team",
    serviceType: "Emergency Support",
    status: "At risk",
    coverageArea: "Northeast",
    openJobs: 5,
    lastUpdated: "Jun 14, 2026",
  },
  {
    id: "VEN-1005",
    name: "Urban Access Partners",
    serviceType: "Access Control",
    status: "Inactive",
    coverageArea: "Midwest",
    openJobs: 0,
    lastUpdated: "Jun 05, 2026",
  },
  {
    id: "VEN-1006",
    name: "Helio Vendor Network",
    serviceType: "Logistics",
    status: "Active",
    coverageArea: "Southeast",
    openJobs: 9,
    lastUpdated: "Jun 19, 2026",
  },
];

export const vendorSummaryCards = [
  {
    label: "Total vendors",
    value: vendors.length,
    description: "External providers in the workspace",
  },
  {
    label: "Active vendors",
    value: vendors.filter((vendor) => vendor.status === "Active").length,
    description: "Ready for operational assignment",
  },
  {
    label: "Vendors needing review",
    value: vendors.filter(
      (vendor) =>
        vendor.status === "Pending review" || vendor.status === "At risk"
    ).length,
    description: "Require status or risk review",
  },
  {
    label: "Open assigned jobs",
    value: vendors.reduce((total, vendor) => total + vendor.openJobs, 0),
    description: "Work currently routed to vendors",
  },
];
