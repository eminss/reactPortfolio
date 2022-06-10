import React, { useEffect } from 'react';
import './style.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { useState } from 'react';
import { useTransition, animated, config } from 'react-spring';


export default function Home() {
  const [animFinished, setAnimFinished] = useState();
  const transition = useTransition(animFinished, {
    from: { x: -100, y: 400, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    config: config.slow,
    delay: 500
  })

  const transitionSub = useTransition(animFinished, {
    from: { x: 0, y: 400, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    config: config.slow,
    delay: 2000
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
      <Footer />
    </>
  )
}