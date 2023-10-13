import React from 'react';
import { auth, provider } from '../../firebase.config';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import './authentication.css';
import { FcGoogle } from 'react-icons/fc';
export const Authentication = () => {
    const handleclick = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                console.log('sorry');
            });
    };

    return (
        <button className="googlesignin" onClick={handleclick}>
            <FcGoogle className="mx-3" size={20} />
            Sign In With Google
        </button>
    );
};
