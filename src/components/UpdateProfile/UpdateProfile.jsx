import React, { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";

const UpdateProfile = () => {
    const { user } = useContext(authContext);
    const navigate = useNavigate();

    const [name, setName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

    const handleToUpdate = (e) => {
        e.preventDefault();

        // Update user profile in Firebase
        updateProfile(user, { displayName: name, photoURL: photoURL })
        .then(() => {
            toast.success("Profile updated successfully!", {
                position: "top-center",
                autoClose: 3000,
            });
            navigate("/Dashboard");
        })
        .catch((err) => {
            toast.error(`Failed to update profile: ${err.message}`, {
                position: "top-center",
                autoClose: 3000,
            });
        });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleToUpdate}>
                        <h1 className="text-3xl font-bold mb-4">Update Your Profile</h1>

                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Name</span>
                            </label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="file" name="image" className="file-input file-input-bordered file-input-sm w-full max-w-sm" />
                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">
                            Update Information
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;
