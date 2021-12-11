import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import HomePage from "./pages/HomePage";

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
    // {
    //     link:"/products",
    //     element:
    // }
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
