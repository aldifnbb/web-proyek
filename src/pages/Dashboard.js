import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Navbar from "../components/Navbar";

function Dashboard() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="dashboard">
      <Navbar />
      <section
        className="home vh-100 d-flex flex-column justify-content-center align-items-center bg-dark text-white"
        style={{ paddingTop: "10vh" }}
      >
        <h1 data-aos="fade-right">Mata Pelajaran Ekonomi</h1>
        <p data-aos="fade-left">Kelas 10 SMK N 1 Siborongborong</p>
        <div className="logoo mt-3" data-aos="flip-up">
          <img
            src="/logo.webp"
            alt="Logo"
            className="rounded-circle img-thumbnail"
            style={{ width: "250px", height: "250px" }}
          />
        </div>
      </section>

    <section className="explore py-5 bg-dark text-white">
    <div className="container">
        <div className="text-center mb-5">
        <h1 data-aos="fade-up">Explore Mata Pelajaran Ekonomi</h1>
        <p data-aos="flip-up" className="mt-3">
            Mata pelajaran Ekonomi di SMK N 1 Siborongborong berfokus pada
            pengembangan pemahaman ekonomi yang aplikatif di dunia nyata, untuk
            mempersiapkan siswa menghadapi tantangan dunia usaha dan industri.
        </p>
        </div>
        <div className="row g-4">
        {[{
            title: "Home", 
            img: "pict/home.jpg", 
            description: "Beranda utama dengan informasi penting tentang mata pelajaran Ekonomi.",
            path: "/dashboard",
            delay: 400 
        },
        {
            title: "Materi",
            img: "pict/materi.jpg", 
            description: "Akses materi pelajaran Ekonomi yang lengkap untuk membantu memahami konsep-konsep ekonomi.",
            path: "/materi",
            delay: 600
        },
        {
            title: "Tugas",
            img: "pict/tugas.jpg", 
            description: "Kerjakan dan kumpulkan tugas ekonomi yang diberikan oleh guru.",
            path: "/tugas",
            delay: 800
        },
        {
            title: "Quiz",
            img: "pict/quiz.jpg", 
            description: "Ikuti quiz untuk menguji pemahamanmu tentang materi ekonomi.",
            path: "/quiz",
            delay: 1000
        },
        {
            title: "Pengumuman",
            img: "pict/pengumuman.jpg", 
            description: "Lihat pengumuman terkait mata pelajaran Ekonomi.",
            path: "/pengumuman",
            delay: 1200
        },
        {
            title: "Diskusi",
            img: "pict/diskusi.jpg", 
            description: "Bergabunglah dalam forum diskusi untuk berbagi ide dan bertanya tentang materi ekonomi.",
            path: "/forum-diskusi",
            delay: 1400
        }].map((item, idx) => (
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

      <section className="gallery py-5">
        <div className="container">
          <div className="text-center text-white">
            <h1 data-aos="fade-up">Gallery Kegiatan Ekonomi</h1>
          </div>
          <div className="row g-4 mt-4">
            {[ 
              "pict/ekonomi-kegiatan-1.jpg",
              "pict/ekonomi-kegiatan-2.jpg",
              "pict/ekonomi-kegiatan-3.jpg",
            ].map((src, idx) => (
              <div
                className="col-md-4"
                key={idx}
                data-aos="zoom-in"
                data-aos-delay={idx * 200}
              >
                <img
                  src={src}
                  alt={`Gallery ${idx + 1}`}
                  className="img-fluid rounded shadow"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer bg-dark text-white py-5">
        <div className="container">
          <div className="row">
            <div
              className="col-md-4 mb-4"
              data-aos="zoom-in"
              data-aos-duration="1200"
            >
              <h3>
                Econominds<span className="text-warning">.</span>
              </h3>
              <p>
              Di antara sekian banyak ilmu menuju sukses, maka ilmu mengelola risiko harus diutamakan agar kita tahu beda investasi dan berjudi.
              </p>
            </div>
            <div
              className="col-md-4 mb-4"
              data-aos="zoom-in"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <h4>Support</h4>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="#"
                    className="text-white text-decoration-none d-block"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-decoration-none d-block"
                  >
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-decoration-none d-block"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-decoration-none d-block"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="col-md-4 mb-4"
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <h4>Address</h4>
              <p>
                <strong>Address:</strong> SMK N 1 SBB, Pohan Tongatonga, 2024,
                Indonesia
              </p>
              <p>
                <strong>Email:</strong> aldinababan96@gmail.com
              </p>
              <p>
                <strong>Email:</strong> krisnalbntruan12#gamil.com
              </p>
              <p>
                 <strong>Email:</strong> bethania892gmail.com
              </p>
              <p>
                <strong>Email:</strong> depedro77@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> 0821 8113 7988
              </p>
            </div>
          </div>
        </div>
        <div className="footer_bar bg_secondary text-center py-3">
          <p className="mb-0 text-white">
            &copy; 2024 SMK N 1 Siborongborong | Designed by{" "}
            <span className="text-warning">Econominds United</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Dashboard;
