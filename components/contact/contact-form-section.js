"use client";
import React from "react";

export default function ContactFormSection() {
  return (
    <div className="fugu--contact-form-section">
      <div className="container">
        <div className="fugu--default-content content-sm">
          <h2>Get in Touch</h2>
          <p>Feel free to reach out to us using the form below.</p>
        </div>
        <form data-testid="contact-form" className="fugu--contact-form">
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" />
            </div>
            <div className="col-md-6">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" />
            </div>
            <div className="col-12">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Your Message"></textarea>
            </div>
            <div className="col-12">
              <button type="submit">Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
