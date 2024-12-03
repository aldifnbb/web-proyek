import React from "react";
import Footer from "../components/Footer";

const EkonomiKonsep = () => {
  return (
    <div>
      <div className="container mt-5">
        <h1 data-aos="fade-right" className="text-center mb-4 text-primary">
          Konsep Dasar Ekonomi
        </h1>
        <p data-aos="fade-up" className="lead text-muted text-center mb-5">
          Ekonomi adalah ilmu yang mempelajari bagaimana individu, perusahaan, dan pemerintah membuat pilihan untuk memenuhi kebutuhan dan keinginan mereka dengan menggunakan sumber daya yang terbatas. 
          Konsep dasar ekonomi mencakup kelangkaan, pilihan, biaya peluang, serta interaksi antara permintaan dan penawaran di pasar.
        </p>

        <div data-aos="fade-right" className="mt-5">
          <h3>Kelangkaan (Scarcity)</h3>
          <p>
            Kelangkaan adalah konsep utama dalam ekonomi yang menjelaskan bahwa sumber daya yang terbatas tidak dapat memenuhi kebutuhan manusia yang tidak terbatas. 
            Oleh karena itu, ekonomi berfokus pada bagaimana mengelola dan mengalokasikan sumber daya tersebut agar dapat memenuhi kebutuhan yang paling mendesak.
          </p>
        </div>

        <div data-aos="fade-right" className="mt-5">
          <h3>Pilihan (Choices)</h3>
          <p>
            Karena kelangkaan, setiap individu atau masyarakat harus membuat pilihan. Pilihan ini melibatkan keputusan tentang bagaimana menggunakan sumber daya terbatas untuk memenuhi kebutuhan yang ada.
            Pilihan yang dibuat akan menentukan alokasi sumber daya dan mempengaruhi kesejahteraan ekonomi.
          </p>
        </div>

        <div data-aos="fade-right" className="mt-5">
          <h3>Biaya Peluang (Opportunity Cost)</h3>
          <p>
            Biaya peluang adalah nilai dari pilihan terbaik yang harus dikorbankan ketika membuat keputusan ekonomi. Ini adalah konsekuensi dari memilih satu opsi di atas yang lain, 
            dan membantu individu atau organisasi untuk memahami trade-off yang terlibat dalam setiap keputusan.
          </p>
        </div>

        <div data-aos="fade-right" className="mt-5">
          <h3>Permintaan dan Penawaran (Supply and Demand)</h3>
          <p>
            Permintaan dan penawaran adalah dua konsep yang saling berkaitan yang menentukan harga dan jumlah barang di pasar. 
            Permintaan mencerminkan keinginan konsumen untuk membeli barang pada harga tertentu, sedangkan penawaran mencerminkan keinginan produsen untuk menjual barang pada harga tertentu. 
            Interaksi keduanya menciptakan keseimbangan pasar.
          </p>
        </div>
      </div>
    <Footer/>
    </div>
  );
};

export default EkonomiKonsep;
