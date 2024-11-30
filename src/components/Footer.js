import React from "react";
import "aos/dist/aos.css";
import './Footer.css'; // Pastikan untuk mengimpor file CSS

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="container py-5">
        <div className="row">
          <div
            className="col-md-4 mb-4"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            <h3>Econominds</h3>
            <p>
              Di antara sekian banyak ilmu menuju sukses, maka ilmu mengelola
              risiko harus diutamakan agar kita tahu beda investasi dan berjudi.
            </p>
          </div>

          <div
            className="col-md-4"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            <h4>Support</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="support-link">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="support-link">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="support-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="support-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div
            className="col-md-4"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            <h4>Address</h4>
            <p>
              <strong>Address:</strong> SMK N 1 SBB, Pohan Tongatonga, 2024,
              Indonesia
            </p>
            <p>
              <strong>Email:</strong> 
              <br />
              <a href="mailto:info@econominds.com" className="email-link">
                info@econominds.com
              </a>
            </p>
            <p>
              <strong>Team Contacts:</strong>
            </p>
            <ul className="list-emails">
              <li>
                <a href="mailto:aldinababan96@gmail.com" className="email-link">
                  aldinababan96@gmail.com
                </a>
              </li>
              <li>
                <a href="mailto:immanuellumbantoruan18@gmail.com" className="email-link">
                  immanuellumbantoruan18@gmail.com
                </a>
              </li>
              <li>
                <a href="mailto:permaisimangunsong@gmail.com" className="email-link">
                  permaisimangunsong@gmail.com
                </a>
              </li>
              <li>
                <a href="mailto:depedrompane@gmail.com" className="email-link">
                  depedrompane@gmail.com
                </a>
              </li>
            </ul>
            <p>
              <strong>Phone:</strong> 0822 7642 3194
            </p>
          </div>

        </div>
      </div>

      <div className="footer_bar text-center bg-dark text-white py-2">
        ©2024 | Created by{" "}
        <span className="text-warning fw-bold">Econominds</span>
      </div>
    </footer>
  );
};

export default Footer;