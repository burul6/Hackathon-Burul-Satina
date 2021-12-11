import React from "react";
import { Link } from "react-router-dom";

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
      title: "Reservation",
      link: "/reservation",
      id: 5,
    },
    {
      title: "Contacts",
      link: "/Contacts",
      id: 6,
    },
  ];
  return (
      <div>
          {NAV_ITEMS.map((item) => (
          <Link
            to={item.link}
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
  )
};

export default Header;
