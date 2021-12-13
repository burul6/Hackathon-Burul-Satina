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
      </div>

      <section>
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

          {/* <div className="second-hero">
            <div className="hero__left-part2">
              <img
                src="http://unionagency.one/delice/img/services/service-2.jpg"
                alt="service-2"
              />
            </div>
            <div className="hero__right-part2"></div>
            <h2>Order the restaurant</h2>
            <h3>FOR THE WEDDING</h3>
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

          </div> */}
        </div>
      </section>
      </>
  );
};

export default Services;
