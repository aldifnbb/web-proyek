import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from '../components/Footer';

const EkonomiSejarah = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    
    <div className="page-wrapper d-flex flex-column min-vh-100">
      <div className="content-wrapper flex-grow-1">
        <div className="container-lg page-content">
          <h1 data-aos="fade-right" className="app__section__title mb-4">
            Sejarah Ekonomi
          </h1>
          <section className="mb-5">
            <section className="d-flex justify-content-center">
              <img
                src="https://th.bing.com/th/id/OIP.QfIstEp_5rod8mvbbFHDKAHaEO?w=319&h=181&c=7&r=0&o=5&dpr=2&pid=1.7"
                alt="Gambaran ekonomi dari masa ke masa"
                className="img-fluid rounded shadow-lg mb-4"
                data-aos="zoom-in"
              />
          </section>
            <p data-aos="fade-up" className="lead text-muted text-center mb-5">
              Ekonomi, sebagai studi tentang pengelolaan sumber daya untuk
              memenuhi kebutuhan manusia, telah mengalami transformasi besar
              sepanjang sejarah. Dari zaman kuno, ketika manusia mengandalkan
              barter untuk bertukar barang, hingga era digital saat ini dengan
              sistem perdagangan elektronik dan mata uang virtual, perjalanan
              sejarah ekonomi mencerminkan adaptasi manusia terhadap perubahan
              kebutuhan dan teknologi.
            </p>
            <p data-aos="fade-up" className="lead text-muted text-center mb-5">
              Ekonomi adalah studi tentang bagaimana manusia mengelola sumber daya 
              yang terbatas untuk memenuhi kebutuhan yang tidak terbatas. Dalam sejarah, 
              sistem ekonomi telah berkembang dari sistem barter di zaman kuno hingga 
              era ekonomi digital saat ini. Pengetahuan tentang sejarah ekonomi membantu 
              kita memahami perubahan sosial, politik, dan budaya yang terkait dengan 
              pengelolaan sumber daya.
            </p>
          </section>

          <h2 data-aos="fade-right" className="app__section__title mt-5">Perkembangan Sistem Ekonomi</h2>
          <p data-aos="fade-up" className="app__section__content">
            Pada awalnya, sistem ekonomi masyarakat tradisional bergantung pada metode barter, di mana barang atau jasa dipertukarkan secara langsung tanpa menggunakan uang sebagai alat perantara. Sistem ini sederhana, namun memiliki sejumlah keterbatasan, seperti kesulitan dalam menentukan nilai yang setara antara barang yang ditukar serta kebutuhan untuk menemukan pihak yang memiliki kebutuhan saling melengkapi (double coincidence of wants).
            Seiring dengan bertambahnya kompleksitas masyarakat dan meningkatnya kebutuhan dalam perdagangan, sistem barter mulai dirasa kurang efisien. Hal ini mendorong pengenalan uang sebagai alat tukar yang lebih praktis dan serbaguna. Uang tidak hanya memudahkan transaksi dengan menyediakan ukuran nilai yang jelas, tetapi juga memungkinkan akumulasi kekayaan dan pengelolaan sumber daya secara lebih baik.
            Perkembangan ini menjadi tonggak penting dalam transformasi ekonomi, karena tidak hanya mengubah cara manusia melakukan transaksi, tetapi juga membuka jalan bagi munculnya sistem ekonomi yang lebih terorganisasi. Dengan adanya uang, perdagangan lintas wilayah menjadi lebih mudah, hubungan ekonomi antar masyarakat semakin erat, dan inovasi dalam bidang keuangan mulai berkembang. Peran uang tidak hanya sebagai alat tukar, tetapi juga sebagai penyimpan nilai dan satuan hitung, menjadikannya elemen fundamental dalam aktivitas ekonomi modern.
            Transformasi dari sistem barter ke sistem berbasis uang mencerminkan kemajuan peradaban manusia dalam menciptakan mekanisme yang lebih efisien untuk memenuhi kebutuhan, mendukung pertumbuhan, dan meningkatkan kesejahteraan.
          </p>

          <h3 data-aos="fade-left" className="app__section__title mt-5">Sistem Ekonomi Tradisional</h3>
          <p data-aos="fade-up" className="app__section__content">
            Sistem ekonomi tradisional banyak diterapkan pada masyarakat yang bergantung pada 
            hasil alam dan pertanian. Di sini, kegiatan ekonomi berfokus pada kebutuhan dasar 
            seperti pangan, pakaian, dan tempat tinggal. Hubungan ekonomi dalam sistem ini lebih 
            bersifat keluarga atau komunitas kecil.
          </p>

          <h3 data-aos="fade-left" className="app__section__title mt-5">Sistem Ekonomi Modern</h3>
          <p data-aos="fade-up" className="app__section__content">
            Dengan kemajuan teknologi, sistem ekonomi modern muncul dengan memperkenalkan pasar 
            global yang menghubungkan berbagai negara di seluruh dunia. Perdagangan internasional 
            berkembang pesat, dan munculnya pasar saham serta perkembangan industri telah mengubah 
            struktur ekonomi dunia.
          </p>

          <h3 data-aos="fade-up" className="app__section__title mt-5">Era Digital dalam Ekonomi</h3>
          <p data-aos="fade-up" className="app__section__content">
            Era digital telah membawa perubahan besar dalam cara ekonomi bekerja. Kemajuan teknologi 
            informasi memungkinkan munculnya e-commerce, industri berbasis data, dan perkembangan 
            mata uang digital seperti Bitcoin. Semua ini memperkenalkan paradigma baru dalam cara 
            kita bertransaksi dan mengelola sumber daya ekonomi.
          </p>

          <h3 data-aos="fade-right" className="app__section__title mt-5">Ekonomi Berkelanjutan</h3>
          <p data-aos="fade-up" className="app__section__content">
            Dalam beberapa dekade terakhir, topik ekonomi berkelanjutan semakin mendapat perhatian. 
            Ekonomi berkelanjutan bertujuan untuk memenuhi kebutuhan ekonomi saat ini tanpa mengorbankan 
            kemampuan generasi masa depan untuk memenuhi kebutuhan mereka sendiri. Konsep ini menekankan 
            pentingnya keberlanjutan sosial, ekonomi, dan lingkungan.
          </p>
        </div>
      </div>
    <Footer/>
    </div>
  );
};

export default EkonomiSejarah;