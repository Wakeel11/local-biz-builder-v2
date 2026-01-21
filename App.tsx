import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage'; 
import CityPage from './components/CityPage'; 
import Contact from './components/Contact'; 
import Areas from './components/Areas'; 
import { illinoisCities } from './cities';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          {/* Main Home Route */}
          <Route path="/" element={<Home />} />
          
          {/* Dynamic Service Routes (SEO Optimized) */}
          <Route path="/services/:slug" element={<ServicePage />} />
          
          {/* Static Support Routes */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/areas-we-serve" element={<Areas />} />
          
          {/* Dynamic City Mapping from cities.ts */}
          {illinoisCities.map((city) => (
            <Route key={city.slug} path={`/${city.slug}`} element={<CityPage cityData={city} />} />
          ))}
          
          {/* Fallback to Home for safety */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
