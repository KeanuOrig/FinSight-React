import { RouteObject, useRoutes } from "react-router-dom";

// Import your components/pages
import StockView from "views/StockView";
import NotFound from "views/NotFound";
import StockListView from "views/StockListView";
import HomeView from "views/HomeView";

// Define the route configuration
const routes: RouteObject[] = [
  { path: "/stock/list", element: <StockListView /> },
  { path: "/stock/:symbol", element: <StockView /> },
  { path: "/", element: <HomeView /> },
  { path: "*", element: <NotFound /> }, // Fallback for undefined routes
];

// Routes Component
export function AppRoutes() {
  const element = useRoutes(routes);
  return element;
};
