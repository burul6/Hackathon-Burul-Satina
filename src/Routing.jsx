import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services/Services";

const Routing = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
    },
    {
      link: "/about-us",
      element: <AboutUs />,
    },
    {
      link:"/services",
      element: <Services />
    },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} />
      ))}
    </Routes>
  );
};

export default Routing;
