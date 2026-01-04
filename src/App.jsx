import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tours from './components/Tours';
import AIConcierge from './components/AIConcierge';
import SocialProof from './components/SocialProof';
import LeadCapture from './components/LeadCapture';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="bg-warm-sand/5 min-h-screen font-sans">
      <Navbar />
      <Hero />
      <Tours />
      <AIConcierge />
      <SocialProof />
      <LeadCapture />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
