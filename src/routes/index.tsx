import App from "@/App";
import AboutPage from "@/pages/AboutPage";
import AuthPage from "@/pages/Authentication/AuthPage";

import ContactPage from "@/pages/ContactPage";
import HomePage from "@/pages/HomePage";
import { createBrowserRouter } from "react-router";

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
]);
