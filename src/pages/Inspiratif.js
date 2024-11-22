import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Inspiratif() {
  const economists = [
    {
      name: "Adam Smith",
      story: `Adam Smith dikenal sebagai "Bapak Ekonomi Modern". Salah satu kontribusinya yang paling terkenal adalah teori "Invisible Hand". 
      Dalam bukunya "The Wealth of Nations" (1776), ia menjelaskan pentingnya pembagian kerja dan efisiensi dalam menciptakan kemakmuran.`,
      inspiration: `Pemikirannya tentang pasar bebas menginspirasi kebijakan ekonomi global. Ia percaya bahwa kebebasan individu untuk mengejar keuntungan 
      pribadi menghasilkan manfaat besar bagi masyarakat.`,
      image: "https://th.bing.com/th/id/OIP.Mo0pNTBfz6idl2rc6qzFWwHaE7?w=259&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    },
    {
      name: "John Maynard Keynes",
      story: `John Maynard Keynes adalah pelopor ekonomi makro modern. Selama Depresi Besar, ia memperkenalkan teori bahwa pemerintah harus berperan aktif 
      dalam mengelola ekonomi melalui pengeluaran publik untuk mendorong permintaan. Teorinya dikenal sebagai Keynesian Economics.`,
      inspiration: `Keynes menginspirasi negara-negara untuk menerapkan kebijakan fiskal aktif guna mengatasi pengangguran dan krisis ekonomi.`,
      image: "https://th.bing.com/th/id/OIP.345gPHOJ4BIK4jadSr_qYQHaEU?w=306&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    },
    {
      name: "Muhammad Yunus",
      story: `Muhammad Yunus adalah pelopor microfinance dan microcredit, mendirikan Grameen Bank pada tahun 1983. Bank ini memberikan pinjaman kecil 
      kepada masyarakat miskin tanpa jaminan, membantu mereka keluar dari kemiskinan.`,
      inspiration: `Yunus menginspirasi dunia dengan pendekatannya terhadap pemberdayaan masyarakat miskin dan dianugerahi Nobel Perdamaian pada tahun 2006.`,
      image: "https://th.bing.com/th/id/OIP.fviSl-hpo0Z8MxYkUZ6s0wHaDt?w=349&h=174&c=7&r=0&o=5&dpr=2&pid=1.7",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < economists.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentEconomist = economists[currentPage];

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="text-center mb-4">
          <h1 className="display-5" style={{ color: "#343a40", fontWeight: "700" }}>
            Tokoh Inspiratif Ekonomi
          </h1>
          <p style={{ color: "#6c757d", fontSize: "18px" }}>
            Temukan kisah para tokoh inspiratif yang telah membentuk dunia ekonomi modern.
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div
              className="card shadow border-0"
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                backgroundColor: "#f8f9fa",
              }}
            >
              <img
                src={currentEconomist.image}
                alt={currentEconomist.name}
                className="card-img-top"
                style={{
                  height: "250px",
                  objectFit: "contain",
                  backgroundColor: "#e9ecef",
                  padding: "15px",
                }}
              />
              <div className="card-body">
                <h3 className="card-title text-center mb-3">
                  {currentEconomist.name}
                </h3>
                <p className="card-text">
                  <strong>Biografi:</strong> {currentEconomist.story}
                </p>
                <p className="card-text">
                  <strong>Inspirasi:</strong> {currentEconomist.inspiration}
                </p>
              </div>
              <div className="card-footer bg-white d-flex justify-content-between align-items-center">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 0}
                  className="btn btn-secondary d-flex align-items-center"
                >
                  <FaArrowLeft className="me-2" />
                  Sebelumnya
                </button>
                <span className="text-muted">
                  {currentPage + 1} / {economists.length}
                </span>
                <button
                  onClick={nextPage}
                  disabled={currentPage === economists.length - 1}
                  className="btn btn-primary d-flex align-items-center"
                >
                  Selanjutnya
                  <FaArrowRight className="ms-2" />
                </button>
              </div>
            </div>
          </div>
          <div className="text-center my-4">
            <button 
            onClick={() => window.history.back()}
            className="btn btn-secondary mt-4"
            >
                Kembali ke halaman awal
            </button>
            </div>
        </div>
      </div>
    </>
  );
}

export default Inspiratif;
