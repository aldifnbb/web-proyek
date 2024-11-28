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
      quiz1: "mengendalikan inflasi",
      quiz2: "penurunan suku bunga",
      quiz3: "meningkatkan jumlah uang",
    };

    setQuizFeedback({
      quiz1: quizAnswers.quiz1 === correctAnswers.quiz1 ? "Benar!" : "Salah, jawabannya adalah 'Mengendalikan Inflasi'.",
      quiz2: quizAnswers.quiz2 === correctAnswers.quiz2 ? "Benar!" : "Salah, jawabannya adalah 'Penurunan Suku Bunga'.",
      quiz3: quizAnswers.quiz3 === correctAnswers.quiz3 ? "Benar!" : "Salah, jawabannya adalah 'Meningkatkan Jumlah Uang'.",
    });
  };

  return (
    <Container className="my-5">
      <Breadcrumb>
        <Breadcrumb.Item href="#">Beranda</Breadcrumb.Item>
        <Breadcrumb.Item active>Bab 2: Kebijakan Moneter</Breadcrumb.Item>
      </Breadcrumb>

      <header className="text-center mb-5">
        <h1 className="display-4 text-primary">Bab 2: Kebijakan Moneter</h1>
        <p className="lead text-muted">
        Kebijakan moneter adalah upaya yang dilakukan oleh otoritas moneter, seperti bank sentral, untuk mengelola jumlah uang yang beredar dan tingkat suku bunga dalam perekonomian. Tujuannya adalah menjaga stabilitas ekonomi, mengendalikan inflasi, menciptakan kesempatan kerja yang optimal, serta mendorong pertumbuhan ekonomi yang berkelanjutan.
        </p>
        <p className="lead text-muted">
        Bank sentral di Indonesia, yaitu Bank Indonesia (BI), bertanggung jawab atas pelaksanaan kebijakan moneter. Alat utama kebijakan ini adalah pengaturan likuiditas di pasar untuk menjaga kestabilan nilai tukar rupiah, inflasi, dan sistem keuangan secara keseluruhan. 
        </p>
      </header>

      <section className="mb-5">
        <h2>Tujuan Kebijakan Moneter</h2>
        <p>
          Kebijakan moneter bertujuan untuk mencapai beberapa tujuan penting, antara lain:
          <ul>
            <li><strong>Mengendalikan Inflasi:</strong> Mengendalikan Inflasi:
Kebijakan ini bertujuan menjaga tingkat inflasi agar berada dalam batas yang ditetapkan. Inflasi yang terlalu tinggi atau rendah dapat berdampak buruk pada daya beli masyarakat dan stabilitas ekonomi.
</li>
            <li><strong>Menstabilkan Nilai Tukar:</strong>Kebijakan moneter membantu menjaga nilai tukar mata uang domestik terhadap mata uang asing untuk mendukung stabilitas ekonomi, terutama di negara yang bergantung pada perdagangan internasional.
            </li>
            <li><strong>Mendorong Pertumbuhan Ekonomi:</strong> Dengan menjaga likuiditas yang cukup di pasar, kebijakan moneter mendukung kegiatan investasi, produksi, dan konsumsi, sehingga membantu pertumbuhan ekonomi.
            </li>
            <li><strong>Menciptakan Kesempatan Kerja:</strong> Mengurangi tingkat pengangguran dengan menciptakan kondisi yang mendukung aktivitas ekonomiKebijakan moneter juga berperan dalam menjaga tingkat pengangguran dengan menciptakan kondisi yang mendukung aktivitas ekonomi
            .</li>
          </ul>
        </p>
      </section>

      <section className="mb-5">
        <h2>Jenis Kebijakan Moneter</h2>
        <p>
          Kebijakan moneter terbagi menjadi dua jenis utama:
          <ul>
            <li><strong>Kebijakan Moneter Ekspansif:</strong> Kebijakan ini dilakukan untuk meningkatkan jumlah uang yang beredar di masyarakat. Biasanya diterapkan saat perekonomian sedang mengalami perlambatan atau resesi. Tujuannya adalah mendorong investasi dan konsumsi.</li>
            <p><strong>Contoh: </strong>Penurunan suku bunga, pembelian surat berharga oleh bank sentral.</p>
            <li><strong>Kebijakan Moneter Kontraktif:</strong> Kebijakan ini bertujuan mengurangi jumlah uang yang beredar untuk mengendalikan inflasi yang terlalu tinggi.</li>
            <p><strong>Contoh:</strong>Peningkatan suku bunga, penjualan surat berharga oleh bank sentral.
            </p>
          </ul>
        </p>
      </section>

      <section className="mb-5">
        <h2>Alat Kebijakan Moneter</h2>
        <p>
          Berikut adalah beberapa alat utama yang digunakan dalam kebijakan moneter:
          <ul>
            <li><strong>Operasi Pasar Terbuka (OPT):</strong> Bank sentral membeli atau menjual surat berharga negara di pasar terbuka untuk mengontrol likuiditas.

Saat inflasi tinggi, bank sentral menjual surat berharga untuk menyerap uang dari masyarakat.
Saat ekonomi melambat, bank sentral membeli surat berharga untuk menambah uang yang beredar.
</li>
            <li><strong>Penetapan Suku Bunga (BI Rate):</strong> Menentukan suku bunga acuan untuk memengaruhi pinjaman dan tabungan.</li>
            <li><strong>Cadangan Wajib Minimum:</strong> Bank sentral mengatur jumlah cadangan yang harus disimpan bank umum di bank sentral.

Dengan meningkatkan cadangan wajib, uang yang dapat dipinjamkan bank akan berkurang.
Dengan menurunkan cadangan wajib, bank memiliki lebih banyak uang untuk dipinjamkan.
</li>
            <li><strong>Kebijakan Kredit Selektif:</strong>Bank sentral dapat menetapkan kebijakan yang mengarahkan alokasi kredit ke sektor tertentu yang dianggap prioritas.
            </li>
            <li><strong>Intervensi Nilai Tukar:</strong> Bank sentral dapat membeli atau menjual valuta asing untuk menjaga kestabilan nilai tukar mata uang domestik.
            </li>
          </ul>
        </p>
      </section>

      <section className="mb-5">
        <h2>Dampak Kebijakan Moneter</h2>
        <p>
          Dampak dari kebijakan moneter dapat dibagi menjadi dampak positif dan negatif:
          <ul>
            <li><strong>Dampak Positif:</strong> Meningkatkan stabilitas ekonomi, mengendalikan inflasi, dan mendorong pertumbuhan ekonomi.</li>
            <li><strong>Dampak Negatif:</strong> Kebijakan yang terlalu ketat dapat menekan pertumbuhan ekonomi, sedangkan kebijakan yang longgar dapat memicu inflasi.</li>
          </ul>
        </p>
      </section>

      <section className="mt-5">
        <h2 className="mb-4 text-center"><strong>Mini Kuis</strong></h2>
        <Card className="p-4 mb-3 shadow-lg rounded-lg border-0 bg-light">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>1. Apa tujuan utama dari kebijakan moneter?</Form.Label>
              <Form.Check
                type="radio"
                label="Mengendalikan Inflasi"
                name="quiz1"
                value="mengendalikan inflasi"
                onChange={handleQuizChange}
              />
              <Form.Check
                type="radio"
                label="Mengurangi Pengangguran"
                name="quiz1"
                value="mengurangi pengangguran"
                onChange={handleQuizChange}
              />
              <Form.Check
                type="radio"
                label="Meningkatkan Ekspor"
                name="quiz1"
                value="meningkatkan ekspor"
                onChange={handleQuizChange}
              />
              {quizFeedback.quiz1 && (
                <p className={`mt-2 ${quizAnswers.quiz1 === "mengendalikan inflasi" ? "text-success" : "text-danger"}`}>
                  {quizAnswers.quiz1 === "mengendalikan inflasi" ? <FaCheckCircle /> : <FaTimesCircle />} {quizFeedback.quiz1}
                </p>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>2. Alat kebijakan moneter yang digunakan untuk mengontrol jumlah uang yang beredar adalah?</Form.Label>
              <Form.Check
                type="radio"
                label="Penetapan Suku Bunga"
                name="quiz2"
                value="penurunan suku bunga"
                onChange={handleQuizChange}
              />
              <Form.Check
                type="radio"
                label="Kebijakan Kredit Selektif"
                name="quiz2"
                value="kebijakan kredit selektif"
                onChange={handleQuizChange}
              />
              <Form.Check
                type="radio"
                label="Operasi Pasar Terbuka"
                name="quiz2"
                value="operasi pasar terbuka"
                onChange={handleQuizChange}
              />
              {quizFeedback.quiz2 && (
                <p className={`mt-2 ${quizAnswers.quiz2 === "operasi pasar terbuka" ? "text-success" : "text-danger"}`}>
                  {quizAnswers.quiz2 === "operasi pasar terbuka" ? <FaCheckCircle /> : <FaTimesCircle />} {quizFeedback.quiz2}
                </p>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>3. Kebijakan moneter ekspansif dilakukan untuk?</Form.Label>
              <Form.Check
                type="radio"
                label="Meningkatkan Jumlah Uang"
                name="quiz3"
                value="meningkatkan jumlah uang"
                onChange={handleQuizChange}
              />
              <Form.Check
                type="radio"
                label="Mengurangi Inflasi"
                name="quiz3"
                value="mengurangi inflasi"
                onChange={handleQuizChange}
              />
              <Form.Check
                type="radio"
                label="Mengurangi Pengangguran"
                name="quiz3"
                value="mengurangi pengangguran"
                onChange={handleQuizChange}
              />
              {quizFeedback.quiz3 && (
                <p className={`mt-2 ${quizAnswers.quiz3 === "meningkatkan jumlah uang" ? "text-success" : "text-danger"}`}>
                  {quizAnswers.quiz3 === "meningkatkan jumlah uang" ? <FaCheckCircle /> : <FaTimesCircle />} {quizFeedback.quiz3}
                </p>
              )}
            </Form.Group>

            <Button variant="primary" onClick={checkAnswers}>Cek Jawaban</Button>
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
