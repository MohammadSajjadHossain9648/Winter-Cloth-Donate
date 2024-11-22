import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto font_poppins text-black_color'>
            {/* navbar section */}
            <Navbar></Navbar>

            {/* content section */}
            <Outlet></Outlet>

            {/* footer section */}
            <Footer></Footer>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MainLayout;