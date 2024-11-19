import React, { useEffect } from "react";
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
        <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}></div>
        <div className="hero-content text-center z-1" style={{ zIndex: 2 }}>
          <h1 data-aos="fade-right">Welcome to Econominds</h1>
          <p className="subtext" data-aos="fade-up">
            untuk siswa SMK N 1 Siborongborong
          </p>
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
            {[
              {
                title: "Home",
                img: "/pict/home.jpg",
                description: "Beranda utama dengan informasi penting tentang mata pelajaran Ekonomi.",
                path: "/dashboard",
                delay: 400,
              },
              {
                title: "Materi",
                img: "/pict/materi.jpg",
                description: "Akses materi pelajaran Ekonomi yang lengkap untuk membantu memahami konsep-konsep ekonomi.",
                path: "/materi",
                delay: 600,
              },
              {
                title: "Tugas",
                img: "/pict/tugas.jpg",
                description: "Kerjakan dan kumpulkan tugas ekonomi yang diberikan oleh guru.",
                path: "/tugas",
                delay: 800,
              },
              {
                title: "Quiz",
                img: "/pict/quiz.jpg",
                description: "Ikuti quiz untuk menguji pemahamanmu tentang materi ekonomi.",
                path: "/quiz",
                delay: 1000,
              },
              {
                title: "Pengumuman",
                img: "/pict/pengumuman.jpg",
                description: "Lihat pengumuman terkait mata pelajaran Ekonomi.",
                path: "/pengumuman",
                delay: 1200,
              },
              {
                title: "Diskusi",
                img: "/pict/diskusi.jpg",
                description: "Bergabunglah dalam forum diskusi untuk berbagi ide dan bertanya tentang materi ekonomi.",
                path: "/forum-diskusi",
                delay: 1400,
              },
            ].map((item, idx) => (
              <div
                className="col-md-4"
                key={idx}
                data-aos="fade-up"
                data-aos-delay={item.delay}
              >
                <div className="card shadow bg-light">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <a href={item.path} className="btn btn-primary">
                      Lihat {item.title}
                    </a>
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
            <div className="col-md-4">
              <h3>
                Econominds<span className="text-warning">.</span>
              </h3>
              <p>
                Di antara sekian banyak ilmu menuju sukses, maka ilmu mengelola risiko harus diutamakan agar kita tahu beda investasi dan berjudi.
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
              <p>SMK N 1 SBB, Pohan Tongatonga</p>
              <p>Email: info@example.com</p>
              <p>Phone: 0822 7642 3194</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Dashboard;
