import React, { useState } from 'react';
import './SignIn.css';
import { Login } from './Login';

export const SignIn = () => {
    return (
        <div className=" container bg-light text-center rounded-3">
            <Login />
        </div>
    );
};
