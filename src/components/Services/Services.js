// import React from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import './Services.css';

// const Services = ({ full = false }) => {
//   const services = [
//     {
//       title: "Business Consulting",
//       icon: "bi bi-briefcase",
//       description: "Strategic guidance to optimize your business processes, improve efficiency, and drive growth.",
//       details: "Our business consulting services help you navigate complex challenges and identify opportunities for improvement. We work with you to develop strategic plans, optimize operations, and implement best practices that drive sustainable growth."
//     },
//     {
//       title: "Web Development",
//       icon: "bi bi-laptop",
//       description: "Custom web solutions that engage your audience and strengthen your online presence.",
//       details: "From responsive websites to complex web applications, our development team creates tailored solutions that meet your specific business needs. We focus on user experience, performance, and scalability to deliver web products that drive results."
//     },
//     {
//       title: "Mobile App Development",
//       icon: "bi bi-phone",
//       description: "Intuitive, feature-rich mobile applications for iOS and Android platforms.",
//       details: "Our mobile development experts build native and cross-platform applications that provide seamless user experiences. We handle everything from concept and design to development, testing, and deployment."
//     },
//     {
//       title: "ERP Systems",
//       icon: "bi bi-diagram-3",
//       description: "Integrated ERP solutions to streamline your business operations and improve productivity.",
//       details: "We implement and customize ERP systems that integrate your core business processes into a single, unified platform. Our solutions help you automate workflows, improve data visibility, and make better business decisions."
//     },
//     {
//       title: "Software Solutions",
//       icon: "bi bi-code-square",
//       description: "Custom software development to address your unique business challenges.",
//       details: "Our software development team creates tailored solutions that automate processes, improve efficiency, and solve complex business problems. We use modern technologies and methodologies to deliver high-quality, maintainable software."
//     },
//     {
//       title: "IT Consulting",
//       icon: "bi bi-hdd-network",
//       description: "Expert IT guidance to align your technology strategy with your business goals.",
//       details: "Our IT consultants help you leverage technology to achieve your business objectives. We provide strategic advice on infrastructure, security, cloud migration, and digital transformation to keep you ahead of the competition."
//     }
//   ];

//   return (
//     <section id="services" className={`${full ? 'pt-120' : 'py-5'}`}>
//       <Container>
//         <Row className="justify-content-center mb-5">
//           <Col lg={8} className="text-center">
//             <h2 data-aos="fade-up" className="section-title">Our Services</h2>
//             <p data-aos="fade-up" data-aos-delay="200" className="section-subtitle">
//               Comprehensive solutions to power your business growth
//             </p>
//           </Col>
//         </Row>
        
//         <Row>
//           {services.map((service, index) => (
//             <Col lg={4} md={6} className="mb-4" key={index}>
//               <Card 
//                 data-aos="fade-up" 
//                 data-aos-delay={200 + (index * 100)} 
//                 className="h-100 border-0 shadow-sm service-card"
//               >
//                 <Card.Body className="p-4">
//                   <div className="service-icon mb-4">
//                     <i className={`${service.icon} text-primary`}></i>
//                   </div>
//                   <Card.Title>{service.title}</Card.Title>
//                   <Card.Text>
//                     {service.description}
//                   </Card.Text>
//                   {full && (
//                     <Card.Text className="mt-3">
//                       {service.details}
//                     </Card.Text>
//                   )}
//                 </Card.Body>
               
//               </Card>
//             </Col>
//           ))}
//         </Row>
        
        
//       </Container>
//     </section>
//   );
// };

// export default Services;


import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import digital from '../../assets/digital.png';
import manufacture from '../../assets/manufacture.png';

const Services = ({ full = false }) => {
  const services = [
    {
      title: "Manufacturing Excellence",
      icon: "bi bi-gear-fill",
      imageSrc: manufacture,
      description: "We help businesses streamline processes, eliminate inefficiencies, and develop talent for long-term success. With a focus on adding real value, our expert team works closely with you to drive meaningful change and growth. Let's craft your path to excellence",
      subServices: [
        {
          title: "Process Excellence",
          icon: "bi bi-diagram-3",
          description: "Streamline your operations and significantly boost efficiency with our proven process optimization strategies. Experience tangible improvements and unlock new levels of productivity.",
          imageSrc: "/api/placeholder/400/300"
        },
        {
          title: "Company Transformation",
          icon: "bi bi-arrow-repeat",
          description: "Streamline your operations and significantly boost efficiency with our proven process optimization strategies. Experience tangible improvements and unlock new levels of productivity.",
          imageSrc: "/api/placeholder/400/300"
        },
        {
          title: "New Products or Services",
          icon: "bi bi-box-seam",
          description: "Streamline your operations and significantly boost efficiency with our proven process optimization strategies. Experience tangible improvements and unlock new levels of productivity.",
          imageSrc: "/api/placeholder/400/300"
        }
      ]
    },
    {
      title: "Digital Solutions",
      icon: "bi bi-laptop",
      imageSrc: digital,
      description: "We recognize the critical role technology plays in driving business transformation in today's dynamic environment. With this understanding, we embarked on a journey to expand our expertise by offering custom software solutions tailored to meet evolving market demands",
      subServices: [
        {
          title: "Custom Software",
          icon: "bi bi-code-square",
          description: "Tailored software solutions designed to streamline your workflows, integrate seamlessly with your existing systems, and boost operational efficiency. We leverage agile methodologies to ensure flexibility and rapid delivery.",
          imageSrc: "/api/placeholder/400/300"
        },
        {
          title: "Company Website",
          icon: "bi bi-globe",
          description: "Tailored software solutions designed to streamline your workflows, integrate seamlessly with your existing systems, and boost operational efficiency. We leverage agile methodologies to ensure flexibility and rapid delivery.",
          imageSrc: "/api/placeholder/400/300"
        },
        {
          title: "HR Solutions",
          icon: "bi bi-people",
          description: "Tailored software solutions designed to streamline your workflows, integrate seamlessly with your existing systems, and boost operational efficiency. We leverage agile methodologies to ensure flexibility and rapid delivery.",
          imageSrc: "/api/placeholder/400/300"
        },
        {
          title: "ERP Solutions",
          icon: "bi bi-diagram-3",
          description: "Tailored software solutions designed to streamline your workflows, integrate seamlessly with your existing systems, and boost operational efficiency. We leverage agile methodologies to ensure flexibility and rapid delivery.",
          imageSrc: "/api/placeholder/400/300"
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

        {services.map((service, index) => (
          <div key={index} className="mb-5">
            {/* Main Service Section */}
            <div className="bg-light py-5 mb-5 rounded">
              <Container>
                <Row className="align-items-center">
                  <Col lg={6} className="mb-4 mb-lg-0 text-center">
                  
                    <img
                      src={service.imageSrc}
                      alt={service.title}
                      className="img-fluid rounded shadow-sm"
                      style={{ width: "75%", height: "auto" }}
                    />
                  

                  </Col>
                  <Col lg={6}>
                  <div className="d-flex align-items-center m-4">
  <i className={`${service.icon} text-primary fs-2 me-3`}></i>
  <h3 className="h2 mb-0">{service.title}</h3>
</div>
<p style={{ textAlign: "justify" }} className="m-4">{service.description}</p>

                  </Col>
                </Row>
              </Container>
            </div>

            {/* Sub-services Section */}
            <div className="mt-4">
              {/* <h4 className="h3 mb-4 text-center">Our {service.title} Services</h4> */}
              <Row>
                {service.subServices.map((subService, subIndex) => (
                  <Col key={subIndex} lg={4} md={6} className="mb-4">
                    <Card className="h-100 border-0 shadow-sm">
                      {/* <Card.Img 
                        variant="top" 
                        src={subService.imageSrc}
                        alt={subService.title}
                        className="img-fluid"
                      /> */}
                      <Card.Body>
                        <div className="service-icon mb-3">
                          <i className={`${subService.icon} text-primary fs-3`}></i>
                        </div>
                        <Card.Title className="h5 mb-3">
                          {subService.title}
                        </Card.Title>
                        <Card.Text>
                          {subService.description}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>

            {/* Add a divider if it's not the last service */}
            {index < services.length - 1 && (
              <hr className="my-5" />
            )}
          </div>
        ))}
      </Container>
    </section>
  );
};

export default Services;