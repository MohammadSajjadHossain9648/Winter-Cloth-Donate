import React, { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const  {handleToSignUp, updateUser, handleToGoogle} = useContext(authContext);

    const handleToSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const image = e.target.image.files[0];
        const password = e.target.password.value;
        const conPassword = e.target.conPassword.value;

        // check password condition
        if(password.length <6){
            alert("Password must be at least 6 characters");
            return ;
        }
        if(password != conPassword){
            alert("Passwords didn't match");
            return ;
        }
        if(!/[A-Z]/.test(password)){
            alert("Password must include at least one uppercase letter.");
            return ;
        }
        if(!/[a-z]/.test(password)){
            alert("Password must include at least one lowercase letter.");
            return ;
        }



        handleToSignUp(email, password)
        .then(res => {
            alert("User created successfully");
            updateUser(name, image);
        })
    };
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Create Your Account</h1>
                    <p className="py-6">
                    Welcome to our registration page! Get started by creating your account.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleToSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="file" name="image" className="file-input file-input-bordered file-input-sm w-full max-w-sm" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name="conPassword" placeholder="confirm password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                        <div className="flex justify-between">
                                <label className="label">
                                    <p>Already have an account?</p>
                                </label>
                                <label className="label">
                                    <Link to={'/LogIn'} className="label-text-alt link link-hover text-lg">Login</Link>
                                </label>
                            </div>
                        <div className="flex items-center justify-center">
                            <div className="sm:w-20 md:w-36 border border-black_color rounded-lg"></div>
                            <h2 className="font-bold text-black_color mx-2">or</h2>
                            <div className="sm:w-20 md:w-36 border border-black_color rounded-lg"></div>
                        </div>
                        <div className="form-control">
                            <button onClick={handleToGoogle} className="btn btn-primary">
                                Sign up with Google
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;