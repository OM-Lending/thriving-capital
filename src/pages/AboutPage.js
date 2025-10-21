import React from "react";
import bgImage from "../assets/tBack4.jpg";
import missionPic1 from "../assets/MissionPic1.webp";
import missionPic2 from "../assets/MissionPic2.webp";
import missionPic3 from "../assets/MissionPic3.webp";
import { ContactUsButton } from "../assets/ContactUsButton.js";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const AboutPage = () => {
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
              About Us
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
              Your Trusted Financial Advisors in Australia
            </p>
          </motion.div>
        </Container>
      </div>

      {/* Who We Are Section */}
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
                Who We Are
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  color: "#cbd5e1",
                  marginBottom: "1.5rem",
                }}
              >
                At Thriving Capital, we are committed to helping individuals and
                businesses make informed financial decisions with confidence. As
                a leading financial services company in Australia, we provide
                strategic financial planning, tax advisory services, and wealth
                management solutions tailored to your unique needs.
              </p>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  color: "#cbd5e1",
                  marginBottom: "2rem",
                }}
              >
                Whether you need expert financial advisory, tax planning, or
                wealth management, we are ready to guide you on your path to
                success.
              </p>
              <ContactUsButton />
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* Mission Section */}
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
              Our Mission
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#94a3b8",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              We empower our clients with the right financial tools and
              knowledge to achieve long-term financial stability and success.
            </p>
          </motion.div>

          <Row className="g-4 mt-4">
            {[
              {
                image: missionPic1,
                title: "Financial Advisory",
                desc: "Smart money management tailored to your unique goals and aspirations.",
                delay: 0.2,
              },
              {
                image: missionPic2,
                title: "Investment Planning",
                desc: "Expert insights and strategies to help grow and protect your wealth.",
                delay: 0.4,
              },
              {
                image: missionPic3,
                title: "Tax Strategies",
                desc: "Maximize returns while ensuring full compliance with regulations.",
                delay: 0.6,
              },
            ].map((item, idx) => (
              <Col md={4} key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: item.delay }}
                  viewport={{ once: true }}
                >
                  <Card
                    style={{
                      border: "1px solid #334155",
                      borderRadius: "0",
                      padding: "0",
                      height: "100%",
                      transition: "all 0.3s ease",
                      background: "#1a2332",
                      overflow: "hidden",
                    }}
                    className="h-100"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "200px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div style={{ padding: "2rem" }} className="text-center">
                      <h4
                        style={{
                          fontSize: "1.4rem",
                          fontWeight: "600",
                          color: "#f59e0b",
                          marginBottom: "1rem",
                        }}
                      >
                        {item.title}
                      </h4>
                      <p
                        style={{
                          fontSize: "1rem",
                          color: "#cbd5e1",
                          lineHeight: "1.7",
                          margin: 0,
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Values Section */}
      <Container style={{ marginTop: "5rem", marginBottom: "5rem" }}>
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
            Our Core Values
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#94a3b8",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            The principles that guide everything we do
          </p>
        </motion.div>

        <Row className="g-4">
          {[
            {
              title: "Client-Focused",
              desc: "Your financial success is our top priority, and we tailor every strategy to meet your specific needs.",
            },
            {
              title: "Trustworthy",
              desc: "We build lasting relationships based on transparency, integrity, and ethical practices.",
            },
            {
              title: "Results-Driven",
              desc: "We are committed to delivering measurable results that exceed your expectations.",
            },
            {
              title: "Innovative",
              desc: "We leverage cutting-edge financial strategies and technology to stay ahead of the curve.",
            },
          ].map((value, idx) => (
            <Col md={6} key={idx}>
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  style={{
                    padding: "1.5rem",
                    background: "#1a2332",
                    borderRadius: "0",
                    border: "1px solid #334155",
                    borderLeft: "none",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div>
                    <h5
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "600",
                        color: "#f8fafc",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {value.title}
                    </h5>
                    <p
                      style={{
                        fontSize: "1rem",
                        color: "#94a3b8",
                        margin: 0,
                        lineHeight: "1.7",
                      }}
                    >
                      {value.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

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
                Ready to Secure Your Financial Future?
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
                Call us at <strong>1300 926 880</strong> or schedule a
                consultation to discuss your financial goals.
              </p>
              <ContactUsButton />
            </div>
          </div>
        </Container>
      </motion.section>
    </>
  );
};

export default AboutPage;
