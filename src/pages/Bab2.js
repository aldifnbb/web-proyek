import React, { useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button, Card } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"; 
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  
  const navigate = useNavigate();
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

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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

  const handleBackClick = () => {
    navigate(-1);
    setQuizAnswers({
      quiz1: "",
      quiz2: "",
      quiz3: "",
    });
    setQuizFeedback({
      quiz1: "",
      quiz2: "",
      quiz3: "",
    });
  };

  return (
    <Container className="my-5">
      <header className="app__header text-center" style={{ marginTop: "-100px" }} data-aos="fade-up">
        <h1 className="app__header h1">Bab 2: Kebijakan Moneter</h1>
        <p className="app__header__content">
          Kebijakan moneter adalah upaya yang dilakukan oleh otoritas moneter, seperti bank sentral, untuk mengelola jumlah uang yang beredar dan tingkat suku bunga dalam perekonomian. Tujuannya adalah menjaga stabilitas ekonomi, mengendalikan inflasi, menciptakan kesempatan kerja yang optimal, serta mendorong pertumbuhan ekonomi yang berkelanjutan.
        </p>
        <p className="app__header__content">
          Bank sentral di Indonesia, yaitu Bank Indonesia (BI), bertanggung jawab atas pelaksanaan kebijakan moneter. Alat utama kebijakan ini adalah pengaturan likuiditas di pasar untuk menjaga kestabilan nilai tukar rupiah, inflasi, dan sistem keuangan secara keseluruhan.
        </p>
      </header>


      <section className="app__section mb-5" data-aos="fade-right">
        <h2 className="app__section__title" data-aos="fade-up">Tujuan Kebijakan Moneter</h2>
        <p className="app__section__description">
          Kebijakan moneter bertujuan untuk mencapai beberapa tujuan penting, antara lain:
          <ul>
            <li><strong>Mengendalikan Inflasi:</strong> Mengendalikan Inflasi: Kebijakan ini bertujuan menjaga tingkat inflasi agar berada dalam batas yang ditetapkan. Inflasi yang terlalu tinggi atau rendah dapat berdampak buruk pada daya beli masyarakat dan stabilitas ekonomi.</li>
            <li><strong>Menstabilkan Nilai Tukar:</strong> Kebijakan moneter membantu menjaga nilai tukar mata uang domestik terhadap mata uang asing untuk mendukung stabilitas ekonomi, terutama di negara yang bergantung pada perdagangan internasional.</li>
            <li><strong>Mendorong Pertumbuhan Ekonomi:</strong> Dengan menjaga likuiditas yang cukup di pasar, kebijakan moneter mendukung kegiatan investasi, produksi, dan konsumsi, sehingga membantu pertumbuhan ekonomi.</li>
            <li><strong>Menciptakan Kesempatan Kerja:</strong> Mengurangi tingkat pengangguran dengan menciptakan kondisi yang mendukung aktivitas ekonomiKebijakan moneter juga berperan dalam menjaga tingkat pengangguran dengan menciptakan kondisi yang mendukung aktivitas ekonomi.</li>
          </ul>
        </p>
        <img
        src="https://i.pinimg.com/736x/6d/92/eb/6d92ebe76139187508a1644847796ad0.jpg"
        className="img-fluid rounded my-1"
        />
      </section>

      <section className="app__section mb-5" data-aos="fade-left">
        <h2 className="app__section__title">Jenis Kebijakan Moneter</h2>
        <p className="app__section__description">
          Kebijakan moneter terbagi menjadi dua jenis utama:
          <ul>
            <li><strong>Kebijakan Moneter Ekspansif:</strong> Kebijakan ini dilakukan untuk meningkatkan jumlah uang yang beredar di masyarakat. Biasanya diterapkan saat perekonomian sedang mengalami perlambatan atau resesi. Tujuannya adalah mendorong investasi dan konsumsi.</li>
            <p><strong>Contoh: </strong>Penurunan suku bunga, pembelian surat berharga oleh bank sentral.</p>
            <li><strong>Kebijakan Moneter Kontraktif:</strong> Kebijakan ini bertujuan mengurangi jumlah uang yang beredar untuk mengendalikan inflasi yang terlalu tinggi.</li>
            <p><strong>Contoh:</strong>Peningkatan suku bunga, penjualan surat berharga oleh bank sentral.</p>
          </ul>
        </p>
      </section>

      <section className="app__section mb-5" data-aos="fade-right">
        <h2 className="app__section__title">Alat Kebijakan Moneter</h2>
        <p className="app__section__content">
          Berikut adalah beberapa alat utama yang digunakan dalam kebijakan moneter:
          <ul>
            <li><strong>Operasi Pasar Terbuka (OPT):</strong> Bank sentral membeli atau menjual surat berharga negara di pasar terbuka untuk mengontrol likuiditas.</li>
            <li><strong>Penetapan Suku Bunga (BI Rate):</strong> Menentukan suku bunga acuan untuk memengaruhi pinjaman dan tabungan.</li>
            <li><strong>Cadangan Wajib Minimum:</strong> Bank sentral mengatur jumlah cadangan yang harus disimpan bank umum di bank sentral.</li>
            <li><strong>Kebijakan Kredit Selektif:</strong> Bank sentral dapat menetapkan kebijakan yang mengarahkan alokasi kredit ke sektor tertentu yang dianggap prioritas.</li>
            <li><strong>Intervensi Nilai Tukar:</strong> Bank sentral dapat membeli atau menjual valuta asing untuk menjaga kestabilan nilai tukar mata uang domestik.</li>
          </ul>
        </p>
        <img 
        src="https://i.pinimg.com/736x/ba/75/1b/ba751b43284767e60e7870cc9bb0ebf7.jpg"
        className="img-fluid rounded my-1"
        />
      </section>

      <section className="app__section mb-5" data-aos="fade-left">
        <h2 className="app__section__title">Dampak Kebijakan Moneter</h2>
        <p className="app__section__content">
          Dampak dari kebijakan moneter dapat dibagi menjadi dampak positif dan negatif:
          <ul>
            <li><strong>Dampak Positif:</strong> Meningkatkan stabilitas ekonomi, mengendalikan inflasi, dan mendorong pertumbuhan ekonomi.</li>
            <li><strong>Dampak Negatif:</strong> Kebijakan yang terlalu ketat dapat menekan pertumbuhan ekonomi, sedangkan kebijakan yang longgar dapat memicu inflasi.</li>
          </ul>
        </p>
      </section>
      <section className="mb-5" data-aos="fade-right">
        <h2 className="app__section__title">Video Pembelajaran</h2>
        <p className="app__section__content text-center">
          Tonton video ini agar kamu lebih memahami materi tenatng kebijakan moneter.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "300px",
          }}
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/KMPnVroI2vE"
            title="Video Pembelajaran"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded"
          ></iframe>
        </div>
    </section>

      <section className="mt-5" data-aos="fade-left">
        <h2 className="mb-4 text-center"><strong>Mini Kuis</strong></h2>
        <Card className="app__card p-4 mb-3 shadow-lg rounded-lg border-0 bg-light">
          <Form>
            <Form.Group className="app__form-group mb-3">
              <Form.Label className="app__form-label">1. Apa tujuan utama dari kebijakan moneter?</Form.Label>
              <Form.Check
                type="radio"
                label="Mengendalikan Inflasi"
                name="quiz1"
                value="mengendalikan inflasi"
                onChange={handleQuizChange}
                className="app__form-check"
              />
              <Form.Check
                type="radio"
                label="Mengurangi Pengangguran"
                name="quiz1"
                value="mengurangi pengangguran"
                onChange={handleQuizChange}
                className="app__form-check"
              />
              <Form.Check
                type="radio"
                label="Meningkatkan Ekspor"
                name="quiz1"
                value="meningkatkan ekspor"
                onChange={handleQuizChange}
                className="app__form-check"
              />
              {quizFeedback.quiz1 && (
                <p className={`mt-2 app__form-feedback ${quizAnswers.quiz1 === "mengendalikan inflasi" ? "text-success" : "text-danger"}`}>
                  {quizAnswers.quiz1 === "mengendalikan inflasi" ? <FaCheckCircle /> : <FaTimesCircle />} {quizFeedback.quiz1}
                </p>
              )}
            </Form.Group>

            <Form.Group className="app__form-group mb-3">
              <Form.Label className="app__form-label">2. Alat kebijakan moneter yang digunakan untuk mengontrol jumlah uang yang beredar adalah?</Form.Label>
              <Form.Check
                type="radio"
                label="Penetapan Suku Bunga"
                name="quiz2"
                value="penetapan suku bunga"
                onChange={handleQuizChange}
                className="app__form-check"
              />
              <Form.Check
                type="radio"
                label="Kebijakan Kredit Selektif"
                name="quiz2"
                value="kebijakan kredit selektif"
                onChange={handleQuizChange}
                className="app__form-check"
              />
              <Form.Check
                type="radio"
                label="Penurunan Suku Bunga"
                name="quiz2"
                value="penurunan suku bunga"
                onChange={handleQuizChange}
                className="app__form-check"
              />
              {quizFeedback.quiz2 && (
                <p className={`mt-2 app__form-feedback ${quizAnswers.quiz2 === "penurunan suku bunga" ? "text-success" : "text-danger"}`}>
                  {quizAnswers.quiz2 === "penurunan suku bunga" ? <FaCheckCircle /> : <FaTimesCircle />} {quizFeedback.quiz2}
                </p>
              )}
            </Form.Group>

            <Form.Group className="app__form-group mb-3">
              <Form.Label className="app__form-label">3. Contoh kebijakan moneter ekspansif adalah?</Form.Label>
              <Form.Check
                type="radio"
                label="Meningkatkan Jumlah Uang"
                name="quiz3"
                value="meningkatkan jumlah uang"
                onChange={handleQuizChange}
                className="app__form-check"
              />
              <Form.Check
                type="radio"
                label="Peningkatan Suku Bunga"
                name="quiz3"
                value="peningkatan suku bunga"
                onChange={handleQuizChange}
                className="app__form-check"
              />
              <Form.Check
                type="radio"
                label="Mengurangi Penyaluran Kredit"
                name="quiz3"
                value="mengurangi penyaluran kredit"
                onChange={handleQuizChange}
                className="app__form-check"
              />
              {quizFeedback.quiz3 && (
                <p className={`mt-2 app__form-feedback ${quizAnswers.quiz3 === "meningkatkan jumlah uang" ? "text-success" : "text-danger"}`}>
                  {quizAnswers.quiz3 === "meningkatkan jumlah uang" ? <FaCheckCircle /> : <FaTimesCircle />} {quizFeedback.quiz3}
                </p>
              )}
            </Form.Group>

            <Button className="app__button me-2" variant="primary" onClick={checkAnswers}>Cek Jawaban</Button>
            <Button className="app__button d-flex mx-auto mt-3" variant="secondary" onClick={handleBackClick}>Kembali</Button>
          </Form>
        </Card>

      </section>
    </Container>
  );
}

export default App;
