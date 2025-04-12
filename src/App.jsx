import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/organisms/Navbar';
import Hero from './components/Hero';
import PropertyList from './components/organisms/PropertyList';
import Categories from './components/organisms/Categories';
import Footer from './components/organisms/Footer';
import HowItWorks from './components/HowItWorks';
import Seller from './pages/Seller';
import SellerRegister from './pages/SellerRegister';
import Buyer from './pages/Buyer';
import BuyerRegister from './pages/BuyerRegister';

/**
 * App Component
 * 
 * Main application component that serves as the root of the component tree.
 * Wraps the entire application with Router for navigation and contains
 * the main layout structure.
 * 
 * Component Structure:
 * - Navbar (Header navigation)
 * - Hero (Main banner section)
 * - HowItWorks (Process explanation section)
 * - PropertyList (Display available properties)
 * - Categories (Property categories section)
 * - Footer (Site footer with links and info)
 */
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#ECECEC]">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <div className="container mx-auto px-4">
                <HowItWorks />
                <PropertyList />
                <Categories />
              </div>
            </>
          } />
          <Route path="/seller" element={<Seller />} />
          <Route path="/seller/register" element={<SellerRegister />} />
          <Route path="/buyer" element={<Buyer />} />
          <Route path="/buyer/register" element={<BuyerRegister />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 