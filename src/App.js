import React from 'react';
import './assets/fonts/fontStyles.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/organisms/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Footer from './components/organisms/Footer';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <Navbar />
        <main className="relative">
          <Hero />
          <HowItWorks />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 