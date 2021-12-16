import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Badge, Menu, Dropdown } from "antd";
import {
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  MenuOutlined,
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

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to="/about-us">About Us</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/menu">Menu</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/shop">Shop</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/services">Services</Link>
      </Menu.Item>
      <Menu.Item key="5">
        <Link to="/reviews">Reviews</Link>
      </Menu.Item>
      <Menu.Item key="6">
        <Link to="/reservation">Reservation</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="header">
      <Link to="/" className="nav-logo">
        <img src="http://unionagency.one/delice/img/logo2.png" alt="logo" style={{width: "103px",
    height: "33px"}} />
      </Link>

      <div className="navbar">
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
        <Dropdown overlay={menu} trigger={["click"]}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            <MenuOutlined style={{color: "black", fontSize: "20px", marginLeft: "17px"}}/>
          </a>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
