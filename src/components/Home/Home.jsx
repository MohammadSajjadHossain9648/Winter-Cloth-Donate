import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import About from '../About/About';


const Home = () => {
    const banners = useLoaderData();

    return (
        <div>
            {/* banner section */}
            <Banner banners={banners}></Banner>

            {/* About section */}
            <About></About>
        </div>
    );
};

export default Home;