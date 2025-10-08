import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import bgImage from "../assets/tSer1.jpg"; 

const FinancialAdvisory = () => {
  return (
    <Container className="my-5">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Row className="text-center mb-4" style={{ marginTop: "100px" }}>
          <Col>
            <h1 className="display-5 fw-bold">Financial Advisory</h1>
            <p className="text-muted">
              Expert guidance to help you achieve your financial goals with confidence.
            </p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={6}>
            <img
              src={bgImage} // Replace with your image source
              alt="Financial Advisory"
              className="img-fluid"
            />
          </Col>
          <Col md={6}>
            <h3>Empowering You with Tailored Financial Strategies</h3>
            <p>
              At <strong>Thriving Capital</strong>, we provide expert financial advisory services to help individuals
              and businesses make informed financial decisions. Our goal is to empower you with strategies
              tailored to your unique needs, ensuring long-term financial success.
            </p>

            <h4>Our Services Include:</h4>
            <ul className="list-unstyled">
              <li>✔ <strong>Goal Setting:</strong> We help you define and prioritize your financial goals.</li>
              <li>✔ <strong>Financial Planning:</strong> Customized strategies to achieve your objectives.</li>
              <li>✔ <strong>Investment Advice:</strong> Expert recommendations on investment opportunities.</li>
              <li>✔ <strong>Tax Advisory:</strong> Optimizing tax implications for your investments.</li>
              <li>✔ <strong>Retirement Planning:</strong> Developing a structured plan for future financial security.</li>
              <li>✔ <strong>Estate Planning:</strong> Ensuring a seamless transition of assets to your beneficiaries.</li>
              <li>✔ <strong>Insurance Advice:</strong> Identifying the right insurance policies for your needs.</li>
              <li>✔ <strong>Budgeting & Risk Management:</strong> Helping you maintain financial stability and manage risk.</li>
              <li>✔ <strong>Real Estate Advice:</strong> Guidance on property investment decisions.</li>
            </ul>

            <p>
              Whether you are planning for retirement, seeking tax efficiency, or growing your wealth, our
              financial advisors are here to guide you every step of the way. Let us help you make sound financial
              decisions for a prosperous future.
            </p>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
};

export default FinancialAdvisory;