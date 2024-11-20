import React from 'react';
import { useNavigate } from 'react-router-dom';
import Heading from '../Heading/Heading';


const About = () => {
    const navigate = useNavigate();
    const handleToClick = () => {
        // navigate(<Banner></Banner>);
    }

    return (
        <div className="py-16 bg-bgImg bg-no-repeat bg-cover">
                {/* mission section */}
                <Heading
                    title='Our Mission'
                    description='We strive to bring warmth and hope to communities during the winter
                        season by organizing donation drives, supporting local initiatives,
                        and fostering a spirit of giving. Together, we can create a brighter
                        and warmer future for those in need.'
                ></Heading>

                {/* How to Contribute Section */}
                <div className="mx-16 grid grid-cols-1 md:grid-cols-3 gap-12 shrink-0">
                    {/* Donate Winter Clothing */}
                    <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-blue-700 mb-4">Donate Winter Clothing</h3>
                        <p className="text-gray-700">
                            Users can donate gently used or new winter items, such as jackets, coats, scarves, gloves, hats, and blankets. These contributions directly go to individuals and families in need. Collection points are listed on the website for easy drop-off.
                        </p>
                        <button onClick={handleToClick} className="btn mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                            Donate Now
                        </button>
                    </div>

                    {/* Spread */}
                    <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-blue-700 mb-4">Spread the Word</h3>
                        <p className="text-gray-700">
                            Users can amplify the impact by sharing the website’s mission on social media, with friends, and within local communities. The more awareness raised, the more support can be gathered.
                        </p>
                        <button onClick={handleToClick} className="btn mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                            Learn More
                        </button>
                    </div>

                    {/* Volunteer */}
                    <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-blue-700 mb-4">Volunteer</h3>
                        <p className="text-gray-700">
                            Join us in distributing donations, organizing events, or helping
                            out with campaigns. Your time can make a significant impact!
                        </p>
                        <button onClick={handleToClick} className="btn mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                            Sign Up
                        </button>
                    </div>
                </div>
        </div>
    );
};

export default About;