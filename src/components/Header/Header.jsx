import React from "react";
import { Link, useLocation } from "react-router-dom";

import { Badge } from "antd";
import {
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

import "./Header.css";

const Header = () => {
  const location = useLocation();
  // const {
  //   handleLogout,
  //   user: { email },
  // } = useAuth();

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
      title: "Services",
      link: "/services",
      id: 4,
    },
    {
      title: "Reviews",
      link: "/reviews",
      id: 5,
    },
    {
      title: "Reservation",
      link: "/reservation",
      id: 6,
    }
  ];
  return (
    <div className="header">
      <Link to="/" className="nav-logo">
        <img src="http://unionagency.one/delice/img/logo2.png" alt="logo" />
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
        {/* {email === "burul.baktybekova05@gmail.com" ? (
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
        ) : null} */}
      </div>
      <div className="nav-icons">
        <HeartOutlined
          style={{
            fontSize: "20px",
            cursor: "pointer",
            color: "black",
            marginLeft: "17px",
          }}
        />
        <Link to="/cart">
          <Badge count={5} size={"small"}>
            <ShoppingCartOutlined
              style={{
                fontSize: "23px",
                cursor: "pointer",
                color: "black",
                marginLeft: "17px",
              }}
            />
          </Badge>
        </Link>
        <Link to="/login"><UserOutlined
          style={{
            fontSize: "20px",
            cursor: "pointer",
            color: "black",
            marginLeft: "17px",
          }}
        />
        </Link>
      </div>
    </div>
  );
};

export default Header;
