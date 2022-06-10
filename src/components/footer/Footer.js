import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMailForward } from '@fortawesome/free-solid-svg-icons'
import './style.css'

export default function Footer() {
  return (
    <Navbar fixed='bottom' bg="dark" variant="dark">
    <Container>
    <Nav className="me-auto">
      <Nav.Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jaden-storey-844a23227/">
      <FontAwesomeIcon className="iconFoot" icon={faLinkedin} color='#4d4d4e' />
      </Nav.Link>
      <Nav.Link target="_blank" rel="noopener noreferrer" href="https://github.com/eminss">
          <FontAwesomeIcon className="iconFoot mx-2" icon={faGithub} color='#4d4d4e' />
      </Nav.Link>
      <Nav.Link className="text-muted ml-1" target="_blank" rel="noopener noreferrer" href="mailto:jadenstorey@hotmail.com">
          <FontAwesomeIcon className="iconFoot" icon={faMailForward} color='#4d4d4e' />
          <p id="footerText">jadenstorey@hotmail.com</p>
      </Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  )
}
