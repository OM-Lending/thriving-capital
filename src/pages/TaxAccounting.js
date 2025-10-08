import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import bgImage from "../assets/tSer3.jpg"; 

const TaxAccounting = () => {
  return (
    <Container className="my-5">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Row className="text-center mb-4" style={{ marginTop: "100px" }}>
          <Col>
            <h1 className="display-5 fw-bold">Tax Accounting</h1>
            <p className="text-muted">
              Simplifying tax compliance and maximizing tax benefits with expert tax accounting services.
            </p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={6}>
            <img
              src={bgImage} // Replace with your image source
              alt="Tax Accounting"
              className="img-fluid"
            />
          </Col>
          <Col md={6}>
            <h3>Expert Tax Accounting Services for Individuals and Businesses</h3>
            <p>
              Navigating tax regulations can be complex, but at <strong>Thriving Capital</strong>, we simplify the process
              with expert tax accounting services. Whether you are an individual or a business, we provide
              personalized tax solutions to ensure compliance while maximizing tax benefits.
            </p>

            <h4>Our Tax Services Include:</h4>
            <ul className="list-unstyled">
              <li>✔ <strong>Tax Planning & Compliance:</strong> Strategizing tax-efficient solutions tailored to your financial situation.</li>
              <li>✔ <strong>Tax Return Preparation:</strong> Hassle-free filing to ensure accuracy and compliance.</li>
              <li>✔ <strong>Business Taxation:</strong> Specialized tax advisory for businesses of all sizes.</li>
              <li>✔ <strong>GST & BAS Lodgement:</strong> Ensuring compliance with Australian tax laws.</li>
              <li>✔ <strong>Tax Dispute Resolution:</strong> Assisting with audits and negotiations with tax authorities.</li>
            </ul>

            <p>
              Our experienced tax professionals take the time to explain complex tax laws in simple terms,
              empowering you with knowledge while helping you achieve financial efficiency. We are dedicated to
              providing personalized solutions that meet your specific needs, ensuring peace of mind and the
              best possible outcomes for your financial situation.
            </p>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
};

export default TaxAccounting;