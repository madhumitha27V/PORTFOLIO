import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  // EmailJS configuration from environment variables or fallback
  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_ma6jzlj';
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_sykfpfn';
  const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '3F0TrdMjykpNA4fMT';

  // Initialize EmailJS with better error handling
  useEffect(() => {
    try {
      emailjs.init(EMAILJS_PUBLIC_KEY);
      console.log('EmailJS initialized successfully');
      console.log('Using Service ID:', EMAILJS_SERVICE_ID);
    } catch (error) {
      console.error('EmailJS initialization failed:', error);
    }
  }, [EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID]);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Basic form validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
      return;
    }
    
    try {
      console.log('🚀 Starting email send process...');
      console.log('Environment:', process.env.NODE_ENV);
      console.log('Current URL:', window.location.origin);
      console.log('Service ID:', EMAILJS_SERVICE_ID);
      console.log('Template ID:', EMAILJS_TEMPLATE_ID);
      console.log('Public Key:', EMAILJS_PUBLIC_KEY);
      
      // Prepare template parameters
      const templateParams = {
        from_name: formData.fullName.trim(),
        from_email: formData.email.trim(),
        message: formData.message.trim(),
        to_name: 'Madhumitha', // Add recipient name
        reply_to: formData.email.trim()
      };
      
      console.log('📧 Template params:', templateParams);
      
      // Test EmailJS availability
      if (typeof emailjs === 'undefined') {
        throw new Error('EmailJS is not loaded');
      }
      
      console.log('📤 Sending email via EmailJS...');
      
      // Send email using EmailJS - simplified version for production
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('✅ EmailJS result:', result);
      console.log('Status:', result.status);
      console.log('Text:', result.text);

      if (result.status === 200) {
        console.log('🎉 Email sent successfully!');
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({ fullName: '', email: '', message: '' });
        
        setTimeout(() => {
          setSubmitStatus('');
        }, 5000);
      } else {
        console.error('❌ Email send failed with status:', result.status);
        throw new Error(`Failed to send email. Status: ${result.status}`);
      }
    } catch (error) {
      console.error('💥 Email sending failed:');
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
      
      // Check for specific EmailJS errors
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        console.error('🌐 Network/CORS issue detected');
      }
      if (error.status) {
        console.error('HTTP Status:', error.status);
      }
      if (error.text) {
        console.error('Response text:', error.text);
      }
      
      setIsSubmitting(false);
      setSubmitStatus('error');
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <h2>Contact</h2>
          <p>Get in Touch with me</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>Click below to send me an email</p>
                <a href="mailto:madhumithaportfolio0913@gmail.com" className="contact-link">
                  Send Message
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <i className="fab fa-linkedin"></i>
              </div>
              <div className="contact-details">
                <h3>LinkedIn</h3>
                <p>Madhumitha.linkedin.com</p>
                <a href="https://www.linkedin.com/in/madhhv/" target="_blank" rel="noopener noreferrer" className="contact-link">
                  Connect
                </a>
              </div>
            </div>

            <div className="resume-download">
              <a href="https://drive.google.com/uc?export=download&id=1aubukplWxVxAGYtDplntR5OXDqHnvIW6" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <i className="fas fa-download"></i>
                Download Resume
              </a>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Id</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message Here</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Enter your message"
                  rows="6"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Message me
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="submit-status success">
                  <i className="fas fa-check-circle"></i>
                  Email sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="submit-status error">
                  <i className="fas fa-exclamation-circle"></i>
                  Failed to send email. Please try again or contact me directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;