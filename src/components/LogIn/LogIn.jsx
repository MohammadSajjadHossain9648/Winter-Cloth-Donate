import React, { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const LogIn = () => {
    const {handleToGoogle, handleToLogin} = useContext(authContext);

    const location = useLocation();
    const navigate = useNavigate();

    const handleToSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        handleToLogin(email, password)
        .then(res => {
            navigate(location.state.from)
        })
        .catch(err => {
            alert(err.message);
        })
    };

    const handleToGoogleLogIn = () => {
        handleToGoogle()
        .then(res => {
            navigate(location.state.from)
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen px-12">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Log in to your account to explore personalized features, manage your preferences, and enjoy a seamless experience. We're glad to have you here!
                    </p>
                </div>

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onClick={handleToSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <div className="flex justify-between">
                                <label className="label">
                                    <Link to={'#'} className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                                <label className="label">
                                    <Link to={'/SignUp'} className="label-text-alt link link-hover">Create Account</Link>
                                </label>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handleToLogin} className="btn btn-primary">Login</button>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="sm:w-20 md:w-36 border border-black_color rounded-lg"></div>
                            <h2 className="font-bold text-black_color mx-2">or</h2>
                            <div className="sm:w-20 md:w-36 border border-black_color rounded-lg"></div>
                        </div>
                        <div className="form-control">
                            <button onClick={handleToGoogleLogIn} className="btn btn-primary">
                                Sign in with Google
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;