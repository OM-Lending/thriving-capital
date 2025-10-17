import React from "react";
import { Container, Accordion, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import bgImage from "../assets/tBack2.jpg";

const FAQ = () => {
  const faqs = [
    {
      question: "What services does Thriving Capital offer?",
      answer:
        "We provide a range of financial services, including wealth management, investment strategies, financial advisory, and tax planning for individuals and businesses.",
    },
    {
      question: "Who can benefit from your financial services?",
      answer:
        "Our services are designed for individuals looking to grow their wealth, businesses seeking financial stability, and anyone needing expert guidance on tax planning and investment strategies.",
    },
    {
      question: "How can I get started with Thriving Capital?",
      answer:
        "You can contact us through our website, email, or phone to schedule a consultation. Our advisors will assess your financial goals and recommend the best strategies for you.",
    },
    {
      question: "Is my financial information secure with Thriving Capital?",
      answer:
        "Yes, we prioritize confidentiality and use secure systems to protect your financial data. Your privacy and security are our top concerns.",
    },
    {
      question: "Do you offer customized financial plans?",
      answer:
        "Absolutely! We tailor our financial strategies based on your unique goals, risk tolerance, and financial situation.",
    },
    {
      question: "How do you charge for your financial advisory services?",
      answer:
        "Our pricing structure depends on the type of service. We offer transparent pricing and will discuss all fees upfront during your initial consultation.",
    },
    {
      question: "Can you help with tax planning and compliance?",
      answer:
        "Yes, our tax accounting services ensure you meet compliance requirements while optimizing tax strategies to reduce liabilities and maximize savings.",
    },
    {
      question: "Do you only serve clients in Australia?",
      answer:
        "While we are based in Australia, we may assist international clients depending on their financial needs. Contact us to discuss how we can help.",
    },
    {
      question: "How often should I review my financial plan?",
      answer:
        "We recommend reviewing your financial plan at least once a year or whenever you experience major life changes, such as buying a home, changing jobs, or starting a business.",
    },
    {
      question:
        "Why should I choose Thriving Capital over other financial advisory firms?",
      answer:
        "We provide expert financial guidance, comprehensive wealth management, and a personalized approach to ensure your financial success. Our team is dedicated to helping you achieve long-term stability and growth.",
    },
  ];

  return (
    <>
      <style>{`
        .faq-accordion .accordion-item {
          border: 1px solid #334155;
          background: #1a2332;
          border-radius: 0;
          margin-bottom: 1rem;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .faq-accordion .accordion-item:hover {
          transform: translateY(-2px);
        }

        .faq-accordion .accordion-button {
          background: #1a2332;
          color: #f8fafc;
          font-weight: 600;
          font-size: 1.1rem;
          padding: 1.5rem 1.75rem;
          border: none;
          transition: all 0.3s ease;
        }

        .faq-accordion .accordion-button:not(.collapsed) {
          background: #0f172a;
          color: #f59e0b;
          box-shadow: none;
          border-bottom: 1px solid #64748b;
        }

        .faq-accordion .accordion-button:focus {
          box-shadow: none;
          border: none;
        }

        .faq-accordion .accordion-button::after {
          filter: ${(props) =>
            props.collapsed ? "none" : "brightness(0) invert(1)"};
        }

        .faq-accordion .accordion-body {
          padding: 1.5rem 1.75rem;
          font-size: 1rem;
          line-height: 1.7;
          color: #cbd5e1;
          background: #1a2332;
        }

        .faq-accordion .accordion-button:not(.collapsed)::after {
          filter: brightness(0) saturate(100%) invert(66%) sepia(61%) saturate(549%) hue-rotate(356deg) brightness(103%) contrast(96%);
        }
      `}</style>

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
              Frequently Asked Questions
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
              Find answers to common questions about our services
            </p>
          </motion.div>
        </Container>
      </div>

      {/* FAQ Content */}
      <Container style={{ marginTop: "5rem", marginBottom: "5rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion className="faq-accordion">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                <Accordion.Item eventKey={idx.toString()}>
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body>{faq.answer}</Accordion.Body>
                </Accordion.Item>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </Container>
    </>
  );
};

export default FAQ;
