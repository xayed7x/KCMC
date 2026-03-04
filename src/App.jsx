import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Leadership from './components/Leadership';
import Departments from './components/Departments';
import SmartCampus from './components/SmartCampus';
import Protocol from './components/Protocol';
import NoticesTestimonials from './components/NoticesTestimonials';
import Footer from './components/Footer';
import OGImage from './OGImage';

gsap.registerPlugin(ScrollTrigger);

function App() {
  if (window.location.search.includes('og=true')) {
    return <OGImage />;
  }

  return (
    <div className="bg-primary min-h-screen font-heading text-white selection:bg-accent selection:text-primary">
      <Navbar />
      <Hero />
      <Ticker />
      <Features />
      <Philosophy />
      <Departments />
      <SmartCampus />
      <Leadership />
      <Protocol />
      <NoticesTestimonials />
      <Footer />
    </div>
  );
}

export default App;
