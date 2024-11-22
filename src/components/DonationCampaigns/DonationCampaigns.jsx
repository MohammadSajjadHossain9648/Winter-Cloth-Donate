import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DonationCampaign from '../DonationCampaign/DonationCampaign';

const DonationCampaigns = () => {
    const campaigns = useLoaderData();
    console.log(campaigns);

    return (
        <div className='bg-bgImg bg-cover sm:px-8 lg:px-16 py-16'>
            <h1 className="text-2xl font-bold text-shade_dark_blue_color_1 mb-6 text-center">Donation Campaigns</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 sm:gap-4 lg:gap-8">
                {
                    campaigns.map((campaign, index) => (
                        <DonationCampaign key={index} campaign={campaign}></DonationCampaign>
                    ))
                }
            </div>
        </div>
    );
};

export default DonationCampaigns;