import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Breadcrumb, Form, Button, Card } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // Menggunakan ikon untuk feedback

function App() {
  const [quizAnswers, setQuizAnswers] = useState({
    quiz1: "",
    quiz2: "",
    quiz3: "",
  });

  const [quizFeedback, setQuizFeedback] = useState({
    quiz1: "",
    quiz2: "",
    quiz3: "",
  });

  const handleQuizChange = (e) => {
    const { name, value } = e.target;
    setQuizAnswers({ ...quizAnswers, [name]: value });
  };

  const checkAnswers = () => {
    const correctAnswers = {
      quiz1: "perbedaan sumber daya alam",
      quiz2: "ekspor dan impor",
      quiz3: "proteksionisme",
    };

    setQuizFeedback({
      quiz1: quizAnswers.quiz1 === correctAnswers.quiz1 ? "Benar!" : "Salah, jawabannya adalah 'Perbedaan Sumber Daya Alam'.",
      quiz2: quizAnswers.quiz2 === correctAnswers.quiz2 ? "Benar!" : "Salah, jawabannya adalah 'Ekspor dan Impor'.",
      quiz3: quizAnswers.quiz3 === correctAnswers.quiz3 ? "Benar!" : "Salah, jawabannya adalah 'Proteksionisme'.",
    });
  };

  return (
    <Container className="my-5">
      <Breadcrumb>
        <Breadcrumb.Item href="#">Beranda</Breadcrumb.Item>
        <Breadcrumb.Item active>Bab 3: Perdagangan Internasional</Breadcrumb.Item>
      </Breadcrumb>

      <header className="text-center mb-5">
        <h1 className="display-4 text-primary">Bab 3: Perdagangan Internasional</h1>
        <p className="lead text-muted">
          Perdagangan internasional adalah kegiatan pertukaran barang, jasa, atau faktor produksi antara negara-negara di dunia. Kegiatan ini muncul karena tidak ada satu negara pun yang dapat memenuhi semua kebutuhan ekonominya sendiri. Melalui perdagangan internasional, negara-negara dapat saling melengkapi kebutuhan mereka dengan memanfaatkan keunggulan masing-masing.
        </p>
      </header>

      <section className="mb-5">
        <h2>Alasan Terjadinya Perdagangan Internasional</h2>
        <p>
          Beberapa alasan utama terjadinya perdagangan internasional antara lain:
          <ul>
            <li><strong>Perbedaan Sumber Daya Alam:</strong> Negara-negara memiliki kekayaan alam yang berbeda.</li>
            <li><strong>Perbedaan Teknologi:</strong> Negara maju memiliki teknologi canggih untuk memproduksi barang tertentu dengan lebih efisien.</li>
            <li><strong>Perbedaan Biaya Produksi:</strong> Negara dengan biaya produksi lebih rendah dapat mengekspor barang dengan harga lebih kompetitif.</li>
            <li><strong>Keunggulan Komparatif:</strong> Negara mengekspor barang yang memiliki biaya produksi lebih murah dibanding negara lain.</li>
            <li><strong>Kebutuhan akan Produk yang Tidak Tersedia di Dalam Negeri:</strong> Beberapa barang tidak dapat diproduksi di negara tertentu karena keterbatasan iklim atau teknologi.</li>
          </ul>
        </p>
      </section>

      <section className="mb-5">
        <h2>Manfaat Perdagangan Internasional</h2>
        <p>
          Perdagangan internasional membawa manfaat berikut:
          <ul>
            <li><strong>Memperluas Pasar:</strong> Produsen dapat menjual barang ke negara lain, meningkatkan pendapatan dan skala produksi.</li>
            <li><strong>Meningkatkan Devisa Negara:</strong> Ekspor menghasilkan devisa yang dapat digunakan untuk impor barang yang diperlukan.</li>
            <li><strong>Meningkatkan Efisiensi Produksi:</strong> Negara dapat memproduksi barang yang memiliki keunggulan komparatif.</li>
            <li><strong>Mempererat Hubungan Antarnegara:</strong> Mendorong kerjasama ekonomi dan diplomasi antarnegara.</li>
            <li><strong>Memenuhi Kebutuhan Domestik:</strong> Negara dapat mengimpor barang yang tidak dapat diproduksi dalam negeri.</li>
          </ul>
        </p>
      </section>

      <section className="mb-5">
        <h2>Hambatan Perdagangan Internasional</h2>
        <p>
          Beberapa hambatan dalam perdagangan internasional adalah:
          <ul>
            <li><strong>Proteksionisme:</strong> Kebijakan yang melindungi industri dalam negeri dengan cara seperti tarif, kuota, atau larangan impor.</li>
            <li><strong>Perbedaan Kurs Valuta Asing:</strong> Fluktuasi nilai tukar mata uang memengaruhi biaya impor dan daya saing ekspor.</li>
            <li><strong>Perbedaan Standar Kualitas:</strong> Standar kualitas produk yang berbeda antarnegara.</li>
            <li><strong>Biaya Transportasi:</strong> Jarak geografis dan infrastruktur yang mempengaruhi biaya pengiriman barang.</li>
            <li><strong>Konflik Politik atau Ekonomi:</strong> Embargo, sanksi, atau konflik dapat menghambat perdagangan antarnegara.</li>
          </ul>
        </p>
      </section>

      <section className="mb-5">
        <h2>Bentuk Perdagangan Internasional</h2>
        <p>
          Perdagangan internasional dapat berupa:
          <ul>
            <li><strong>Ekspor dan Impor:</strong> Ekspor adalah penjualan barang ke luar negeri, sementara impor adalah pembelian barang dari luar negeri.</li>
            <li><strong>Barter:</strong> Pertukaran barang atau jasa secara langsung tanpa menggunakan uang.</li>
            <li><strong>Perdagangan Bilateral:</strong> Perdagangan antara dua negara.</li>
            <li><strong>Perdagangan Multilateral:</strong> Perdagangan yang melibatkan lebih dari dua negara melalui organisasi internasional seperti WTO.</li>
            <li><strong>Kontrak Produksi:</strong> Negara-negara sepakat untuk memproduksi barang tertentu bersama-sama untuk tujuan efisiensi.</li>
          </ul>
        </p>
      </section>

      <section className="mb-5">
        <h2>Kebijakan Perdagangan Internasional</h2>
        <p>
          Terdapat dua jenis kebijakan utama dalam perdagangan internasional:
          <ul>
            <li><strong>Kebijakan Proteksi:</strong> Melindungi industri dalam negeri melalui tarif, kuota, atau subsidi ekspor.</li>
            <li><strong>Kebijakan Liberal:</strong> Mendorong perdagangan bebas dengan mengurangi hambatan seperti tarif dan kuota.</li>
            <li><strong>Perjanjian Perdagangan:</strong> Kesepakatan antara negara untuk meningkatkan perdagangan, seperti AFTA dan NAFTA.</li>
          </ul>
        </p>
      </section>

      <section className="mb-5">
        <h2>Dampak Perdagangan Internasional</h2>
        <p>
          Dampak positif dan negatif perdagangan internasional antara lain:
          <ul>
            <li><strong>Dampak Positif:</strong> Meningkatkan pendapatan nasional, membuka lapangan kerja baru, meningkatkan akses barang dan jasa, serta mempercepat transfer teknologi.</li>
            <li><strong>Dampak Negatif:</strong> Industri dalam negeri yang kurang kompetitif bisa tergeser, ketergantungan pada barang impor, dan ketidakseimbangan perdagangan.</li>
          </ul>
        </p>
      </section>

      <section className="mb-5">
        <h2>Contoh Perdagangan Internasional di Indonesia</h2>
        <p>
          Indonesia memiliki ekspor utama seperti minyak kelapa sawit, batu bara, karet, kopi, dan produk perikanan. Impor utama Indonesia mencakup bahan baku industri, barang modal, serta barang konsumsi seperti elektronik dan kendaraan.
        </p>
      </section>

      <section className="mt-5">
        <h2 className="mb-4 text-center"><strong>Mini Kuis</strong></h2>
        <Card className="p-4 mb-3 shadow-lg rounded-lg border-0 bg-light">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>1. Apa yang menyebabkan perdagangan internasional terjadi?</Form.Label>
              <Form.Check
                type="radio"
                label="Perbedaan Sumber Daya Alam"
                name="quiz1"
                value="perbedaan sumber daya alam"
                onChange={handleQuizChange}
              />
              <Form.Check
                type="radio"
                label="Perbedaan Iklim"
                name="quiz1"
                value="perbedaan iklim"
                onChange={handleQuizChange}
              />
              <Form.Check
                type="radio"
                label="Perbedaan Bahasa"
                name="quiz1"
                value="perbedaan bahasa"
                onChange={handleQuizChange}
              />
              {quizFeedback.quiz1 && (
                <p className={quizFeedback.quiz1.includes("Benar") ? "text-success" : "text-danger"}>
                  {quizFeedback.quiz1} {quizFeedback.quiz1.includes("Benar") ? <FaCheckCircle /> : <FaTimesCircle />}
                </p>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>2. Apa yang dimaksud dengan ekspor dan impor?</Form.Label>
              <Form.Check
                type="radio"
                label="Ekspor adalah penjualan barang ke luar negeri, Impor adalah pembelian barang dari luar negeri"
                name="quiz2"
                value="ekspor dan impor"
                onChange={handleQuizChange}
              />
              <Form.Check
                type="radio"
                label="Ekspor adalah pembelian barang dari luar negeri, Impor adalah penjualan barang ke luar negeri"
                name="quiz2"
                value="ekspor dan impor salah"
                onChange={handleQuizChange}
              />
              {quizFeedback.quiz2 && (
                <p className={quizFeedback.quiz2.includes("Benar") ? "text-success" : "text-danger"}>
                  {quizFeedback.quiz2} {quizFeedback.quiz2.includes("Benar") ? <FaCheckCircle /> : <FaTimesCircle />}
                </p>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>3. Apa yang dimaksud dengan kebijakan proteksionisme?</Form.Label>
              <Form.Check
                type="radio"
                label="Melindungi industri dalam negeri dengan tarif dan kuota"
                name="quiz3"
                value="proteksionisme"
                onChange={handleQuizChange}
              />
              <Form.Check
                type="radio"
                label="Mendorong perdagangan bebas tanpa hambatan"
                name="quiz3"
                value="liberalisasi"
                onChange={handleQuizChange}
              />
              {quizFeedback.quiz3 && (
                <p className={quizFeedback.quiz3.includes("Benar") ? "text-success" : "text-danger"}>
                  {quizFeedback.quiz3} {quizFeedback.quiz3.includes("Benar") ? <FaCheckCircle /> : <FaTimesCircle />}
                </p>
              )}
            </Form.Group>

            <Button variant="primary" onClick={checkAnswers}>
              Cek Jawaban
            </Button>
          </Form>
        </Card>
      </section>
      <button 
                onClick={() => window.history.back()} 
                className="btn btn-secondary mt-4"
            >
                Kembali 
            </button>
    </Container>
  );
}

export default App;
