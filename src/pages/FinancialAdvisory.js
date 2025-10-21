import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { ContactUsButton } from "../assets/ContactUsButton.js";
import bgImage from "../assets/tSer1.jpg";

const FinancialAdvisory = () => {
  const services = [
    {
      title: "Goal Setting",
      description:
        "We help you define and prioritize your financial goals with clarity and purpose.",
    },
    {
      title: "Financial Planning",
      description:
        "Customized strategies designed to achieve your specific objectives.",
    },
    {
      title: "Investment Advice",
      description:
        "Expert recommendations on investment opportunities tailored to your risk profile.",
    },
    {
      title: "Tax Advisory",
      description:
        "Optimizing tax implications for your investments to maximize returns.",
    },
    {
      title: "Retirement Planning",
      description:
        "Developing a structured plan for future financial security and peace of mind.",
    },
    {
      title: "Estate Planning",
      description:
        "Ensuring a seamless transition of assets to your beneficiaries.",
    },
    {
      title: "Insurance Advice",
      description:
        "Identifying the right insurance policies to protect what matters most.",
    },
    {
      title: "Budgeting & Risk Management",
      description:
        "Helping you maintain financial stability while managing potential risks.",
    },
    {
      title: "Real Estate Advice",
      description:
        "Strategic guidance on property investment decisions and opportunities.",
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
              Financial Advisory
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
              Expert guidance to help you achieve your financial goals with
              confidence
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
                Empowering You with Tailored Financial Strategies
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  color: "#cbd5e1",
                  marginBottom: "1.5rem",
                }}
              >
                At <strong>Thriving Capital</strong>, we provide expert
                financial advisory services to help individuals and businesses
                make informed financial decisions. Our goal is to empower you
                with strategies tailored to your unique needs, ensuring
                long-term financial success.
              </p>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  color: "#cbd5e1",
                  marginBottom: "2rem",
                }}
              >
                Whether you are planning for retirement, seeking tax efficiency,
                or growing your wealth, our financial advisors are here to guide
                you every step of the way.
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
              Our Financial Advisory Services
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#94a3b8",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              Comprehensive solutions designed to meet all your financial needs
            </p>
          </motion.div>

          <Row className="g-4">
            {services.map((service, idx) => (
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
                      transition: "all 0.3s ease",
                      background: "#1a2332",
                      borderLeft: "none",
                    }}
                  >
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
                Ready to Take Control of Your Financial Future?
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
                Schedule a consultation with our expert financial advisors today
                and start building a prosperous tomorrow.
              </p>
              <ContactUsButton />
            </div>
          </div>
        </Container>
      </motion.section>
    </>
  );
};

export default FinancialAdvisory;
