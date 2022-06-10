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
            <Image src="https://media-exp2.licdn.com/dms/image/C5603AQHFBNCWocWYqw/profile-displayphoto-shrink_800_800/0/1647231677668?e=1660176000&v=beta&t=HS296ghFAEmoRjnw2dtlrbseau3WoNKt5qogSWprMxg" 
            className="img-fluid p-5 rounded" alt="Responsive image"></Image>
            </Col>
            <Col id='textCol' xs lg={9} className="bg-light">
            <h2 className="header p-3 m-5">About Page</h2>
            <p className="p-3">
                This is some information about myself and my company and my company website and my company website website website, This is some information about myself 
                and my company and my company website and my company website website website, This is some information about myself 
                and my company and my company website and my company website website website
            </p>
            <p className="p-3">
                This is some information about myself and my company and my company website and my company website website website, This is some information about myself 
                and my company and my company website and my company website website website, This is some information about myself 
                and my company and my company website and my company website website website
            </p>
            <p className="p-3">
                This is some information about myself and my company and my company website and my company website website website, This is some information about myself 
                and my company and my company website and my company website website website, This is some information about myself 
                and my company and my company website and my company website website website
            </p>
            </Col>
    
        </Row>
    </Container>
    <Footer />
    </>
  )
}
