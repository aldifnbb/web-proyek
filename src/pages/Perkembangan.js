import React, { useEffect } from "react";
import Footer from "../components/Footer";

const EkonomiPerkembangan = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/chart.js";
    script.async = true;
    script.onload = () => {
      const ctx = document.getElementById("economicChart").getContext("2d");

      new window.Chart(ctx, {
        type: "line",
        data: {
          labels: ["1800", "1850", "1900", "1950", "2000", "2020", "2050"], 
          datasets: [
            {
              label: "Perkembangan Ekonomi",
              data: [1, 3, 5, 10, 15, 25, 35],
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Kurva Perkembangan Ekonomi Dunia",
            },
            tooltip: {
              mode: "index",
              intersect: false,
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: "Tahun",
              },
            },
            y: {
              title: {
                display: true,
                text: "Indeks Ekonomi",
              },
            },
          },
        },
      });
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <div className="container mt-5">
        <h1 data-aos="fade-right" className="text-center mb-4">
          Perjalanan dan Dinamika Perkembangan Ekonomi
        </h1>
        <p data-aos="fade-up" className="mt-3 text-muted text-center">
          Ulasan menyeluruh mengenai bagaimana ekonomi berkembang dari masa ke masa,
          faktor pendorong utama, hingga dampaknya terhadap kehidupan masyarakat global.
        </p>

        <div className="row mt-5">
          <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
            <h3>1. Sejarah Awal Perkembangan Ekonomi</h3>
            <p className="app__section__content"> 
              Dari sistem barter hingga ekonomi berbasis uang, sejarah perkembangan ekonomi
              menunjukkan evolusi cara manusia memenuhi kebutuhan hidupnya. Revolusi industri di abad ke-18
              menjadi titik balik penting dengan pengenalan mesin dan produksi massal yang mengubah cara manusia bekerja.
            </p>
          </div>

          <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
            <h3>2. Faktor Utama Pendorong Ekonomi</h3>
            <p className="app__section__content">
              Kemajuan teknologi, kebijakan ekonomi yang strategis, pendidikan yang berkualitas,
              serta pertumbuhan perdagangan internasional adalah pendorong utama perkembangan ekonomi.
              Investasi pada infrastruktur dan sumber daya manusia juga berperan besar dalam mempercepat perubahan.
            </p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="app__section__content">3. Globalisasi dan Transformasi Ekonomi</h3>
            <p>
              Era globalisasi membuka pintu bagi kolaborasi lintas negara.
              Perdagangan bebas, aliran investasi, dan inovasi global mempercepat pertumbuhan ekonomi dunia,
              tetapi juga membawa tantangan seperti kesenjangan ekonomi dan isu keberlanjutan.
            </p>
          </div>

          <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="app__section__content">4. Era Ekonomi Digital</h3>
            <p>
              Di abad ke-21, ekonomi digital menjadi penggerak utama pertumbuhan.
              Platform e-commerce, fintech, dan teknologi blockchain menciptakan peluang baru,
              tetapi juga mengharuskan bisnis tradisional untuk beradaptasi.
            </p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="app__section__content">5. Tantangan dan Krisis Ekonomi</h3>
            <p>
              Perkembangan ekonomi tidak lepas dari tantangan, seperti ketimpangan sosial,
              dampak perubahan iklim, dan ketidakstabilan geopolitik.
              Krisis global seperti pandemi juga menunjukkan perlunya ketahanan ekonomi yang lebih baik.
            </p>
          </div>

          <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="app__section__content">6. Dampak pada Kehidupan Masyarakat</h3>
            <p>
              Perkembangan ekonomi telah memberikan manfaat besar, seperti peningkatan kualitas hidup,
              inovasi medis, dan pendidikan yang lebih mudah diakses. Namun, efek samping seperti urbanisasi yang tidak terkendali
              dan eksploitasi sumber daya alam perlu diatasi untuk menciptakan pembangunan yang berkelanjutan.
            </p>
          </div>
        </div>

        <div className="mt-5 text-center" data-aos="fade-up" data-aos-delay="200">
          <p className="text-muted">
            Memahami dinamika perkembangan ekonomi adalah langkah awal untuk menghadapi tantangan global
            dan memanfaatkan peluang dalam menciptakan dunia yang lebih adil dan berkelanjutan.
          </p>
        </div>

        <div className="mt-5 text-center" data-aos="fade-up" data-aos-delay="200">
          <canvas id="economicChart" width="400" height="200"></canvas>
        </div>
      </div>
    <Footer/>
    </div>
  );
};

export default EkonomiPerkembangan;
