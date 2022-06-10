import Home from "./components/home/Home";
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/portfolio" element={<Portfolio />}/>
    <Route path="/resume" element={<Resume />}/>
    <Route path="/contact" element={<Contact />}/>

    </Routes>
    </>
  );
}

export default App;