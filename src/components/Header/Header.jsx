import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Badge } from "antd";
import {
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";

import { useAuthState } from "react-firebase-hooks/auth";

import { cartContext } from "../../contexts/cartContext";
import { favoriteContext } from "../../contexts/favoriteContext";
import { useAuth } from "../../contexts/authContext";
import { googleContext } from "../..";

import "./Header.css";

const Header = () => {
  const location = useLocation();

  const { auth } = useContext(googleContext);
  const [user] = useAuthState(auth);
  console.log(user);

  const { getCart, cartLength } = useContext(cartContext);
  useEffect(() => {
    getCart();
  }, []);
  const { getFav, fav } = useContext(favoriteContext);
  useEffect(() => {
    getFav();
  }, []);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const NAV_ITEMS = [
    {
      title: "Home",
      link: "/",
      id: 1,
    },
    {
      title: "About Us",
      link: "/about-us",
      id: 2,
    },
    {
      title: "Menu",
      link: "/menu",
      id: 3,
    },
    {
      title: "Shop",
      link: "/shop",
      id: 4,
    },
    {
      title: "Services",
      link: "/services",
      id: 5,
    },
    {
      title: "Reviews",
      link: "/reviews",
      id: 6,
    },
    {
      title: "Reservation",
      link: "/reservation",
      id: 7,
    },
  ];

  return (
    <div className="header">
      <Link to="/" className="nav-logo">
        <img src="http://unionagency.one/delice/img/logo2.png" alt="logo" />
      </Link>

      <div className="navbar" className={click ? "navbar__item-active" : "navbar__item"}>
        {NAV_ITEMS.map((item) => (
          <Link
            to={item.link}
            className={
              location.pathname === item.link
                ? "navbar__item-active"
                : "navbar__item"
            }
          >
            {item.title}
          </Link>
        ))}
        <div className="hamburger" onClick={handleClick}>
          {click ? <CloseOutlined style={{color: "black"}}/> : <MenuOutlined style={{color: "black"}}/>}
        </div>
        {user === "taalaybekovasatina@gmail.com" ? (
          <Link
            to="/admin"
            className={
              location.pathname === "/admin"
                ? "navbar__item-active"
                : "navbar__item"
            }
          >
            ADMIN
          </Link>
        ) : null}
      </div>
      <div className="nav-icons">
        <Link to="/favorite">
          <HeartOutlined
            style={{
              color: fav ? "red" : "white",
              fontSize: "20px",
              cursor: "pointer",
              color: "black",
              marginLeft: "17px",
            }}
          />
        </Link>
        <Link to="/cart">
          <Badge
            count={+cartLength}
            size={"small"}
            style={{ backgroundColor: "#be9a67" }}
          >
            <ShoppingCartOutlined
              style={{
                fontSize: "25px",
                cursor: "pointer",
                marginLeft: "15px",
              }}
            />
          </Badge>
        </Link>
        <Link to="/login">
          {user ? (
            <UserOutlined
              style={{
                fontSize: "20px",
                cursor: "pointer",
                color: "orange",
                marginLeft: "17px",
              }}
            />
          ) : (
            <UserOutlined
              style={{
                fontSize: "20px",
                cursor: "pointer",
                color: "black",
                marginLeft: "17px",
              }}
            />
          )}
        </Link>
      </div>
    </div>
  );
};

export default Header;
