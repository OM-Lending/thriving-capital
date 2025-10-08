import React from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="success" variant="dark" expand="lg" fixed="top">
      <Container>
        {/* Logo and Brand */}
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          <img
            src={`${process.env.PUBLIC_URL}/ThrLogo-3.png`}
            alt="Thriving Capital Logo"
            width="230" // Adjust as needed
            height="55"
            className="d-inline-block align-top me-2"
          />
        </Navbar.Brand>

        {/* Navbar Toggle for mobile view */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar Collapse with navigation links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Home Link */}
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>

            {/* Dropdown for "Our Services" */}
            <Dropdown as={Nav.Item} className="hover-dropdown">
              <Dropdown.Toggle as={Nav.Link} id="dropdown-services">
                Our Services
              </Dropdown.Toggle>
              <Dropdown.Menu className="py-2"> {/* Add padding */}
                <Dropdown.Item as={Link} to="/financial-advisory" className="py-2"> {/* Padding for items */}
                  Financial Advisory
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/investment-services" className="py-2">
                  Investment Services
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/tax-accounting" className="py-2">
                  Tax Accounting
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* Contact Us Link */}
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;