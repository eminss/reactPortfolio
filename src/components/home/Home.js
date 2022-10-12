import React, { useEffect } from 'react';
import './style.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { useState } from 'react';
import { useTransition, animated, config } from 'react-spring';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

export default function Home() {
  const [animFinished, setAnimFinished] = useState();
  const transition = useTransition(animFinished, {
    from: { x: 0, y: 50, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    config: config.slow,
    delay: 0
  })

  const transitionSub = useTransition(animFinished, {
    from: { x: 0, y: 100, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    config: config.slow,
    delay: 250
  })

  const transitionImage = useTransition(animFinished, {
    from: { x: 0, y: 10, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    config: config.slow,
    delay: 1000
  })

  useEffect(() => {
    setAnimFinished(true);
  })
  
  return (
    <>
      <Header />
      <div className="container">
        <div className="item">
          {transition((style, item) => 
            item ? <animated.h1 style={style} className="item">Welcome to my Portfolio,</animated.h1> : ''
          )}
          {transitionSub((style, item) => 
            item ? <animated.h1 style={style} className="item">Feel free to look around.</animated.h1> : ''
          )}
        </div>
      </div>
      <Container>
            <Row>
              <Col lg={12}>
                {transitionImage((style, item) => 
              item ? <animated.div id="animImg" style={style} className="item"></animated.div> : ''
              )}
              </Col>
            </Row>
          </Container>
      <Footer />
    </>
  )
}
