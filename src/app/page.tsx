"use client";

import { useState } from "react";

import { AdminShell } from "@/components/admin-shell";
import { CreateWorkOrderDrawer } from "@/components/create-work-order-drawer";
import { PageHeader } from "@/components/page-header";
import { WorkOrderSummaryCards } from "@/components/work-order-summary-cards";
import { WorkOrderDetailDrawer } from "@/components/work-order-detail-drawer";
import { WorkOrderFilterDrawer } from "@/components/work-order-filter-drawer";
import { WorkOrdersTable } from "@/components/work-orders-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { workOrders, type WorkOrder } from "@/data/work-orders";

const tabs = ["All", "Open", "Assigned", "In Progress", "Review", "Completed"];

export default function Home() {
  const [selectedWorkOrder, setSelectedWorkOrder] =
    useState<WorkOrder | null>(null);

  return (
    <AdminShell activeItem="Work Orders">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <PageHeader
          title="Work Orders"
          description="Track, assign, and review operational work orders."
          actions={<CreateWorkOrderDrawer />}
        />

        <WorkOrderSummaryCards />

        <Tabs defaultValue="All" className="gap-4">
          <TabsList className="flex h-auto w-full flex-wrap justify-start sm:w-fit">
            {tabs.map((tab) => (
              <TabsTrigger key={tab} value={tab}>
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>

          <Card>
            <CardHeader>
              <CardTitle>Work order queue</CardTitle>
              <CardDescription>
                A static overview of current operational requests.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col gap-2 sm:flex-row">
                <Input
                  aria-label="Search work orders"
                  className="sm:flex-1"
                  placeholder="Search by ID, title, customer, or assignee"
                />
                <WorkOrderFilterDrawer />
              </div>

              <WorkOrdersTable
                workOrders={workOrders}
                onViewDetails={setSelectedWorkOrder}
              />

              <WorkOrderDetailDrawer
                workOrder={selectedWorkOrder}
                open={selectedWorkOrder !== null}
                onOpenChange={(open) => {
                  if (!open) {
                    setSelectedWorkOrder(null);
                  }
                }}
              />
            </CardContent>
          </Card>
        </Tabs>
      </div>
    </AdminShell>
  );
}
