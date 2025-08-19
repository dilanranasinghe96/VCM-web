import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import digital from '../../assets/digital.png';
import manufacture from '../../assets/manufacture.png';
import './Services.css';

const Services = ({ full = false }) => {
  const services = [
    {
      title: "Manufacturing Excellence",
      icon: "bi bi-gear-fill",
      imageSrc: manufacture, // Replace with manufacture
      description: "We help businesses streamline processes, eliminate inefficiencies, and develop talent for long-term success. With a focus on adding real value, our expert team works closely with you to drive meaningful change and growth. Let's craft your path to excellence",
      subServices: [
        {
          title: "Process Excellence",
          icon: "bi bi-diagram-3",
          description: "Streamline your operations and significantly boost efficiency with our proven process optimization strategies. Experience tangible improvements and unlock new levels of productivity.",
        },
        {
          title: "Company Transformation",
          icon: "bi bi-arrow-repeat",
          description: "Turnaround struggling businesses with our comprehensive transformation services. We provide tailored support to revitalize operations,improve profitability,and drive sustainable growth.",
        },
        {
          title: "New Products or Services",
          icon: "bi bi-box-seam",
          description: "Maximize the value of your new offerings with our expert support. We help you launch successfully,reach your target market, and achieve your business goals.",
        }
      ]
    },
    {
      title: "Digital Solutions",
      icon: "bi bi-laptop",
      imageSrc:digital, // Replace with digital
      description: "We recognize the critical role technology plays in driving business transformation in today's dynamic environment. With this understanding, we embarked on a journey to expand our expertise by offering custom software solutions tailored to meet evolving market demands",
      subServices: [
        {
          title: "Custom Software",
          icon: "bi bi-code-square",
          description: "Tailored software solutions designed to streamline your workflows, integrate seamlessly with your existing systems, and boost operational efficiency. We leverage agile methodologies to ensure flexibility and rapid delivery.",
        },
        {
          title: "Company Website",
          icon: "bi bi-globe",
          description: "Modern, responsive websites built to enhance your brand identity,attract new customers, and provide a seamless user experience. Our websites are optimized for search engines and conversions.",
        },
        {
          title: "HR Solutions",
          icon: "bi bi-people",
          description: "Streamline your HR processes with efficient and secure cloud-based solutions. We offer a comprehensive suite of tools to manage recruitment, onboarding, payroll,performance evaluations, and more.",
        },
        {
          title: "ERP Solutions",
          icon: "bi bi-diagram-3",
          description: "Improve your business's efficiency and visibility with custom ERP solutions tailored to your unique industry and needs. Our implementations are designed for minimal disruption and maximum ROI.",
        }
      ]
    }
  ];

  return (
    <section className={`${full ? 'pt-120' : 'py-5'}`}>
      <Container>
  <Row className="justify-content-center mb-5">
    <Col lg={8} className="text-center">
      <h1 data-aos="fade-up" className="section-title">Our Services</h1>
    </Col>
  </Row>

  {/* Main Services Row */}
  <Row className="justify-content-center"> {/* Center the columns */}
  {services.map((service, index) => (
    <Col lg={5} md={6} key={index} className="mb-3 p-3"> {/* Reduced width */}
      {/* Main Service Card */}
      <Card className="bg-light border-0 shadow-sm service-card" data-aos='fade-right' data-aos-delay="0.3s">
  <Card.Body>
    <Container>
      <div className="d-flex align-items-center mb-3">
        <h3 className=" mb-0">{service.title}</h3>
      </div>
      <div className="text-center mb-4  ">
        <Card.Img
          src={service.imageSrc}
          alt={service.title}
          className="img-fluid rounded shadow-sm"
         
        />
      </div>
      <Card.Text style={{ textAlign: "justify" }} >
        {service.description}
      </Card.Text>
    </Container>
  </Card.Body>
</Card>


      {/* Sub-services */}
      <div className="mt-4 " data-aos='fade-left' data-aos-delay="0.6s">
        <Row>
          {service.subServices.map((subService, subIndex) => (
            <Col key={subIndex} lg={12} md={6} className="mb-4">
              <Card className="h-100 border-0 shadow-sm service-card ">
                <Card.Body className='m-2'>
                  <div className=" mb-3">
                    <i className={`${subService.icon} text-primary fs-3`}></i>
                  </div>
                  <Card.Title className="h5 mb-3">
                    {subService.title}  
                  </Card.Title>
                  <Card.Text style={{ textAlign: "justify" }}>{subService.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Col>
  ))}
</Row>

  <Row >
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
                    <Card data-aos="zoom-in" data-aos-delay={300 + (index * 100)} className="h-100 border-0 shadow-sm service-card">
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
</Container>

    </section>
  );
};

export default Services;