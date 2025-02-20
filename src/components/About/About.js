import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import aboutImage from '../../assets/about-image.png';
import './About.css';

const About = ({ full = false }) => {
  return (
    <section id="about" className={`${full ? 'pt-120' : 'py-5'}`}>
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 data-aos="fade-up" className="section-title">About Us</h2>
            <p data-aos="fade-up" data-aos-delay="200" className="section-subtitle">
              Learn who we are and what drives us
            </p>
          </Col>
        </Row>
        
        <Row >
          <Col lg={4} data-aos="fade-right">
            <img src={aboutImage} alt="About Valuecraft Minds" className="img-fluid  bumping-image" />
          </Col>
          <Col lg={8} data-aos="fade-left" data-aos-delay="200">
            <h3 className="mb-4">Our Story</h3>
            <p className="mb-4">
              Founded in 2018, Valuecraft Minds started with a vision to bridge the gap between business strategy and technological implementation. Our team of experts combines deep industry knowledge with technical expertise to deliver solutions that drive real business value.
            </p>
            <p className="mb-4">
              We believe that successful digital transformation requires both strategic insight and technical excellence. That's why our approach integrates business consulting with cutting-edge technology solutions.
            </p>
            
            <div className="mt-5">
              <Row>
                <Col md={6} className="mb-4">
                  <Card data-aos="zoom-in" data-aos-delay="300" className="h-100 border-0 shadow-sm">
                    <Card.Body className="text-center py-4">
                      <div className="display-4 text-primary mb-3">
                        <i className="bi bi-lightbulb"></i>
                      </div>
                      <Card.Title>Our Mission</Card.Title>
                      <Card.Text>
                        To empower businesses through innovative solutions that create lasting value.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} className="mb-4">
                  <Card data-aos="zoom-in" data-aos-delay="400" className="h-100 border-0 shadow-sm">
                    <Card.Body className="text-center py-4">
                      <div className="display-4 text-primary mb-3">
                        <i className="bi bi-eye"></i>
                      </div>
                      <Card.Title>Our Vision</Card.Title>
                      <Card.Text>
                        To be the partner of choice for businesses seeking transformative growth through technology.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        
        {full && (
          <Row className="mt-5">
            <Col>
              <h3 className="mb-4" data-aos="fade-up">Our Values</h3>
              <Row>
                {[
                  {
                    title: "Excellence",
                    icon: "bi bi-star",
                    description: "We strive for excellence in everything we do, from strategy to implementation."
                  },
                  {
                    title: "Innovation",
                    icon: "bi bi-lightbulb",
                    description: "We constantly seek innovative solutions to complex business challenges."
                  },
                  {
                    title: "Integrity",
                    icon: "bi bi-shield-check",
                    description: "We believe in honest, transparent relationships with our clients and partners."
                  },
                  {
                    title: "Collaboration",
                    icon: "bi bi-people",
                    description: "We work closely with our clients, treating their challenges as our own."
                  }
                ].map((value, index) => (
                  <Col md={6} lg={3} key={index} className="mb-4">
                    <Card data-aos="zoom-in" data-aos-delay={300 + (index * 100)} className="h-100 border-0 shadow-sm">
                      <Card.Body className="text-center py-4">
                        <div className="display-4 text-primary mb-3">
                          <i className={value.icon}></i>
                        </div>
                        <Card.Title>{value.title}</Card.Title>
                        <Card.Text>
                          {value.description}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
};

export default About;