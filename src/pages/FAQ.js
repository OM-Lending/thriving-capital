import React from "react";
import { Container, Accordion } from "react-bootstrap";
import { motion } from "framer-motion";
import bgImage from "../assets/tBack2.jpg"; // Background image import

const FAQ = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "50px 0",
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 style={{ color: "white", textAlign: "center", marginBottom: "30px" }}>
            Frequently Asked Questions
          </h2>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
              What services does Thriving Capital offer?
              </Accordion.Header>
              <Accordion.Body>
              We provide a range of financial services, including wealth management, investment strategies, financial advisory, and tax planning for individuals and businesses.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
              Who can benefit from your financial services?
              </Accordion.Header>
              <Accordion.Body>
              Our services are designed for individuals looking to grow their wealth, businesses seeking financial stability, and anyone needing expert guidance on tax planning and investment strategies.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
              How can I get started with Thriving Capital?
              </Accordion.Header>
              <Accordion.Body>
              You can contact us through our website, email, or phone to schedule a consultation. Our advisors will assess your financial goals and recommend the best strategies for you.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>
              Is my financial information secure with Thriving Capital?
              </Accordion.Header>
              <Accordion.Body>
              Yes, we prioritize confidentiality and use secure systems to protect your financial data. Your privacy and security are our top concerns.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>
              Do you offer customized financial plans?
              </Accordion.Header>
              <Accordion.Body>
              Absolutely! We tailor our financial strategies based on your unique goals, risk tolerance, and financial situation.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header>
              How do you charge for your financial advisory services?
              </Accordion.Header>
              <Accordion.Body>
              Our pricing structure depends on the type of service. We offer transparent pricing and will discuss all fees upfront during your initial consultation.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6">
              <Accordion.Header>
              Can you help with tax planning and compliance?
              </Accordion.Header>
              <Accordion.Body>
              Yes, our tax accounting services ensure you meet compliance requirements while optimizing tax strategies to reduce liabilities and maximize savings.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="7">
              <Accordion.Header>
              Do you only serve clients in Australia?
              </Accordion.Header>
              <Accordion.Body>
              While we are based in Australia, we may assist international clients depending on their financial needs. Contact us to discuss how we can help.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="8">
              <Accordion.Header>
              How often should I review my financial plan?
              </Accordion.Header>
              <Accordion.Body>
              We recommend reviewing your financial plan at least once a year or whenever you experience major life changes, such as buying a home, changing jobs, or starting a business.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="9">
              <Accordion.Header>
              Why should I choose Thriving Capital over other financial advisory firms?
              </Accordion.Header>
              <Accordion.Body>
              We provide expert financial guidance, comprehensive wealth management, and a personalized approach to ensure your financial success. Our team is dedicated to helping you achieve long-term stability and growth.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </motion.div>
      </Container>
    </div>
  );
};

export default FAQ;