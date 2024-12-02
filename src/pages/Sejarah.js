import React, { useEffect } from "react";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

const EkonomiSejarah = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="content-wrapper flex-grow-1">
      <div className="container-lg page-content">
        <header className="text-center my-5">
          <h1 data-aos="fade-right" className="text-primary fw-bold">
            Sejarah Ekonomi
          </h1>
          <p data-aos="fade-up" className="lead text-muted mt-4">
            Memahami perjalanan sistem ekonomi dari barter hingga era digital,
            dan bagaimana perubahan tersebut membentuk masyarakat kita saat ini.
          </p>
        </header>

        <section className="mb-5">
          <img
            src="https://th.bing.com/th/id/OIP.QfIstEp_5rod8mvbbFHDKAHaEO?w=320&h=182&c=7&r=0&o=5&dpr=2&pid=1.7"
            alt="Gambaran ekonomi dari masa ke masa"
            className="img-fluid rounded shadow-lg mb-4"
            data-aos="zoom-in"
          />
          <p data-aos="fade-up" className="text-justify">
            Ekonomi, sebagai studi tentang pengelolaan sumber daya untuk
            memenuhi kebutuhan manusia, telah mengalami transformasi besar
            sepanjang sejarah. Dari zaman kuno, ketika manusia mengandalkan
            barter untuk bertukar barang, hingga era digital saat ini dengan
            sistem perdagangan elektronik dan mata uang virtual, perjalanan
            sejarah ekonomi mencerminkan adaptasi manusia terhadap perubahan
            kebutuhan dan teknologi.
          </p>
        </section>

        <section>
          <h2 data-aos="fade-right" className="text-secondary mt-5">
            Dari Barter hingga Sistem Uang
          </h2>
          <p data-aos="fade-up" className="text-justify">
            Pada awal sejarah, masyarakat menggunakan sistem barter untuk
            memenuhi kebutuhan mereka. Sebagai contoh, petani menukar hasil
            panen mereka dengan barang atau jasa dari pengrajin. Namun, sistem
            barter memiliki keterbatasan, terutama dalam menemukan pasangan
            barter yang sesuai. Kebutuhan akan alat tukar yang seragam
            mendorong munculnya uang logam pertama kali di era peradaban kuno,
            seperti Mesir dan Mesopotamia.
          </p>
          <p data-aos="fade-up" className="text-justify">
            Pengenalan uang memberikan fleksibilitas lebih dalam transaksi dan
            menjadi landasan penting bagi munculnya sistem ekonomi yang lebih
            kompleks, termasuk perbankan dan perdagangan internasional.
          </p>
        </section>

        <section>
          <h2 data-aos="fade-right" className="text-secondary mt-5">
            Era Revolusi Industri
          </h2>
          <p data-aos="fade-up" className="text-justify">
            Perkembangan sistem ekonomi mencapai titik balik besar dengan
            munculnya revolusi industri pada abad ke-18. Penggunaan mesin-mesin
            dalam produksi massal menciptakan perubahan besar dalam cara
            barang-barang diproduksi, didistribusikan, dan dikonsumsi. Pada
            masa ini, kapitalisme modern mulai berkembang pesat, dengan fokus
            pada efisiensi dan pertumbuhan ekonomi.
          </p>
          <p data-aos="fade-up" className="text-justify">
            Namun, era ini juga menimbulkan tantangan baru seperti ketimpangan
            sosial, eksploitasi tenaga kerja, dan degradasi lingkungan.
            Fenomena ini memicu diskusi tentang pentingnya keseimbangan antara
            pertumbuhan ekonomi dan keadilan sosial.
          </p>
        </section>

        <section>
          <h2 data-aos="fade-right" className="text-secondary mt-5">
            Globalisasi dan Perdagangan Bebas
          </h2>
          <p data-aos="fade-up" className="text-justify">
            Pada abad ke-20, globalisasi mulai menghubungkan negara-negara di
            seluruh dunia dalam jaringan perdagangan dan investasi yang semakin
            erat. Organisasi internasional seperti GATT dan kemudian WTO
            mempromosikan perdagangan bebas, yang dianggap sebagai pendorong
            utama pertumbuhan ekonomi global.
          </p>
          <p data-aos="fade-up" className="text-justify">
            Meskipun globalisasi membawa kemakmuran ke banyak negara,
            keberadaannya juga menimbulkan tantangan, seperti ketidakmerataan
            distribusi kekayaan, eksploitasi tenaga kerja di negara berkembang,
            dan krisis ekonomi global seperti Depresi Besar dan krisis keuangan
            2008.
          </p>
        </section>

        <section>
          <h2 data-aos="fade-right" className="text-secondary mt-5">
            Era Digital dan Masa Depan Ekonomi
          </h2>
          <p data-aos="fade-up" className="text-justify">
            Memasuki abad ke-21, teknologi digital telah mengubah cara ekonomi
            dunia berfungsi. Dengan munculnya e-commerce, mata uang digital
            seperti Bitcoin, dan perkembangan industri berbasis data, ekonomi
            dunia telah bergeser menuju pendekatan yang lebih terhubung dan
            berbasis teknologi. Platform seperti Amazon dan Alibaba
            memungkinkan akses pasar global hanya dengan klik tombol.
          </p>
          <p data-aos="fade-up" className="text-justify">
            Di sisi lain, kemajuan teknologi juga memunculkan kekhawatiran baru,
            seperti ketimpangan teknologi antara negara maju dan negara
            berkembang, serta risiko keamanan siber dalam sistem ekonomi
            digital.
          </p>
        </section>

        <section>
          <h2 data-aos="fade-right" className="text-secondary mt-5">
            Ekonomi Berkelanjutan: Tantangan dan Harapan
          </h2>
          <p data-aos="fade-up" className="text-justify">
            Seiring meningkatnya kesadaran akan dampak negatif dari aktivitas
            ekonomi terhadap lingkungan, konsep ekonomi berkelanjutan semakin
            populer. Pendekatan ini menekankan pentingnya menjaga keseimbangan
            antara pertumbuhan ekonomi, keadilan sosial, dan keberlanjutan
            lingkungan. Strategi seperti ekonomi hijau dan ekonomi sirkular
            menjadi langkah penting dalam membangun masa depan yang lebih
            berkelanjutan.
          </p>
          <p data-aos="fade-up" className="text-justify">
            Dalam konteks ini, masyarakat global ditantang untuk menciptakan
            inovasi yang dapat meningkatkan kualitas hidup tanpa mengorbankan
            sumber daya alam dan hak generasi mendatang.
          </p>
        </section>
      </div>
    </div>
  );
};

export default EkonomiSejarah;
