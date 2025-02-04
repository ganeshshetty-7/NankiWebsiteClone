import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUpForm.css';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    locality: '',
    landmark: '',
    address: '',
    pincode: '',
    city: '',
    state: '',
    password: '',
    phoneNumber: '', // Add phone number state
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate phone number format for India (must start with +91 and have exactly 10 digits)
    const phoneNumber = formData.phoneNumber;
    const phoneRegex = /^\+91\d{10}$/;  // India-specific validation
    if (!phoneRegex.test(phoneNumber)) {
      alert('Invalid phone number format. Please use +91 followed by 10 digits.');
      return;
    }
  
    // Prepare message with the username
    const message = `Hello ${formData.username}, ThankYou For Reaching to Us ❤️😊`;
  
    // Send SMS request to backend
    try {
      const response = await fetch('http://localhost:5000/send-sms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber: formData.phoneNumber,
          message: message, // Dynamic message including the username
        }),
      });
  
      if (response.ok) {
        console.log('Message sent successfully');
      } else {
        console.error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="phoneNumber">Mobile Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            placeholder="Enter phone number with country code (+91)"
          />
        </div>

        <label>Email Address</label>
        <input type="email" required />

        <label>Address</label>
        <input type="text" required />

        <label className="optional">Locality / Area</label>
        <input type="text" />

        <label className="optional">Landmark</label>
        <input type="text" />

        <button type="submit">Submit</button>
      </form>

      <p>
        Already have an account? 
        <Link to="/login-form" style={{ color: '#4CAF50', textDecoration: 'none', fontWeight: 'bold' }}>Login here</Link>
      </p>
    </div>
  );
};

export default SignUpForm;
