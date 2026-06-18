"use client";

import { useState } from "react";

import { AdminShell } from "@/components/admin-shell";
import { BillingDetailDrawer } from "@/components/billing-detail-drawer";
import { DataTableCard } from "@/components/data-table-card";
import { PageHeader } from "@/components/page-header";
import { SummaryCardGrid } from "@/components/summary-card-grid";
import { StatusBadge } from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { billingRecords, type BillingRecord } from "@/data/billing";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const summaryCards = [
  {
    label: "Total Revenue",
    value: currencyFormatter.format(
      billingRecords.reduce((total, record) => total + record.amount, 0)
    ),
    description: "Across current invoices",
  },
  {
    label: "Due Invoices",
    value: billingRecords.filter((record) => record.status === "Due").length,
    description: "Awaiting payment",
  },
  {
    label: "Overdue",
    value: billingRecords.filter((record) => record.status === "Overdue")
      .length,
    description: "Past due date",
  },
  {
    label: "Failed Payments",
    value: billingRecords.filter((record) => record.status === "Failed").length,
    description: "Need payment recovery",
  },
];

export default function BillingPage() {
  const [selectedBillingRecord, setSelectedBillingRecord] =
    useState<BillingRecord | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  function handleViewDetails(billingRecord: BillingRecord) {
    setSelectedBillingRecord(billingRecord);
    setIsDetailOpen(true);
  }

  return (
    <AdminShell activeItem="Billing">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <PageHeader
          title="Billing"
          description="Monitor invoices, payment status, and recurring revenue signals."
          actions={<Button>Create Invoice</Button>}
        />

        <SummaryCardGrid items={summaryCards} />

        <DataTableCard
          title="Invoice queue"
          description="A static overview of invoices and payment readiness."
          searchPlaceholder="Search by invoice ID, customer, or plan"
          columns={[
            "Invoice ID",
            "Customer",
            "Plan",
            "Status",
            "Amount",
            "Due Date",
            "Payment Method",
            "Last Updated",
            "Actions",
          ]}
          rows={billingRecords.map((record) => [
            record.invoiceId,
            record.customer,
            record.plan,
            <StatusBadge
              key={`${record.invoiceId}-status`}
              status={record.status}
            />,
            currencyFormatter.format(record.amount),
            record.dueDate,
            record.paymentMethod,
            record.lastUpdated,
            <Button
              key={`${record.invoiceId}-action`}
              variant="outline"
              size="sm"
              onClick={() => handleViewDetails(record)}
            >
              View Details
            </Button>,
          ])}
        />

        <BillingDetailDrawer
          billingRecord={selectedBillingRecord}
          open={isDetailOpen}
          onOpenChange={setIsDetailOpen}
        />
      </div>
    </AdminShell>
  );
}
