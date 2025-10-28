import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import advisoryImage from "../assets/t1.jpg";
import investmentImage from "../assets/t2.jpg";
import taxImage from "../assets/t3.jpg";
import bgImage from "../assets/ThrBack.jpg";
import whyUs from "../assets/whyus.jpg";
import { LearnMoreButton } from "../assets/LearnMoreButton.js";
import { GetStartedButton } from "../assets/GetStartedButton.js";
import { motion } from "framer-motion";

function HomePage() {
  return (
    <>
      {/* Hero Background Image Section */}
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          minHeight: "85vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
          color: "white",
        }}
      >
        {/* Gradient overlay for better text readability */}
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
        ></div>

        {/* Animated Content */}
        <Container style={{ position: "relative", zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                fontSize: "3.5rem",
                fontWeight: "800",
                marginBottom: "1.5rem",
                lineHeight: "1.2",
                textShadow: "2px 4px 12px rgba(0, 0, 0, 0.3)",
              }}
            >
              Your Trusted Financial Advisors
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{
                fontSize: "1.35rem",
                fontWeight: "400",
                marginBottom: "2.5rem",
                maxWidth: "800px",
                margin: "0 auto 2.5rem",
                lineHeight: "1.7",
                color: "rgba(255, 255, 255, 0.95)",
                textShadow: "1px 2px 8px rgba(0, 0, 0, 0.3)",
              }}
            >
              Providing tailored wealth management, tax planning, and investment
              strategies to help you secure your financial future.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <GetStartedButton />
            </motion.div>
          </motion.div>
        </Container>
      </div>

      {/* Services Section */}
      <Container
        className="my-5"
        style={{ paddingTop: "4rem", paddingBottom: "2rem" }}
      >
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
              marginBottom: "0.75rem",
            }}
          >
            Our Services
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#94a3b8",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Comprehensive financial solutions tailored to your unique needs
          </p>
        </motion.div>
        <Row className="mt-4">
          {[
            {
              img: advisoryImage,
              title: "Financial Advisory",
              text: "Expert guidance on budgeting, savings, and investments.",
              link: "/financial-advisory",
              delay: 0,
            },
            {
              img: investmentImage,
              title: "Investment Services",
              text: "Wealth-building strategies to maximize returns and minimize risks.",
              link: "/investment-services",
              delay: 0.2,
            },
            {
              img: taxImage,
              title: "Tax Accounting",
              text: "Comprehensive tax planning to reduce liabilities.",
              link: "/tax-accounting",
              delay: 0.4,
            },
          ].map((service, idx) => (
            <Col md={4} key={service.title}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: service.delay,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Card
                  className="service-card h-100"
                  style={{
                    borderRadius: "0",
                    overflow: "hidden",
                    border: "1px solid #334155",
                    background: "#1a2332",
                    minHeight: "380px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.3s ease",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={service.img}
                    style={{
                      height: "180px",
                      objectFit: "cover",
                    }}
                  />
                  <Card.Body
                    className="d-flex flex-column align-items-center justify-content-between"
                    style={{
                      flex: 1,
                      background: "#1a2332",
                      padding: "2rem 1.5rem",
                    }}
                  >
                    <Card.Title
                      className="fw-bold text-center"
                      style={{
                        fontSize: "1.35rem",
                        marginBottom: "0.5rem",
                        color: "#f59e0b",
                      }}
                    >
                      {service.title}
                    </Card.Title>
                    <Card.Text
                      className="text-center"
                      style={{ flex: 1, color: "#cbd5e1" }}
                    >
                      {service.text}
                    </Card.Text>
                    <div style={{ marginTop: "-20px" }}>
                      <LearnMoreButton targetPage={service.link} />
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Why Choose Us Section */}
      <motion.section
        className="my-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Container className="my-5">
          <Card
            style={{
              borderRadius: "0",
              overflow: "hidden",
              border: "1px solid #334155",
              background: "#1a2332",
            }}
          >
            <Card.Body className="p-0" style={{ background: "#1a2332" }}>
              <Row className="g-0 align-items-center">
                {/* Text Section - Left */}
                <Col md={6} className="p-5">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h2
                      style={{
                        fontSize: "2.2rem",
                        fontWeight: "700",
                        color: "#f59e0b",
                        marginBottom: "0.75rem",
                        lineHeight: "1.2",
                      }}
                    >
                      Why Choose Thriving Capital?
                    </h2>
                    <p
                      style={{
                        fontSize: "1rem",
                        color: "#94a3b8",
                        marginBottom: "2rem",
                      }}
                    >
                      Building your financial future with expertise and trust
                    </p>
                  </motion.div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1.25rem",
                    }}
                  >
                    {[
                      {
                        title: "Expert Financial Guidance",
                        desc: "Make smart financial decisions with professional advice from seasoned experts.",
                        delay: 0.3,
                      },
                      {
                        title: "Comprehensive Wealth Management",
                        desc: "From investments to tax planning, we provide complete financial solutions.",
                        delay: 0.4,
                      },
                      {
                        title: "Personalized Approach",
                        desc: "Tailored strategies designed specifically for your unique financial goals.",
                        delay: 0.5,
                      },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: item.delay }}
                        viewport={{ once: true }}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          padding: "1.25rem",
                          backgroundColor: "#0f172a",
                          borderRadius: "0",
                          borderLeft: "none",
                          transition: "all 0.3s ease",
                        }}
                        whileHover={{
                          backgroundColor: "#1e293b",
                        }}
                      >
                        <div>
                          <h4
                            style={{
                              fontSize: "1.15rem",
                              fontWeight: "600",
                              color: "#f8fafc",
                              marginBottom: "0.35rem",
                              lineHeight: "1.4",
                            }}
                          >
                            {item.title}
                          </h4>
                          <p
                            style={{
                              fontSize: "0.95rem",
                              color: "#94a3b8",
                              marginBottom: "0",
                              lineHeight: "1.6",
                            }}
                          >
                            {item.desc}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Col>

                {/* Image Section - Right */}
                <Col
                  md={6}
                  style={{
                    height: "100%",
                    minHeight: "600px",
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    style={{ height: "100%" }}
                  >
                    <div
                      style={{
                        backgroundImage: `url(${whyUs})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "100%",
                        minHeight: "600px",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(135deg, rgba(25, 135, 84, 0.1) 0%, rgba(25, 135, 84, 0.05) 100%)",
                        }}
                      />
                    </div>
                  </motion.div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </motion.section>

      {/* Call-to-Action Section */}
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
            }}
          >
            {/* Content */}
            <Row className="justify-content-center">
              <Col
                lg={8}
                className="text-center"
                style={{ position: "relative", zIndex: 1 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h2
                    style={{
                      color: "white",
                      fontSize: "2.5rem",
                      fontWeight: "700",
                      marginBottom: "1rem",
                      lineHeight: "1.2",
                    }}
                  >
                    Start Your Journey to Financial Success
                  </h2>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <p
                    style={{
                      color: "rgba(255, 255, 255, 0.9)",
                      fontSize: "1.15rem",
                      marginBottom: "2.5rem",
                      lineHeight: "1.7",
                      maxWidth: "600px",
                      margin: "0 auto 2.5rem",
                    }}
                  >
                    Take control of your financial future with expert guidance.
                    Schedule a consultation today and discover how we can help
                    you achieve your goals.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <GetStartedButton />
                </motion.div>
              </Col>
            </Row>
          </div>
        </Container>
      </motion.section>
    </>
  );
}

export default HomePage;
