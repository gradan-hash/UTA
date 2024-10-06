import  { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been sent successfully!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="contact-section">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">
        If you have any questions, feel free to reach out to us via the form below, or through our email and phone contact information.
      </p>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name" className="contact-label">Full Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="contact-input"
          required
        />

        <label htmlFor="email" className="contact-label">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="contact-input"
          required
        />

        <label htmlFor="subject" className="contact-label">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="contact-input"
          required
        />

        <label htmlFor="message" className="contact-label">Message:</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="contact-textarea"
          required
        />

        <button type="submit" className="contact-button">Send Message</button>
      </form>

      {/* Contact Information */}
      <div className="contact-info">
        <h2>Our Contact Information</h2>
        <p>Email: <a href="mailto:conference@example.com">conference@example.com</a></p>
        <p>Phone: <a href="tel:+123456789">+1 234 567 89</a></p>
        <h2>Conference Location</h2>
        <p>123 Conference Blvd, Research City, RC 45678</p>

        {/* Map Embed Simulation */}
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8277192103815!2d144.96296121581613!3d-37.80823317975164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6433fa4f778dd%3A0x5045675218ce7e0!2sVictoria%20University!5e0!3m2!1sen!2sus!4v1632937593516!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          title="Conference Location Map"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
