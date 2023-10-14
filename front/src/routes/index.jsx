import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { lazy } from "react";

import { useUser } from "../hooks";

const Homepage = lazy(() => import("../pages/Homepage"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const HomeSection = lazy(() => import("../pages/HomeSection"));
const MyDesigns = lazy(() => import("../pages/Mydesigns"));
const Customizer = lazy(() => import("../pages/Customizer"));
const NotFound = lazy(() => import("../pages/NotFound"));

export default function Routes() {
  const { user } = useUser();
  return useRoutes([
    {
      path: "/",
      element: <Homepage />,
      children: [
        { path: "", element: <HomeSection /> },
        {
          path: "/mydesigns",
          element: user ? <MyDesigns /> : <Navigate to={"/login"} replace />,
        },
        {
          path: "/create",
          element: user ? <Customizer /> : <Navigate to={"/login"} replace />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to={"/"} replace /> : <Login />,
    },
    {
      path: "/register",
      element: user ? <Navigate to={"/"} replace /> : <Register />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
}
