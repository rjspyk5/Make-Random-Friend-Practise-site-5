import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { User } from './Components/User/User';
import Menubar from './Components/Menubar/Menubar';
import { Userdetails } from './Components/User/Userdetails';
import { SignIn } from './Components/SignIn/SignIn';
import { Message } from './Components/Message/Message';

export const mszbtnContext = createContext();

const App = () => {
    const [mszbtn, setmszbtn] = useState(false);
    const [mszdata, setmszdata] = useState([]);

    return (
        <mszbtnContext.Provider value={[mszbtn, setmszbtn, mszdata, setmszdata]}>
            <BrowserRouter>
                <Menubar />

                <Routes>
                    <Route path="/" element={<User />} />
                    <Route path="/user" element={<User />} />
                    <Route path="/user/:userdetails" element={<Userdetails />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/message" element={<Message />} />
                </Routes>
            </BrowserRouter>
        </mszbtnContext.Provider>
    );
};

export default App;
