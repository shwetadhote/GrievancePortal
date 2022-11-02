import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import PaginationNavbar from "../components/navbar";
import Routes from "./routes";

const RouterOutlet = () => {
  const routes = useRoutes(Routes);

  return routes;
};

const Router = () => {
  return (
    <BrowserRouter>
      <PaginationNavbar />
      <RouterOutlet />
    </BrowserRouter>
  );
};

export default Router;
