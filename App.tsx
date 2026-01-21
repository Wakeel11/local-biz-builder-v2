import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage'; // NEW IMPORT
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
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/areas-we-serve" element={<Areas />} />
          
          {/* YEAH LINE MISSING THI - Ab Service Pages load honge */}
          <Route path="/services/:slug" element={<ServicePage />} />
          
          {illinoisCities.map((city) => (
            <Route key={city.slug} path={`/${city.slug}`} element={<CityPage cityData={city} />} />
          ))}
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
