import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../Assets/logo.png'

const Herdear = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className='menu'>
            <Container>
                <Navbar.Brand as={Link} to="/"><img height={50} src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="menu-full">
                    <Nav className="menu-main">
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/explore">Explore</NavLink>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Herdear;