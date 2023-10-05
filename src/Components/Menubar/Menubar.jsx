import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { getDataFromLocalStorage } from '../LocalDataBase/LocalDatabase';
import { FaFacebookMessenger } from 'react-icons/fa';
import './Menubar.css';
import { mszbtnContext } from '../../App';
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
                            <Nav.Link>
                                <NavLink className="text-decoration-none text-light d-flex " to={'/message'}>
                                    <FaFacebookMessenger className="MesssengerFullLogoStyle" style={{ marginTop: '-4px' }} size={35}></FaFacebookMessenger>
                                    {totalmsz.length !== 0 && (
                                        <div className="MessengerFloatingMessege">
                                            <h6> {totalmsz.length}</h6>
                                        </div>
                                    )}
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link style={{ display: 'flex' }}>
                                <NavLink className="text-decoration-none text-light " to={'/user'}>
                                    All User
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink className="text-decoration-none text-light " to={'/signin'}>
                                    Sign In
                                </NavLink>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
