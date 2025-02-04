const express = require('express');
const twilio = require('twilio');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

const app = express();

// Enable CORS for all routes
app.use(cors()); 

// Use express JSON parser for incoming request
app.use(express.json()); 

// Twilio credentials (stored in environment variables for security)
const accountSid = process.env.TWILIO_ACCOUNT_SID; 
const authToken = process.env.TWILIO_AUTH_TOKEN;  
const client = new twilio(accountSid, authToken);

// Function to send SMS
const sendSms = (phoneNumber, message) => {
  // Validate phone number format
  const formattedPhoneNumber = formatPhoneNumber(phoneNumber);
  if (!formattedPhoneNumber) {
    throw new Error('Invalid phone number format.');
  }

  return client.messages.create({
    body: message,
    from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio phone number
    to: formattedPhoneNumber,
  });
};

// Helper function to format phone number to E.164 format
const formatPhoneNumber = (phoneNumber) => {
  // Ensure phone number starts with '+91' for Indian numbers
  if (!phoneNumber.startsWith('+91')) {
    return null;  // Invalid if it doesn't start with '+91'
  }
  return phoneNumber;
};

// Endpoint to send SMS
app.post('/send-sms', async (req, res) => {
  const { phoneNumber, message } = req.body;

  try {
    await sendSms(phoneNumber, message);
    res.status(200).send('SMS sent successfully');
  } catch (error) {
    console.error('Error sending SMS:', error);
    res.status(500).send('Failed to send SMS: ' + error.message);
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
