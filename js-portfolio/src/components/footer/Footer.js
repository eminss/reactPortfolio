import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function HFooter() {
  return (
    <Navbar fixed='bottom' bg="dark" variant="dark">
    <Container>
    <Nav className="me-auto">
      <Nav.Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jaden-storey-844a23227/">
      <FontAwesomeIcon className="iconFoot" icon={faLinkedin} color='#4d4d4e' />
      </Nav.Link>
      <Nav.Link target="_blank" rel="noopener noreferrer" href="https://github.com/eminss">
          <FontAwesomeIcon className="iconFoot" icon={faGithub} color='#4d4d4e' />
      </Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  )
}
