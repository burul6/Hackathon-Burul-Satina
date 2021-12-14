import React from "react";

import { ParallaxProvider } from "react-scroll-parallax";
import Parallaximg from "../../Parallaximg/Parallaximg";

import "./Services.css";

const Services = () => {
  return (
      <>
    <div>
      <div className="parallax-background">
        <ParallaxProvider>
          <Parallaximg
            imgsrc={
              "http://unionagency.one/delice/img/services/main-baner-bg.jpg"
            }
            height="650px"
            
            opacity=".5"
          >
            <h1 style={{ position: "absolute" }}>Our Services</h1>
            <p style={{ position: "absolute" }}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              <br></br>cillum dolore eu fugiat nulla pariatur.
            </p>
          </Parallaximg>
        </ParallaxProvider>
      </div>
  

      <section className="service-1">
        <div className="container hero">
          <div className="hero__left">
            <h2>Additional payment for</h2>
            <h3>WORK AFTER 11 P.M.</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum<br></br>dolore eu fugiat nulla pariatur.
            </p>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do
              eiusmod<br></br>tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam,<br></br>quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo<br></br>consequat.
            </span>
          </div>
          <div className="hero__right">
            <img
              src="http://unionagency.one/delice/img/services/service-1.jpg"
              alt="service-1"
            />
          </div>
        </div>
      </section>

      <section className="service-2">
        <div className="container hero">
            <div className="hero__left-part2">
              <img
                src="http://unionagency.one/delice/img/services/service-2.jpg"
                alt="service-2"
              />
            </div>
            <div className="hero__right-part2">
            <h2>Order the restaurant</h2>
            <h3>FOR THE WEDDING</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <br></br>labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </span>
            </div>
          </div>
      </section>

      <section className="service-3">
        <div className="container hero">
          <div className="hero__left-part3">
            <h2>There’s available</h2>
            <h3>THE VIP ROOM</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum<br></br>dolore eu fugiat nulla pariatur.
            </p>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do
              eiusmod<br></br>tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo<br></br>consequat.
            </span>
          </div>
          <div className="hero__right-part3">
            <img
              src="http://unionagency.one/delice/img/services/service-3.jpg"
              alt="service-3"
            />
          </div>
        </div>
      </section>

      <section className="service-4">
        <div className="container hero">
            <div className="hero__left-part4">
              <img
                src="http://unionagency.one/delice/img/services/service-4.jpg"
                alt="service-4"
              />
            </div>
            <div className="hero__right-part4">
            <h2>We can provide you with</h2>
            <h3>LIVE MUSIC ORDER</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <br></br>labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </span>
            </div>
          </div>
      </section>
      </div>
    </>
  );
};

export default Services;
