import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CityPage from './pages/CityPage';
import ContactPage from './pages/ContactPage';
import AreasWeServe from './pages/AreasWeServe';
import { illinoisCities } from './cities'; // Import cities data

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/areas-we-serve" element={<AreasWeServe />} />
          
          {/* Dynamic City Routes - This ensures new plumbing slugs work */}
          {illinoisCities.map((city) => (
            <Route 
              key={city.slug} 
              path={`/${city.slug}`} 
              element={<CityPage cityData={city} />} 
            />
          ))}

          {/* Fallback - If link is wrong, go to home instead of broken redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
