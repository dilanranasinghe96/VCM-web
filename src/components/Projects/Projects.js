import React, { useState } from 'react';
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project4.jpg';
import project5 from '../assets/project5.jpg';
import project6 from '../assets/project6.jpg';
import './Projects.css';

const Projects = ({ full = false }) => {
  const [show, setShow] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform Redesign",
      category: "Web Development",
      image: project1,
      client: "RetailPlus Inc.",
      description: "Redesigned and developed a responsive e-commerce platform that increased conversion rates by 35%.",
      challenge: "The client's existing platform was outdated, slow, and not mobile-friendly, resulting in high bounce rates and low conversions.",
      solution: "We developed a modern, responsive e-commerce platform with improved navigation, faster page loads, and a streamlined checkout process. We also implemented advanced analytics to track user behavior.",
      results: "35% increase in conversion rates, 50% reduction in bounce rates, and 45% increase in mobile sales within the first three months."
    },
    {
      id: 2,
      title: "Supply Chain Management System",
      category: "ERP Systems",
      image: project2,
      client: "Global Logistics Co.",
      description: "Implemented a custom supply chain management system that reduced operational costs by 25%.",
      challenge: "The client was using multiple disconnected systems to manage their supply chain, leading to inefficiencies, data discrepancies, and high operational costs.",
      solution: "We developed an integrated supply chain management system that consolidated data from multiple sources, automated workflows, and provided real-time visibility into the entire supply chain.",
      results: "25% reduction in operational costs, 40% improvement in inventory accuracy, and 60% faster order processing."
    },
    {
      id: 3,
      title: "Healthcare Mobile App",
      category: "Mobile App Development",
      image: project3,
      client: "MediCare Solutions",
      description: "Developed a patient-centric mobile app that improved patient engagement and satisfaction scores.",
      challenge: "The healthcare provider needed a way to improve patient engagement, streamline appointment scheduling, and provide easy access to medical records.",
      solution: "We created a user-friendly mobile app that allows patients to schedule appointments, access their medical records, communicate with healthcare providers, and receive personalized health recommendations.",
      results: "65% adoption rate among patients, 30% reduction in missed appointments, and 45% improvement in patient satisfaction scores."
    },
    {
      id: 4,
      title: "Financial Services Digital Transformation",
      category: "Business Consulting",
      image: project4,
      client: "Premier Financial Group",
      description: "Led a comprehensive digital transformation initiative that modernized the client's operations and customer experience.",
      challenge: "The financial services firm was losing market share to more technologically advanced competitors and struggling with inefficient legacy systems.",
      solution: "We developed a multi-year digital transformation roadmap, helped implement new core banking systems, redesigned customer-facing digital channels, and trained staff on new technologies and processes.",
      results: "20% increase in customer retention, 15% reduction in operational costs, and successful launch of three new digital products within 18 months."
    },
    {
      id: 5,
      title: "Manufacturing Process Automation",
      category: "Software Solutions",
      image: project5,
      client: "IndusTech Manufacturing",
      description: "Automated key manufacturing processes, resulting in a 40% increase in production efficiency.",
      challenge: "The manufacturer was dealing with inefficient manual processes, quality control issues, and increasing labor costs.",
      solution: "We implemented a custom automation solution that digitized quality inspection, optimized production scheduling, and provided real-time monitoring of manufacturing processes.",
      results: "40% increase in production efficiency, 30% reduction in quality issues, and 25% decrease in production costs."
    },
    {
      id: 6,
      title: "Retail Analytics Platform",
      category: "IT Consulting",
      image: project6,
      client: "MultiStore Retail Group",
      description: "Developed an advanced analytics platform that provided actionable insights for inventory and marketing decisions.",
      challenge: "The retail chain lacked visibility into customer behavior, inventory performance, and marketing effectiveness across multiple stores.",
      solution: "We designed and implemented an integrated analytics platform that collected data from POS systems, e-commerce platforms, and marketing campaigns to provide comprehensive business intelligence.",
      results: "28% improvement in inventory turnover, 22% increase in marketing ROI, and data-driven insights that enabled the successful launch of a new store concept."
    }
  ];

  const handleShow = (project) => {
    setActiveProject(project);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <section id="projects" className={`${full ? 'pt-120' : 'py-5'}`}>
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 data-aos="fade-up" className="section-title">Our Projects</h2>
            <p data-aos="fade-up" data-aos-delay="200" className="section-subtitle">
              Delivering excellence across industries
            </p>
          </Col>
        </Row>
        
        <Row>
          {projects.slice(0, full ? projects.length : 3).map((project, index) => (
            <Col lg={4} md={6} className="mb-4" key={project.id}>
              <Card 
                data-aos="fade-up" 
                data-aos-delay={200 + (index * 100)} 
                className="border-0 shadow-sm project-card h-100"
              >
                <div className="project-img-container">
                  <Card.Img variant="top" src={project.image} className="project-img" />
                  <div className="project-overlay">
                    <Button 
                      variant="light" 
                      size="sm" 
                      className="project-btn"
                      onClick={() => handleShow(project)}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
                <Card.Body>
                  <span className="badge bg-light text-primary mb-2">{project.category}</span>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {project.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        {!full && (
          <Row className="mt-4">
            <Col className="text-center">
              <Button 
                as={Link} 
                to="/projects" 
                variant="primary" 
                size="lg" 
                className="rounded-pill px-4"
                data-aos="fade-up" 
                data-aos-delay="400"
              >
                View All Projects
              </Button>
            </Col>
          </Row>
        )}
      </Container>
      
      {/* Project Details Modal */}
      <Modal show={show} onHide={handleClose} size="lg" centered>
        {activeProject && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{activeProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img 
                src={activeProject.image} 
                alt={activeProject.title} 
                className="img-fluid rounded mb-4"
              />
              <h5>Client</h5>
              <p>{activeProject.client}</p>
              
              <h5>Challenge</h5>
              <p>{activeProject.challenge}</p>
              
              <h5>Solution</h5>
              <p>{activeProject.solution}</p>
              
              <h5>Results</h5>
              <p>{activeProject.results}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </section>
  );
};

export default Projects;