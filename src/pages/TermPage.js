import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import bgImage from "../assets/tBack3.jpg"; // Ensure you have a relevant background image

const TermPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "50px 0",
        color: "#fff",
      }}
    >
      <Container>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-4"
        >
          <h1 className="fw-bold">Terms and Conditions</h1>
        </motion.div>

        {/* Terms Section */}
        <Row className="mb-4">
          <Col md={12}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-4 bg-dark rounded"
            >
              <h3>Our Commercial Terms</h3>
              <ul>
                <li>📜 <strong>Service Agreements:</strong> Scope, responsibilities, and duration of our services.</li>
                <li>💳 <strong>Payment Terms:</strong> Fees, billing cycles, and accepted payment methods.</li>
                <li>📅 <strong>Credit Limits & Deadlines:</strong> Payment and financial commitment guidelines.</li>
                <li>💰 <strong>Compensation Policy:</strong> Refunds, service guarantees, and obligations.</li>
                <li>🔒 <strong>Privacy & Confidentiality:</strong> Protection of client data and financial info.</li>
              </ul>
              <p>For the full version, contact our experts at Thriving Capital.</p>
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
              className="p-4 bg-dark rounded"
            >
              <h3>Cookies Policy 🍪</h3>
              <p>
                Our website privacy policy ensures transparency regarding data collection and processing.
                Cookies enhance your browsing experience by allowing seamless navigation.
                By using our website, you consent to cookies under our Privacy Policy.
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
              className="p-4 bg-dark rounded"
            >
              <h3>Customer Data Policy 🔐</h3>
              <p>
                At Thriving Capital, protecting your personal and financial data is our priority.
                We follow strict data protection policies for:
              </p>
              <ul>
                <li>📌 Personal Details – Name, email, phone number, and address.</li>
                <li>🏦 Financial Info – Bank details, transaction history, and tax records.</li>
                <li>🛡️ Confidential Data – Medical records, IP addresses, and multimedia files.</li>
              </ul>
              <p>We do not share or sell customer data. For inquiries, contact us at <strong>1300 926 880</strong>.</p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TermPage;