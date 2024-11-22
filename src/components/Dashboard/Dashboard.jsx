import React, { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import UpdateProfile from '../UpdateProfile/UpdateProfile';


const Dashboard = () => {
    const {user} = useContext(authContext);

    const {displayName, email, photoURL} = user;

    return (
        <div className='my-16 w-11/12 mx-auto'>
            <h2 className="sm:text-2xl lg:text-3xl text-center font-bold text-dark_blue_color mb-6">
                Welcome to {displayName}
            </h2>

            <div className="space-y-4 mt-12">
                <p className='text-xl text-dark_blue_color'>Name: {displayName}</p>
                <div className="flex items-center">
                    <span className='text-xl text-dark_blue_color mr-4'>Profile Image: </span>
                    <img src={photoURL} alt={displayName} className="w-16 h-16" />
                </div>
                <p className='text-xl text-dark_blue_color'>Email: {email}</p>
                <Link to={'/UpdateProfile'} className="btn btn-primary text-lg font-bold text-white_color">Update</Link>
            </div>
        </div>
    );
};

export default Dashboard;