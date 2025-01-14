import React from 'react';
import Hero from '../components/home/Hero';
import ServicesGrid from '../components/home/ServicesGrid';
import About from '../components/home/About';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <ServicesGrid />
      <CTASection />
    </>
  );
};

export default Home;