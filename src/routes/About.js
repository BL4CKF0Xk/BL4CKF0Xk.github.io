import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import About1 from '../components/About';
import Social from '../components/Social';
import AboutHero from '../components/AboutHero';

const About = () => {
  return (
    <>
      <Navbar />
      <AboutHero/>
      <Social />
      <About1 />
      <Footer />
    </>
  )
}

export default About
