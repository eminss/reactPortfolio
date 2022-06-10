import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './style.css'

export default function Contact() {
  return (
    <>
      <Header />
      <Container class="main" className="main">
        <Row>
          <Col lg={4} className="p-5 bg-secondary">
            <h2 className="text-white text-center">Contact me</h2>
            <h4 className="text-white text-center py-5">JadenStorey@hotmail.com</h4>
          </Col>
          <Col lg={8}>
            <Form className="p-5 bg-light">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  Enter your email here to get in touch!
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formNames">
              <Row>
              <Col lg={6}>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="firstName" placeholder="First Name" />
              </Col>
              <Col lg={6}>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="lastName" placeholder="Last Name" />
              </Col>
              </Row>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}
