import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import bgImage from "../assets/tSer2.jpg"; 

const InvestmentServices = () => {
  return (
    <Container className="my-5">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Row className="text-center mb-4" style={{ marginTop: "100px" }}>
          <Col>
            <h1 className="display-5 fw-bold">Investment Services</h1>
            <p className="text-muted">
              Expert guidance and tailored strategies to help you maximize your financial potential.
            </p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={6}>
            <img
              src={bgImage} // Replace with your image source
              alt="Investment Services"
              className="img-fluid"
            />
          </Col>
          <Col md={6}>
            <h3>Maximize Your Financial Potential with Professional Investment Services</h3>
            <p>
              At <strong>Thriving Capital</strong>, we offer comprehensive investment services designed to maximize your
              financial potential. Our team of experts provides professional guidance and executes tailored
              investment strategies based on your goals and risk tolerance.
            </p>

            <h4>Our Key Services Include:</h4>
            <ul className="list-unstyled">
              <li>✔ <strong>Portfolio Management:</strong> Crafting and managing diversified investment portfolios.</li>
              <li>✔ <strong>Investment Research:</strong> In-depth market analysis to identify lucrative opportunities.</li>
              <li>✔ <strong>Financial Consulting:</strong> Personalized strategies for wealth accumulation and preservation.</li>
              <li>✔ <strong>Order Execution:</strong> Seamless buying and selling of stocks, bonds, and mutual funds.</li>
              <li>✔ <strong>Custodial Services:</strong> Secure management of your financial assets.</li>
            </ul>

            <p>
              With a data-driven approach and a commitment to your financial growth, we help you navigate the
              ever-changing investment landscape with confidence. Our goal is to ensure that your investment
              strategy aligns with your objectives and evolves as your financial situation changes.
            </p>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
};

export default InvestmentServices;