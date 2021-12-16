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

import DetailsProduct from "./components/DetailsProduct/DetailsProduct";
import EditProduct from "./components/EditProduct/EditProduct";

import ProductCart from "./components/Cart/ProductCart";
import CheckOut from "./components/CheckOut/CheckOut";
import PaymentCard from "./components/CheckOut/PaymentCard";
import Favorite from "./components/Favorite/Favorite";


const Routing = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage /> ,
      id: 1,
    },
    {
      link: "/about-us",
      element: <AboutUs />,
      id: 2,
    },
    {
      link: "/menu",
      element: <MenuList />,
      id: 3,
    },
    {
      link: "/menu",
      element: <MenuList />,
    },
    {
      link: "/services",
      element: <Services />,
      id: 4,
    },
    {
      link: "/reviews",
      element: <Review />,
      id: 5, 
    },
    {
      link: "/reservation",
      element: <Reservation />,
      id: 6,
    },
    {
      link: "/shop",
      element: <ProductList />,
      id: 7,
    },
    {
      link: "/products/:id",
      element: <DetailsProduct />,
      id: 8,
    },
    {
      link: "/login",
      element: <LoginPage />,
      id: 9,
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
    },{
      link:"/favorite",
      element: <Favorite/>
    }
  ];
  const ADMIN_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
    {
      link: "/edit/:id",
      element: <EditProduct /> ,
      id: 2,
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
