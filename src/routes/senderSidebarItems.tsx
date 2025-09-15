import Analytics from "@/pages/Admin/Analytics";
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
