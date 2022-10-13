import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

export default function About() {
  return (
      <>
    <Header />
    <Container fluid>
        <Row>
            <Col >
            <Image src={require("./assets/images/menanna.jpg")}
            className="img-fluid p-5 rounded" alt="Responsive image"></Image>
            </Col>
            <Col id='textCol' xs lg={9} className="bg-light">
            <h2 className="header p-3 m-5">About Page</h2>
            <p className="p-3">
                Hello there! My name is Jaden Storey. I am a web developer, 3D artist, Computer Science Student and aspire to create some cool things.
                I have an associates degree in Game Design and Interactive Multi-media from Lake Washington Institute of Technology and have graduated from the 
                University of Washington Full-stack web development Bootcamp by Trilogy.
            </p>
            <p className="p-3">
                I've always had a ton of interest in computers since I was a kid. Wondering how they work, wondering how people build websites and applications. 
                This sparked my interest and motivation to start my journey into Computer Science and have found to really enjoy the process! 
                I plan on learning more and more everyday and reaching my goals of working with Computers for a living.
            </p>
            </Col>
    
        </Row>
    </Container>
    <Footer />
    </>
  )
}
