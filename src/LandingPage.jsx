import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
// import BackgroundEffects from './components/BackgroundEffects';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 overflow-x-hidden">
      
      <Navbar />
        <main>
          <Hero />
          <Services />
          <Stats />
          <ContactForm />
        </main>
        <Footer />
    </div>
  );
};

export default LandingPage;
