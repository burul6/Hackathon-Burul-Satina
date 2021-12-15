import React from "react";
import { Routes, Route } from "react-router-dom";

import AboutUs from "./components/AboutUs/AboutUs";
import Reservation from "./components/Reservation/Reservation";
import Services from "./pages/Services/Services";
import Review from './components/Review/Review';
import ProductList from './components/ProductList/ProductList';
import LoginPage from './components/Registration/LoginPage';
import HomePage from "./pages/Home/HomePage";
import AdminPage from "./pages/AdminPage";
import MenuList from "./components/MenuList/MenuList";
import ProductCart from "./components/Cart/ProductCart";
import CheckOut from "./components/CheckOut/CheckOut";
import PaymentCard from "./components/CheckOut/PaymentCard";

const Routing = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage /> ,
    },
    {
      link: "/about-us",
      element: <AboutUs />,
    },
    {
      link: "/menu",
      element: <MenuList />,
    },
    {
      link: "/services",
      element: <Services />,
    },
    {
      link: "/review",
      element: <Review />,
    },
    {
      link: "/reservation",
      element: <Reservation />,
    },
    {
      link: "/products",
      element: <ProductList />,
    },
    {
      link: "/login",
      element: <LoginPage />,
    },
    {
      link:"/cart",
      element: <ProductCart/>,
    },
    {
      link:"/check-out",
      element: <CheckOut/>,
    },{
      link:"/payment-card",
      element: <PaymentCard />
    }
  ];
  const ADMIN_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
  ];

  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} />
      ))}
      {ADMIN_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} />
      ))}
    </Routes>
  );
};

export default Routing;
