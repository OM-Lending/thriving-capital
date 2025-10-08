import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { motion } from "framer-motion";

const ContactPage = () => {
  // State for the form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  // State for form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  // Handle form field changes
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = { name, email, message };

    try {
      // POST request to backend (replace with your backend URL)
      const response = await fetch('https://backend-teal-pi.vercel.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('Your message has been sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setFormStatus('There was an error. Please try again later.');
      }
    } catch (error) {
      setFormStatus('There was an error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container className="py-5">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-4"
      >
        <h1 className="fw-bold">Contact Us</h1>
        <p className="lead">Get in touch with our financial experts today!</p>
      </motion.div>

      <Row>
        {/* Contact Details */}
        <Col md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-4 bg-light rounded shadow-sm"
          >
            <h3>Connect with Us</h3>
            <p>📍 <strong>Visit Us:</strong> Level 4, 162 Macquarie St, Hobart TAS 7000</p>
            <p>📧 <strong>Email:</strong> <a href="mailto:admin@thrivingcapitalgroup.com">admin@thrivingcapitalgroup.com</a></p>
            <p>📞 <strong>Phone:</strong> <a href="tel:1300926880">1300 926 880</a></p>
            <p>⏳ <strong>Business Hours:</strong></p>
            <ul>
              <li>Monday – Friday: 9:00 AM – 5:00 PM</li>
              <li>Saturday & Sunday: Closed</li>
            </ul>
          </motion.div>
        </Col>

        {/* Contact Form */}
        <Col md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-4 bg-light rounded shadow-sm"
          >
            <h3>Book a Consultation</h3>

            {/* Alert showing status of form submit*/}
            {formStatus && (
            <Alert variant={formStatus.includes('success') ? 'success' : 'danger'}>
              {formStatus}
            </Alert>
            )}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your full name" value={name} onChange={handleNameChange} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="How can we assist you?" value={message} onChange={handleMessageChange} required />
              </Form.Group>

              <Button variant="success" type="submit" className="w-100" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Submit'}</Button>
            </Form>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;