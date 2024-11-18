import React from 'react';
import logo  from "../../assets/logo.webp";
import { Link, NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';


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
                        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-44 p-2 space-y-3">
                            <NavLink to={'/'} className="hover:font-bold hover:text-green_color">Home</NavLink>
                            <NavLink to={'/DonationCampaigns'} className="hover:font-bold hover:text-green_color">Donation Campaigns</NavLink>
                            <NavLink to={'/Help'} className="hover:font-bold hover:text-green_color">How to Help</NavLink>
                            <NavLink to={'/Dashboard'} className="hover:font-bold hover:text-green_color">Dashboard</NavLink>
                    </ul>
                </div>
                <Link to={"/"} className="rounded-full flex items-center">
                    <img className='h-20 w-20' src={logo} alt="website logo image" />
                    <span className='text-lg font-bold'>Winter Cloth Donate</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal space-x-8">
                    <NavLink to={'/'} className={({isActive}) => isActive ? "font-bold text-green_color" : ""}>Home</NavLink>
                    <NavLink to={'/DonationCampaigns'} className={({isActive}) => isActive ? "font-bold text-green_color" : ""}>Donation Campaigns</NavLink>
                    <NavLink to={'/Help'} className={({isActive}) => isActive ? "font-bold text-green_color" : ""}>How to Help</NavLink>
                    <NavLink to={'/Dashboard'} className={({isActive}) => isActive ? "font-bold text-green_color" : ""}>Dashboard</NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn mr-2">LogIn</Link>
                <Link className="btn">SignUp</Link>
            </div>
        </div>
    );
};

export default Navbar;