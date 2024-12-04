import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css"; 

const Contact = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000    
    });
  }, []);

  return (
    <div className="contact-page">
      <header className="contact-header" data-aos="fade-down">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">
          Hubungi email di bawah untuk info lebih lanjut.
        </p>
      </header>

      <div className="contact-content" data-aos="fade-up">
        <div className="background-text">Contact</div>
        <div className="message-form" data-aos="fade-right">
          <h2 className="form-title">Send us a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" placeholder="  " />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Send Messages....." rows="5"></textarea>
            </div>

            <button type="submit" className="form-submit">
              <span className="send-icon">➤</span>
            </button>
          </form>
        </div>

        <div className="contact-info" data-aos="fade-left">
          <h2>Contact Information</h2>
          <p>Jl. Sisingamangaraja, Tapanuli Utara, Sumatera Utara</p>
          <p><a href="https://wa.me/qr/2WBB2XPDF6FOE1 " className="contact-link">0821 8113 7988 (WhatsApp)</a></p>
          <p><a href="mailto:aldinababan96@gmail.com" className="contact-link">aldinababan96@gmail.com</a></p>
          <p><a href="mailto:immanuellumbantoruan18@gmail.com" className="contact-link">immanuellumbantoruan18@gmail.com</a></p>
          <p><a href="mailto:permaisimangunsong@gmail.com" className="contact-link">permaisimangunsong@gmail.com</a></p>
          <p><a href="mailto:depedrompane@gmail.com" className="contact-link">depedrompane@gmail.com</a></p>
          <div className="social-icons">
            <a href="https://youtube.com/@aldinababan96?si=_uomtJtJJaQwyHnk" className="social-icon">Youtube</a>
            <a href="https://www.instagram.com/immanueell_ell/profilecard/?igsh=MXE1empyampwMGhyZw==" className="social-icon">Instagram</a>
            <a href="https://www.facebook.com/aldinababan333?mibextid=ZbWKwL" className="social-icon">Facebook</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
