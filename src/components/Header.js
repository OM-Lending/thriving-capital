import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Thriving Capital.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const navLinkStyle = {
    fontSize: "0.95rem",
    fontWeight: "500",
    padding: "0.5rem 1rem",
    color: "white",
    transition: "all 0.3s ease",
    position: "relative",
  };

  const activeLinkStyle = {
    color: "#ffc107",
  };

  return (
    <>
      <style>{`
        .custom-navbar {
          background: ${
            scrolled ? "rgba(15, 23, 42, 0.98)" : "rgba(15, 23, 42, 0.95)"
          };
          backdrop-filter: blur(10px);
          box-shadow: none;
          border-bottom: 1px solid #334155;
          transition: all 0.3s ease;
          padding: ${scrolled ? "0.3rem 0" : "0.5rem 0"};
        }

        .custom-nav-link {
          position: relative;
          color: rgba(255, 255, 255, 0.9) !important;
          font-weight: 500;
          padding: 0.4rem 0.85rem !important;
          transition: all 0.3s ease;
        }

        .custom-nav-link:hover {
          color: white !important;
          transform: translateY(-2px);
        }

        .custom-nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: #f59e0b;
          transition: width 0.3s ease;
        }

        .custom-nav-link:hover::after {
          width: 100%;
        }

        .custom-nav-link.active {
          color: #f59e0b !important;
        }

        .custom-nav-link.active::after {
          width: 100%;
        }

        .custom-dropdown-toggle {
          background: none !important;
          border: none !important;
          color: rgba(255, 255, 255, 0.9) !important;
          font-weight: 500;
          padding: 0.4rem 0.85rem !important;
          transition: all 0.3s ease;
        }

        .custom-dropdown-toggle:hover {
          color: white !important;
          transform: translateY(-2px);
        }

        .custom-dropdown-toggle::after {
          margin-left: 0.5rem;
        }

        .custom-dropdown-menu {
          background: #1e293b;
          border: 1px solid #334155;
          border-radius: 0;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
          padding: 0;
          margin-top: 0.5rem;
          min-width: 220px;
        }

        .custom-dropdown-item {
          color: #e2e8f0;
          font-weight: 500;
          padding: 0.75rem 1.5rem !important;
          transition: all 0.3s ease;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .custom-dropdown-item:last-child {
          border-bottom: none;
        }

        .custom-dropdown-item:hover {
          background: #0f172a;
          color: #f59e0b;
        }

        .logo-img {
          transition: all 0.3s ease;
          height: ${scrolled ? "40px" : "48px"};
          width: auto;
        }

        .logo-img:hover {
          filter: brightness(1.1);
        }

        @media (max-width: 991px) {
          .custom-navbar {
            background: rgba(25, 135, 84, 0.98);
          }
          
          .custom-dropdown-menu {
            background: rgba(255, 255, 255, 0.95);
            margin-top: 0.25rem;
          }
        }
      `}</style>

      <Navbar expand="lg" fixed="top" className="custom-navbar" variant="dark">
        <Container>
          {/* Logo and Brand */}
          <Navbar.Brand
            as={Link}
            to="/"
            style={{ transition: "all 0.3s ease" }}
          >
            <img
              src={logo}
              alt="Thriving Capital Logo"
              className="logo-img d-inline-block align-top"
            />
          </Navbar.Brand>

          {/* Navbar Toggle for mobile view */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Navbar Collapse with navigation links */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              {/* Home Link */}
              <Nav.Link
                as={Link}
                to="/"
                className={`custom-nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
              >
                Home
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/about"
                className={`custom-nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
              >
                About
              </Nav.Link>

              {/* Dropdown for "Our Services" */}
              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle
                  className="custom-dropdown-toggle"
                  id="dropdown-services"
                >
                  Our Services
                </Dropdown.Toggle>
                <Dropdown.Menu className="custom-dropdown-menu">
                  <Dropdown.Item
                    as={Link}
                    to="/financial-advisory"
                    className="custom-dropdown-item"
                  >
                    Financial Advisory
                  </Dropdown.Item>
                  <Dropdown.Item
                    as={Link}
                    to="/investment-services"
                    className="custom-dropdown-item"
                  >
                    Investment Services
                  </Dropdown.Item>
                  <Dropdown.Item
                    as={Link}
                    to="/tax-accounting"
                    className="custom-dropdown-item"
                  >
                    Tax Accounting
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              {/* Contact Us Link */}
              <Nav.Link
                as={Link}
                to="/contact"
                className={`custom-nav-link ${
                  location.pathname === "/contact" ? "active" : ""
                }`}
              >
                Contact Us
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/faq"
                className={`custom-nav-link ${
                  location.pathname === "/faq" ? "active" : ""
                }`}
              >
                FAQ
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
