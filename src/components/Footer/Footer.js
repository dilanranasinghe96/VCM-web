import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logoWhite from '../../assets/logo-white.png';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row className="justify-content-between">
          <Col lg={4} className="mb-4 mb-lg-0">
            <img src={logoWhite} alt="Valuecraft Minds" height="40" className="mb-4" />
            <p className="mb-4">
              Valuecraft Minds helps businesses transform and grow through strategic consulting and innovative technology solutions.
            </p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/company/valuecraft-minds" className="me-3 social-icon-light" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
             
              <a href="https://www.facebook.com/people/VCM/61572285525451/" className="me-3 social-icon-light" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://wa.me/+94773612339" className="me-3 social-icon-light" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </Col>
          
          <Col lg={3} md={6} className="mb-4 mb-lg-0">
            <h5 className="mb-3 footer-heading">Contact Info</h5>
            <ul className="list-unstyled footer-contact">
              <li className="d-flex mb-3">
                <i className="bi bi-geo-alt me-2"></i>
                <span> No: 31A/52, Galwarusawa Road,<br />
                Korathota, Kaduwela.</span>
              </li>
              <li className="d-flex mb-3">
                <i className="bi bi-envelope me-2"></i>
                <a href="mailto:udara@valuecraftminds.com" className="footer-link">udara@valuecraftminds.com</a>
              </li>
              <li className="d-flex mb-3">
                <i className="bi bi-telephone me-2"></i>
                <a href="tel:+94773612339" className="footer-link">+94 77 361 2339</a>
              </li>
            </ul>
          </Col>
        </Row>
        
        <hr className="my-4 footer-divider" />
        
        <Row className="align-items-center">
          <Col md={6} className="mb-3 mb-md-0">
            <p className="mb-0 text-sm">
              &copy; {currentYear} Valuecraft Minds. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <ul className="list-inline mb-0 footer-legal">
              <li className="list-inline-item me-4">
                <Link to="" className="footer-link text-sm">Privacy Policy</Link>
              </li>
              <li className="list-inline-item me-4">
                <Link to="" className="footer-link text-sm">Terms of Service</Link>
              </li>
              <li className="list-inline-item">
                <Link to="" className="footer-link text-sm">Cookie Policy</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
