import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Team.css';

const Team = ({ full = false }) => {
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
                  
                  <h3 className=" mb-0">Udara Ranasinghe</h3>
                  
                  </div>
                  <h4 className='d-flex align-items-center m-4'>Founder & CEO</h4>
                  <p style={{ textAlign: "justify" }} className="m-4">With over 15 years of experience in the apparel industry, Udara has excelled in operations, merchandising,marketing, product quality, process improvement, and project management.</p>

                </Col>
                {/* <Col lg={6} className="mb-4 mb-lg-0 text-center"  data-aos="fade-left">
                
                  <img
                    src={team1}
                    alt=''
                    className="img-fluid rounded shadow-sm"
                    style={{ width: "75%", height: "auto" }}
                  />
                

                </Col> */}
              </Row>
            </Container>
          </div>

        </div>
    
    </Container>
  </section>
  );
};

export default Team;