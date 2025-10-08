import React, { useState } from "react";
import { Container, Row, Col, Form, Alert, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const ContactPage = () => {
  // State for the form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // State for form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = { name, email, message };

    try {
      const response = await fetch(
        "https://backend-teal-pi.vercel.app/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setFormStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        // Auto-hide success message after 5 seconds
        setTimeout(() => setFormStatus(null), 5000);
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>{`
        .contact-hero {
          background: linear-gradient(135deg, #198754 0%, #0d6832 100%);
          padding: 5rem 0 3rem;
          margin-top: -1rem;
          color: white;
          position: relative;
          overflow: hidden;
          border-radius: 18px;
        }

        .contact-hero::before {
          content: '';
          position: absolute;
          width: 400px;
          height: 400px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          top: -200px;
          right: -100px;
        }

        .contact-form-input {
          border: 2px solid #e0e0e0;
          border-radius: 12px;
          padding: 0.85rem 1rem;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: white;
        }

        .contact-form-input:focus {
          border-color: #198754;
          box-shadow: 0 0 0 3px rgba(25, 135, 84, 0.1);
          outline: none;
        }

        .contact-form-label {
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }

        .contact-submit-btn {
          background: linear-gradient(135deg, #198754 0%, #0d6832 100%);
          border: none;
          border-radius: 12px;
          padding: 1rem 2rem;
          font-size: 1.1rem;
          font-weight: 600;
          color: white;
          transition: all 0.3s ease;
          width: 100%;
        }

        .contact-submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(25, 135, 84, 0.3);
        }

        .contact-submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .contact-info-card {
          background: white;
          border: none;
          border-radius: 18px;
          padding: 2rem;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
          transition: all 0.3s ease;
          height: 100%;
        }

        .contact-info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(25, 135, 84, 0.15);
        }

        .contact-info-link {
          color: #6c757d;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .contact-info-link:hover {
          color: #0d6832;
        }
      `}</style>

      {/* Hero Section */}
      <div className="contact-hero">
        <Container style={{ position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1
              style={{
                fontSize: "3rem",
                fontWeight: "700",
                marginBottom: "1rem",
              }}
            >
              Get In Touch
            </h1>
            <p
              style={{
                fontSize: "1.3rem",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              Have questions? We're here to help you achieve your financial
              goals
            </p>
          </motion.div>
        </Container>
      </div>

      {/* Contact Content */}
      <Container style={{ marginTop: "4rem", marginBottom: "5rem" }}>
        <Row className="g-4">
          {/* Contact Information Cards */}
          <Col lg={4}>
            <Row className="g-4">
              {/* Phone Card */}
              <Col xs={12}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Card className="contact-info-card">
                    <div className="text-center">
                      <h5
                        style={{
                          fontWeight: "600",
                          marginBottom: "1rem",
                          color: "#198754",
                          fontSize: "1.2rem",
                        }}
                      >
                        Call Us
                      </h5>
                      <a
                        href="tel:1300926880"
                        className="contact-info-link"
                        style={{
                          fontSize: "1.1rem",
                          display: "block",
                          marginBottom: "0.5rem",
                        }}
                      >
                        1300 926 880
                      </a>
                      <p
                        style={{
                          color: "#6c757d",
                          fontSize: "0.9rem",
                          marginBottom: 0,
                        }}
                      >
                        Mon-Fri, 9:00 AM - 5:00 PM
                      </p>
                    </div>
                  </Card>
                </motion.div>
              </Col>

              {/* Email Card */}
              <Col xs={12}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Card className="contact-info-card">
                    <div className="text-center">
                      <h5
                        style={{
                          fontWeight: "600",
                          marginBottom: "1rem",
                          color: "#198754",
                          fontSize: "1.2rem",
                        }}
                      >
                        Email Us
                      </h5>
                      <a
                        href="mailto:admin@thrivingcapitalgroup.com"
                        className="contact-info-link"
                        style={{
                          fontSize: "0.95rem",
                          wordBreak: "break-word",
                          display: "block",
                          marginBottom: "0.5rem",
                        }}
                      >
                        admin@thrivingcapitalgroup.com
                      </a>
                    </div>
                  </Card>
                </motion.div>
              </Col>

              {/* Location Card */}
              <Col xs={12}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Card className="contact-info-card">
                    <div className="text-center">
                      <h5
                        style={{
                          fontWeight: "600",
                          marginBottom: "1rem",
                          color: "#198754",
                          fontSize: "1.2rem",
                        }}
                      >
                        Visit Us
                      </h5>
                      <p
                        style={{
                          color: "#6c757d",
                          marginBottom: 0,
                          lineHeight: "1.6",
                        }}
                      >
                        Level 4, 162 Macquarie St
                        <br />
                        Hobart TAS 7000
                        <br />
                        Australia
                      </p>
                    </div>
                  </Card>
                </motion.div>
              </Col>

              {/* Business Hours Card */}
              <Col xs={12}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Card className="contact-info-card">
                    <div className="text-center">
                      <h5
                        style={{
                          fontWeight: "600",
                          marginBottom: "1rem",
                          color: "#198754",
                          fontSize: "1.2rem",
                        }}
                      >
                        Business Hours
                      </h5>
                      <div style={{ marginBottom: "0.75rem" }}>
                        <div
                          style={{
                            fontWeight: "600",
                            color: "#1a1a1a",
                            marginBottom: "0.25rem",
                          }}
                        >
                          Monday - Friday
                        </div>
                        <div style={{ color: "#6c757d" }}>
                          9:00 AM - 5:00 PM
                        </div>
                      </div>
                      <div>
                        <div
                          style={{
                            fontWeight: "600",
                            color: "#1a1a1a",
                            marginBottom: "0.25rem",
                          }}
                        >
                          Saturday - Sunday
                        </div>
                        <div style={{ color: "#6c757d" }}>Closed</div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </Col>
            </Row>
          </Col>

          {/* Contact Form */}
          <Col lg={8}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card
                style={{
                  border: "none",
                  borderRadius: "18px",
                  padding: "2.5rem",
                  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h3
                  style={{
                    fontSize: "2rem",
                    fontWeight: "700",
                    color: "#1a1a1a",
                    marginBottom: "0.5rem",
                  }}
                >
                  Send Us a Message
                </h3>
                <p
                  style={{
                    color: "#6c757d",
                    marginBottom: "2rem",
                  }}
                >
                  Fill out the form below and we'll get back to you as soon as
                  possible
                </p>

                {/* Success/Error Alert */}
                {formStatus && (
                  <Alert
                    variant={formStatus === "success" ? "success" : "danger"}
                    style={{
                      borderRadius: "12px",
                      border: "none",
                    }}
                  >
                    {formStatus === "success"
                      ? "Your message has been sent successfully! We'll get back to you soon."
                      : "There was an error sending your message. Please try again later."}
                  </Alert>
                )}

                <Form
                  onSubmit={handleSubmit}
                  style={{ marginTop: formStatus ? "1.5rem" : 0 }}
                >
                  <Form.Group className="mb-4">
                    <Form.Label className="contact-form-label">
                      Full Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="John Smith"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="contact-form-input"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="contact-form-label">
                      Email Address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="john.smith@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="contact-form-input"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="contact-form-label">
                      Your Message
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="contact-form-input"
                      required
                    />
                  </Form.Group>

                  <button
                    type="submit"
                    className="contact-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </Form>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactPage;
