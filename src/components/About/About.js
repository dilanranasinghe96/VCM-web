// import React from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import aboutImage from '../../assets/about.png';
// import './About.css';

// const About = ({ full = false }) => {
//   return (
//     <section id="about" className={`${full ? 'pt-120' : 'py-5'}`}>
//       <Container>
//         <Row className="justify-content-center mb-3">
//           <Col lg={8} className="text-center">
//             <h1 data-aos="fade-up" className="section-title">About Us</h1>
           
//           </Col>
//         </Row>
        
//         <Row >
//           <Col lg={4} data-aos="fade-right">
//             <img src={aboutImage} alt="About Valuecraft Minds" className="img-fluid  bumping-image" />
//           </Col>
//           <Col lg={8} data-aos="fade-left" data-aos-delay="200">
            
//             <p className="mb-4" style={{ textAlign: "justify" }}>
//             At Valuecraft Minds, we specialize in business transformation through process development, training, and strategic consulting. Our focus is on eliminating inefficiencies, optimizing workflows, and empowering organizations with the right tools and knowledge to drive sustainable growth. With a commitment to innovation and excellence, we help businesses unlock their full potential and stay ahead in a competitive market.
//             </p>
            
            
//             <div >
//               <Row>
//                 <Col md={6} className="mb-4">
//                   <Card data-aos="zoom-in" data-aos-delay="300" className="h-100 border-0 shadow-lg">
//                     <Card.Body className="text-center py-4">
//                     <Card.Title className='fw-bold'>Our Vision</Card.Title>
//                       <Card.Text>
//                       "To be a global leader in business transformation, leveraging technology and innovation to craft solutions that drive sustainable growth and operational excellence."
//                       </Card.Text>
                     
//                     </Card.Body>
//                   </Card>
//                 </Col>
//                 <Col md={6} className="mb-4">
//                   <Card data-aos="zoom-in" data-aos-delay="400" className="h-100 border-0 shadow-lg">
//                     <Card.Body className="text-center py-4">
//                     <Card.Title className='fw-bold'>Our Mission</Card.Title>
//                     <Card.Text>
//                       <ul style={{ textAlign: "justify" }}>
//                         <li>Empower businesses with cutting-edge digital solutions that enhance efficiency and performance.</li>
//                         <li>Integrate technology seamlessly into business operations for improved agility and scalability.</li>
//                         <li>Deliver customized, value-driven strategies tailored to evolving industry needs.</li>
//                         <li>Foster a culture of innovation that transforms challenges into opportunities for growth.</li>
//                       </ul>
//                     </Card.Text>

                     
//                     </Card.Body>
//                   </Card>
//                 </Col>
//               </Row>
//             </div>
//           </Col>
//         </Row>
        
//       </Container>
//     </section>
//   );
// };

// export default About;



import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import aboutImage from '../../assets/VCM logo.png';
import './About.css';

const About = ({ full = false }) => {
  return (
    <section id="about" className={`${full ? 'pt-120' : 'py-5'}`}>
      <Container>
        <Row className="justify-content-center mb-3">
          <Col lg={8} className="text-center">
            <h1 data-aos="fade-up" className="section-title">About Us</h1>
           
          </Col>
        </Row>
        
        <Row >
          <Col lg={4} data-aos="fade-right">
            <img src={aboutImage} alt="About Valuecraft Minds" className="img-fluid  bumping-image" />
          </Col>
          <Col lg={8} data-aos="fade-left" data-aos-delay="200">
            
            <p className="mb-4" style={{ textAlign: "justify" }}>
            At Valuecraft Minds, we specialize in business transformation through process development, training, and strategic consulting. Our focus is on eliminating inefficiencies, optimizing workflows, and empowering organizations with the right tools and knowledge to drive sustainable growth. With a commitment to innovation and excellence, we help businesses unlock their full potential and stay ahead in a competitive market.
            </p>
            
            
            <div >
              <Row>
                <Col md={6} className="mb-4">
                  
                    <Card.Body className="text-center py-4">
                    <h4 className='fw-bold mb-3'>Our Vision</h4>
                      <Card.Text>
                      "To be a global leader in business transformation, leveraging technology and innovation to craft solutions that drive sustainable growth and operational excellence."
                      </Card.Text>
                     
                    </Card.Body>
                  
                </Col>
                <Col md={6} className="mb-4">
                  
                    <Card.Body className="text-center py-4">
                    <h4 className='fw-bold mb-3'>Our Mission</h4>
                    <Card.Text>
                      <ul style={{ textAlign: "justify" }}>
                        <li>Empower businesses with cutting-edge digital solutions that enhance efficiency and performance.</li>
                        <li>Integrate technology seamlessly into business operations for improved agility and scalability.</li>
                        <li>Deliver customized, value-driven strategies tailored to evolving industry needs.</li>
                        <li>Foster a culture of innovation that transforms challenges into opportunities for growth.</li>
                      </ul>
                    </Card.Text>

                     
                    </Card.Body>
                  
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        
      </Container>
    </section>
  );
};

export default About;