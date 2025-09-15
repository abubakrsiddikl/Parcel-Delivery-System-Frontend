import Analytics from "@/pages/Admin/AnalyticsPage";
import type { ISidebarItem } from "@/types";

export const senderSidebarItems: ISidebarItem[] = [
  {
    title: "Admin Dashboard",
    items: [
      {
        title: "Sender",
        url: "/admin/analytics",
        component: Analytics,
      },
    ],
  },
];
