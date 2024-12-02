import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">
          Hubungi email di bawah untuk info lebih lanjut.
        </p>
      </header>

      <div className="contact-content">
        <div className="message-form">
          <h2 className="form-title">Send us a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="" required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" placeholder="  " />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Send Messages....."
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="form-submit">
              <span className="send-icon">➤</span>
            </button>
          </form>
        </div>

        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Jl. Sisingamangaraja, Tapanuli Utara, Sumatera Utara</p>
          <p>082276423194</p>
          <p> aldinababan96@gmail.com</p>
          <p> immanuellumbantoruan18@gmail.com</p>
          <p> permaisimangunsong@gmail.com</p>
          <p> depedrompane@gmail.com</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/" className="social-icon">LinkedIn</a>
            <a href="https://x.com/?lang=en-id" className="social-icon">Twitter</a>
            <a href="https://www.facebook.com/" className="social-icon">Facebook</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
