import React, { useState } from 'react';
import './ContactPage.css';  // Add your styles in ContactPage.css

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <h2 className="page-title">Contact Us</h2>

      {/* Contact Information */}
      <div className="contact-info">
        <h3>Our Contacts</h3>
        <p><strong>Email:</strong> dmurangiri92@gmail.com</p>
        <p><strong>Phone:</strong> +254 701 152 721</p>
        <p><strong>Address:</strong> Dens Tech Kenya, Mama Ngina Street, Embu, Kenya</p>
      </div>

      {/* Leave a Message Form */}
      <div className="contact-form">
        <h3>Leave a Message</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
