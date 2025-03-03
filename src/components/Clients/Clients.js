// import React from "react";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import client1 from '../../assets/client1.jpg';
// import client2 from '../../assets/client2.jpg';
// import client3 from '../../assets/client3.jpg';
// import client4 from '../../assets/client4.jpg';
// import client5 from '../../assets/client5.jpg';
// import client6 from '../../assets/client6.jpg';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Clients.css";

// const Clients = () => {

//   const clients = [
//     { 
//       id: 1, 
//       logo: client1, 
//       alt: "Client 1",
//       description: "Long-term partner specializing in software solutions"
//     },
//     { 
//       id: 2, 
//       logo: client2, 
//       alt: "Client 2",
//       description: "Industry leader in cloud computing"
//     },
//     { 
//       id: 3, 
//       logo: client3, 
//       alt: "Client 3",
//       description: "Innovative startup in the healthcare sector"
//     },
//     { 
//       id: 4, 
//       logo: client4, 
//       alt: "Client 4",
//       description: "Global retail chain with over 500 locations"
//     },
//     { 
//       id: 5, 
//       logo: client5, 
//       alt: "Client 5",
//       description: "Award-winning financial services provider"
//     },
//     { 
//       id: 6, 
//       logo: client6, 
//       alt: "Client 6",
//       description: "Leading educational institution with cutting-edge programs"
//     },
//   ];

//   return (
//     <section className="py-5 " >
//       <Container>
//         <div data-aos="fade-up" className="text-center mb-5">
//           <h2 className="fw-bold mb-2">Our Trusted Partners</h2>
//           <p className="text-muted mb-0">Proud to work with these amazing organizations</p>
//         </div>
        
//         <Row className="justify-content-center g-4" data-aos="fade-up">
//           {clients.map((client, index) => (
//             <Col 
//               key={client.id} 
//               xs={6} sm={4} md={4} lg={2}
             
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
             
//                 <Card className="h-100 shadow-sm border-0 client-card">
//                   <Card.Body className="d-flex align-items-center justify-content-center p-3">
//                     <img
//                       src={client.logo}
//                       alt={client.alt}
//                       className="img-fluid client-logo"
//                       style={{ 
//                         maxHeight: "80px", 
                        
//                         transition: "all 0.3s ease"
//                       }}
//                     />
                    
//                   </Card.Body>
//                 </Card>
             
//             </Col>
//           ))}
//         </Row>
        
//         <div className="text-center mt-5" data-aos="fade-up"
//              style={{ animationDelay: "0.6s" }}>
//           <Button variant="outline-primary" className="px-4 py-2">
//             Become Our Partner
//           </Button>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default Clients;

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import client1 from '../../assets/SQ Birichina.png';
import client2 from '../../assets/Timex garments.png';
import client3 from '../../assets/Club text mark.png';
import client4 from '../../assets/Marvel.jpeg';
import "./Clients.css";

const Clients = () => {

  const clients = [
    { 
      id: 1, 
      logo: client1, 
      alt: "Client 1",
      name:"SQ Birichina",
      description: "Bangladesh intimate's/Activewear/ outerwear manufacturer"
    },
    { 
      id: 2, 
      logo: client2, 
      alt: "Client 2",
      name:"Timex garments",
      description: "SriLankan intimate's manufacturer"
    },
    { 
      id: 3, 
      logo: client3, 
      alt: "Client 3",
      name:"Club text mark",
      description: "SriLankan intimate's manufacturer"
    },
    { 
      id: 4, 
      logo: client4, 
      alt: "Client 4",
      name:"Marvel",
      description: "SriLankan hygiene products manufacture"
    },
    
  ];

  return (
    <section className="py-5 " >
      <Container>
        <div data-aos="fade-up" className="text-center mb-5">
          <h2 className="fw-bold mb-2">Our Trusted Partners</h2>
          <p className="text-muted mb-0">Our Customers Are Our Greatest Success Story</p>
        </div>
        
        <Row className="justify-content-center g-4" data-aos="fade-up">
          {clients.map((client, index) => (
            <Col 
              key={client.id} 
              xs={6} sm={4} md={4} lg={2}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className=" shadow-sm border-0 client-card">
                <Card.Body className="d-flex align-items-center justify-content-center p-3">
                  <img
                    src={client.logo}
                    alt={client.alt}
                    className="img-fluid client-logo"
                    style={{ 
                      maxHeight: "80px", 
                      transition: "all 0.3s ease"
                    }}
                  />
                </Card.Body>
              </Card>
              <h5 className="text-muted text-center mt-2 fw-bold" data-aos="fade-up"  style={{ animationDelay: "0.3s" }}>{client.name}</h5>
              
                      <p className="text-muted text-center mt-2" data-aos="fade-up" style={{ fontSize: "0.9rem" ,animationDelay: "0.3s" }}>{client.description}</p>
              
              
            </Col>
          ))}
        </Row>
        
        <div className="text-center mt-5 " data-aos="fade-up"
             style={{ animationDelay: "0.6s" }}>
          <Button variant="outline-primary" className="px-4 py-2">
            Become Our Partner
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Clients;
