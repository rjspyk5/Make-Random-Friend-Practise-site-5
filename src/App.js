import React, { createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { User } from './Components/User/User';
import Menubar from './Components/Menubar/Menubar';
import { Userdetails } from './Components/User/Userdetails';

const App = () => {
    return (
        <BrowserRouter>
            <Menubar />

            <Routes>
                <Route path="/" element={<User />} />
                <Route path="/user" element={<User />} />
                <Route path="/user/:userdetails" element={<Userdetails />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
