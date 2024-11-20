import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import About from '../About/About';
import HowToHelp from '../HowToHelp/HowToHelp';
import Impact from '../Impact/Impact';
import Faq from '../Faq/Faq';


const Home = () => {
    const {banners, faqs} = useLoaderData();

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

            {/* faq section */}
            <Faq faqs={faqs}></Faq>
        </div>
    );
};

export default Home;