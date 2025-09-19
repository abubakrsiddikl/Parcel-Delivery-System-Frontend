import Analytics from "@/pages/Admin/AnalyticsPage";
import AddParcelPage from "@/pages/Sender/AddParcelPage";
import type { ISidebarItem } from "@/types";

export const senderSidebarItems: ISidebarItem[] = [
  {
    title: "Sender Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/sender/analytics",
        component: Analytics,
      },
      {
        title: "Add New Parcel",
        url: "/sender/add-new-parcel",
        component: AddParcelPage,
      },
    ],
  },
];
