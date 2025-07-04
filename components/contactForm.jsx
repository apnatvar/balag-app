import React from "react";

export default function ContactForm({ isFormVisible, onClose }) {
  if (!isFormVisible) return null;

  return (
    <div className="form-overlay">
        <div className="form-container">
          <button className="close-button" onClick={onClose}>x</button>
          <h2>Request a Callback</h2>
          <form id="contact-form">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" placeholder="Your Name" required />

              <label htmlFor="whatsapp">WhatsApp Number</label>
              <input type="tel" name="whatsapp" id="whatsapp" placeholder="+91XXXXXXXXXX" required />

              <label htmlFor="email">Email ID</label>
              <input type="email" name="email" id="email" placeholder="you@example.com"/>

              <label className="checkbox-label">
              <input type="checkbox" name="consent" value="Yes" required />
              I consent to being contacted at the Pho No/ email provided.
              </label>

              <button className="submit-button" type="submit">Send</button>
          </form>

          <p className="response-message">this needs updating</p>
        </div>
    </div>
  );
}
