import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./Navbar.css";
import { Link } from "react-router-dom";
function MyNavbar() {
  return (
    <Navbar bg="#7d9ac3" expand="lg" className="nav">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fs-3">
          <img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            alt="Logo"
            width="140"
            height="140"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about" className="fs-6 text-light">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" className="fs-6 text-bold text-light">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/skills" className="fs-6 text-bold text-light">
              Skills
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="fs-6 text-bold text-light">
              Contact
            </Nav.Link>
            <Nav.Link href="/resume" target="_blank" className=" new text-bold fs-6 text-light">
              Resume
            </Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown" className="custom-nav-dropdown">
              <NavDropdown.Item href="https://www.linkedin.com/in/sakshi-popat-dighe/">
                linkedin
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/2">Portfolio</NavDropdown.Item>
              <NavDropdown.Item href="#action/3">Education</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/4">FAQ</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
