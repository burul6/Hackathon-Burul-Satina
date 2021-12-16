import React from "react";
import { Link } from "react-router-dom";

import { ParallaxProvider } from "react-scroll-parallax";
import Parallaximg from "../../Parallaximg/Parallaximg";

import {
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

import "./Reservation.css";

const Reservation = () => {
  return (
    <div className="reservation">
      <div className="main-reservation-banner">
        <div className="parallax-background">
          <ParallaxProvider>
            <Parallaximg
              imgsrc={
                "http://unionagency.one/delice/img/blog/main-baner-bg.jpg"
              }
              height="650px"
              opacity=".5"
            >
              <h1 style={{ position: "absolute" }}>Book A Table</h1>
              <p style={{ position: "absolute" }}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                <br></br>cillum dolore eu fugiat nulla pariatur.
              </p>
            </Parallaximg>
          </ParallaxProvider>
        </div>
      </div>

      <div class="book-container">
        <div class="container-time">
          <h2 class="heading" style={{ color: "#fff" }}>
            Time Open
          </h2>
          <h3 class="heading-days">Monday-Friday</h3>
          <p>7am - 11am (breakfast)</p>
          <p>11am - 11pm (lunch/dinner)</p>

          <h3 class="heading-days">Saturday and sunday</h3>
          <p>9am - 1am (breakffast)</p>
          <p>1am - 10pm (lunch/dinner)</p>

          <h4 class="heading-phone" style={{ color: "#fff" }}>
            Call Us: (123) 45-45-456
          </h4>
        </div>

        <div class="container-form">
          <form action="#">
            <h2 class="heading heading-yellow">RESERVATION ONLINE</h2>

            <div class="form-field">
              <p>Your Name</p>
              <input type="text" placeholder="Your Name" />
            </div>
            <div class="form-field">
              <p>Your email</p>
              <input type="email" placeholder="Your email" />
            </div>
            <div class="form-field">
              <p>Date</p>
              <input type="date" />
            </div>
            <div class="form-field">
              <p>Time</p>
              <input type="time" />
            </div>
            <div class="form-field">
              <p>How many people?</p>
              <select name="select" id="#">
                <option value="1">1 person</option>
                <option value="2">2 persons</option>
                <option value="3">3 persosn</option>
                <option value="4">4 persons</option>
                <option value="5">5 persons</option>
                <option value="5+">5+ persons</option>
              </select>
            </div>
            <Link to="/payment-card"><button class="btn">Submit</button></Link>
          </form>
        </div>
      </div>

      <section className="contacts-section">
        <div className="contacts">
          <h2>Contact Us</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore<br></br>eu fugiat nulla pariatur.
          </p>
          <h4>WORKING TIME</h4>
          <span>
            <p>
              Ut enimex ea ad minim veniam, quis nostrud<br></br>exercitation
              ullamco laboris.
            </p>
          </span>
          <div className="timetable">
            <p>Monday - Friday ---------------- 07:00 - 23:00</p>
            <p>Saturday ----------------------- 09:00 - 01:00</p>
            <p>Sunday ------------------------- 09:00 - 22:00</p>
          </div>
        </div>
        <div className="info">
          <div className="col1">
            <h3>MANHATTAN</h3>
            <p>71 Madison Ave</p>
            <p>+914-309-7011 , 914-329-2131</p>
            <p>delice.info@mail.com</p>
          </div>

          <div className="col2">
            <h3>RAHWAY</h3>
            <p>150 Duffy Ave, Hicksville, NY 11801, USA</p>
            <p>+38 056 23 15 7851</p>
            <p>delice.info@mail.com</p>
          </div>

          <div className="col3">
            <h3>BROOKLIN</h3>
            <p>189 Duffy Ave, NY 11801</p>
            <p>+914-309-7011</p>
            <p>delice.info@mail.com</p>
          </div>

          <div className="col4">
            <h3>NEW JERSEY</h3>
            <p>50 Madison Ave</p>
            <p>+914-329-2131</p>
            <p>delice.info@mail.com</p>
          </div>
        </div>

        <div className="follow-us">
          <h4>FOLLOW US</h4>
          <div className="follow-icons">
            <a>
              <InstagramOutlined />
            </a>
            <a>
              <FacebookOutlined />
            </a>
            <a>
              <TwitterOutlined />
            </a>
            <a>
              <YoutubeOutlined />
            </a>
            <a>
              <WhatsAppOutlined />
            </a>
          </div>
        </div>
      </section>

      <section className="location-map">
        <div className="responsive-map">
          <iframe
            style={{ width: "", height: "200", frameborder: "0", border: "0" }}
            allowfullscreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889"></iframe>
        </div>
      </section>
    </div>
  );
};

export default Reservation;
