import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { User } from './Components/User/User';
import Menubar from './Components/Menubar/Menubar';
import { Userdetails } from './Components/User/Userdetails';
import { SignIn } from './Components/SignIn/SignIn';
import { Message } from './Components/Message/Message';
import { NotfoundPage } from './Components/Notfound/NotfoundPage';
import { Home } from './Components/Home/Home';
export const mszbtnContext = createContext();
const App = () => {
    const [mszbtn, setmszbtn] = useState(false);
    const [mszdata, setmszdata] = useState([]);
    const [data, setdata] = useState([]);
    const [posts, setposts] = useState([]);
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=100')
            .then((res) => res.json())
            .then((r) => setdata(r.results));
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((r) => setposts(r));
    }, []);
    data && data.map((el, index) => (el.serialnumber = index + 1));
    return (
        <mszbtnContext.Provider value={[mszbtn, setmszbtn, mszdata, setmszdata, data, setdata, posts, setposts]}>
            <BrowserRouter>
                <Menubar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/user" element={<User />} />
                    <Route path="/user/:userdetails" element={<Userdetails />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/message" element={<Message />} />
                    <Route path="*" element={<NotfoundPage />} />
                </Routes>
            </BrowserRouter>
        </mszbtnContext.Provider>
    );
};
export default App;
