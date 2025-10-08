import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/ThrLogo-3.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style>{`
        .modern-footer {
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          color: #e0e0e0;
          padding-top: 4rem;
          padding-bottom: 2rem;
          border-top: 3px solid #198754;
        }

        .footer-logo {
          height: 55px;
          transition: all 0.3s ease;
          filter: brightness(1);
        }

        .footer-logo:hover {
          filter: brightness(1.2);
          transform: scale(1.05);
        }

        .footer-section-title {
          color: white;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          position: relative;
          padding-bottom: 0.75rem;
        }

        .footer-section-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 3px;
          background: #198754;
          border-radius: 2px;
        }

        .footer-link {
          color: #b0b0b0;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;
          padding: 0.35rem 0;
          font-size: 0.95rem;
        }

        .footer-link:hover {
          color: #198754;
          padding-left: 8px;
        }

        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1rem;
          color: #b0b0b0;
          font-size: 0.95rem;
        }

        .footer-contact-icon {
          color: #198754;
          margin-right: 0.75rem;
          font-size: 1.1rem;
          margin-top: 2px;
          min-width: 20px;
        }

        .footer-contact-link {
          color: #b0b0b0;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-contact-link:hover {
          color: #198754;
        }

        .footer-description {
          color: #b0b0b0;
          line-height: 1.7;
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          margin-top: 3rem;
          padding-top: 2rem;
          text-align: center;
        }

        .footer-bottom-text {
          color: #888;
          font-size: 0.9rem;
          margin: 0;
        }

        .footer-bottom-link {
          color: #888;
          text-decoration: none;
          transition: color 0.3s ease;
          margin: 0 0.5rem;
        }

        .footer-bottom-link:hover {
          color: #198754;
        }

        @media (max-width: 767px) {
          .footer-section-title::after {
            left: 50%;
            transform: translateX(-50%);
          }
          
          .modern-footer {
            text-align: center;
          }
          
          .footer-contact-item {
            justify-content: center;
          }
        }
      `}</style>

      <footer className="modern-footer">
        <Container>
          <Row className="g-4">
            {/* Company Info Section */}
            <Col lg={4} md={6}>
              <Link
                to="/"
                style={{ display: "inline-block", marginBottom: "1.5rem" }}
              >
                <img
                  src={logo}
                  alt="Thriving Capital Logo"
                  className="footer-logo"
                />
              </Link>
              <p className="footer-description">
                Your trusted partner in building financial success. We provide
                comprehensive wealth management, tax planning, and investment
                strategies tailored to your unique goals.
              </p>
            </Col>

            {/* Quick Links Section */}
            <Col lg={2} md={6}>
              <h5 className="footer-section-title">Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/" className="footer-link">
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/about" className="footer-link">
                    About
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/contact" className="footer-link">
                    Contact
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/faq" className="footer-link">
                    FAQ
                  </Link>
                </li>
              </ul>
            </Col>

            {/* Services Section */}
            <Col lg={3} md={6}>
              <h5 className="footer-section-title">Our Services</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/financial-advisory" className="footer-link">
                    Financial Advisory
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/investment-services" className="footer-link">
                    Investment Services
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/tax-accounting" className="footer-link">
                    Tax Accounting
                  </Link>
                </li>
              </ul>
            </Col>

            {/* Contact Section */}
            <Col lg={3} md={6}>
              <h5 className="footer-section-title">Get In Touch</h5>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">📞</span>
                <a href="tel:+61300926880" className="footer-contact-link">
                  1300 926 880
                </a>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">✉️</span>
                <a
                  href="mailto:admin@thrivingcapitalgroup.com"
                  className="footer-contact-link"
                >
                  admin@thrivingcapitalgroup.com
                </a>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">📍</span>
                <span>Level 4, 162 Macquarie St, Hobart TAS 7000</span>
              </div>
            </Col>
          </Row>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <Row>
              <Col>
                <p className="footer-bottom-text">
                  © {currentYear} Thriving Capital. All rights reserved.
                  <span style={{ margin: "0 0.5rem", color: "#444" }}>|</span>
                  <Link to="/term" className="footer-bottom-link">
                    Terms & Conditions
                  </Link>
                  <span style={{ margin: "0 0.5rem", color: "#444" }}>|</span>
                  <Link to="/term" className="footer-bottom-link">
                    Privacy Policy
                  </Link>
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
