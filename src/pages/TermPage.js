import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import bgImage from "../assets/tBack3.jpg"; // Ensure you have a relevant background image

const TermPage = () => {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        padding: "50px 0",
        backgroundColor: "#0a0f1a",
      }}
    >
      {/* Background Image with Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
          zIndex: 0,
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Container>
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-5"
          >
            <h1
              className="fw-bold"
              style={{
                color: "#f59e0b",
                fontSize: "3rem",
                marginBottom: "1rem",
              }}
            >
              Terms and Conditions
            </h1>
            <p style={{ color: "#94a3b8", fontSize: "1.1rem" }}>
              Please review our terms, policies, and data protection guidelines
            </p>
          </motion.div>

          {/* Terms Section */}
          <Row className="mb-4">
            <Col md={12}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                  background: "#1a2332",
                  border: "1px solid #334155",
                  borderRadius: "0",
                  padding: "2rem",
                }}
              >
                <h3 style={{ color: "#f59e0b", marginBottom: "1.5rem" }}>
                  Our Commercial Terms
                </h3>
                <ul style={{ color: "#cbd5e1", lineHeight: "1.8" }}>
                  <li>
                    <strong style={{ color: "#f8fafc" }}>
                      Service Agreements:
                    </strong>{" "}
                    Scope, responsibilities, and duration of our services.
                  </li>
                  <li>
                    <strong style={{ color: "#f8fafc" }}>Payment Terms:</strong>{" "}
                    Fees, billing cycles, and accepted payment methods.
                  </li>
                  <li>
                    <strong style={{ color: "#f8fafc" }}>
                      Credit Limits & Deadlines:
                    </strong>{" "}
                    Payment and financial commitment guidelines.
                  </li>
                  <li>
                    <strong style={{ color: "#f8fafc" }}>
                      Compensation Policy:
                    </strong>{" "}
                    Refunds, service guarantees, and obligations.
                  </li>
                  <li>
                    <strong style={{ color: "#f8fafc" }}>
                      Privacy & Confidentiality:
                    </strong>{" "}
                    Protection of client data and financial info.
                  </li>
                </ul>
                <p
                  style={{
                    color: "#94a3b8",
                    marginTop: "1rem",
                    marginBottom: "0",
                  }}
                >
                  For the full version, contact our experts at Thriving Capital.
                </p>
              </motion.div>
            </Col>
          </Row>

          {/* Cookies Policy */}
          <Row className="mb-4">
            <Col md={12}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{
                  background: "#1a2332",
                  border: "1px solid #334155",
                  borderRadius: "0",
                  padding: "2rem",
                }}
              >
                <h3 style={{ color: "#f59e0b", marginBottom: "1.5rem" }}>
                  Cookies Policy
                </h3>
                <p
                  style={{
                    color: "#cbd5e1",
                    lineHeight: "1.8",
                    marginBottom: "0",
                  }}
                >
                  Our website privacy policy ensures transparency regarding data
                  collection and processing. Cookies enhance your browsing
                  experience by allowing seamless navigation. By using our
                  website, you consent to cookies under our Privacy Policy.
                </p>
              </motion.div>
            </Col>
          </Row>

          {/* Customer Data Policy */}
          <Row>
            <Col md={12}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{
                  background: "#1a2332",
                  border: "1px solid #334155",
                  borderRadius: "0",
                  padding: "2rem",
                }}
              >
                <h3 style={{ color: "#f59e0b", marginBottom: "1.5rem" }}>
                  Customer Data Policy
                </h3>
                <p style={{ color: "#cbd5e1", lineHeight: "1.8" }}>
                  At Thriving Capital, protecting your personal and financial
                  data is our priority. We follow strict data protection
                  policies for:
                </p>
                <ul style={{ color: "#cbd5e1", lineHeight: "1.8" }}>
                  <li>
                    <strong style={{ color: "#f8fafc" }}>
                      Personal Details
                    </strong>{" "}
                    – Name, email, phone number, and address.
                  </li>
                  <li>
                    <strong style={{ color: "#f8fafc" }}>Financial Info</strong>{" "}
                    – Bank details, transaction history, and tax records.
                  </li>
                  <li>
                    <strong style={{ color: "#f8fafc" }}>
                      Confidential Data
                    </strong>{" "}
                    – Medical records, IP addresses, and multimedia files.
                  </li>
                </ul>
                <p style={{ color: "#94a3b8", marginBottom: "0" }}>
                  We do not share or sell customer data. For inquiries, contact
                  us at{" "}
                  <strong style={{ color: "#f59e0b" }}>1300 926 880</strong>.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default TermPage;
