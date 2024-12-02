import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

const EkonomiSejarah = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="page-wrapper d-flex flex-column min-vh-100">
      <div className="content-wrapper flex-grow-1">
        <div className="container-lg page-content">
          <h1 data-aos="fade-right" className="text-center mb-4">
            Sejarah Ekonomi
          </h1>
          
          <p data-aos="fade-up" className="text-justify mt-4">
            Ekonomi adalah studi tentang bagaimana manusia mengelola sumber daya 
            yang terbatas untuk memenuhi kebutuhan yang tidak terbatas. Dalam sejarah, 
            sistem ekonomi telah berkembang dari sistem barter di zaman kuno hingga 
            era ekonomi digital saat ini. Pengetahuan tentang sejarah ekonomi membantu 
            kita memahami perubahan sosial, politik, dan budaya yang terkait dengan 
            pengelolaan sumber daya.
          </p>

          <h2 data-aos="fade-right" className="mt-5">Perkembangan Sistem Ekonomi</h2>
          <p data-aos="fade-up" className="text-justify mt-3">
            Pada awalnya, sistem ekonomi didasarkan pada barter, yang mana barang atau jasa 
            dipertukarkan langsung tanpa adanya uang sebagai alat tukar. Namun, seiring dengan 
            perkembangan masyarakat dan perdagangan, sistem uang mulai diperkenalkan. 
            Perkembangan ini mengubah cara manusia bertransaksi dan berinteraksi dalam ekonomi.
          </p>

          <h3 data-aos="fade-left" className="mt-5">Sistem Ekonomi Tradisional</h3>
          <p data-aos="fade-up" className="text-justify mt-3">
            Sistem ekonomi tradisional banyak diterapkan pada masyarakat yang bergantung pada 
            hasil alam dan pertanian. Di sini, kegiatan ekonomi berfokus pada kebutuhan dasar 
            seperti pangan, pakaian, dan tempat tinggal. Hubungan ekonomi dalam sistem ini lebih 
            bersifat keluarga atau komunitas kecil.
          </p>

          <h3 data-aos="fade-left" className="mt-5">Sistem Ekonomi Modern</h3>
          <p data-aos="fade-up" className="text-justify mt-3">
            Dengan kemajuan teknologi, sistem ekonomi modern muncul dengan memperkenalkan pasar 
            global yang menghubungkan berbagai negara di seluruh dunia. Perdagangan internasional 
            berkembang pesat, dan munculnya pasar saham serta perkembangan industri telah mengubah 
            struktur ekonomi dunia.
          </p>

          <h3 data-aos="fade-up" className="mt-5">Era Digital dalam Ekonomi</h3>
          <p data-aos="fade-up" className="text-justify mt-3">
            Era digital telah membawa perubahan besar dalam cara ekonomi bekerja. Kemajuan teknologi 
            informasi memungkinkan munculnya e-commerce, industri berbasis data, dan perkembangan 
            mata uang digital seperti Bitcoin. Semua ini memperkenalkan paradigma baru dalam cara 
            kita bertransaksi dan mengelola sumber daya ekonomi.
          </p>

          <h3 data-aos="fade-right" className="mt-5">Ekonomi Berkelanjutan</h3>
          <p data-aos="fade-up" className="text-justify mt-3">
            Dalam beberapa dekade terakhir, topik ekonomi berkelanjutan semakin mendapat perhatian. 
            Ekonomi berkelanjutan bertujuan untuk memenuhi kebutuhan ekonomi saat ini tanpa mengorbankan 
            kemampuan generasi masa depan untuk memenuhi kebutuhan mereka sendiri. Konsep ini menekankan 
            pentingnya keberlanjutan sosial, ekonomi, dan lingkungan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EkonomiSejarah;