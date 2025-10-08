import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import advisoryImage from "../assets/t1.jpg";
import investmentImage from "../assets/t2.jpg";
import taxImage from "../assets/t3.jpg";
import bgImage from "../assets/ThrBack.jpg"; 
import whyUs from "../assets/whyus.jpg"; 
import { LearnMoreButton } from "../assets/LearnMoreButton.js";
import { ContactUsButton } from "../assets/ContactUsButton.js";
import { motion } from "framer-motion";

function HomePage() {
    return (
      <>
        {/* Background Image Section */}
          <div 
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "400px", // Adjust height as needed
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              position: "relative",
              color: "white"
            }}
          >
            {/* Semi-transparent overlay for better text readability */}
            <div 
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay with transparency
                zIndex: 1
              }}
            ></div>

            {/* Text Content Over Image */}
            <div 
              style={{
                position: "relative",
                zIndex: 2,
                padding: "20px",
                maxWidth: "80%"
              }}
            >
              <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "10px" }}>
              – Thriving Capital –
              </h1>
              <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "10px" }}>
                Your Trusted Financial Advisors
              </h2>
              <ContactUsButton/>
            </div>
          </div>
          <motion.div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center", // optional: for vertical centering
              textAlign: "center"
            }}
          ><motion.p
              style={{ display: "inline-block", fontSize: "1.2rem", fontWeight: "bold", color: "#28a745"}}
            >
              Providing tailored wealth management, tax planning, and investment strategies 
              to help you secure your financial future.
            </motion.p>
            </motion.div>
          
        {/* Services Section */}
        <Container className="my-5">
          <h2 className="text-center fw-bold">Our Services</h2>
          <Row className="mt-4">
            {/* Financial Advisory Card */}
            <Col md={4}>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Card className="service-card">
                  <Card.Img variant="top" src={advisoryImage} />
                  <Card.Body>
                    <Card.Title>Financial Advisory</Card.Title>
                    <Card.Text>Expert guidance on budgeting, savings, and investments.</Card.Text>
                    <LearnMoreButton targetPage="/financial-advisory"/>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>

            {/* Investment Services Card */}
            <Col md={4}>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Card className="service-card">
                  <Card.Img variant="top" src={investmentImage} />
                  <Card.Body>
                    <Card.Title>Investment Services</Card.Title>
                    <Card.Text>Wealth-building strategies to maximize returns and minimize risks.</Card.Text>
                    <LearnMoreButton targetPage="/investment-services"/>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>

            {/* Tax Accounting Card */}
            <Col md={4}>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Card className="service-card">
                  <Card.Img variant="top" src={taxImage} />
                  <Card.Body>
                    <Card.Title>Tax Accounting</Card.Title>
                    <Card.Text>Comprehensive tax planning to reduce liabilities.</Card.Text>
                    <LearnMoreButton targetPage="/tax-accounting"/>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
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
           <Card className="shadow-lg">
             <Card.Body className="p-4">
               <Row className="align-items-center">
                 {/* Text Section - Left */}
                 <Col md={6} className="px-4">
                   <h2>Why Choose Thriving Capital?</h2>
                   <ul className="list-unstyled">
                     <li>✅ Expert Financial Guidance – Make smart financial decisions.</li>
                     <li>✅ Comprehensive Wealth Management – From investments to tax planning.</li>
                     <li>✅ Personalized Approach – Tailored solutions for your financial goals.</li>
                   </ul>
                 </Col>

                 {/* Image Section - Right */}
                 <Col md={6} className="text-center">
                   <Card.Img src={whyUs} alt="Why Choose Us" className="w-100 rounded" />
                 </Col>
               </Row>
             </Card.Body>
           </Card>
         </Container>
      </motion.section>
        

        {/* Call-to-Action Section */}
        <Container className="text-center my-5">
          <h3>🚀 Start Your Journey to Financial Success!</h3>

          <ContactUsButton/>

          <div style={{ overflow: "hidden", whiteSpace: "nowrap", width: "100%" }}>
            <motion.p
              style={{ display: "inline-block", fontSize: "1.2rem", fontWeight: "bold", color: "#28a745" }}
              animate={{ x: ["100%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            >
              Contact us today for a consultation and take control of your financial future.
            </motion.p>
          </div>
        </Container>
      </>
    );
  }
  
  export default HomePage;