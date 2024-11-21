import React, { useState } from 'react';
import faqImg from '../../assets/faq.webp';
import bgImg from '../../assets/bg.jpg';
import Heading from '../Heading/Heading';

const Faq = ({faqs}) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="px-16 py-28 bg-bgImg bg-cover grid sm:grid-cols-1 md:grid-cols-2 gap-8 space-y-4">
            {/* Left Image Section */}
            <img src={faqImg} className="w-full h-full" />

            {/* Right FAQ Section */}
            <div>
                <Heading
                    title='Frequently Asked Questions'
                    description='Have Any Questions For Us?'
                ></Heading>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-2 border-white_color p-4 rounded-2xl">
                            <button onClick={() => handleToggle(index)} className="text-left w-full text-xl font-semibold text-dark_blue_color">
                                {faq.question}
                            </button>
                            {activeIndex === index && (
                                <p className="mt-4 pt-4 text-shade_dark_blue_color_2 border-t-2 border-white_color">
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;
