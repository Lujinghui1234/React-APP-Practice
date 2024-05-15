import type { RouteObject } from "react-router-dom";
import { Navigate, useRoutes } from "react-router-dom";
import { loadable } from "./utils";

const Farther = loadable(
  () => import("~/pages/farther")
);
const Son = loadable(
  () => import("~/pages/son")
);
const ProductTable = loadable(() => import("~/pages/productTable"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/farther" />,
  },
  {
    path: "farther",
    element: <Farther />,
  },
  {
    path: "son",
    element: <Son />,
  },
  {
    path: "productTable",
    element: <ProductTable />,
  },
];

export default function AppRoutes() {
  return useRoutes(routes);
}
