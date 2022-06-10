import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import './style.css';

export default function Portfolio() {
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col >
            <h2 className="header text-center my-3">WikiOnBored</h2>
            <a className="imageLink" target="_blank" href="https://hseymo.github.io/Activity-Generator/"><Image id='projectImages' src="https://raw.githubusercontent.com/hseymo/Activity-Generator/dev/assets/images/activityresultHS.png"
              className="img-fluid p-3" alt="WikiOnBored Image"></Image></a>
            <h2 className="header text-center">Porefect</h2>
            <a className="imageLink" target="_blank" href="https://porefect.herokuapp.com/"><Image id='projectImages' src="https://raw.githubusercontent.com/jittel/combo-skincare/dev/public/photos/porefecthome.jpg"
              className="img-fluid p-3" alt="Porefect Image"></Image></a>
          </Col>
          <Col className="w-100">
            <h2 className="header text-center my-3">Self Care Central</h2>
            <a className="imageLink" target="_blank" href="https://selfcarecentral.herokuapp.com/"><Image id='projectImages' src="https://user-images.githubusercontent.com/75865873/172924970-36be2b1c-2c93-443b-a606-8c58fe09908a.png"
              className="img-fluid p-3" alt="Porefect Image"></Image></a>
          </Col>
          <Col id='textCol' xs lg={6} className="bg-light">
            <h2 className="header p-3 m-5">My Works</h2>
            <p className="p-3">
              Here is a collection of some of my past and current projects.
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
