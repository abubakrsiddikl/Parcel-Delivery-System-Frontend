import Analytics from "@/pages/Admin/Analytics";
import type { ISidebarItem } from "@/types";

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Admin Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/admin/analytics",
        component: Analytics,
      },
    ],
  },
];
