import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
function Inspiratif() {
  const economists = [
    {
      name: "Adam Smith",
      story: `Adam Smith dikenal sebagai "Bapak Ekonomi Modern". Salah satu kontribusinya yang paling terkenal adalah teori "Invisible Hand". 
      Dalam bukunya *The Wealth of Nations* (1776), ia menjelaskan pentingnya pembagian kerja dan efisiensi dalam menciptakan kemakmuran.`,
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
    {
      name: "Muhammad ",
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
    <div className="container mt-3">
      <div className="text-center mb-4">
        <h1
          className="display-5 font-weight-bold"  
          style={{
            fontFamily: "'Bold', serif",
            color: "#4a4a4a",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
            letterSpacing: "1px",
          }}
        >
          Tokoh Inspiratif Ekonomi
        </h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-3" style={{ maxWidth: "100%", minHeight: "380px" }}>  
            <img
              src={currentEconomist.image}
              alt={currentEconomist.name}
              style={{
                height: "180px",
                width: "80%",
                objectFit: "cover",
                borderRadius: "10px",
                margin: "20px auto",
                display: "block",
              }}
            />
            <div className="card-body text-center" style={{ paddingBottom: "20px" }}> 
              <h3 className="card-title" style={{ fontSize: "20px" }}>{currentEconomist.name}</h3> 
              <p className="card-text" style={{ fontSize: "14px" }}>
                <strong>Biografi:</strong> {currentEconomist.story}
              </p>
              <p className="card-text" style={{ fontSize: "14px" }}>
                <strong>Inspirasi:</strong> {currentEconomist.inspiration}
              </p>
              <div className="d-flex justify-content-between" style={{ marginTop: "auto" }}>
                <button
                  onClick={prevPage}
                  disabled={currentPage === 0}
                  className="btn btn-secondary"
                  style={{ width: "45%" }}
                >
                  Sebelumnya
                </button>
                <button
                  onClick={nextPage}
                  disabled={currentPage === economists.length - 1}
                  className="btn btn-primary"
                  style={{ width: "45%" }}
                >
                  Selanjutnya
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default Inspiratif;
