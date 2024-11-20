import React from 'react';
import Banner from '../Banner/Banner';
import { Outlet, useLoaderData } from 'react-router-dom';
import About from '../About/About';
import HowToHelp from '../HowToHelp/HowToHelp';
import Impact from '../Impact/Impact';


const Home = () => {
    const banners = useLoaderData();

    return (
        <div>
            {/* banner section */}
            <Banner banners={banners}></Banner>

            {/* About section */}
            <About></About>

            {/* HowToHelp section */}
            <HowToHelp></HowToHelp>

            {/* Impact section */}
            <Impact></Impact>

            {/* common section */}
            <Outlet></Outlet>
        </div>
    );
};

export default Home;