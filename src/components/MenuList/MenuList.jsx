import React from 'react';
import './MenuList.css';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { ParallaxProvider } from "react-scroll-parallax";
import Parallaximg from '../../Parallaximg/Parallaximg';

const MenuList = () => {
    return (
        <div className='menulist-main-content'>
            <ParallaxProvider>
            <Parallaximg
            imgsrc={
              "http://unionagency.one/delice/img/menu-1/main-baner-bg.jpg"
            }
            height="550px"
            opacity=".5"
          >
            <section className='menulist-fullheight-slider'>
                <div className='menulist-paralax'>
                    <div className='paralax-container'>
                        <div className='back-paralax'></div>
                    </div>
                </div>
                <div className='menulist-table'>
                    <div className='ourMenu' >Our Menu</div>
                    <div className='ourMenu-text'>Duis aute irure dolor in reprehenderit in voluptate velit esse <br /> cillum dolore eu fugiat nulla pariatur.</div>
                </div>
            </section>
            </Parallaximg>
            </ParallaxProvider>
            <section className='menulist-main-section' style={{marginTop:"150px"}}>
                    
                <div className='menu-list-break'>
                    <div className='inner-leftpart'>
                        <img style={{width:"100%"}} src="http://unionagency.one/delice/img/menu-1/plate-1.jpg" alt="" />
                    </div>
                    <div className='inner-rightpart'>
                        <Link to='/shop'><div className='breackfast-div'>BREAKFAST MENU</div></Link>
                        <div className='inner-right-productList'>
                            <div className='left-breakfast' >
                                <div className='menu-break-item' style={{display:"flex"}}>
                                            <div>
                                                <div className='menu-main-title'>Breakfast Complete</div>
                                                <div className='menu-desc'>croissant, fruit salad <br /> and French yoghurt pot</div>
                                            </div>
                                            <div className='menu-price' style={{marginLeft:"80px"}}>$6.25</div>
                                </div>
                                <div className='menu-break-item' style={{display:"flex"}}>
                                            <div>
                                                <div className='menu-main-title'>French Toast</div>
                                                <div className='menu-desc'>French toast with fruit saladand <br /> maple flavoured syrup</div>
                                            </div>
                                            <div className='menu-price'  style={{marginLeft:"30px"}}>$6.75</div>
                                </div>
                                <div className='menu-break-item' style={{display:"flex"}}>
                                            <div>
                                                <div className='menu-main-title'>Crêpe Complète</div>
                                                <div className='menu-desc'>warm crêpe with two free range <br /> eggs, shaved Gruyère cheese</div>
                                            </div>
                                            <div className='menu-price' style={{marginLeft:"30px"}}>$7.25</div>
                                </div>
                                 <div className='menu-break-item' style={{display:"flex"}}>
                                        <div>
                                            <div className='menu-main-title'>Vegetarian Breakfast</div>
                                            <div className='menu-desc'>vegetarian sausage, field mushroom, <br /> tomato, avocado, baby spinach</div>
                                        </div>
                                        <div className='menu-price'>$7.50</div>
                                    </div>
                            </div>
                            <div className='right-breakfast'>
                            <div className='menu-break-item' style={{display:"flex"}}>
                                       <div>
                                            <div className='menu-main-title'>French Breakfast</div>
                                            <div className='menu-desc'>eggs, boudin noir, French streaky <br /> bacon and a field mushroom</div>
                                        </div>
                                        <div className='menu-price' style={{marginLeft:"35px"}}>$7.75</div>
                            </div>
                            <div className='menu-break-item' style={{display:"flex"}}>
                                        <div>
                                            <div className='menu-main-title'>Eggs Benedict</div>
                                            <div className='menu-desc'>chicken breast, black pepper, garlic, <br /> onion, green chillies</div>
                                        </div>
                                        <div className='menu-price' style={{marginLeft:"20px"}}>$7.75</div>
                            </div>
                            <div className='menu-break-item' style={{display:"flex"}}>
                                        <div>
                                            <div className='menu-main-title'>English Breakfast</div>
                                            <div className='menu-desc'>two free range eggs, bacon, tomato, <br /> mushrooms and toast</div>
                                        </div>
                                        <div className='menu-price' style={{marginLeft:"25px"}}>$8.00</div>
                            </div>
                            <div className='menu-break-item' style={{display:"flex"}}>
                                        <div>
                                            <div className='menu-main-title'>Barrel's Breakfast</div>
                                            <div className='menu-desc'>ham, pork chops grilled to order, <br /> three eggs</div>
                                        </div>
                                        <div className='menu-price' style={{marginLeft:"45px"}}>$8.25</div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='menulist-main-section' style={{marginTop:"150px", paddingLeft:"80px"}}>
                <div className='menu-list-break'>
                    <div className='inner-rightpart'>
                        <div className='start-the-day'>Get a break with</div>
                        <Link to='/products'><div className='breackfast-div'>LUNCH MENU</div></Link>
                        <div className='big-breakfast-div'>
                            <div className='left-breakfast'>
                                <div className='menu-break-item' style={{display:"flex"}}>
                                            <div>
                                                <div className='menu-main-title'>She Crab Soup</div>
                                                <div className='menu-desc'>fresh crab, herb foam, caviar, <br /> herb foam, cavia</div>
                                            </div>
                                            <div className='menu-price' style={{marginLeft:"35px"}}>$15.25</div>
                                </div>
                                <div className='menu-break-item' style={{display:"flex"}}>
                                            <div>
                                                <div className='menu-main-title'>French Toast</div>
                                                <div className='menu-desc'>French toast with fruit saladand <br /> maple flavoured syrup</div>
                                            </div>
                                            <div className='menu-price'  style={{marginLeft:"30px"}}>$6.75</div>
                                </div>
                                <div className='menu-break-item' style={{display:"flex"}}>
                                            <div>
                                                <div className='menu-main-title'>Crêpe Complète</div>
                                                <div className='menu-desc'>warm crêpe with two free range <br /> eggs, shaved Gruyère cheese</div>
                                            </div>
                                            <div className='menu-price' style={{marginLeft:"30px"}}>$7.25</div>
                                </div>
                                 <div className='menu-break-item' style={{display:"flex"}}>
                                        <div>
                                            <div className='menu-main-title'>Vegetarian Breakfast</div>
                                            <div className='menu-desc'>vegetarian sausage, field mushroom, <br /> tomato, avocado, baby spinach</div>
                                        </div>
                                        <div className='menu-price'>$7.50</div>
                                    </div>
                            </div>
                            <div className='right-breakfast'>
                            <div className='menu-break-item' style={{display:"flex"}}>
                                       <div>
                                            <div className='menu-main-title'>French Breakfast</div>
                                            <div className='menu-desc'>eggs, boudin noir, French streaky <br /> bacon and a field mushroom</div>
                                        </div>
                                        <div className='menu-price' style={{marginLeft:"35px"}}>$7.75</div>
                            </div>
                            <div className='menu-break-item' style={{display:"flex"}}>
                                        <div>
                                            <div className='menu-main-title'>Eggs Benedict</div>
                                            <div className='menu-desc'>chicken breast, black pepper, garlic, <br /> onion, green chillies</div>
                                        </div>
                                        <div className='menu-price' style={{marginLeft:"20px"}}>$7.75</div>
                            </div>
                            <div className='menu-break-item' style={{display:"flex"}}>
                                        <div>
                                            <div className='menu-main-title'>English Breakfast</div>
                                            <div className='menu-desc'>two free range eggs, bacon, tomato, <br /> mushrooms and toast</div>
                                        </div>
                                        <div className='menu-price' style={{marginLeft:"25px"}}>$8.00</div>
                            </div>
                            <div className='menu-break-item' style={{display:"flex"}}>
                                        <div>
                                            <div className='menu-main-title'>Barrel's Breakfast</div>
                                            <div className='menu-desc'>ham, pork chops grilled to order, <br /> three eggs</div>
                                        </div>
                                        <div className='menu-price' style={{marginLeft:"45px"}}>$8.25</div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='inner-leftpart'>
                        <img style={{width:"100%"}} src="http://unionagency.one/delice/img/menu-1/plate-2.jpg" alt="" />
                    </div>
                </div>
            </section>
            <section className='menulist-main-section' style={{marginTop:"100px"}}>
                <div className='menu-list-break'>
                    <div className='inner-leftpart'>
                        <img style={{width:"100%"}} src="http://unionagency.one/delice/img/menu-1/plate-3.jpg" alt="" />
                    </div>
                    <div className='inner-rightpart'>
                        <div className='start-the-day'>Relaxing with our</div>
                        <Link to='/products'><div className='breackfast-div'>DINNER MENU</div></Link>
                        <div  className='big-breakfast-div'>
                            <div className='left-breakfast' style={{marginRight:"50px"}}>
                                <div className='menu-break-item' style={{display:"flex"}}>
                                            <div>
                                                <div className='menu-main-title'>Breakfast Complete</div>
                                                <div className='menu-desc'>croissant, fruit salad <br /> and French yoghurt pot</div>
                                            </div>
                                            <div className='menu-price' style={{marginLeft:"80px"}}>$6.25</div>
                                </div>
                                <div className='menu-break-item' style={{display:"flex"}}>
                                            <div>
                                                <div className='menu-main-title'>French Toast</div>
                                                <div className='menu-desc'>French toast with fruit saladand <br /> maple flavoured syrup</div>
                                            </div>
                                            <div className='menu-price'  style={{marginLeft:"30px"}}>$6.75</div>
                                </div>
                                <div className='menu-break-item' style={{display:"flex"}}>
                                            <div>
                                                <div className='menu-main-title'>Crêpe Complète</div>
                                                <div className='menu-desc'>warm crêpe with two free range <br /> eggs, shaved Gruyère cheese</div>
                                            </div>
                                            <div className='menu-price' style={{marginLeft:"30px"}}>$7.25</div>
                                </div>
                                 <div className='menu-break-item' style={{display:"flex"}}>
                                        <div>
                                            <div className='menu-main-title'>Vegetarian Breakfast</div>
                                            <div className='menu-desc'>vegetarian sausage, field mushroom, <br /> tomato, avocado, baby spinach</div>
                                        </div>
                                        <div className='menu-price'>$7.50</div>
                                    </div>
                            </div>
                            <div className='right-breakfast'>
                            <div className='menu-break-item' style={{display:"flex"}}>
                                       <div>
                                            <div className='menu-main-title'>French Breakfast</div>
                                            <div className='menu-desc'>eggs, boudin noir, French streaky <br /> bacon and a field mushroom</div>
                                        </div>
                                        <div className='menu-price' style={{marginLeft:"35px"}}>$7.75</div>
                            </div>
                            <div className='menu-break-item' style={{display:"flex"}}>
                                        <div>
                                            <div className='menu-main-title'>Eggs Benedict</div>
                                            <div className='menu-desc'>chicken breast, black pepper, garlic, <br /> onion, green chillies</div>
                                        </div>
                                        <div className='menu-price' style={{marginLeft:"20px"}}>$7.75</div>
                            </div>
                            <div className='menu-break-item' style={{display:"flex"}}>
                                        <div>
                                            <div className='menu-main-title'>English Breakfast</div>
                                            <div className='menu-desc'>two free range eggs, bacon, tomato, <br /> mushrooms and toast</div>
                                        </div>
                                        <div className='menu-price' style={{marginLeft:"25px"}}>$8.00</div>
                            </div>
                            <div className='menu-break-item' style={{display:"flex"}}>
                                        <div>
                                            <div className='menu-main-title'>Barrel's Breakfast</div>
                                            <div className='menu-desc'>ham, pork chops grilled to order, <br /> three eggs</div>
                                        </div>
                                        <div className='menu-price' style={{marginLeft:"45px"}}>$8.25</div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MenuList;