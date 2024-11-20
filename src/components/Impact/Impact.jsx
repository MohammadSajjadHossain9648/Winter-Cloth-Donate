import React from 'react';
import Heading from '../Heading/Heading';

const Impact = () => {
    return (
        <div className="bg-green_bg_color px-16 py-28">
            {/* header section */}
            <Heading
                title='Our Impact'
                description='Discover the inspiring stories of individuals and communities transformed by our programs. Our success stories highlight the real-life impact of your donations.'
            ></Heading>

            {/* container section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="impact-card bg-white_color p-5 text-center rounded-xl shadow-md">
                    <h3 className="text-4xl font-bold text-green_color">10,000+</h3>
                    <p className="text-shade_dark_blue_color_2 mt-2">Winter Items Donated</p>
                </div>
                <div className="impact-card bg-white_color p-5 text-center rounded-xl shadow-md">
                    <h3 className="text-4xl font-bold text-yellow_color">4,000+</h3>
                    <p className="text-shade_dark_blue_color_2 mt-2">Families Helped</p>
                </div>
                <div className="impact-card bg-white_color p-5 text-center rounded-xl shadow-md">
                    <h3 className="text-4xl font-bold text-dark_blue_color">500+</h3>
                    <p className="text-shade_dark_blue_color_2 mt-2">Volunteers</p>
                </div>
            </div>
        </div>
    );
};

export default Impact;