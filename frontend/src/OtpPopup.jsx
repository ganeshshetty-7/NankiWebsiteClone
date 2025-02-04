import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OtpPopup.css';

const OtpPopup = ({ onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = () => {
    console.log(`OTP sent to +91 ${phoneNumber}`);
    setOtpSent(true);
  };

  const handleTermsClick = () => {
    navigate('/terms-and-conditions');
  };

  return (
    <div className="otp-popup">
      <div className="otp-popup-content">
        <div className="header">
          <h2>Sign In</h2>
         <span> <button className="close-button" onClick={onClose} title="Close">
            <span>&times;</span>
          </button></span>
        </div>
        <div className="phone-input">
          <span>+91</span>
          <input
            type="text"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <button onClick={handleSendOtp}>Send OTP</button>
        {otpSent && <p>OTP has been sent to +91 {phoneNumber}!</p>}
        <p>
          By continuing, you agree to our company's <span className="terms-link" onClick={handleTermsClick}>Terms and Conditions</span> and <span className="terms-link" onClick={handleTermsClick}>Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default OtpPopup;
