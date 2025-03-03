import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = "+94773612339"; // Replace with your actual WhatsApp business number
  
  return (
    <a 
      href={`https://wa.me/${phoneNumber}`} 
      className="whatsapp-button" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <i className="bi bi-whatsapp" style={{ fontSize: "1.5rem" }}></i>
    </a>
  );
};

export default WhatsAppButton;