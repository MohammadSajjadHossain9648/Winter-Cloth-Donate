import React, { createContext, useEffect, useState } from 'react';
import auth from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';


export const authContext = createContext();

const AuthProvider = ({route}) => {
    const handleToLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
    }
    const handleToSignUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }
    const handleToSignOut = () => {
        signOut(auth);
    }

    const provider = new GoogleAuthProvider();
    const handleToGoogle = () => {
        signInWithPopup(auth, provider);
    }

    const authInfo = {handleToLogin, handleToSignUp, handleToSignOut, handleToGoogle};


    const [user, setUser] = useState(null);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("login user: ", currentUser);

            return () => {
                unsubscribe();
            }
        })
    })

    return (
        <div>
            <authContext.Provider value={authInfo}>
                {
                    route
                }
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;