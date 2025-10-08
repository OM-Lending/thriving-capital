import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/ThrLogo-3.png"; // Adjust the path to your logo

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-4">
      <Container>
        {/* Logo Section */}
        <Row className="mb-3">
          <Col>
            <img src={logo} alt="Company Logo" style={{ height: "60px" }} />
          </Col>
        </Row>

        <Row>
          {/* Original Content */}
          <Col md={6} className="text-center">
            <h5>GET IN TOUCH</h5>
            <p>To Request Any Information</p>
            <p>
              Telephone: <a href="tel:+61300926880" className="text-white">1300 926 880</a>
            </p>
            <p>
              Email: <a href="mailto:admin@thrivingcapitalgroup.com" className="text-white">admin@thrivingcapitalgroup.com</a>
            </p>
            <p>Address: Level 4, 162 Macquarie St, Hobart TAS 7000</p>
            <p>© {new Date().getFullYear()} Thriving Capital. All rights reserved.</p>
          </Col>

          {/* Navigation Links */}
          <Col md={6} className="text-md-right text-center">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white"> - Home</Link></li>
              <li><Link to="/about" className="text-white"> - About</Link></li>
              <li><Link to="/contact" className="text-white"> - Contact</Link></li>
              <li className="mt-2 font-weight-bold">Services</li>
              <ul className="list-unstyled ml-3">
                <li><Link to="/financial-advisory" className="text-white"> - Financial Advisory</Link></li>
                <li><Link to="/investment-services" className="text-white"> - Investment Services</Link></li>
                <li><Link to="/tax-accounting" className="text-white"> - Tax Accounting</Link></li>
              </ul>
              <li><Link to="/faq" className="text-white"> - FAQ</Link></li>
            </ul>
          </Col>
        </Row>

        {/* Terms & Conditions Link */}
        <Row className="mt-3">
          <Col>
            <p>
              <Link to="/term" className="text-white">Terms & Conditions</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;