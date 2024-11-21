import React from 'react';
import { useNavigate } from 'react-router-dom';

const DonationCampaign = ({ campaign }) => {
    const {image, title, description, division} = campaign;

    const navigate = useNavigate();
    const handleDonateNow = () => {
        navigate('/');
    };

    return (
        <div className="p-5 bg-white_color shadow-lg rounded-xl">
            <img className="w-full sm:h-64 md:h-48 rounded-xl" src={image} alt={title} />

            <div className="pt-5">
                <h3 className="text-xl font-semibold text-dark_blue_color mb-2">{title}</h3>
                <p className="text-shade_dark_blue_color_2 mb-3">
                    {description}
                </p>
                <p className="text-sm text-green_color font-medium">
                    Division: {division}
                </p>
                <button onClick={handleDonateNow} className="mt-4 bg-green_color text-white px-4 py-2 rounded hover:bg-green-700 transition">Donate Now</button>
            </div>
        </div>
    );
};

export default DonationCampaign;