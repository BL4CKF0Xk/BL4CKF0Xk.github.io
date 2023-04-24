import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import About from '../components/About';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Slider />
      <Footer />
    </> 
  )
}

export default Home