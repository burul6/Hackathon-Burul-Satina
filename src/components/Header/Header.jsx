import React from "react";
import { Link } from "react-router-dom";

import { Badge } from "antd";
import {
  SearchOutlined,
  StarOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

import "./Header.css";

const Header = () => {
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
      link: "/Reviews",
      id: 5,
    },
    {
      title: "Reservation",
      link: "/reservation",
      id: 6,
    },
    {
      title: "Contacts",
      link: "/contacts",
      id: 7,
    },
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
            className="navbar__item"
            // className={
            //   location.pathname === item.link
            //     ? "navbar__item-active"
            //     : "navbar__item"
            // }
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="nav-icons">
        <SearchOutlined
          style={{
            fontSize: "20px",
            cursor: "pointer",
            color: "black",
            marginRight: "25px",
          }}
        />
        <StarOutlined
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
        <UserOutlined
          style={{
            fontSize: "20px",
            cursor: "pointer",
            color: "black",
            marginLeft: "17px",
          }}
        />
      </div>
    </div>
  );
};

export default Header;
