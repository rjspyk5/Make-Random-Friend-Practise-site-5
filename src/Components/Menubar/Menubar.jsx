import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Menubar() {
    return (
        <div>
            <Navbar expand="lg" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Make Random Friend</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link>
                                <NavLink className="text-decoration-none text-light " to={'/message'}>
                                    Messages
                                </NavLink>
                            </Nav.Link>

                            <Nav.Link>
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
