import React from "react";

import { ParallaxProvider } from "react-scroll-parallax";
import Parallaximg from "../../Parallaximg/Parallaximg";

import "./Reservation.css";

const Reservation = () => {
  return (
      
    //   <div>
    //     <div className="parallax-background">
    //       <ParallaxProvider>
    //         <Parallaximg
    //           imgsrc={
    //             "http://unionagency.one/delice/img/blog/main-baner-bg.jpg"
    //           }
    //           height="650px"
    //           opacity=".5"
    //         >
    //           <h1 style={{ position: "absolute" }}>Our Services</h1>
    //           <p style={{ position: "absolute" }}>
    //             Duis aute irure dolor in reprehenderit in voluptate velit esse
    //             <br></br>cillum dolore eu fugiat nulla pariatur.
    //           </p>
    //         </Parallaximg>
    //       </ParallaxProvider>
    //     </div>
    //   </div>

    <>
    <div class="book-container">
        <div class="container-time">
            <h2 class="heading" style={{ color: "#fff"}}>Time Open</h2>
            <h3 class="heading-days">Monday-Friday</h3>
            <p>7am - 11am (breakfast)</p>
            <p>11am - 10pm (lunch/dinner)</p>

            <h3 class="heading-days">Saturday and sunday</h3>
            <p>9am - 1am (breakffast)</p>
            <p>1am - 10pm (lunch/dinner)</p>

            <h4 class="heading-phone" style={{ color: "#fff"}}>Call Us: (123) 45-45-456</h4>
        </div>

        <div class="container-form">
            <form action="#">
                <h2 class="heading heading-yellow">Reservation Online</h2>

                <div class="form-field">
                    <p>Your Name</p>
                    <input type="text" placeholder="Your Name"/>
                </div>
                <div class="form-field">
                    <p>Your email</p>
                    <input type="email" placeholder="Your email"/>
                </div>
                <div class="form-field">
                    <p>Date</p>
                    <input type="date"/>
                </div>
                <div class="form-field">
                    <p>Time</p>
                    <input type="time"/>
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
                <button class="btn">Submit</button>
            </form>
        </div>
    </div>


    </>
  );
};

export default Reservation;

