import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button, Card } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

function App() {
  const [quizAnswers, setQuizAnswers] = useState({
    quiz1: "",
    quiz2: "",
    quiz3: "",
    quiz4: "",
  });

  const [quizFeedback, setQuizFeedback] = useState({
    quiz1: "",
    quiz2: "",
    quiz3: "",
    quiz4: "",
  });

  const cycleCanvasRef = useRef(null);

  const handleQuizChange = (e) => {
    const { name, value } = e.target;
    setQuizAnswers({ ...quizAnswers, [name]: value });
  };

  const checkAnswers = () => {
    const correctAnswers = {
      quiz1: "Ekspansi",
      quiz2: "Puncak",
      quiz3: "Resesi",
      quiz4: "Pemulihan",
    };

    setQuizFeedback({
      quiz1: quizAnswers.quiz1 === correctAnswers.quiz1 ? "Benar!" : "Salah, jawabannya adalah 'Ekspansi'.",
      quiz2: quizAnswers.quiz2 === correctAnswers.quiz2 ? "Benar!" : "Salah, jawabannya adalah 'Puncak'.",
      quiz3: quizAnswers.quiz3 === correctAnswers.quiz3 ? "Benar!" : "Salah, jawabannya adalah 'Resesi'.",
      quiz4: quizAnswers.quiz4 === correctAnswers.quiz4 ? "Benar!" : "Salah, jawabannya adalah 'Pemulihan'.",
    });
  };

  useEffect(() => {
    const canvas = cycleCanvasRef.current;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "blue";
      ctx.lineWidth = 2;
      ctx.font = "14px Arial";

      ctx.beginPath();
      ctx.moveTo(50, 250);
      ctx.lineTo(50, 50);
      ctx.moveTo(50, 250);
      ctx.lineTo(450, 250);
      ctx.stroke();
      ctx.closePath();

      ctx.fillStyle = "#000";
      ctx.fillText("Waktu", 420, 270);
      ctx.fillText("Kinerja Ekonomi", 10, 60);

      ctx.beginPath();
      ctx.moveTo(50, 250); 
      ctx.bezierCurveTo(150, 100, 200, 100, 250, 250); 
      ctx.bezierCurveTo(300, 400, 350, 400, 400, 250);
      ctx.strokeStyle = "green";
      ctx.stroke();
      ctx.closePath();

      ctx.fillStyle = "green";
      ctx.fillText("Ekspansi", 120, 150);
      ctx.fillText("Puncak", 220, 80);
      ctx.fillText("Resesi", 320, 150);
      ctx.fillText("Lembah", 420, 260);
    }
  }, []);

  return (
    <Container className="my-5">
      <header className="text-center mb-5">
        <h1 className="app__header text-center mb-5">Bab 5: Siklus Ekonomi</h1>
        <p className="app__header__description lead text-muted" style={{ textAlign: "justify" }}>
        Siklus ekonomi adalah pola perubahan aktivitas ekonomi suatu negara yang terjadi secara berulang dalam periode tertentu. Siklus ini mencerminkan fluktuasi dalam tingkat pertumbuhan ekonomi yang dapat memengaruhi produksi, pendapatan, investasi, konsumsi, dan lapangan kerja. Siklus ekonomi terdiri dari empat tahap utama: ekspansi, puncak, kontraksi, dan resesi atau depresi.
        </p>
      </header>

      <section className="app__section mb-5 text-center mb-5">
        <h2 className="app__section__title">Siklus Ekonomi dalam Grafik</h2>
        <canvas ref={cycleCanvasRef} width="500" height="300" style={{ border: "1px solid #ccc" }}></canvas>
      </section>

      <section className="app__section mb-5">
        <h2 className="app__section__title">Tahapan Siklus Ekonomi</h2>
        <p className="app__section__content">
          Siklus ekonomi terdiri dari empat tahap utama: Ekspansi, Puncak, Kontraksi, dan Resesi/Pemulihan.
        </p>
        <ul>
          <li><strong>Ekspansi:</strong>Tahap ini ditandai dengan pertumbuhan ekonomi yang positif.
            Produksi meningkat karena permintaan barang dan jasa yang tinggi.
            Lapangan kerja bertambah, tingkat pengangguran menurun, dan pendapatan masyarakat meningkat.
            Investasi oleh perusahaan dan konsumsi masyarakat berada pada tingkat yang tinggi.
            Inflasi mulai naik, tetapi masih dalam batas wajar.
            </li>
          <li><strong>Puncak:</strong> Ekonomi mencapai tingkat pertumbuhan tertinggi dalam siklus.
            Permintaan barang dan jasa berada pada titik maksimal, menyebabkan tekanan inflasi meningkat.
            Kapasitas produksi mencapai batas maksimal, dan sulit bagi produsen untuk memenuhi permintaan tambahan.
            Biasanya, di tahap ini, kebijakan moneter yang ketat mulai diterapkan untuk mengendalikan inflasi.
            </li>
          <li><strong>Kontraksi:</strong> Tahap ini ditandai dengan perlambatan aktivitas ekonomi.
            Permintaan barang dan jasa menurun, menyebabkan produksi berkurang.
            Pengangguran mulai meningkat karena perusahaan mengurangi produksi dan investasi.
            Inflasi cenderung menurun atau terjadi deflasi (penurunan harga barang).
            Kepercayaan konsumen dan investor menurun, yang memperburuk kondisi ekonomi.
            </li>
          <li><strong>Resesi/Pemulihan:</strong>Ekonomi mulai bangkit dari resesi atau depresi.
            Permintaan barang dan jasa kembali meningkat, mendorong produksi dan investasi.
            Tingkat pengangguran menurun, dan pendapatan masyarakat mulai naik.
            Kepercayaan konsumen dan investor pulih, menandai dimulainya siklus ekspansi baru.
            </li>
        </ul>
      </section>

      <section className="app__section mb-5">
        <h2 className="app__section__title">Faktor Penyebab Siklus Ekonomi</h2>
        <ul>
          <li><strong>Internal:</strong>Perubahan Permintaan dan Penawaran: Fluktuasi dalam konsumsi, investasi, dan produksi dapat memengaruhi siklus ekonomi.
            Kebijakan Pemerintah: Kebijakan fiskal (pengeluaran dan pajak) dan moneter (suku bunga dan uang beredar) dapat memengaruhi aktivitas ekonomi.
            Inovasi Teknologi: Penemuan baru dapat mendorong ekspansi, tetapi adaptasi yang lambat dapat memicu kontraksi.
          </li>
          <li><strong>Eksternal:</strong> Perubahan harga komoditas, krisis keuangan global, bencana alam, dan pandemi.</li>
        </ul>
      </section>

      <section className="app__section mb-5">
        <h2 className="app__section__title">Dampak Siklus Ekonomi</h2>
        <ul>
          <li><strong>Ekspansi:</strong> Pendapatan masyarakat meningkat, pengangguran menurun, ekonomi tumbuh.</li>
          <li><strong>Kontraksi:</strong>Perubahan Harga Komoditas: Harga minyak, gas, atau bahan baku penting lainnya dapat memengaruhi ekonomi global.
          Krisis Keuangan Global: Peristiwa seperti krisis 2008 dapat memicu kontraksi di berbagai negara.
          Bencana Alam atau Pandemi: Situasi seperti pandemi COVID-19 dapat memperlambat ekonomi secara signifikan.
          </li>
        </ul>
      </section>

      <section className="app__section mb-5">
        <h2 className="app__section__title">Strategi Menghadapi Siklus Ekonomi</h2>
        <ul>
          <li><strong>Ekspansi:</strong> Pemerintah dapat menerapkan kebijakan moneter ketat untuk mencegah inflasi berlebih.</li>
          <li><strong>Kontraksi:</strong> Pemerintah dapat memberikan stimulus fiskal untuk mendorong pertumbuhan.</li>
        </ul>
      </section>
      <section className="app__section mt-5">
        <h2 className="app__section__title mb-4 text-center"><strong>Mini Kuis</strong></h2>
        <Card className="p-4 mb-3 shadow-lg rounded-lg border-0 bg-light">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>1. Tahap apa yang ditandai dengan pertumbuhan ekonomi yang positif dan penurunan pengangguran?</Form.Label>
              <Form.Check
                type="radio"
                label="Ekspansi"
                name="quiz1"
                value="Ekspansi"
                onChange={handleQuizChange}
              />
              <Form.Check
                type="radio"
                label="Puncak"
                name="quiz1"
                value="Puncak"
                onChange={handleQuizChange}
              />
              {quizFeedback.quiz1 && (
                <p className={quizFeedback.quiz1.includes("Benar") ? "text-success" : "text-danger"}>
                  {quizFeedback.quiz1} {quizFeedback.quiz1.includes("Benar") ? <FaCheckCircle /> : <FaTimesCircle />}
                </p>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>2. Apa yang terjadi pada ekonomi saat mencapai titik tertinggi dalam siklus?</Form.Label>
              <Form.Check
                type="radio"
                label="Puncak"
                name="quiz2"
                value="Puncak"
                onChange={handleQuizChange}
              />
              <Form.Check
                type="radio"
                label="Pemulihan"
                name="quiz2"
                value="Pemulihan"
                onChange={handleQuizChange}
              />
              {quizFeedback.quiz2 && (
                <p className={quizFeedback.quiz2.includes("Benar") ? "text-success" : "text-danger"}>
                  {quizFeedback.quiz2} {quizFeedback.quiz2.includes("Benar") ? <FaCheckCircle /> : <FaTimesCircle />}
                </p>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>3. Apa yang terjadi pada ekonomi saat terjadi penurunan tajam dalam PDB?</Form.Label>
              <Form.Check
                type="radio"
                label="Resesi"
                name="quiz3"
                value="Resesi"
                onChange={handleQuizChange}
              />
              <Form.Check
                type="radio"
                label="Ekspansi"
                name="quiz3"
                value="Ekspansi"
                onChange={handleQuizChange}
              />
              {quizFeedback.quiz3 && (
                <p className={quizFeedback.quiz3.includes("Benar") ? "text-success" : "text-danger"}>
                  {quizFeedback.quiz3} {quizFeedback.quiz3.includes("Benar") ? <FaCheckCircle /> : <FaTimesCircle />}
                </p>
              )}
            </Form.Group>
            <Button className="app__button" variant="primary" onClick={checkAnswers}>
              Cek Jawaban
            </Button>
          </Form>
        </Card>
      </section>

      <button onClick={() => window.history.back()} className="app__button mt-4 mx-auto d-block">
        Kembali
      </button>
    </Container>
  );
}

export default App;