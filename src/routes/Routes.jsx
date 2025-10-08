import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";
import Apps from "../components/appss/Apps";
import AppDetails from "../pages/appDetails/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "appDetails/:id",
        element: <AppDetails />,
        loader: async () => {
          const res = await fetch("/data.json");
          return res.json();
        },
      },
    ],
  },
]);
