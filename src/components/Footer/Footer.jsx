import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark_blue_color text-shade_white_color1 py-16">
            <div className="w-3/4 mx-auto grid grid-cols-1 md:grid-cols-footerCustom gap-8">
                {/* About Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">About Us</h3>
                    <p className="text-sm text-shade_white_color2">
                        We are a nonprofit organization dedicated to making a difference in
                        the lives of those in need. Join us in our mission to bring hope and
                        change to communities worldwide.
                    </p>
                </div>

                <div className="grid grid-cols-2">
                    {/* Quick Links Section */}
                    <div className='md:pl-8 lg:pl-12'>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="text-sm space-y-2">
                            <li><a href="/about" className="text-shade_white_color2 hover:underline">About Us</a></li>
                            <li><a href="/donate" className="text-shade_white_color2 hover:underline">Donate</a></li>
                            <li><a href="/volunteer" className="text-shade_white_color2 hover:underline">Volunteer</a></li>
                            <li><a href="/contact" className="text-shade_white_color2 hover:underline">Contact Us</a></li>
                            <li><a href="/faq" className="text-shade_white_color2 hover:underline">FAQs</a></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className='space-y-2'>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <p className="text-sm">
                            Email: <a href="mailto:info@example.com" className="text-shade_white_color2 hover:underline">info@donate.com</a>
                        </p>
                        <p className="text-sm">
                            Phone: <a href="tel:+123456789" className="text-shade_white_color2 hover:underline">+8801912345678</a>
                        </p>
                        <p className="text-sm text-shade_white_color2">Road #4, Block-b, Banani, dhaka-1213</p>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-600 mt-8 pt-4 text-center">
                <p className="text-sm text-white_color">
                &copy; 2024 All Rights Reserved. Built with ❤️ for a better world.
                </p>
            </div>
        </div>
    );
};

export default Footer;