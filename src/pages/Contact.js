import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact-page">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">EconoMinds</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link className="nav-link" to="/ekonomi-sejarah" data-aos="fade-down">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" data-aos="fade-down">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
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
                placeholder="Hi Ganteng....."
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
          <p>081265455903</p>
          <p> aldinababan96@gmail.com</p>
          <p> immanuellumbantoruan18@gmail.com</p>
          <p> permaisimangunsong@gmail.com</p>
          <p> depedrompane@gmail.com</p>
          <div className="social-icons">
            <a href="#" className="social-icon">LinkedIn</a>
            <a href="#" className="social-icon">Twitter</a>
            <a href="#" className="social-icon">Facebook</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
