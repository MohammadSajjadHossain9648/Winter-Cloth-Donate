import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const DonationDetail = () => {
    const campaignDetail = useLoaderData();
    const {id, image, title, description, status, contactInfo, division} = campaignDetail;

    const handleToSubmit = (e) => {
        e.preventDefault();
        const quantity = e.target.quantity.value;
        const itemType = e.target.itemType.value;
        const pickupLocation = e.target.pickupLocation.value;
        const notes = e.target.notes.value;

        toast.success(`Thanks for your donation. We will contact you soon!`, {
            position: "top-center",
            autoClose: 3000
        });
    }

    return (
        <div className="px-16 py-16 bg-black_bg_color">
            <div className="p-6 bg-white_color border shadow-lg rounded-xl grid sm:grid-cols-1 md:grid-cols-2 items-center gap-12">
                <img className="w-full h-64 rounded-xl" src={image} alt={title} />

                <div>
                    <h3 className="text-xl font-semibold text-dark_blue_color mb-2">{title}</h3>
                    <p className="text-shade_dark_blue_color_2 mb-3">
                        {description}
                    </p>
                    <p className={`mb-3 ${(status === "Active") ? "text-green_color" : "text-red_color"}`}>
                        Status: {status}
                    </p>
                    <p className="text-shade_dark_blue_color_2 mb-3">
                        Contact: {contactInfo}
                    </p>
                    <p className="text-sm text-shade_dark_blue_color_2 font-medium">
                        Division: {division}
                    </p>
                </div>
            </div>

            {
                    (status === "Active") ?
                        (<>
                            <div className="w-3/4 mx-auto mt-12">
                                <h2 className="text-4xl lg:text-5xl font-bold text-dark_blue_color mb-6 text-center">Donation Form</h2>

                                {/* Donation Form */}
                                <form onSubmit={handleToSubmit} className="bg-white shadow-md rounded p-5">
                                    <h3 className="text-2xl font-bold mb-5">Donate Items</h3>
                                    <div className="mb-4">
                                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                                            Quantity of Items
                                        </label>
                                        <input type="text" id="quantity" name="quantity" placeholder="e.g., 2 jackets, 3 blankets" className="w-full border-gray-300 rounded px-4 py-2 mt-2" required />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="itemType" className="block text-sm font-medium text-gray-700">
                                            Item Type
                                        </label>
                                        <input type="text" id="itemType" name="itemType" placeholder="e.g., blanket, jacket, sweater" className="w-full border-gray-300 rounded px-4 py-2 mt-2" required />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700">
                                            Pickup Location
                                        </label>
                                        <input type="text" id="pickupLocation" name="pickupLocation" placeholder="e.g., House 12, Road 5, Dhanmondi, Dhaka" className="w-full border-gray-300 rounded px-4 py-2 mt-2" required />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                                            Additional Notes (Optional)
                                        </label>
                                        <textarea id="notes" name="notes" placeholder="Any special instructions?" className="w-full border-gray-300 rounded px-4 py-2 mt-2" />
                                    </div>
                                    <button type="submit" className="bg-green_color text-white px-5 py-2 rounded hover:bg-green-700 transition">
                                        Submit Donation
                                    </button>
                                </form>
                            </div>
                        </>)
                        : (
                            <>
                                <h2 className="text-4xl lg:text-5xl font-bold text-dark_blue_color mb-6 text-center mt-12">Donation Form</h2>
                                <p className="text-red-500">Campaign is coming future soon!</p>
                            </>
                          )
                }
        </div>

    );
};

export default DonationDetail;