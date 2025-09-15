import { Role } from "@/constants/role.constants";
import { adminSidebarItems } from "@/routes/adminSidebarItems";
import { senderSidebarItems } from "@/routes/senderSidebarItems";
import type { TRole } from "@/types";

export const getSidebarItems = (userRole: TRole) => {
  switch (userRole) {
    case Role.ADMIN:
      return [...adminSidebarItems];
    case Role.SENDER:
      return [...senderSidebarItems];

    default:
      return [];
  }
};
