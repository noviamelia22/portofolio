import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import WebDev from './Components/WebDev/WebDev';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './Components/ScrollToTop';
import Uiux from './Components/Uiux/Uiux';
import Dataanalyst from './Components/Dataanalyst/Dataanalyst';

const Home = () => (
  <div className="main-wrapper">
    <Navbar />
    <Hero />
    <About />
    <Services />
    <MyWork />
    <Contact />
    <Footer />
  </div>
);

const App = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop /> 
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/webdev" element={<WebDev />} />
          <Route path="/uiux" element={<Uiux />} />
          <Route path="/dataanalyst" element={<Dataanalyst />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
