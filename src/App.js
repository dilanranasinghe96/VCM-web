import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import OurTeam from './components/Team/Team';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';



function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    
      <Router>
      <div className="App">
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <>
              <section id="home"><Hero /></section>
              <section id="about"><About full={true}/></section>
              <section id="team"><OurTeam full={true}/></section>
              <section id="services"><Services full={true}/></section>             
              <section id="contact"><Contact full={true}/></section>

            </>
          } />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
