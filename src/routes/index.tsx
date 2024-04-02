import type { RouteObject } from "react-router-dom";
import { Navigate, useRoutes } from "react-router-dom";
import { loadable } from "./utils";

const Farther = loadable(() => import("~/pages/farther"));
const Son = loadable(() => import("~/pages/son"));
const GrandPa = loadable(() => import("~/pages/grandPa"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/grandPa" />,
  },
  {
    path: "grandPa",
    element: <GrandPa />,
  },
  {
    path: "farther",
    element: <Farther />,
  },
  {
    path: "son",
    element: <Son />,
  },
];

export default function AppRoutes() {
  return useRoutes(routes);
}
