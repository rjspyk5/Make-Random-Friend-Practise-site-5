import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { getDataFromLocalStorage } from '../LocalDataBase/LocalDatabase';
import { FaFacebookMessenger } from 'react-icons/fa';
import './Menubar.css';
import { mszbtnContext } from '../../App';
import { AiOutlineUsergroupDelete } from 'react-icons/ai';
export default function Menubar() {
    const [totalmsz, settotalmsz] = useState([]);
    const [sendmszbtn, , dltmszbtn] = useContext(mszbtnContext);
    useEffect(() => {
        settotalmsz(getDataFromLocalStorage());
    }, [sendmszbtn, dltmszbtn]);
    return (
        <div className="sticky-top">
            <Navbar expand="lg" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Make Random Friend</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className="text-decoration-none text-light d-flex mx-2 navlink" to={'/message'}>
                                <FaFacebookMessenger className="MesssengerFullLogoStyle" size={35} />
                                {totalmsz.length !== 0 && (
                                    <div className="MessengerFloatingMessege">
                                        <h6> {totalmsz.length}</h6>
                                    </div>
                                )}
                            </NavLink>

                            <NavLink className="text-decoration-none text-light mx-2 navlink" to={'/user'}>
                                <AiOutlineUsergroupDelete size={30} />
                            </NavLink>

                            <NavLink className="text-decoration-none text-light mx-2 navlink" to={'/signin'}>
                                Sign In
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
