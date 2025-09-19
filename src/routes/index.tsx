import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import AboutPage from "@/pages/AboutPage";

import AuthPage from "@/pages/Authentication/AuthPage";

import ContactPage from "@/pages/ContactPage";
import HomePage from "@/pages/HomePage";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import UnauthorizedPage from "@/pages/Unauthorized";
import { withAuth } from "@/utils/withAuth";
import { Role } from "@/constants/role.constants";
import type { TRole } from "@/types";
import { senderSidebarItems } from "./senderSidebarItems";
import { receiverSidebarItems } from "./receiverSidebarItems";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        Component: ContactPage,
        path: "/contact",
      },
      {
        Component: AboutPage,
        path: "/about",
      },
      //   auths
      {
        Component: AuthPage,
        path: "/login",
      },
    ],
  },
  // admin dashboard
  {
    Component: withAuth(DashboardLayout, Role.ADMIN as TRole),
    path: "/admin",
    children: [
      { index: true, element: <Navigate to="/admin/analytics" /> },
      ...generateRoutes(adminSidebarItems),
    ],
  },
  // sender route
  {
    Component: withAuth(DashboardLayout, Role.SENDER as TRole),
    path: "/sender",
    children: [
      { index: true, element: <Navigate to="/sender/analytics" /> },
      ...generateRoutes(senderSidebarItems),
    ],
  },
  // receiver route
  {
    Component: withAuth(DashboardLayout, Role.RECEIVER as TRole),
    path: "/receiver",
    children: [
      { index: true, element: <Navigate to="/receiver/analytics" /> },
      ...generateRoutes(receiverSidebarItems),
    ],
  },
  {
    Component: UnauthorizedPage,
    path: "/unauthorized",
  },
]);
