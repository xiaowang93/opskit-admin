import { AdminShell } from "@/components/admin-shell";
import { DataTableCard } from "@/components/data-table-card";
import { LoadingState } from "@/components/loading-state";
import { PageHeader } from "@/components/page-header";
import { StatusBadge } from "@/components/status-badge";
import { SummaryCardGrid } from "@/components/summary-card-grid";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  notificationSystemRules,
  rolePermissionRules,
  workspaceProfile,
} from "@/data/settings";

const summaryCards = [
  {
    label: "Workspace Status",
    value: "Active",
    description: "Workspace is available",
  },
  {
    label: "Active Roles",
    value: 6,
    description: "Configured permission roles",
  },
  {
    label: "Notification Rules",
    value: 12,
    description: "Automation rules enabled",
  },
  {
    label: "Audit Checks",
    value: 24,
    description: "Controls reviewed this month",
  },
];

export default function SettingsPage() {
  return (
    <AdminShell activeItem="Settings">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <PageHeader
          title="Settings"
          description="Manage workspace configuration, permissions, notification rules, and system controls."
          actions={<Button>Save Changes</Button>}
        />

        <SummaryCardGrid items={summaryCards} />

        <Card>
          <CardHeader>
            <CardTitle>Workspace Profile</CardTitle>
            <CardDescription>
              Static workspace defaults and operational configuration.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <dl className="grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
              {workspaceProfile.map((item) => (
                <div key={item.label} className="grid gap-1">
                  <dt className="text-muted-foreground">{item.label}</dt>
                  <dd className="font-medium">{item.value}</dd>
                </div>
              ))}
            </dl>
          </CardContent>
        </Card>

        <DataTableCard
          title="Role & Permission Rules"
          description="Static access rules for common workspace roles."
          searchPlaceholder="Search by role, access level, or status"
          columns={["Role", "Access Level", "Users", "Status"]}
          rows={rolePermissionRules.map((rule) => [
            rule.role,
            rule.accessLevel,
            rule.users,
            <StatusBadge key={`${rule.role}-status`} status={rule.status} />,
          ])}
        />

        <DataTableCard
          title="Notification & System Rules"
          description="Static automation rules for operational notifications and controls."
          searchPlaceholder="Search by rule, channel, trigger, or status"
          columns={["Rule", "Channel", "Trigger", "Status"]}
          rows={notificationSystemRules.map((rule) => [
            rule.rule,
            rule.channel,
            rule.trigger,
            <StatusBadge key={`${rule.rule}-status`} status={rule.status} />,
          ])}
        />

        <section className="grid gap-3">
          <h2 className="text-base font-medium">System Sync Status</h2>
          <LoadingState
            title="Syncing system controls"
            description="Permission rules, notification settings, and audit checks are being prepared."
          />
        </section>
      </div>
    </AdminShell>
  );
}
