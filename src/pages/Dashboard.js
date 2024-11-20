import React, { useEffect } from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";

function Dashboard() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="dashboard">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="hero vh-100 d-flex flex-column justify-content-center align-items-center text-white"
        style={{
          backgroundImage: "url('/kopi.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          className="hero-overlay position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        ></div>
        <div className="hero-content text-center z-1" style={{ zIndex: 2 }}>
          <h1 data-aos="fade-right">Welcome to Econominds</h1>
          <p className="subtext" data-aos="fade-up">
            untuk siswa SMK N 1 Siborongborong
          </p>
          {/* Link to Materi.js with AOS effect */}
          <Link
            to="/materi"
            className="btn btn-outline-light explore-button"
            aria-label="Explore Mata Pelajaran"
            data-aos="zoom-in"  // Add AOS effect here
            data-aos-delay="500"  // Optional delay for the animation
          >
            Explore Mata Pelajaran
          </Link>
        </div>
      </section>

      {/* Explore Section */}
      <section className="explore py-5 bg-dark text-white">
        <div className="container">
          <div className="text-center mb-5">
            <h1 data-aos="fade-up">Explore Mata Pelajaran Ekonomi</h1>
            <p data-aos="fade-up" className="mt-3">
              Mata pelajaran Ekonomi di SMK N 1 Siborongborong berfokus pada
              pengembangan pemahaman ekonomi yang aplikatif di dunia nyata, untuk
              mempersiapkan siswa menghadapi tantangan dunia usaha dan industri.
            </p>
          </div>
          <div className="row g-4">
            {/* Item Mapping Code */}
            {[ 
              {
                title: "Pengenalan Ekonomi",
                img: "/kopi.jpg",
                description:
                  "Ekonomi adalah ilmu yang mempelajari bagaimana individu dan masyarakat membuat keputusan untuk menggunakan sumber daya yang terbatas.",
                delay: 400,
              },
              {
                title: "Permintaan dan Penawaran",
                img: "/kopi.jpg",
                description:
                  "Pemahaman tentang hukum permintaan dan penawaran sangat penting untuk memahami bagaimana harga barang dan jasa ditentukan di pasar.",
                delay: 600,
              },
              {
                title: "Peran Pemerintah dalam Ekonomi",
                img: "/kopi.jpg",
                description:
                  "Pemerintah memainkan peran yang sangat penting dalam perekonomian, mulai dari regulasi pasar hingga penyediaan barang publik.",
                delay: 800,
              },
              {
                title: "Teori Produksi",
                img: "/kopi.jpg",
                description:
                  "Teori produksi membahas tentang cara-cara untuk memaksimalkan hasil produksi dengan menggunakan berbagai faktor produksi secara efisien.",
                delay: 1000,
              },
              {
                title: "Investasi dan Tabungan",
                img: "/kopi.jpg",
                description:
                  "Investasi adalah penanaman modal dalam jangka panjang untuk menghasilkan keuntungan, sementara tabungan adalah keputusan untuk menyisihkan sebagian pendapatan untuk masa depan.",
                delay: 1200,
              },
              {
                title: "Makroekonomi",
                img: "/kopi.jpg",
                description:
                  "Makroekonomi mempelajari perekonomian secara keseluruhan, termasuk inflasi, pengangguran, dan pertumbuhan ekonomi.",
                delay: 1400,
              },
            ].map((item, idx) => (
              <div
                className="col-md-4"
                key={idx}
                data-aos="fade-up"
                data-aos-delay={item.delay}
              >
                <div className="proj-imgbx">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="card-img-top"
                  />
                  <div className="proj-txtx">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-dark text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-duration="1200">
              <h3>
                Econominds<span className="text-warning">.</span>
              </h3>
              <p>
                Di antara sekian banyak ilmu menuju sukses, maka ilmu mengelola
                risiko harus diutamakan agar kita tahu beda investasi dan berjudi.
              </p>
            </div>
            <div className="col-md-4">
              <h4>Support</h4>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white">Facebook</a></li>
                <li><a href="#" className="text-white">Terms and Conditions</a></li>
                <li><a href="#" className="text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-white">Contact Us</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4>Address</h4>
              <p><strong>Address:</strong> SMK N 1 SBB, Pohan Tongatonga, 2024, Indonesia</p>
              <p><strong></strong> aldinababan96@gmail.com</p>
              <p><strong></strong> immanuellumbantoruan18@gmail.com</p>
              <p><strong></strong> permaisimangunsong@gmail.com</p>
              <p><strong></strong> depedrompane@gmail.com</p>
              <p><strong></strong> 0822 7642 3194</p>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer_bar text-center bg-dark text-white py-2">
        ©2024 | Created by{" "}
        <span className="text-warning fw-bold">Econominds</span>
      </div>
    </div>
  );
}

export default Dashboard;