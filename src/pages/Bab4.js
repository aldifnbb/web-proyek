import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Breadcrumb, Form, Button, Card } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

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
      quiz1: "harga barang naik",
      quiz2: "penurunan harga barang",
      quiz3: "keseimbangan pasar",
    };

    setQuizFeedback({
      quiz1: quizAnswers.quiz1 === correctAnswers.quiz1 ? "Benar!" : "Salah, jawabannya adalah 'Harga barang naik'.",
      quiz2: quizAnswers.quiz2 === correctAnswers.quiz2 ? "Benar!" : "Salah, jawabannya adalah 'Penurunan harga barang'.",
      quiz3: quizAnswers.quiz3 === correctAnswers.quiz3 ? "Benar!" : "Salah, jawabannya adalah 'Keseimbangan pasar'.",
    });
  };

  return (
    <Container className="my-5">
      <Breadcrumb>
        <Breadcrumb.Item href="#">Beranda</Breadcrumb.Item>
        <Breadcrumb.Item active>Bab 4: Permintaan dan Penawaran</Breadcrumb.Item>
      </Breadcrumb>

      <header className="text-center mb-5">
        <h1 className="display-4 text-primary">Bab 4: Permintaan dan Penawaran</h1>
        <p className="lead text-muted">
          Permintaan dan penawaran adalah konsep dasar dalam ekonomi yang menjelaskan bagaimana harga barang atau jasa ditentukan di pasar. Interaksi antara keduanya menciptakan keseimbangan pasar, di mana jumlah barang yang diminta sama dengan jumlah barang yang ditawarkan pada harga tertentu.
        </p>
      </header>

      <section className="mb-5">
        <h2>Permintaan (Demand)</h2>
        <p>
          Permintaan adalah jumlah barang atau jasa yang ingin dan mampu dibeli oleh konsumen pada berbagai tingkat harga dalam periode tertentu. Faktor-faktor yang memengaruhi permintaan termasuk:
          <ul>
            <li><strong>Harga Barang Itu Sendiri:</strong> Jika harga barang naik, permintaan cenderung turun.</li>
            <li><strong>Pendapatan Konsumen:</strong> Pendapatan lebih tinggi berarti lebih banyak barang yang dapat dibeli.</li>
            <li><strong>Harga Barang Substitusi dan Komplementer:</strong> Harga barang substitusi yang naik meningkatkan permintaan barang utama.</li>
            <li><strong>Preferensi Konsumen:</strong> Barang yang sedang tren akan memiliki permintaan yang lebih tinggi.</li>
            <li><strong>Ekspektasi Konsumen:</strong> Jika harga diperkirakan akan naik, permintaan akan meningkat.</li>
            <li><strong>Jumlah Penduduk:</strong> Semakin banyak penduduk, semakin tinggi permintaan.</li>
          </ul>
        </p>
      </section>

      <section className="mb-5">
        <h2>Penawaran (Supply)</h2>
        <p>
          Penawaran adalah jumlah barang atau jasa yang ingin dan mampu dijual oleh produsen pada berbagai tingkat harga dalam periode tertentu. Faktor-faktor yang memengaruhi penawaran antara lain:
          <ul>
            <li><strong>Harga Barang Itu Sendiri:</strong> Jika harga barang meningkat, jumlah barang yang ditawarkan cenderung meningkat.</li>
            <li><strong>Biaya Produksi:</strong> Biaya produksi yang tinggi dapat mengurangi penawaran barang.</li>
            <li><strong>Teknologi:</strong> Teknologi yang lebih efisien meningkatkan penawaran.</li>
            <li><strong>Kebijakan Pemerintah:</strong> Pajak yang tinggi mengurangi penawaran, sementara subsidi dapat meningkatkan penawaran.</li>
            <li><strong>Ekspektasi Produsen:</strong> Produsen mungkin menahan barang jika mereka memperkirakan harga akan naik.</li>
            <li><strong>Jumlah Produsen:</strong> Semakin banyak produsen, semakin banyak barang yang ditawarkan.</li>
          </ul>
        </p>
      </section>

      <section className="mb-5">
        <h2>Keseimbangan Pasar (Market Equilibrium)</h2>
        <p>
          Keseimbangan pasar terjadi ketika jumlah barang yang diminta sama dengan jumlah barang yang ditawarkan pada suatu tingkat harga tertentu. Harga keseimbangan adalah harga di mana permintaan dan penawaran bertemu, dan jumlah keseimbangan adalah jumlah barang yang dipertukarkan pada harga tersebut.
          <ul>
            <li><strong>Kelebihan Penawaran (Surplus):</strong> Terjadi saat harga terlalu tinggi dan jumlah yang ditawarkan melebihi jumlah yang diminta.</li>
            <li><strong>Kekurangan Penawaran (Shortage):</strong> Terjadi saat harga terlalu rendah, menyebabkan jumlah yang diminta melebihi jumlah yang ditawarkan.</li>
          </ul>
        </p>
      </section>

      <section className="mb-5">
        <h2>Elastisitas Permintaan dan Penawaran</h2>
        <p>
          Elastisitas mengukur sejauh mana permintaan atau penawaran merespon perubahan harga.
          <ul>
            <li><strong>Permintaan Elastis:</strong> Perubahan harga menyebabkan perubahan besar dalam jumlah yang diminta.</li>
            <li><strong>Permintaan Inelastis:</strong> Perubahan harga menyebabkan perubahan kecil dalam jumlah yang diminta.</li>
            <li><strong>Penawaran Elastis:</strong> Penawaran sangat responsif terhadap perubahan harga.</li>
            <li><strong>Penawaran Inelastis:</strong> Penawaran tidak banyak berubah meskipun harga berubah.</li>
          </ul>
        </p>
      </section>

      <section className="mt-5">
        <h2 className="mb-4 text-center"><strong>Mini Kuis</strong></h2>
        <Card className="p-4 mb-3 shadow-lg rounded-lg border-0 bg-light">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>1. Jika harga barang naik, bagaimana pengaruhnya terhadap permintaan?</Form.Label>
              <Form.Check
                type="radio"
                label="Permintaan naik"
                name="quiz1"
                value="harga barang naik"
                onChange={handleQuizChange}
              />
              <Form.Check
                type="radio"
                label="Permintaan turun"
                name="quiz1"
                value="harga barang turun"
                onChange={handleQuizChange}
              />
              {quizFeedback.quiz1 && (
                <p className={quizFeedback.quiz1.includes("Benar") ? "text-success" : "text-danger"}>
                  {quizFeedback.quiz1} {quizFeedback.quiz1.includes("Benar") ? <FaCheckCircle /> : <FaTimesCircle />}
                </p>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>2. Apa yang terjadi pada penawaran jika harga barang turun?</Form.Label>
              <Form.Check
                type="radio"
                label="Penawaran meningkat"
                name="quiz2"
                value="penurunan harga barang"
                onChange={handleQuizChange}
              />
              <Form.Check
                type="radio"
                label="Penawaran menurun"
                name="quiz2"
                value="penurunan penawaran"
                onChange={handleQuizChange}
              />
              {quizFeedback.quiz2 && (
                <p className={quizFeedback.quiz2.includes("Benar") ? "text-success" : "text-danger"}>
                  {quizFeedback.quiz2} {quizFeedback.quiz2.includes("Benar") ? <FaCheckCircle /> : <FaTimesCircle />}
                </p>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>3. Apa yang dimaksud dengan keseimbangan pasar?</Form.Label>
              <Form.Check
                type="radio"
                label="Harga di mana permintaan dan penawaran bertemu"
                name="quiz3"
                value="keseimbangan pasar"
                onChange={handleQuizChange}
              />
              <Form.Check
                type="radio"
                label="Harga barang tertinggi yang dapat dijual"
                name="quiz3"
                value="harga tertinggi"
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
