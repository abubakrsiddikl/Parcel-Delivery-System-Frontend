import AnalyticsPage from "@/pages/Admin/AnalyticsPage";
import ManageAllUserPage from "@/pages/Admin/ManageAllUserPage";
import type { ISidebarItem } from "@/types";

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Admin Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/admin/analytics",
        component: AnalyticsPage,
      },
      {
        title: "Manage All User",
        url: "/admin/manage-all-users",
        component: ManageAllUserPage,
      },
    ],
  },
];
