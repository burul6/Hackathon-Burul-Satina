import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div>
            <section className='aboutUs-first-section' style={{width:"100%"}}>
                <div className='first-backslider'>
                <div className='first-section-text'>
                    <div className='aboutUs-title'>About Us</div>
                    <div className='duis'>Duis aute irure dolor in reprehenderit in voluptate velit esse <br /> cillum dolore eu fugiat nulla pariatur.</div>
                </div>
                </div>
            </section>
            <section className='aboutUs-second-section'>
                <div style={{width:"100%", display:"flex"}}>
                    <div style={{width:"50%", textAlign:"center"}}>
                        <div style={{fontSize:"57px"}}>-</div>
                        <div className='twenty-years'>20 Years of Recognition</div>
                        <div className='esse-in'>Duis aute irure dolor in reprehenderit in voluptate velit esse <br /> cillum dolore eu fugiat nulla pariatur.</div>
                        <div className='lorem-ipsum'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br /> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br /> commodo consequat.</div>
                        <div className='aute-irure'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum <br /> fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, <br /> sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    </div>
                    <div style={{width:"50%"}}>
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
            <section className='our-team-section'>
                <div>
                    
                </div>
            </section>
        </div>
    );
};

export default AboutUs;