import React from 'react';
import './AboutUs.css'
import { FacebookOutlined, TwitterOutlined, GooglePlusOutlined } from "@ant-design/icons";
import { ParallaxProvider } from "react-scroll-parallax";
import Parallaximg from "../../Parallaximg/Parallaximg";


const AboutUs = () => {
    return (
        <div>
            <ParallaxProvider>
            <Parallaximg 
            imgsrc={
              "http://unionagency.one/delice/img/about/main-baner-bg.jpg"
            }
            height="550px"
            opacity=".5"
          >
            <section className='aboutUs-first-section' style={{width:"100%", marginBottom:"50px", height:"500px"}}>
                <div className='first-backslider'>
                    <div className='first-section-text'>
                        <div className='aboutUs-title'>About Us</div>
                        <div className='duis'>Duis aute irure dolor in reprehenderit in voluptate velit esse <br /> cillum dolore eu fugiat nulla pariatur.</div>
                    </div>
                </div>
            </section>
            </Parallaximg>
            </ParallaxProvider>
            <section className='aboutUs-second-section' style={{marginTop:"80px"}}>
                <div className='twenty-years-div' style={{width:"100%", display:"flex"}}>
                    <div className='twenty-years-first' style={{width:"50%", textAlign:"center"}}>
                        <div style={{fontSize:"57px"}}>-</div>
                        <div className='twenty-years'>20 Years of Recognition</div>
                        <div className='esse-in'>Duis aute irure dolor in reprehenderit in voluptate velit esse <br /> cillum dolore eu fugiat nulla pariatur.</div>
                        <div className='lorem-ipsum'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br /> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br /> commodo consequat.</div>
                        <div className='aute-irure'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum <br /> fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, <br /> sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    </div>
                    <div className='twenty-years-second' style={{width:"50%"}}>
                        <div style={{width:"100%", display:"flex"}}>
                            <div style={{width:"50%", marginRight:"15px"}}>
                                <img style={{width:"100%"}} src="http://unionagency.one/delice/img/about/recognition-1.jpg" alt="" />
                                <img style={{width:"100%"}} src="http://unionagency.one/delice/img/about/recognition-2.jpg" alt="" />
                            </div>
                            <div style={{width:"50%"}}>
                                <img style={{width:"100%", height:"493px"}} src="http://unionagency.one/delice/img/about/recognition-3.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ParallaxProvider>
            <Parallaximg 
            imgsrc={
              "http://unionagency.one/delice/img/about/baner-2-bg.jpg"
            }
            height="750px"
            opacity=".5"
          >
            <section className="second-backparalax" style={{width:"100%", marginBottom:"100px", height:"600px"}}>
                <div className='backparalax-div' style={{width:"100%", height:"100%"}}>
                    <div style={{paddingTop:"135px"}}>
                        <div>
                            <div className='text-second-backparalax'>
                        <div className='our-customer'>Our customers are</div>
                        <div style={{textAlign:"center", color:"#4b4b4b", fontSize:"45px", lineHeight:"55px", fontWeight:"700", marginBottom:"20px"}}>ALWAYS HAPPY</div>
                        <div style={{color:"#464646", textAlign:"center", fontSize:"20px", marginBlock:"30px"}}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br /> fugiat nulla pariatur.</div>
                        <div style={{color:"#898989", textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br /> ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    </div>
                        </div>
                    </div>
                </div>
            </section>
            </Parallaximg>
            </ParallaxProvider>
            <section className='our-team-section'>
                <div style={{marginBottom:"70px"}}>
                    <div style={{textAlign:"center", fontSize:'50px', marginBottom:"-30px"}}>-</div>
                    <div className='meet-our-team' style={{textAlign:"center", color:"#4b4b4b", fontSize:"50px", fontWeight:"700"}}>Meet Our Team</div>
                    <div style={{textAlign:"center", color:"#464646", fontSize:"16px"}}>Duis aute irure dolor in reprehenderit in voluptate velit esse <br /> cillum dolore eu fugiat nulla pariatur.</div>
                </div>
                <div className='swiper-container'>
                <div className='swiper-wrapper' style={{marginBottom:"90px", display:"flex", justifyContent:"space-around"}}>
                    <div className='first-swiper-wrapper'>
                        <h4 style={{textAlign:"center", color:"#4b4b4b", fontWeight:"700", fontSize:"18px"}}>Robert J Philips</h4>
                        <div style={{textAlign:"center", color:"#898989", fontSize:"16px", marginBottom:"15px"}}>HEAD CHEF</div>
                        <img src="http://unionagency.one/delice/img/about/cook-1.png" alt=""></img>
                        <div class="first-swiper__text">
                        <p style={{color:"#898989", fontSize:"14px", textAlign:"center", marginTop:"15px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                        </div>
                        <div className='swipper-icons'>
                        <FacebookOutlined className='swipper-icons-item' style={{fontSize:"25px", cursor:"pointer"}} />
                        <TwitterOutlined className='swipper-icons-item' style={{fontSize:"25px", cursor:"pointer"}} />
                        <GooglePlusOutlined className='swipper-icons-item' style={{fontSize:"25px", cursor:"pointer"}} />
                        </div>
                    </div>
                    <div className='first-swiper-wrapper'>
                        <h4 style={{textAlign:"center", color:"#4b4b4b", fontWeight:"700", fontSize:"18px"}}>Robert J Philips</h4>
                        <div style={{textAlign:"center", color:"#898989", fontSize:"16px", marginBottom:"15px"}}>HEAD CHEF</div>
                        <img src="http://unionagency.one/delice/img/about/cook-2.png" alt=""></img>
                        <div class="first-swiper__text">
                        <p style={{color:"#898989", fontSize:"14px", textAlign:"center", marginTop:"15px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                        </div>
                        <div className='swipper-icons'>
                        <FacebookOutlined className='swipper-icons-item' style={{fontSize:"25px", cursor:"pointer"}} />
                        <TwitterOutlined className='swipper-icons-item' style={{fontSize:"25px", cursor:"pointer"}} />
                        <GooglePlusOutlined className='swipper-icons-item' style={{fontSize:"25px", cursor:"pointer"}} />
                        </div>
                    </div>
                    <div className='first-swiper-wrapper'>
                        <h4 style={{textAlign:"center", color:"#4b4b4b", fontWeight:"700", fontSize:"18px"}}>Robert J Philips</h4>
                        <div style={{textAlign:"center", color:"#898989", fontSize:"16px", marginBottom:"15px"}}>HEAD CHEF</div>
                        <img src="http://unionagency.one/delice/img/about/cook-3.png" alt=""></img>
                        <div class="first-swiper__text">
                        <p style={{color:"#898989", fontSize:"14px", textAlign:"center", marginTop:"15px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                        </div>
                        <div className='swipper-icons'>
                        <FacebookOutlined className='swipper-icons-item' style={{fontSize:"25px", cursor:"pointer"}} />
                        <TwitterOutlined className='swipper-icons-item' style={{fontSize:"25px", cursor:"pointer"}} />
                        <GooglePlusOutlined className='swipper-icons-item' style={{fontSize:"25px", cursor:"pointer"}} />
                        </div>
                    </div>
                    <div className='first-swiper-wrapper'>
                        <h4 style={{textAlign:"center", color:"#4b4b4b", fontWeight:"700", fontSize:"18px"}}>Robert J Philips</h4>
                        <div style={{textAlign:"center", color:"#898989", fontSize:"16px", marginBottom:"15px"}}>HEAD CHEF</div>
                        <img src="http://unionagency.one/delice/img/about/cook-4.png" alt=""></img>
                        <div class="first-swiper__text">
                        <p style={{color:"#898989", fontSize:"14px", textAlign:"center", marginTop:"15px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                        </div>
                        <div className='swipper-icons'>
                        <FacebookOutlined className='swipper-icons-item' style={{fontSize:"25px", cursor:"pointer"}} />
                        <TwitterOutlined className='swipper-icons-item' style={{fontSize:"25px", cursor:"pointer"}} />
                        <GooglePlusOutlined className='swipper-icons-item' style={{fontSize:"25px", cursor:"pointer"}} />
                        </div>
                    </div>
                </div>
                </div>
            </section>
            <ParallaxProvider>
            <Parallaximg 
            imgsrc={
              "http://unionagency.one/delice/img/about/baner-3-bg.jpg"
            }
            height="750px"
            opacity=".5"
          >
            <section className="third-backparalax" style={{width:"100%", marginBottom:"100px", height:"600px"}}>
                <div className='third-backparalax-div' style={{width:"100%", height:"100%"}}>
                    <div style={{paddingTop:"135px"}}>
                        <div>
                            <div className='text-second-backparalax'>
                        <div className='our-customer'>We cooparate only with</div>
                        <div style={{textAlign:"center", color:"#4b4b4b", fontSize:"45px", lineHeight:"55px", fontWeight:"700", marginBottom:"20px"}}>RELIABLE SUPPLIERS</div>
                        <div style={{color:"#464646", textAlign:"center", fontSize:"20px", marginBlock:"30px"}}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br /> fugiat nulla pariatur.</div>
                        <div style={{color:"#898989", textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br /> ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    </div>
                        </div>
                    </div>
                </div>
            </section>
            </Parallaximg>
            </ParallaxProvider>
            <section className='aboutUs-second-section' style={{marginTop:"90px"}}>
                <div className='ideas-for-new'>
                    <div className='ideas-for-left'>
                        <div style={{width:"100%", display:"flex"}}>
                            <div style={{width:"50%", marginRight:"15px"}}>
                                <img style={{width:"100%", height:"493px"}} src="http://unionagency.one/delice/img/about/impression-1.jpg" alt="" />
                            </div>
                            <div style={{width:"50%" }}>
                                <img style={{width:"100%", marginBottom:"15px"}} src="http://unionagency.one/delice/img/about/impression-2.jpg" alt="" />
                                <img style={{width:"100%"}} src="http://unionagency.one/delice/img/about/impression-3.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='ideas-for-div'>
                        <div style={{fontSize:"57px"}}>-</div>
                        <div className='twenty-years'>Ideas for New Impression</div>
                        <div className='esse-in'>Duis aute irure dolor in reprehenderit in voluptate velit esse <br /> cillum dolore eu fugiat nulla pariatur.</div>
                        <div className='lorem-ipsum'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br /> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br /> commodo consequat.</div>
                        <div className='aute-irure'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum <br /> fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, <br /> sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    </div>
                </div>
            </section>
            {/* <section className='our-team-section' style={{marginBottom:"0px"}}>
                <div className='gallery-div'>
                    <div style={{textAlign:"center", fontSize:'50px', marginBottom:"-30px"}}>-</div>
                    <div className='meet-our-team' style={{textAlign:"center", color:"#4b4b4b", fontSize:"50px", fontWeight:"700"}}>Gallery</div>
                    <div style={{textAlign:"center", color:"#464646", fontSize:"16px"}}>Duis aute irure dolor in reprehenderit in voluptate velit esse <br /> cillum dolore eu fugiat nulla pariatur.</div>
                </div>
                <div className='about-us-image' style={{display:"flex"}}> 
                    <img className='about-us-photo' src="http://unionagency.one/delice/img/about/food-image-1.jpg" alt="" />
                    <img className='about-us-photo' src="http://unionagency.one/delice/img/about/food-image-2.jpg" alt="" />
                    <img className='about-us-photo' src="http://unionagency.one/delice/img/about/food-image-3.jpg" alt="" />
                    <img className='about-us-photo' src="http://unionagency.one/delice/img/about/food-image-4.jpg" alt="" />
                    <img className='about-us-photo' src="http://unionagency.one/delice/img/about/food-image-5.jpg" alt="" />
                    <img className='about-us-photo' src="http://unionagency.one/delice/img/about/food-image-6.jpg" alt="" />
                    <img className='about-us-photo' src="http://unionagency.one/delice/img/about/food-image-2.jpg" alt="" />
                </div>
            </section> */}
        </div>
    );
};

export default AboutUs;