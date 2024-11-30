import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import kopiImage from '../img/kopi.jpg';

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, [user, navigate]);

  return (
    <div className="dashboard">
      <section
        className="hero vh-100 d-flex flex-column justify-content-center align-items-center text-white"
        style={{
          backgroundImage: `url(${kopiImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          className="hero-overlay position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        ></div>
        <div className="hero-content text-center" style={{ zIndex: 2 }}>
          <h1 data-aos="fade-right">Welcome to EconoMinds 📚</h1>
          <div
            className="join-us-message mt-3"
            data-aos="fade-up"
            style={{
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            <p>
              📈 Tingkatkan pemahamanmu tentang dunia ekonomi melalui materi 
              berkualitas dan pengalaman belajar yang menyenangkan bersama EconoMinds.  
              🚀 Mari jelajahi konsep-konsep menarik yang akan membuka wawasanmu!
            </p>
          </div>
          <Link
            to="/materi"
            className="btn btn-outline-light explore-button mt-3"
            aria-label="Explore Mata Pelajaran"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            🌟 Explore Mata Pelajaran
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Dashboard;
