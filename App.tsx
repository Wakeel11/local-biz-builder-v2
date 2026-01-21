import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CityPage from './components/CityPage'; // Path changed from pages to components
import Contact from './components/Contact'; 
import Areas from './components/Areas'; 
import { illinoisCities } from './cities';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/areas-we-serve" element={<Areas />} />
          
          {illinoisCities.map((city) => (
            <Route 
              key={city.slug} 
              path={`/${city.slug}`} 
              element={<CityPage cityData={city} />} 
            />
          ))}

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
