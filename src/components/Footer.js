import React, { useState } from 'react';
import axios from 'axios';
import './Footer.css'
const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Update the URL with your backend API endpoint
      await axios.post('/routes/contact', formData);
      setResponseMessage('Thank you for contacting us!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setResponseMessage('Something went wrong. Please try again later.');
      console.error('Contact form error:', error.message);
    }
  };

  return React.createElement(
    'footer',
    { className: 'footer' },
    React.createElement(
      'div',
      { className: 'container footer-content' },
      // Social Icons
      React.createElement(
        'div',
        { className: 'social-icons' },
        React.createElement(
          'a',
          {
            href: 'https://facebook.com',
            target: '_blank',
            rel: 'noopener noreferrer',
            'aria-label': 'Facebook',
          },
          React.createElement('i', { className: 'fab fa-facebook-f' })
        ),
        React.createElement(
          'a',
          {
            href: 'https://instagram.com',
            target: '_blank',
            rel: 'noopener noreferrer',
            'aria-label': 'Instagram',
          },
          React.createElement('i', { className: 'fab fa-instagram' })
        )
      ),
      // Contact Form
      React.createElement(
        'form',
        { className: 'contact-form ', onSubmit: handleSubmit },
        React.createElement('h4', null, 'Contact Me'),
        React.createElement('input', {
          type: 'email',
          name: 'email', // Updated to match formData key
          placeholder: 'Your Email',
          value: formData.email, // Access from formData
          onChange: handleChange, // Unified handleChange function
          required: true,
        }),
        React.createElement('textarea', {
          name: 'message', // Updated to match formData key
          placeholder: 'Your Message',
          value: formData.message, // Access from formData
          onChange: handleChange, // Unified handleChange function
          required: true,
        }),
        React.createElement('button', { type: 'submit' }, 'Send')
      ),
      // Address
      React.createElement(
        'div',
        { className: 'footer-address' },
        React.createElement('p', null, 'Address: Ben Gurion 23, Ashkelon, Israel')
      ),
      // Copyright
      React.createElement(
        'div',
        { className: 'footer-copyright' },
        React.createElement(
          'p',
          null,
          'NataliaUnic Leibo ~ 2024 All rights reserved.'
        )
      )
    )
  );
};

export default Footer;
