import React from 'react';

const Heading = ({ title, description }) => {
    return (
        <div className="sm:w-full md:w-3/4 mx-auto text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-dark_blue_color mb-6">
                {title}
            </h2>
            <p className="text-lg lg:text-xl text-Shade_black_color_1 mb-12">
                {description}
            </p>
        </div>
    );
};

export default Heading;