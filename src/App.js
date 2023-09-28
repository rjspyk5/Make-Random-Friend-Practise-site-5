import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { User } from './Components/User/User';
import Menubar from './Components/Menubar/Menubar';
import { Userdetails } from './Components/User/Userdetails';
import { SignIn } from './Components/SignIn/SignIn';
import { Message } from './Components/Message/Message';

const App = () => {
    return (
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
    );
};

export default App;
