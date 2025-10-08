import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { ContactUsButton } from "../assets/ContactUsButton.js";
import bgImage from "../assets/tSer2.jpg";

const InvestmentServices = () => {
  const services = [
    {
      title: "Portfolio Management",
      description:
        "Crafting and managing diversified investment portfolios tailored to your financial goals and risk tolerance.",
    },
    {
      title: "Investment Research",
      description:
        "In-depth market analysis and research to identify lucrative investment opportunities.",
    },
    {
      title: "Financial Consulting",
      description:
        "Personalized strategies for wealth accumulation and preservation with expert guidance.",
    },
    {
      title: "Order Execution",
      description:
        "Seamless buying and selling of stocks, bonds, and mutual funds with efficiency.",
    },
    {
      title: "Custodial Services",
      description:
        "Secure management and safekeeping of your financial assets and investments.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          minHeight: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
          color: "white",
          marginTop: "-1rem",
        }}
      >
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(25, 135, 84, 0.5) 100%)",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <Container style={{ position: "relative", zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              style={{
                fontSize: "3rem",
                fontWeight: "700",
                marginBottom: "1rem",
                textShadow: "2px 4px 12px rgba(0, 0, 0, 0.3)",
              }}
            >
              Investment Services
            </h1>
            <p
              style={{
                fontSize: "1.3rem",
                maxWidth: "700px",
                margin: "0 auto",
                lineHeight: "1.7",
                textShadow: "1px 2px 8px rgba(0, 0, 0, 0.3)",
              }}
            >
              Expert guidance and tailored strategies to help you maximize your
              financial potential
            </p>
          </motion.div>
        </Container>
      </div>

      {/* Overview Section */}
      <Container style={{ marginTop: "5rem", marginBottom: "5rem" }}>
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div
                style={{
                  backgroundImage: `url(${bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "450px",
                  borderRadius: "20px",
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.2)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(135deg, rgba(25, 135, 84, 0.15) 0%, rgba(25, 135, 84, 0.05) 100%)",
                  }}
                />
              </div>
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  color: "#1a1a1a",
                  marginBottom: "1.5rem",
                }}
              >
                Maximize Your Financial Potential
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  color: "#4a4a4a",
                  marginBottom: "1.5rem",
                }}
              >
                At <strong>Thriving Capital</strong>, we offer comprehensive
                investment services designed to maximize your financial
                potential. Our team of experts provides professional guidance
                and executes tailored investment strategies based on your goals
                and risk tolerance.
              </p>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  color: "#4a4a4a",
                  marginBottom: "2rem",
                }}
              >
                With a data-driven approach and a commitment to your financial
                growth, we help you navigate the ever-changing investment
                landscape with confidence.
              </p>
              <ContactUsButton />
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* Services Section */}
      <div
        style={{
          background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
          padding: "5rem 0",
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-5"
          >
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                color: "#1a1a1a",
                marginBottom: "1rem",
              }}
            >
              Our Investment Services
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#6c757d",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              Comprehensive solutions to help you build and preserve wealth
            </p>
          </motion.div>

          {/* First row - 3 cards */}
          <Row className="g-4 justify-content-center mb-4">
            {services.slice(0, 3).map((service, idx) => (
              <Col md={6} lg={4} key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    style={{
                      border: "none",
                      borderRadius: "18px",
                      padding: "2rem",
                      height: "100%",
                      minHeight: "180px",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                      transition: "all 0.3s ease",
                      background: "white",
                      borderLeft: "4px solid #198754",
                      display: "flex",
                      flexDirection: "column",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-10px)";
                      e.currentTarget.style.boxShadow =
                        "0 20px 40px rgba(25, 135, 84, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 10px 30px rgba(0, 0, 0, 0.08)";
                    }}
                  >
                    <div>
                      <h5
                        style={{
                          fontSize: "1.3rem",
                          fontWeight: "600",
                          color: "#1a1a1a",
                          marginBottom: "1rem",
                        }}
                      >
                        {service.title}
                      </h5>
                      <p
                        style={{
                          fontSize: "1rem",
                          color: "#6c757d",
                          lineHeight: "1.7",
                          margin: 0,
                        }}
                      >
                        {service.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>

          {/* Second row - 2 cards centered */}
          <Row className="g-4 justify-content-center">
            {services.slice(3, 5).map((service, idx) => (
              <Col md={6} lg={4} key={idx + 3}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (idx + 3) * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    style={{
                      border: "none",
                      borderRadius: "18px",
                      padding: "2rem",
                      height: "100%",
                      minHeight: "180px",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                      transition: "all 0.3s ease",
                      background: "white",
                      borderLeft: "4px solid #198754",
                      display: "flex",
                      flexDirection: "column",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-10px)";
                      e.currentTarget.style.boxShadow =
                        "0 20px 40px rgba(25, 135, 84, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 10px 30px rgba(0, 0, 0, 0.08)";
                    }}
                  >
                    <div>
                      <h5
                        style={{
                          fontSize: "1.3rem",
                          fontWeight: "600",
                          color: "#1a1a1a",
                          marginBottom: "1rem",
                        }}
                      >
                        {service.title}
                      </h5>
                      <p
                        style={{
                          fontSize: "1rem",
                          color: "#6c757d",
                          lineHeight: "1.7",
                          margin: 0,
                        }}
                      >
                        {service.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          marginTop: "5rem",
          marginBottom: "5rem",
        }}
      >
        <Container>
          <div
            style={{
              background: "linear-gradient(135deg, #198754 0%, #0d6832 100%)",
              borderRadius: "24px",
              padding: "4rem 2rem",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(25, 135, 84, 0.3)",
              textAlign: "center",
            }}
          >
            {/* Decorative circles */}
            <div
              style={{
                position: "absolute",
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.1)",
                top: "-150px",
                right: "-100px",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.08)",
                bottom: "-100px",
                left: "-50px",
              }}
            />

            <div style={{ position: "relative", zIndex: 1 }}>
              <h2
                style={{
                  color: "white",
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  marginBottom: "1rem",
                }}
              >
                Ready to Grow Your Wealth?
              </h2>
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: "1.15rem",
                  marginBottom: "2rem",
                  maxWidth: "600px",
                  margin: "0 auto 2rem",
                }}
              >
                Start investing with confidence. Contact our investment experts
                today for a personalized consultation.
              </p>
              <ContactUsButton />
            </div>
          </div>
        </Container>
      </motion.section>
    </>
  );
};

export default InvestmentServices;
