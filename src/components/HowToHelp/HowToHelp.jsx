import React from 'react';
import { Link } from 'react-router-dom';
import Heading from '../Heading/Heading';

const HowToHelp = () => {
    const divisions = [
        'Dhaka Division',
        'Rajshahi Division',
        'Rangpur Division',
        'Chattogram Division',
        'Khulna Division',
        'Mymensingh Division',
        'Sylhet Division',
    ];

    return (
        <div className="bg-shade_white_color2 px-16 py-28">
            {/* header section */}
            <Heading
                title='How It Works'
                description='Follow these simple steps to make a difference this winter. Your contribution can
                    bring warmth to those in need.'
            ></Heading>

            {/* Step Instructions */}
            <div className="steps grid grid-cols-3 gap-8">
                <div className="step bg-white_color p-8 shadow-md rounded-lg">
                    <h3 className="text-xl font-bold text-dark_blue_color mb-3">Gather Items</h3>
                    <p className="text-shade_dark_blue_color_1">
                        Collect gently used or new winter clothing, including coats, jackets, scarves,
                        gloves, hats, and blankets. Ensure the items are clean and in good condition.
                    </p>
                </div>
                <div className="step bg-white_color p-8 shadow-md rounded-lg">
                    <h3 className="text-xl font-bold text-dark_blue_color mb-3">Find a Collection Point</h3>
                    <p className="text-shade_dark_blue_color_1">
                        Locate the nearest collection point or active campaign in your region. Check
                        the website for addresses and contact details.
                    </p>
                </div>
                <div className="step bg-white_color p-8 shadow-md rounded-lg">
                    <h3 className="text-xl font-bold text-dark_blue_color mb-3">Donate or Volunteer</h3>
                    <p className="text-shade_dark_blue_color_1">
                        Drop off items at a collection point, contribute financially, or sign up as a
                        volunteer to help with sorting and distribution.
                    </p>
                </div>
            </div>

            {/* Supported Divisions */}
            <div className="supported-divisions mt-10">
                <h3 className="text-2xl font-bold mb-5 text-black_color text-center">Supported Divisions</h3>
                <ul className="flex gap-4 justify-center flex-wrap">
                    {divisions.map((division, index) => (
                        <li key={index} className="text-lg text-dark_blue_color mr-12">
                        {division}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Call to Action */}
            <div className="cta mt-10">
                <p className="text-lg mb-5 text-shade_black_color_1">
                    Join us in making a difference this winter. Visit our campaigns page to find more details about active drives and how you can contribute.
                </p>
                <Link to={''} className="btn bg-green_color text-white_color px-5 py-3 rounded-lg">View Campaigns</Link>
            </div>
        </div>
    );
};

export default HowToHelp;