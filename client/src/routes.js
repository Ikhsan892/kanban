import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
import Layout from "./layouts/DashboardLayout";
const routes = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/home" />,
  },
//   {
//     path: "/error",
//     component: ErrorLayout,
//   },
  {
    route: "*",
    component: Layout,
    routes: [
      {
        path: "/home",
        exact: true,
        component: lazy(() => import("./pages/Home")),
      },
     //  {
     //    component: () => <Redirect to="/error" />,
     //  },
    ],
  },
];

export default routes;
