import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import AboutPage from "@/pages/AboutPage";

import AuthPage from "@/pages/Authentication/AuthPage";

import ContactPage from "@/pages/ContactPage";
import HomePage from "@/pages/HomePage";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";

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
      // admin dashboard
      {
        Component: DashboardLayout,
        path: "/admin",
        children: [...generateRoutes(adminSidebarItems)],
      },
    ],
  },
]);
