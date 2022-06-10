import React from 'react';
import './style.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFile, faBook, faMessage } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <Navbar sticky='top' bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Jaden Storey</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/about">
                        <FontAwesomeIcon className="iconNav" icon={faUser} color='#4d4d4e' />
                        About me
                    </Nav.Link>
                    <Nav.Link href="/portfolio">
                        <FontAwesomeIcon className="iconNav" icon={faBook} color='#4d4d4e' />
                        Portfolio</Nav.Link>
                    <Nav.Link href="/contact">
                        <FontAwesomeIcon className="iconNav" icon={faMessage} color='#4d4d4e' />
                        Contact</Nav.Link>
                    <Nav.Link href="/resume">
                        <FontAwesomeIcon className="iconNav" icon={faFile} color='#4d4d4e' />
                        Resume</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
