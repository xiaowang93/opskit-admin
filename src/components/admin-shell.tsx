import type { ReactNode } from "react";
import Link from "next/link";

const sidebarItems = [
  { label: "Dashboard", href: "/" },
  { label: "Work Orders", href: "/" },
  { label: "Customers", href: "/customers" },
  { label: "Assets", href: "#" },
  { label: "Billing", href: "#" },
  { label: "Reports", href: "#" },
  { label: "Settings", href: "#" },
];

type AdminShellProps = {
  activeItem: string;
  children: ReactNode;
};

export function AdminShell({ activeItem, children }: AdminShellProps) {
  return (
    <div className="min-h-screen bg-muted/30">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-60 flex-col border-r bg-background md:flex">
        <div className="border-b px-5 py-5">
          <div className="text-lg font-semibold tracking-tight">OpsKit</div>
          <div className="text-xs text-muted-foreground">Admin Demo Kit</div>
        </div>
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
      </aside>

      <div className="md:pl-60">
        <header className="sticky top-0 z-20 flex h-14 items-center justify-between border-b bg-background/95 px-6">
          <div className="text-sm font-medium">Operations Workspace</div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Search</span>
            <span>Notifications</span>
            <span className="font-medium text-foreground">Wang Li</span>
          </div>
        </header>

        <main className="px-6 py-8">{children}</main>
      </div>
    </div>
  );
}
