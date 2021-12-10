import React from 'react';
import { Route } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import HomePage from './pages/HomePage';

const Routing = () => {
    const publicPages = [
        {
            link:"/",
            element: <HomePage/>
        },
        {
            link:"/about-us",
            element: <AboutUs/>
        }
        // {
        //     link:"/products",
        //     element: 
        // }
    ]
    return (
        <>
            {
                publicPages.map((item) => (
                    <Route path={item.link} element={item.element} />
                ))
            }
        </>
    );
};

export default Routing;