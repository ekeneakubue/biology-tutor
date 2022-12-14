import React, { useState } from "react";
import './Navbar.css'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { BsTelephoneFill, BsHouseFill, BsFileCodeFill, BsPersonFill} from "react-icons/bs";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Container>
    <Navbar
      expanded={expand}
      expand="md"
      className={navColour ? "sticky" : "navbar"}      
    >
      <Container>
        <Navbar.Brand href="/" target="_blank">
          <div className="brand-text setup22">
            <h3>VBI</h3>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle
            className="setup22 text-primary"
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
          >
          <i class="bi bi-list"></i>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">

            <Nav.Item className="setup22">
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <BsHouseFill style={{ marginBottom: "2px" }} className='text-primary'/> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="setup22">
              <Nav.Link as={Link} to="/services" onClick={() => updateExpanded(false)}>
              <i className="bi bi-award-fill text-primary"></i> Our Services
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="setup22">
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
              <BsPersonFill style={{ marginBottom: "2px" }} className='text-primary'/> About Us
              </Nav.Link>
            </Nav.Item>            

            <Nav.Item className="setup22">
              <Nav.Link as={Link} to="/login" onClick={() => updateExpanded(false)}>
                <i class="bi bi-arrow-return-right text-primary"></i> Get Started
              </Nav.Link>
            </Nav.Item>            

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
  );
}

export default NavBar;
