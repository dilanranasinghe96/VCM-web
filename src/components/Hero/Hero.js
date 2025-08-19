import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import heroImage from '../../assets/hero-image.jpg';
import './Hero.css';



const Hero = () => {
  
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    
      <section id="hero" className="d-flex align-items-center" style={{
      backgroundImage: `url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      position: 'relative'
    }}>
      <div className="position-absolute top-0 start-0 w-100 h-100 " style={{
        backgroundColor: "rgba(0, 0, 0, 0.8)", // Adjust opacity for darkness
      }}></div>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center text-white">
            <h1 data-aos="fade-up" className="display-4 fw-bold mb-4">
            Crafting Values Together
            </h1>
            
            <p data-aos="fade-up" data-aos-delay="600" className="lead mb-5">
            Welcome! We are excited to introduce our company and showcase how we can help your business thrive.
            </p>
            <div data-aos="fade-up" data-aos-delay="800">
              
              <Button onClick={() => scrollToSection("services")} variant="outline-light" size="lg" className="rounded-pill px-4 me-3">
                Our Services
              </Button>
              <Button onClick={() => scrollToSection("contact")} variant="primary" size="lg" className=" rounded-pill px-4">
                Get Started
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  
  );
};

export default Hero;