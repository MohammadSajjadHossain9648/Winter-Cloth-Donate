import React from 'react';
import logo  from "../../assets/logo.webp";
import { Link, NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BsPersonCircle } from 'react-icons/bs';


const Navbar = () => {
    return (
        <div className="navbar w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <RxHamburgerMenu />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-[1] backdrop-blur-md mt-3 w-44 p-2 space-y-3">
                            <li><NavLink to={'/'} className="hover:font-bold hover:text-green_color">Home</NavLink></li>
                            <li><NavLink to={'/DonationCampaigns'} className="hover:font-bold hover:text-green_color">Donation Campaigns</NavLink></li>
                            <li><NavLink to={'/HowToHelp'} className="hover:font-bold hover:text-green_color">How to Help</NavLink></li>
                            <li><NavLink to={'/Dashboard'} className="hover:font-bold hover:text-green_color">Dashboard</NavLink></li>
                    </ul>
                </div>
                <Link to={"/"} className="rounded-full flex items-center">
                    <img className='h-20 w-20' src={logo} alt="website logo image" />
                    <span className='text-lg font-bold w-80'>Winter Cloth Donate</span>
                </Link>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal md:space-x-4 lg:space-x-8">
                    <NavLink to={'/'} className={({isActive}) => isActive ? "font-bold text-green_color" : ""}>Home</NavLink>
                    <NavLink to={'/DonationCampaigns'} className={({isActive}) => isActive ? "font-bold text-green_color" : ""}>Donation Campaigns</NavLink>
                    <NavLink to={'/HowToHelp'} className={({isActive}) => isActive ? "font-bold text-green_color" : ""}>How to Help</NavLink>
                    <NavLink to={'/Dashboard'} className={({isActive}) => isActive ? "font-bold text-green_color" : ""}>Dashboard</NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="bg-white_color border-none rounded-full">
                    <BsPersonCircle className="text-green_color h-8 w-12" />
                </Link>
            </div>
        </div>
    );
};

export default Navbar;