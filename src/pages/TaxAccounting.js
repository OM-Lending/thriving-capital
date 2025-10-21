import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { ContactUsButton } from "../assets/ContactUsButton.js";
import bgImage from "../assets/tSer3.jpg";

const TaxAccounting = () => {
  const services = [
    {
      title: "Tax Planning & Compliance",
      description:
        "Strategizing tax-efficient solutions tailored to your financial situation for optimal results.",
    },
    {
      title: "Tax Return Preparation",
      description:
        "Hassle-free filing services to ensure accuracy and full compliance with tax regulations.",
    },
    {
      title: "Business Taxation",
      description:
        "Specialized tax advisory services for businesses of all sizes and industries.",
    },
    {
      title: "GST & BAS Lodgement",
      description:
        "Ensuring complete compliance with Australian tax laws and timely submissions.",
    },
    {
      title: "Tax Dispute Resolution",
      description:
        "Expert assistance with audits and negotiations with tax authorities on your behalf.",
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
              "linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(0, 0, 0, 0.7) 100%)",
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
              Tax Accounting
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
              Simplifying tax compliance and maximizing tax benefits with expert
              accounting services
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
                  borderRadius: "0",
                  border: "1px solid #334155",
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
                  color: "#f59e0b",
                  marginBottom: "1.5rem",
                }}
              >
                Expert Tax Services for Individuals and Businesses
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  color: "#cbd5e1",
                  marginBottom: "1.5rem",
                }}
              >
                Navigating tax regulations can be complex, but at{" "}
                <strong>Thriving Capital</strong>, we simplify the process with
                expert tax accounting services. Whether you are an individual or
                a business, we provide personalized tax solutions to ensure
                compliance while maximizing tax benefits.
              </p>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  color: "#cbd5e1",
                  marginBottom: "2rem",
                }}
              >
                Our experienced tax professionals take the time to explain
                complex tax laws in simple terms, empowering you with knowledge
                while helping you achieve financial efficiency.
              </p>
              <ContactUsButton />
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* Services Section */}
      <div
        style={{
          background: "#0f172a",
          padding: "5rem 0",
          borderTop: "1px solid #334155",
          borderBottom: "1px solid #334155",
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
                color: "#f59e0b",
                marginBottom: "1rem",
              }}
            >
              Our Tax Accounting Services
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#94a3b8",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              Comprehensive tax solutions to ensure compliance and maximize
              benefits
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
                      border: "2px solid #334155",
                      borderRadius: "0",
                      padding: "2rem",
                      height: "100%",
                      minHeight: "180px",
                      transition: "all 0.3s ease",
                      background: "#1a2332",
                      borderLeft: "none",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div>
                      <h5
                        style={{
                          fontSize: "1.3rem",
                          fontWeight: "600",
                          color: "#f59e0b",
                          marginBottom: "1rem",
                        }}
                      >
                        {service.title}
                      </h5>
                      <p
                        style={{
                          fontSize: "1rem",
                          color: "#cbd5e1",
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
                      border: "2px solid #334155",
                      borderRadius: "0",
                      padding: "2rem",
                      height: "100%",
                      minHeight: "180px",
                      transition: "all 0.3s ease",
                      background: "#1a2332",
                      borderLeft: "none",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div>
                      <h5
                        style={{
                          fontSize: "1.3rem",
                          fontWeight: "600",
                          color: "#f59e0b",
                          marginBottom: "1rem",
                        }}
                      >
                        {service.title}
                      </h5>
                      <p
                        style={{
                          fontSize: "1rem",
                          color: "#cbd5e1",
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
              background: "#0f172a",
              borderRadius: "0",
              padding: "4rem 2rem",
              position: "relative",
              overflow: "hidden",
              border: "1px solid #334155",
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
                Ready to Optimize Your Tax Strategy?
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
                Contact our tax professionals today for personalized tax
                planning and compliance solutions.
              </p>
              <ContactUsButton />
            </div>
          </div>
        </Container>
      </motion.section>
    </>
  );
};

export default TaxAccounting;
