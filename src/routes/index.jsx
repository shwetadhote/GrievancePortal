import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import Footer from "../components/footer";
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
      <Footer/>
    </BrowserRouter>
  );
};

export default Router;
