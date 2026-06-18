export type ReportCategory =
  | "Operations"
  | "Customer"
  | "Asset"
  | "Billing"
  | "Executive";

export type ReportStatus = "Ready" | "Generating" | "Needs Review" | "Failed";
export type ReportFormat = "PDF" | "CSV" | "Dashboard";

export type Report = {
  id: string;
  name: string;
  category: ReportCategory;
  owner: string;
  status: ReportStatus;
  lastGenerated: string;
  refreshCadence: string;
  format: ReportFormat;
};

export const reports: Report[] = [
  {
    id: "RPT-1001",
    name: "Weekly Operations Review",
    category: "Operations",
    owner: "Maya Chen",
    status: "Ready",
    lastGenerated: "Jun 18, 2026",
    refreshCadence: "Weekly",
    format: "PDF",
  },
  {
    id: "RPT-1002",
    name: "Customer Health Snapshot",
    category: "Customer",
    owner: "Owen Brooks",
    status: "Generating",
    lastGenerated: "Jun 17, 2026",
    refreshCadence: "Daily",
    format: "Dashboard",
  },
  {
    id: "RPT-1003",
    name: "Asset Readiness Export",
    category: "Asset",
    owner: "Priya Shah",
    status: "Needs Review",
    lastGenerated: "Jun 16, 2026",
    refreshCadence: "Weekly",
    format: "CSV",
  },
  {
    id: "RPT-1004",
    name: "Invoice Risk Summary",
    category: "Billing",
    owner: "Leo Martins",
    status: "Ready",
    lastGenerated: "Jun 18, 2026",
    refreshCadence: "Daily",
    format: "Dashboard",
  },
  {
    id: "RPT-1005",
    name: "Executive KPI Brief",
    category: "Executive",
    owner: "Nina Patel",
    status: "Failed",
    lastGenerated: "Jun 14, 2026",
    refreshCadence: "Monthly",
    format: "PDF",
  },
  {
    id: "RPT-1006",
    name: "Service Queue Detail",
    category: "Operations",
    owner: "Ethan Walker",
    status: "Ready",
    lastGenerated: "Jun 18, 2026",
    refreshCadence: "Hourly",
    format: "CSV",
  },
];
