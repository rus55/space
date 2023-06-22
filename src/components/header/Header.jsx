import React from 'react';
import {Container, Image, Nav, Navbar} from "react-bootstrap";
import logo from '../../assets/images/logo.png'
import {Link} from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <Navbar className='align-content-center ml'>
            <Container className='cont'>
                <Link as={Link} to={"/"}>
                    <Navbar.Brand className='mr'><Image src={logo} alt="Logo"/></Navbar.Brand>
                </Link>
                <Nav className="NavWrapper">
                    <Nav.Link as={Link} to={"/"} eventKey="1"><span>Главная</span></Nav.Link>
                    <Nav.Link as={Link} to={"/technology"} eventKey="2">Технология</Nav.Link>
                    <Nav.Link as={Link} to={"/flight-schedule"} eventKey="3">График полетов</Nav.Link>
                    <Nav.Link as={Link} to={"/guarantees"} eventKey="4">Гарантии</Nav.Link>
                    <Nav.Link as={Link} to={"/company"} eventKey="5">О компании</Nav.Link>
                    <Nav.Link as={Link} to={"/contacts"} eventKey="6">Контакты</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;