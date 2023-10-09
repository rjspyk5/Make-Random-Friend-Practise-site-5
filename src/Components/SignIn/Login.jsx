import React, { useState } from 'react';
import './SignIn.css';
import { NavLink } from 'react-router-dom';
import { Twofactor } from './Twofactor';
export const Login = () => {
    const [login, setlogin] = useState(true);
    const [twoFactorStatus, settwoFactorStatus] = useState(false);
    const handleclick = (log) => {
        setlogin((pre) => !pre);
        log === 'login' && settwoFactorStatus(false);
    };
    return (
        <div>
            {login ? <h6>Log In</h6> : <h6>Sign Up</h6>}
            <div className="form-size" action="">
                {login ? (
                    <div>
                        Email <input className=" form-control" type="email" name="" id="" />
                        Password <input className=" form-control" type="password" name="" id="" />
                        <button className="button" type="submit">
                            Log IN
                        </button>
                    </div>
                ) : twoFactorStatus && !login ? (
                    <Twofactor />
                ) : (
                    <div>
                        Name <input className="form-control" type="text" />
                        Number <input className="form-control" type="number" name="" id="" />
                        Email <input className="form-control" type="email" name="" id="" />
                        BirthDate <input className="form-control" type="date" name="" id="" />
                        NID number <input className="form-control" type="number" name="" id="" />
                        Password <input className=" form-control" type="password" name="" id="" />
                        <button className="button" type="submit" onClick={() => settwoFactorStatus((pre) => !pre)}>
                            Next
                        </button>
                    </div>
                )}
            </div>
            <div className="text-center">
                {login ? <p>You haven't any account?</p> : <p>Already have a account?</p>}

                {login ? (
                    <NavLink className="link" onClick={() => handleclick()}>
                        Create Account
                    </NavLink>
                ) : (
                    <NavLink className="link" onClick={() => handleclick('login')}>
                        Log In
                    </NavLink>
                )}
            </div>
        </div>
    );
};
