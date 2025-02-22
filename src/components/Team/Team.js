// import React from 'react';
// import { Card, Col, Container, Row } from 'react-bootstrap';
// import team1 from '../../assets/client1.jpg';
// // import team2 from '../assets/team2.jpg';
// // import team3 from '../assets/team3.jpg';
// // import team4 from '../assets/team4.jpg';
// // import team5 from '../assets/team5.jpg';
// // import team6 from '../assets/team6.jpg';
// // import team7 from '../assets/team7.jpg';
// // import team8 from '../assets/team8.jpg';
// import './Team.css';

// const Team = ({ full = false }) => {
//   const teamMembers = [
//     {
//       name: "Sarah Johnson",
//       position: "CEO & Founder",
//       image: team1,
//       bio: "Sarah has over 20 years of experience in technology and management consulting. She founded Valuecraft Minds with a vision to help businesses leverage technology for strategic growth.",
//       social: {
//         linkedin: "#",
//         twitter: "#",
//         email: "sarah@valuecraftminds.com"
//       }
//     },
//     {
//       name: "David Chen",
//       position: "CTO",
//       image: team1,
//       bio: "With a background in software architecture and system design, David leads our technical teams in delivering innovative solutions that drive business value.",
//       social: {
//         linkedin: "#",
//         twitter: "#",
//         email: "david@valuecraftminds.com"
//       }
//     },
//     {
//       name: "Priya Patel",
//       position: "Head of Business Consulting",  
//       image: team1,
//       bio: "Priya brings deep expertise in business strategy, process optimization, and change management to help our clients navigate complex transformations.",
//       social: {
//         linkedin: "#",
//         twitter: "#",
//         email: "priya@valuecraftminds.com"
//       }
//     },
//     {
//       name: "Michael Rodriguez",
//       position: "Lead Web Developer",
//       image: team1,
//       bio: "Michael specializes in creating responsive, user-friendly web applications that deliver exceptional customer experiences.",
//       social: {
//         linkedin: "#",
//         twitter: "#",
//         github: "#",
//         email: "michael@valuecraftminds.com"
//       }
//     }
  
//   ];

//   return (
//     <section id="team" className={`${full ? 'pt-120' : 'py-5'}`}>
//       <Container>
//         <Row className="justify-content-center mb-5">
//           <Col lg={8} className="text-center">
//             <h2 data-aos="fade-up" className="section-title">Our Team</h2>
//             <p data-aos="fade-up" data-aos-delay="200" className="section-subtitle">
//               Meet the experts behind our success
//             </p>
//           </Col>
//         </Row>
        
//         <Row>
//           {teamMembers.slice(0, full ? teamMembers.length : 4).map((member, index) => (
//             <Col lg={3} md={6} className="mb-4" key={index}>
//               <Card 
//                 data-aos="fade-up" 
//                 data-aos-delay={200 + (index * 100)} 
//                 className="border-0 shadow-sm team-card h-100"
//               >
//                 <div className="team-img-container">
//                   <Card.Img variant="top" src={member.image} className="team-img" />
//                   <div className="team-overlay">
//                     <div c  lassName="team-social">
//                       {member.social.linkedin && (
//                         <a href={member.social.linkedin} className="social-icon" target="_blank" rel="noopener noreferrer">
//                           <i className="bi bi-linkedin"></i>
//                         </a>
//                       )}
//                       {member.social.twitter && (
//                         <a href={member.social.twitter} className="social-icon" target="_blank" rel="noopener noreferrer">
//                           <i className="bi bi-twitter"></i>
//                         </a>
//                       )}
//                       {member.social.github && (
//                         <a href={member.social.github} className="social-icon" target="_blank" rel="noopener noreferrer">
//                           <i className="bi bi-github"></i>
//                         </a>
//                       )}
//                       {member.social.dribbble && (
//                         <a href={member.social.dribbble} className="social-icon" target="_blank" rel="noopener noreferrer">
//                           <i className="bi bi-dribbble"></i>
//                         </a>
//                       )}
//                       {member.social.email && (
//                         <a href={`mailto:${member.social.email}`} className="social-icon">
//                           <i className="bi bi-envelope"></i>
//                         </a>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//                 <Card.Body className="text-center">
//                   <Card.Title>{member.name}</Card.Title>
//                   <Card.Subtitle className="mb-2 text-muted">{member.position}</Card.Subtitle>
//                   {full && (
//                     <Card.Text className="mt-3 small">
//                       {member.bio}
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

// export default Team;





import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import team1 from '../../assets/client1.jpg';
import './Team.css';

const Team = ({ full = false }) => {
  // const teamMembers = [
  //   {
  //     name: "Sarah Johnson",
  //     position: "CEO & Founder",
  //     image: team1,
  //     bio: "Sarah has over 20 years of experience in technology and management consulting. She founded Valuecraft Minds with a vision to help businesses leverage technology for strategic growth.",

  //   },

  // ];

  return (
    <section className={`${full ? 'pt-120' : 'py-5'}`}>
    <Container>
      <Row className="justify-content-center mb-5">
        <Col lg={8} className="text-center">
          <h1 data-aos="fade-up" className="section-title">Our Team</h1>
        </Col>
      </Row>

     
        <div className="mb-5">
         
          <div className="py-3 mb-5 rounded">
            <Container>
              <Row className="">
                
                <Col lg={6}  data-aos="fade-right">
                      <div className="d-flex align-items-center m-4">
                  
                  <h3 className=" mb-0">Mr.Udara Ranasinghe</h3>
                  
                  </div>
                  <h4 className='d-flex align-items-center m-4'>Founder & CEO</h4>
                  <p style={{ textAlign: "justify" }} className="m-4">With over 15 years of experience in the apparel industry, Udara has excelled in operations, merchandising,marketing, product quality, process improvement, and project management.</p>

                </Col>
                <Col lg={6} className="mb-4 mb-lg-0 text-center"  data-aos="fade-left">
                
                  <img
                    src={team1}
                    alt=''
                    className="img-fluid rounded shadow-sm"
                    style={{ width: "75%", height: "auto" }}
                  />
                

                </Col>
              </Row>
            </Container>
          </div>

        </div>
    
    </Container>
  </section>
  );
};

export default Team;