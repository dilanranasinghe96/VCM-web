
// import React,{useState,useEffect} from "react";
// import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import logo from "../../assets/logo.png";
// import "./Navbar.css";

// const Navigation = () => {

//   const [showOffcanvas, setShowOffcanvas] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
  
//   useEffect(() => {
//     const onScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     }
    
//     window.addEventListener("scroll", onScroll);
    
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);


//   const handleNavClick = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//     setShowOffcanvas(false);
//   };
  

//   return (
//     <Navbar
//     style={{
//       backgroundColor: scrolled ? "rgba(0, 0, 0, 0.9)" : "transparent",
//       transition: "background-color 0.3s ease-in-out"
//     }}
//     variant={scrolled ? "black" : "transparent"} 
//       expand="lg"
//       fixed="top"
     
//     >
//       <Container className="p-2">
//       <Navbar.Brand as={Link} to="/"  onClick={handleNavClick} className="d-flex align-items-center">
//   <img
//     src={logo}
//     height="40"
//     className="d-inline-block align-top me-2"
//     alt="Company Logo"
//   />
//   <h6 className="mb-0 text-white">Valuecraft Minds</h6>
// </Navbar.Brand>

//         <Navbar.Toggle
//           aria-controls="offcanvasNavbar"
//           className="custom-toggler "
//           onClick={() => setShowOffcanvas(true)}
//         />
//         <Navbar.Offcanvas
//           id="offcanvasNavbar"
//           aria-labelledby="offcanvasNavbarLabel"
//           placement="end"
//           className="offcanvas-custom"
//           show={showOffcanvas}
//           onHide={() => setShowOffcanvas(false)}
//         >
//           <Offcanvas.Header closeButton className="offcanvas-header-custom">
//             <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
//           </Offcanvas.Header>
//           <Offcanvas.Body className="offcanvas-body-custom text-center">
//             <Nav className="ms-auto text-white">
//             <Nav.Link as={Link} to="/"  onClick={handleNavClick} >Home</Nav.Link>
//               <Nav.Link as={Link} to="/about"  onClick={handleNavClick}>About</Nav.Link>
//               <Nav.Link as={Link} to="/services"  onClick={handleNavClick}>Services</Nav.Link>
//               <Nav.Link as={Link} to="/contact"  onClick={handleNavClick}>Contact</Nav.Link>
              
//             </Nav>
//           </Offcanvas.Body>
//         </Navbar.Offcanvas>
//       </Container>
//     </Navbar>
//   );
// };

// export default Navigation;



import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import logo from "../../assets/logo1.png";
import "./Navbar.css";

const Navigation = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Get current route

  // Check if the current page is the Hero (Home) page
  const isHeroPage = location.pathname === "/";

  useEffect(() => {
    if (isHeroPage) {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    } else {
      setScrolled(false); // Ensure scrolled is false on other pages
    }
  }, [isHeroPage]);

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowOffcanvas(false);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setShowOffcanvas(false);
  };

  return (
    <Navbar
      style={{
        backgroundColor: isHeroPage
          ? scrolled
            ? "rgba(0, 0, 0, 0.9)"
            : "transparent"
          : "rgba(0, 0, 0, 0.9)", // Black background for other pages
        transition: "background-color 0.3s ease-in-out",
      }}
      expand="lg"
      fixed="top"
      
    >
      <Container fluid className="d-flex align-items-center">
  {/* Left-aligned brand */}
  <Navbar.Brand
    as={Link}
    to="/"
    onClick={handleNavClick}
    className="d-flex align-items-center ms-4"
  >
    <img
      src={logo}
      height="60"
      className="d-inline-block align-top"
      alt="Company Logo"
    />
    <h7 className=" text-white" style={{ marginTop: '40px' }}>Valuecraft Minds</h7>
  </Navbar.Brand>

  {/* Navbar Toggle & Menu */}
  <Navbar.Toggle
    aria-controls="offcanvasNavbar"
    className="custom-toggler"
    onClick={() => setShowOffcanvas(true)}
    

  />
  <Navbar.Offcanvas
    id="offcanvasNavbar"
    aria-labelledby="offcanvasNavbarLabel"
    placement="end"
    className="offcanvas-custom"
    show={showOffcanvas}
    onHide={() => setShowOffcanvas(false)}
  >
    <Offcanvas.Header closeButton className="offcanvas-custom">
      <Offcanvas.Title id="offcanvasNavbarLabel" className="text-white">Menu</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body className="offcanvas-body-custom text-center">
            <Nav className="ms-auto text-white gap-4">
            <Nav.Link onClick={() => scrollToSection("home")}>Home</Nav.Link>
              <Nav.Link onClick={() => scrollToSection("about")}>About us</Nav.Link>
              <Nav.Link onClick={() => scrollToSection("team")}>Our Team</Nav.Link>
              <Nav.Link onClick={() => scrollToSection("services")}>Services</Nav.Link>
              <Nav.Link onClick={() => scrollToSection("blog")}>Blog</Nav.Link>
              <Nav.Link onClick={() => scrollToSection("contact")}>Contact</Nav.Link>
            </Nav>
          </Offcanvas.Body>
  </Navbar.Offcanvas>
</Container>

    </Navbar>
  );
};

export default Navigation;
