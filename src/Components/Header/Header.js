import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import './Header.css';
import complogo from '../../assets/companylogo/blue5122.png';

const Header = () => {
  const [offcanvasVisible, setOffcanvasVisible] = useState(false);

  const toggleOffcanvas = () => {
    setOffcanvasVisible(!offcanvasVisible);
  };

  const closeOffcanvas = () => {
    setOffcanvasVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
    closeOffcanvas();
  };

  return (
    <div>
      {['xxl'].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          style={{ backgroundColor: 'white' }}
          className="bg mb-3 navbar-white"
          fixed="top"
        >
          <Container fluid className="headerConthere">
            <Navbar.Brand>
              <Link to="/" style={{ textDecoration: 'none', color: 'black' }} onClick={scrollToTop}>
                <img src={complogo} alt="ProductXperts Logo" style={{ maxHeight: '50px', marginRight: '10px' }} />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={toggleOffcanvas} />
            <Navbar.Offcanvas
              show={offcanvasVisible}
              onHide={closeOffcanvas}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="offcanvase-body">
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to="/consulting" style={{ textDecoration: 'none' }} onClick={scrollToTop}>
                    <Nav.Link as="div" className="fontstylesone">
                      CONSULTING
                    </Nav.Link>
                  </Link>
                  <Link to="/coaching" style={{ textDecoration: 'none' }} onClick={scrollToTop}>
                    <Nav.Link as="div" className="fontstylesone">
                      COACHING
                    </Nav.Link>
                  </Link>
                  <Link to="/training" style={{ textDecoration: 'none' }} onClick={scrollToTop}>
                    <Nav.Link as="div" className="fontstylesone">
                      TRAINING
                    </Nav.Link>
                  </Link>
                  <Link to="/about" style={{ textDecoration: 'none' }} onClick={scrollToTop}>
                    <Nav.Link as="div" className="fontstylesone">
                      ABOUT
                    </Nav.Link>
                  </Link>
                </Nav>
                <Link to="/contact">
                  <Button
                    className="fontstyles"
                    style={{ backgroundColor: '#F7C513', height: '40px', width: '150px' }}
                    variant="light"
                    onClick={scrollToTop}
                  >
                    START HERE
                  </Button>
                </Link>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default Header;