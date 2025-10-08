import React from "react";
import bgImage from "../assets/tBack4.jpg"; 
import { ContactUsButton } from "../assets/ContactUsButton.js";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const typewriterText = "YYour Trusted Financial Advisors in Australia";
const typingSpeed = 100; // Speed in ms per character

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const AboutPage = () => {
  return (
    <Container className="my-5">
      {/* Background Image Section */}
      <div className="about-bg text-center p-5">
        <h1 className="fw-bold">About Us</h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Typewriter text={typewriterText} speed={typingSpeed} />
        </motion.p>
      </div>

      {/* About Content Section */}
      <Row className="mt-4">
        <Col md={6}>
          <motion.div variants={fadeIn} initial="hidden" animate="visible">
            <Image src={bgImage} alt="Financial Planning" fluid rounded />
          </motion.div>
        </Col>
        <Col md={6}>
          <motion.div variants={fadeIn} initial="hidden" animate="visible">
            <h2 className="fw-bold">Who We Are</h2>
            <p>
              At Thriving Capital, we are committed to helping individuals and businesses make 
              informed financial decisions with confidence. As a leading financial services 
              company in Australia, we provide strategic financial planning, tax advisory 
              services, and wealth management solutions tailored to your unique needs.
            </p>
            <p>
              Whether you need expert financial advisory, tax planning, or wealth management, 
              we are ready to guide you on your path to success.
            </p>

            {/* Rotating Button Animation */}
            <motion.div
              initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: 2.0, ease: "easeOut" }}
            >
              <Link to="/contact">
              <Button variant="success" href="/contact">Get Financial Advice</Button>
              </Link>
            </motion.div>
          </motion.div>
        </Col>
      </Row>

      {/* Mission & Expertise Section */}
      <motion.div variants={staggerContainer} initial="hidden" animate="visible">
        <Row className="mt-5 text-center">
          <Col>
            <motion.h2 variants={fadeIn} className="fw-bold">Our Mission</motion.h2>
            <motion.p variants={fadeIn}>
              We empower our clients with the right financial tools and knowledge to achieve 
              long-term financial stability and success.
            </motion.p>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={4} className="text-center">
            <motion.div variants={fadeIn}>
              <h4>✔️ Financial Advisory</h4>
              <p>Smart money management tailored to your unique goals.</p>
            </motion.div>
          </Col>
          <Col md={4} className="text-center">
            <motion.div variants={fadeIn}>
              <h4>✔️ Investment Planning</h4>
              <p>Expert insights to help grow your wealth.</p>
            </motion.div>
          </Col>
          <Col md={4} className="text-center">
            <motion.div variants={fadeIn}>
              <h4>✔️ Tax Strategies</h4>
              <p>Maximize returns while ensuring compliance.</p>
            </motion.div>
          </Col>
        </Row>
      </motion.div>

      {/* Contact Section */}
      <motion.div variants={fadeIn} initial="hidden" animate="visible">
        <Row className="mt-5 text-center">
          <Col>
            <h3>🚀 Secure your financial future today!</h3>
            <p>📞 Call us at <strong>1300 926 880</strong> for expert financial advice.</p>
            <ContactUsButton/>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
};

const Typewriter = ({ text, speed }) => {
  const [displayText, setDisplayText] = React.useState("");

  React.useEffect(() => {
    let i = 0;
    setDisplayText(""); // Reset before starting

    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i)); // Use `charAt(i)` to avoid undefined values
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]); // Ensuring effect re-runs correctly

  return <span>{displayText}</span>;
};


export default AboutPage;