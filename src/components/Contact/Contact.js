import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import './Contact.css';

const Contact = ({ full = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  }); 
  
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would normally send the data to your backend
    // For demo purposes, we'll just show a success message
    setAlertVariant('success');
    setAlertMessage("Thank you for your message! We'll get back to you soon.");
    setShowAlert(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Hide alert after 5 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  
  return (
    <section id="contact" className={`${full ? 'pt-120' : 'py-5'}`}>
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 data-aos="fade-up" className="section-title">Contact Us</h2>
            <p data-aos="fade-up" data-aos-delay="200" className="section-subtitle">
              Get in touch with our team
            </p>
          </Col>
        </Row>
        
        <Row className="justify-content-center">
          <Col lg={5} md={6} className="mb-4 mb-lg-0">
            <div data-aos="fade-up">
              <h4 className="mb-4">Contact Information</h4>
              <div className="contact-info">
                <div className="d-flex mb-4">
                  <div className="contact-icon me-3">
                    <i className="bi bi-geo-alt text-primary"></i>
                  </div>
                  <div>
                    <h5 className="mb-1">Address</h5>
                    <p className="mb-0">123 Business Avenue, Suite 500<br />Tech District, Innovation City 12345</p>
                  </div>
                </div>
                
                <div className="d-flex mb-4">
                  <div className="contact-icon me-3">
                    <i className="bi bi-envelope text-primary"></i>
                  </div>
                  <div>
                    <h5 className="mb-1">Email</h5>
                    <p className="mb-0">
                      <a href="mailto:info@valuecraftminds.com" className="text-decoration-none">info@valuecraftminds.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="d-flex mb-4">
                  <div className="contact-icon me-3"> 
                    <i className="bi bi-telephone text-primary"></i>
                  </div>
                  <div>
                    <h5 className="mb-1">Phone</h5>
                    <p className="mb-0">
                      <a href="tel:+11234567890" className="text-decoration-none">+1 (123) 456-7890</a>
                    </p>
                  </div>
                </div>
                
                <div className="d-flex">
                  <div className="contact-icon me-3">
                    <i className="bi bi-clock text-primary"></i>
                  </div>
                  <div>
                    <h5 className="mb-1">Business Hours</h5>
                    <p className="mb-0">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="social-links mt-5">
                <h5 className="mb-3">Connect With Us</h5>
                <div className="d-flex">
                  <a href="https://www.linkedin.com" className="me-3 social-icon" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-linkedin"></i>
                  </a>
                 
                  <a href="https://www.facebook.com" className="me-3 social-icon" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="https://www.facebook.com" className="me-3 social-icon" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          </Col>
          
          <Col lg={7} md={6}>
            <div data-aos="fade-up" data-aos-delay="200" className="contact-form-wrapper p-4 p-md-5 shadow-sm rounded bg-white">
              {showAlert && (
                <Alert variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>
                  {alertMessage}
                </Alert>
              )}
              
              <Form onSubmit={handleSubmit} className='text-black'>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Your Email</Form.Label>
                      <Form.Control 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    required 
                  />
                </Form.Group>
                
                <Form.Group className="mb-4">
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={5} 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                  />
                </Form.Group>
                
                <Button variant="primary" type="submit" className="rounded-pill px-4 py-2">
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
