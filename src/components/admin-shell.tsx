import type { ReactNode } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const sidebarItems = [
  { label: "Dashboard", href: "/" },
  { label: "Work Orders", href: "/" },
  { label: "Customers", href: "/customers" },
  { label: "Assets", href: "/assets" },
  { label: "Billing", href: "/billing" },
  { label: "Reports", href: "/reports" },
  { label: "Settings", href: "/settings" },
  { label: "Scaffold Guide", href: "/scaffold" },
];

type AdminShellProps = {
  activeItem: string;
  children: ReactNode;
};

type SidebarNavigationProps = {
  activeItem: string;
};

function SidebarNavigation({ activeItem }: SidebarNavigationProps) {
  return (
    <nav className="flex flex-1 flex-col gap-1 px-3 py-4">
      {sidebarItems.map((item) => (
        <Link
          key={item.label}
          className={
            item.label === activeItem
              ? "rounded-lg bg-muted px-3 py-2 text-left text-sm font-medium text-foreground"
              : "rounded-lg px-3 py-2 text-left text-sm text-muted-foreground hover:bg-muted/70 hover:text-foreground"
          }
          href={item.href}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export function AdminShell({ activeItem, children }: AdminShellProps) {
  return (
    <div className="min-h-screen bg-muted/30">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-60 flex-col border-r bg-background md:flex">
        <div className="border-b px-5 py-5">
          <div className="text-lg font-semibold tracking-tight">OpsKit</div>
          <div className="text-xs text-muted-foreground">Admin Demo Kit</div>
        </div>
        <SidebarNavigation activeItem={activeItem} />
      </aside>

      <div className="md:pl-60">
        <header className="sticky top-0 z-20 flex h-14 items-center justify-between border-b bg-background/95 px-4 md:px-6">
          <div className="flex items-center gap-3">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="md:hidden">
                  Menu
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72 p-0 sm:max-w-xs">
                <div className="border-b px-5 py-5">
                  <SheetTitle className="text-lg font-semibold tracking-tight">
                    OpsKit
                  </SheetTitle>
                  <div className="text-xs text-muted-foreground">
                    Admin Demo Kit
                  </div>
                </div>
                <SidebarNavigation activeItem={activeItem} />
              </SheetContent>
            </Sheet>
            <div className="text-sm font-medium">Operations Workspace</div>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="hidden sm:inline">Search</span>
            <span className="hidden sm:inline">Notifications</span>
            <span className="font-medium text-foreground">Wang Li</span>
          </div>
        </header>

        <main className="px-4 py-6 md:px-6 md:py-8">{children}</main>
      </div>
    </div>
  );
}
