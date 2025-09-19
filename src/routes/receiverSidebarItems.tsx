import Analytics from "@/pages/Admin/AnalyticsPage";
import ViewIncomingParcels from "@/pages/Receiver/ViewIncomingParcels";

import type { ISidebarItem } from "@/types";

export const receiverSidebarItems: ISidebarItem[] = [
  {
    title: "Receiver Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/receiver/analytics",
        component: Analytics,
      },
      {
        title: "View Incoming Parcels",
        url: "/receiver/incoming-parcels",
        component: ViewIncomingParcels,
      },
    ],
  },
];
