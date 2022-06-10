import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
export default function Resume() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col lg={4} className="bg-light">
            <h1 className='p-5'>Resume</h1>
          </Col>
          <Col lg={8}>
            <p className='p-4'>
              Communicative, open-minded, aspiring and proficient Web Developer eager to create exciting websites. Have experience
              working in busy face-paced environments, as well as cooperating with and leading peers.
            </p>
            <h4>Education</h4>
            <h6 className='p-2 m-2'>Lake Washington Institute of Technology</h6>
            <p className='p-1 m-2'>Associates degree in Game Design and Interactive Multi-media</p>
            <h6 className='p-2 m-2'>University of Washington / Trilogy</h6>
            <p className='p-1 m-2'>Full-Stack Web Development Bootcamp</p>
            
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}
