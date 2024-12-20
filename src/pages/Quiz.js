import React, { useState,useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Quiz() {
    useEffect(() => {
        AOS.init({ duration: 1200 });
      }, []);

    const allQuestions = [
        {
            question: "Apa masalah ekonomi dasar yang dihadapi oleh setiap masyarakat?",
            options: ["Inflasi", "Kelangkaan", "Pengangguran", "Pengeluaran Pemerintah"],
            answer: "Kelangkaan",
            explanation: "Kelangkaan adalah masalah ekonomi dasar karena sumber daya yang terbatas tidak cukup untuk memenuhi kebutuhan manusia yang tidak terbatas."
        },
        {
            question: "Apa istilah yang digunakan untuk menggambarkan biaya dari alternatif terbaik berikutnya yang diabaikan?",
            options: ["Biaya Peluang", "Biaya Marginal", "Biaya Variabel", "Biaya Tetap"],
            answer: "Biaya Peluang",
            explanation: "Biaya peluang adalah nilai dari alternatif terbaik yang harus dikorbankan ketika membuat keputusan ekonomi."
        },
        {
            question: "Mana yang termasuk faktor produksi?",
            options: ["Uang", "Tenaga Kerja", "Kebijakan Pemerintah", "Impor"],
            answer: "Tenaga Kerja",
            explanation: "Faktor produksi meliputi tanah, tenaga kerja, modal, dan kewirausahaan, yang digunakan untuk menghasilkan barang dan jasa."
        },
        {
            question: "Sistem ekonomi manakah yang bergantung pada penawaran dan permintaan untuk menentukan harga?",
            options: ["Ekonomi Terencana", "Ekonomi Campuran", "Ekonomi Pasar", "Ekonomi Tradisional"],
            answer: "Ekonomi Pasar",
            explanation: "Dalam ekonomi pasar, harga barang dan jasa ditentukan oleh kekuatan penawaran dan permintaan tanpa campur tangan pemerintah."
        },
        {
            question: "Apa yang disebut dengan peningkatan berkelanjutan pada tingkat harga umum barang dan jasa dalam perekonomian?",
            options: ["Resesi", "Deflasi", "Depresiasi", "Inflasi"],
            answer: "Inflasi",
            explanation: "Inflasi adalah peningkatan berkelanjutan pada tingkat harga umum dalam perekonomian yang mengurangi daya beli uang."
        },
        {
            question: "Apa tujuan utama dari kebijakan moneter?",
            options: ["Pekerjaan penuh", "Mengendalikan inflasi", "Mengurangi kemiskinan", "Surplus perdagangan"],
            answer: "Mengendalikan inflasi",
            explanation: "Tujuan utama kebijakan moneter adalah menjaga stabilitas harga dengan mengendalikan inflasi. Kebijakan ini juga berperan dalam mendukung pertumbuhan ekonomi dan mencapai tingkat pengangguran yang rendah.",
          },
          {
            question: "Lembaga manakah yang terutama bertanggung jawab atas kebijakan moneter di sebagian besar negara?",
            options: ["Pemerintah", "Bank Sentral", "Bank Komersial", "Pasar Saham"],
            answer: "Bank Sentral",
            explanation: "Bank Sentral bertanggung jawab dalam pelaksanaan kebijakan moneter, seperti pengaturan suku bunga, pengendalian jumlah uang yang beredar, dan operasi pasar terbuka.",
          },
          {
            question: "Apa alat utama yang digunakan dalam kebijakan moneter?",
            options: ["Pajak Pendapatan", "Suku Bunga", "Tarif", "Subsidi"],
            answer: "Suku Bunga",
            explanation: "Suku bunga adalah alat utama yang digunakan untuk mengendalikan inflasi dan mendorong pertumbuhan ekonomi. Dengan menaikkan atau menurunkan suku bunga, Bank Sentral dapat memengaruhi jumlah uang yang beredar.",
          },
          {
            question: "Istilah apa yang mengacu pada perdagangan tanpa pembatasan pemerintah?",
            options: ["Tarif", "Embargo", "Perdagangan Bebas", "Subsidi"],
            answer: "Perdagangan Bebas",
            explanation:
              "Perdagangan bebas adalah sistem perdagangan internasional tanpa pembatasan seperti tarif, kuota, atau embargo. Tujuannya adalah meningkatkan efisiensi ekonomi dan pertumbuhan global.",
          },
          {
            question: "Apa istilah untuk pajak yang dikenakan pada barang impor?",
            options: ["Subsidi", "Kuota", "Tarif", "Embargo"],
            answer: "Tarif",
            explanation:
              "Tarif adalah pajak yang dikenakan pada barang impor untuk melindungi industri domestik dan meningkatkan pendapatan pemerintah.",
          },
          {
            question: "Negara yang fokus pada produksi barang yang paling efisien disebut sedang melakukan apa?",
            options: ["Keunggulan Absolut", "Keunggulan Komparatif", "Surplus Perdagangan", "Kejenuhan Pasar"],
            answer: "Keunggulan Komparatif",
            explanation:
              "Keunggulan komparatif terjadi ketika suatu negara memproduksi barang dengan biaya relatif lebih rendah dibandingkan negara lain, memungkinkan perdagangan internasional yang saling menguntungkan.",
          },
          {
            question: "Organisasi internasional mana yang mengawasi aturan perdagangan global?",
            options: ["PBB", "IMF", "Bank Dunia", "WTO"],
            answer: "WTO",
            explanation:
              "WTO (World Trade Organization) adalah organisasi internasional yang mengatur dan memfasilitasi perdagangan global serta menyelesaikan sengketa dagang antar negara.",
          },
          {
            question: "Defisit perdagangan terjadi ketika:",
            options: ["Ekspor suatu negara melebihi impornya", "Negara berhenti berdagang", "Impor suatu negara melebihi ekspornya", "Negara menggunakan tarif"],
            answer: "Impor suatu negara melebihi ekspornya",
            explanation:
              "Defisit perdagangan terjadi ketika nilai impor suatu negara lebih besar daripada nilai ekspornya, yang dapat memengaruhi keseimbangan pembayaran dan cadangan devisa.",
          },
          {
            question: "Apa yang dimaksud dengan permintaan dalam konteks ekonomi?",
            options: ["Keinginan pembeli", "Jumlah barang yang diinginkan dan mampu dibeli", "Penawaran barang", "Ketersediaan barang"],
            answer: "Jumlah barang yang diinginkan dan mampu dibeli",
            explanation:
              "Permintaan adalah jumlah barang atau jasa yang diinginkan dan mampu dibeli oleh konsumen pada berbagai tingkat harga dalam periode tertentu.",
          },
          {
            question: "Hukum permintaan menyatakan bahwa, ceteris paribus, jika harga barang naik, maka:",
            options: ["Permintaan akan tetap", "Permintaan barang tersebut meningkat", "Permintaan barang tersebut menurun", "Penawaran berkurang"],
            answer: "Permintaan barang tersebut menurun",
            explanation:
              "Hukum permintaan menyatakan bahwa ketika harga suatu barang naik, jumlah barang yang diminta oleh konsumen akan menurun, dengan asumsi faktor lain tetap.",
          },
          {
            question: "Apa yang terjadi ketika harga pasar berada di bawah harga keseimbangan?",
            options: ["Kelebihan penawaran", "Kekurangan permintaan", "Kelebihan permintaan", "Ekuilibrium"],
            answer: "Kelebihan permintaan",
            explanation:
              "Ketika harga pasar di bawah harga keseimbangan, jumlah barang yang diminta lebih besar daripada jumlah barang yang ditawarkan, menciptakan kelebihan permintaan atau kelangkaan.",
          },
          {
            question: "Elastisitas harga permintaan mengukur:",
            options: ["Respons jumlah barang yang diminta terhadap perubahan harga", "Pendapatan nasional", "Jumlah barang yang diproduksi", "Penawaran barang"],
            answer: "Respons jumlah barang yang diminta terhadap perubahan harga",
            explanation:
              "Elastisitas harga permintaan mengukur seberapa besar perubahan jumlah barang yang diminta akibat perubahan harga barang tersebut.",
          },
          {
            question: "Jika permintaan elastis, maka kenaikan harga barang akan:",
            options: ["Meningkatkan total penerimaan", "Mengurangi total penerimaan", "Tidak mempengaruhi total penerimaan", "Meningkatkan jumlah barang diminta"],
            answer: "Mengurangi total penerimaan",
            explanation:
              "Jika permintaan elastis, kenaikan harga akan menyebabkan penurunan yang lebih besar pada jumlah barang yang diminta, sehingga total penerimaan penjual menurun.",
          },
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [score, setScore] = useState(0);
    const [answeredQuestions, setAnsweredQuestions] = useState([]);
    const [quizFinished, setQuizFinished] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleOptionChange = (e) => setSelectedOption(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!selectedOption) {
            setErrorMessage('Silakan pilih jawaban sebelum mengirim!');
            return;
        }

        const currentQuestion = allQuestions[currentQuestionIndex];
        const isCorrect = selectedOption === currentQuestion.answer;

        if (isCorrect) {
            setScore(score + 1);
        }

        setAnsweredQuestions([...answeredQuestions, currentQuestionIndex]);
        setSelectedOption('');
        setErrorMessage(''); // Reset pesan error
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex + 1 < allQuestions.length) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption('');
        } else {
            setQuizFinished(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        setSelectedOption('');
        setScore(0);
        setQuizFinished(false);
        setAnsweredQuestions([]);
        setErrorMessage('');
    };

    return (
        <div className="quiz-container">
            <div className="quiz-sidebar" data-aos="fade-right">
                <h2 className="quiz-title">Kuis Ekonomi - Kelas 10</h2>
                <div className="question-list">
                    {allQuestions.map((_, index) => (
                        <button
                            key={index}
                            className={`question-card ${currentQuestionIndex === index ? 'active' : ''}`}
                            onClick={() => setCurrentQuestionIndex(index)}
                            disabled={quizFinished}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
            <div className="quiz-main" data-aos="fade-left">
                {quizFinished ? (
                    <div className="quiz-result">
                        <h2>Kuis Selesai!</h2>
                        <p>Skor Anda: {score} dari {allQuestions.length}</p>
                        <button onClick={restartQuiz} className="btn-restart btn btn-primary">Mulai Lagi</button>
                    </div>
                ) : (
                    <div className="question-box">
                        <h2>{allQuestions[currentQuestionIndex].question}</h2>
                        {errorMessage && (
                    <div className="alert-container alert-danger">
                        <span>{errorMessage}</span>
                        <button
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                        onClick={() => setErrorMessage('')}
                        >
                        &times;
                        </button>
                    </div>
                    )}

                        {!answeredQuestions.includes(currentQuestionIndex) ? (
                            <form onSubmit={handleSubmit}>
                                <div className="options">
                                    {allQuestions[currentQuestionIndex].options.map((option, index) => (
                                        <div key={index} className={`option ${selectedOption === option ? 'active' : ''}`}>
                                            <input
                                                type="radio"
                                                id={`option-${index}`}
                                                name="quiz-option"
                                                value={option}
                                                checked={selectedOption === option}
                                                onChange={handleOptionChange}
                                                className="option-input"
                                            />
                                            <label htmlFor={`option-${index}`} className="option-label">{option}</label>
                                        </div>
                                    ))}
                                </div>
                                <button type="submit" className="btn-nav btn btn-success">
                                    {currentQuestionIndex === allQuestions.length - 1 ? 'Finish Quiz' : 'Kirim Jawaban'}
                                </button>
                            </form>
                        ) : (
                            <div className="explanation">
                                <p>
                                    {selectedOption === allQuestions[currentQuestionIndex].answer
                                        ? "Jawaban Anda benar!"
                                        : `Jawaban Anda salah. Jawaban yang benar adalah: ${allQuestions[currentQuestionIndex].answer}`
                                    }
                                </p>
                                <p><strong>Penjelasan:</strong> {allQuestions[currentQuestionIndex].explanation}</p>
                                <button onClick={handleNextQuestion} className="btn-next btn btn-primary">
                                    {currentQuestionIndex === allQuestions.length - 1 ? 'Finish Quiz' : 'Soal Berikutnya'}
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Quiz;
