import React from "react";
import './HomePage.css'
import { ParallaxProvider } from "react-scroll-parallax";
import Parallaximg from "../../Parallaximg/Parallaximg";

const HomePage = () => {
    return (
        <div className='main-content'>
            <section className='full-height-slider'>
                <div className='swipper-container'>
                    <div className='slider'>
                        <div className='slider-first'>
                            <div className='slider-first-back'></div>
                        </div>
                        <div className='slider-table'>
                            <div className='table-cell'>
                                <div className='table-container'>
                                    <div className='table-text'>
                                        <div className='welcome-text'>Welcome</div>
                                        <div  style={{fontSize: "50px", color: "white",marginTop: "80px", fontWeight:"800"}}>HIGH QUALITY MEALS</div>
                                        <div style={{fontSize: "19px", color: "rgba(255,255,255,0.6)", marginTop: "15px"}}> Ultrices eget justo. Nam purus lacus, efficitur eget laoreet sed, finibus nec neque. <br /> Cras eget enim in diam dapibus sagittis. In massa est, <br /> dignissim in libero ac, fringilla ornare.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='slider-first'></div>
                        <div className='slider-first'></div>
                    </div>
                </div>
            </section>
            <section className='aboutus-home'>
                <div className='inner-aboutus'>
                    <div style={{width:"100%", display:"flex", clip: "rect(0px, 1278px, 679px, 0)"}}>
                        <div  className="aboutUs-leftphoto" style={{width:"20%"}}>
                            <img  style={{width:"100%"}} src="http://unionagency.one/delice/img/home-1/about_home_1_img_1.jpg" alt="" />
                        </div>
                        <div className="center-text-home">
                            <div className='about-us-center'>About Us</div>
                            <div style={{color:"#464646", fontSize:"19px", marginBottom:"15px", lineHeight:"24px"}}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum <br /> dolore eu fugiat nulla pariatur.</div>
                            <div style={{color:"#898989", lineHeight:"24px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br /> quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo <br /> consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse <br /> dolore eu fugiat nulla pariatur. Sint occaecat cupidatat non proident, culpa qui <br /> officia deserunt mollit anim id est laborum ullamco.</div>
                            <div style={{width:"100%", marginTop:"40px"}}>
                                <img style={{position: "relative", cursor: "pointer"}} src="http://unionagency.one/delice/img/home-1/button_img_3.jpg" alt="" />
                                <span style={{position:"absolute", position: "absolute",
                                            marginLeft: "-124px",
                                            color: "white",
                                            cursor: "pointer",
                                            marginTop: "15px",
                                            fontWeight: "700"}}>
                                    ABOUT US
                                </span>
                            </div>
                        </div>
                        <div className="aboutUs-leftphoto" style={{width:"20%"}}>
                            <img  style={{width:"100%"}} src="http://unionagency.one/delice/img/home-1/about_home_1_img_2.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <ParallaxProvider>
          <Parallaximg
            imgsrc={
              "http://unionagency.one/delice/img/home-1/section_home1_bg_1.jpg"
            }
            height="650px"
            
            opacity=".5"
          >
            <section className='third-homepage-section' style={{position: "relative"}}>
                <div className='homepage-empty'></div>
                <div className='third-homepage-container' style={{position:"relative"}}>
                    <div className='inner-third-homepage'>
                        <div className='inner-homepage-back' style={{width:"100%", backgroundColor:"black"}}>
                            {/* <img style={{width:"40%", opacity:"0.5"}} src="http://unionagency.one/delice/img/home-1/section_home1_bg_1.jpg" alt="" /> */}
                        </div>
                    </div>
                    <div className='inner-third-text'>
                        <div className='inner-third-menu'>MENU</div>
                        <div className='about-us-center'>Hight quality meals</div>
                        <div style={{color:"#898989", lineHeight:"24px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore.</div>
                    </div>
                </div>
            </section>
            </Parallaximg>
        </ParallaxProvider>
            <section className='four-homepage' style={{backgroundColor:"white"}}>
                <div>
                    <div>
                        <div className="our-menu">Our Menus</div>
                        <div style={{textAlign:"center", color:"#898989", lineHeight:"24px", fontSize:"17px"}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem ab illo <br /> accusantium doloremque laudantium, rem aperiamquae</div>
                    </div>
                    <div className="menu-list">
                        <div className="menulist-photo">
                            <img className="menu-list-img" src="http://unionagency.one/delice/img/home-1/menu_item_1.jpg" alt="" />
                            <h4>DESSERTS</h4>
                        </div>
                        <div className="menulist-photo">
                            <img className="menu-list-img" src="http://unionagency.one/delice/img/home-1/menu_item_2.jpg" alt="" />
                            <h4>BREAKFAST</h4>
                        </div>
                        <div className="menulist-photo" >
                            <img className="menu-list-img" src="http://unionagency.one/delice/img/home-1/menu_item_3.jpg" alt="" />
                            <h4>SOUP</h4>
                        </div>
                        <div className="menulist-photo" >
                            <img className="menu-list-img" src="http://unionagency.one/delice/img/home-1/menu_item_4.jpg" alt="" />
                             <h4>APPETIZER</h4>
                        </div>
                    </div>
                    <div style={{width:"100%", marginTop:"40px", textAlign:"center", marginBottom:"40px"}}>
                                <img style={{position: "relative", cursor: "pointer"}} src="http://unionagency.one/delice/img/home-1/button_img_1.jpg" alt="" />
                                <span style={{position:"absolute", position: "absolute",
                                            marginLeft: "-124px",
                                            color: "white",
                                            cursor: "pointer",
                                            marginTop: "15px",
                                            fontWeight: "700"}}>
                                    MORE MENU
                                </span>
                    </div>
                </div>
            </section>
            <ParallaxProvider>
          <Parallaximg
            imgsrc={
              "http://unionagency.one/delice/img/home-1/section_home1_bg_2.jpg"
            }
            height="650px"
            
            opacity=".5"
          >
            <section className="second-back-img">
                <div className="dishes-block">
                    <div className="dishes">DISHES</div>
                    <div className='best-dishes'>Best dishes for you</div>
                    <div style={{color:"#898989", lineHeight:"24px", textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore.</div>
                </div>
            </section>
            </Parallaximg>
        </ParallaxProvider>
            <section className="last-homepage-content">
                <div className="inner-last-cont">
                    <div className="inner-left-part">
                        <div className="we-do-it">We do it well</div>
                        <div style={{color:"#898989", fontSize: "19px", marginBottom: "25px"}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem ab illo accusantium doloremque laudantium, rem aperiamquae</div>
                        <div style={{color:"#898989", lineHeight:"24px"}}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia <br /> deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus <br /> error sit voluptatem accusantium doloremque laudantium, ab illo totam rem <br /> aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae <br /> vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit <br /> aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui <br /> ratione voluptatem oloremque laudantium.</div>
                        <div style={{width:"100%", marginTop:"40px", textAlign:"center", marginBottom:"40px"}}>
                                <img style={{position: "relative", cursor: "pointer"}} src="http://unionagency.one/delice/img/home-1/button_img_2.jpg" alt="" />
                                <span style={{position:"absolute", position: "absolute",
                                            marginLeft: "-124px",
                                            color: "white",
                                            cursor: "pointer",
                                            marginTop: "15px",
                                            fontWeight: "700"}}>
                                    OUR MENU
                                </span>
                    </div>
                    </div>
                    <div className="inner-right-part">
                        <div className="inner-inner-right" style={{display:"flex", marginBottom:"30px"}}>
                            <img style={{width:"250px", marginRight:"15px"}} src="http://unionagency.one/delice/img/home-1/about_home_1_img_3.jpg" alt="" />
                             <img style={{width:"250px"}} src="http://unionagency.one/delice/img/home-1/about_home_1_img_4.jpg" alt="" />
                        </div>
                        <div>
                            <img style={{width:"514px"}} src="http://unionagency.one/delice/img/home-1/about_home_1_img_5.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
