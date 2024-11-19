import React, { useState } from "react";
import './Quiz.css';
import Navbar from "../components/Navbar";

function Quiz() {
    const chapterQuestions = { 
        1: [
            {
                question: "Apa masalah ekonomi dasar yang dihadapi oleh setiap masyarakat?",
                options: ["Inflasi", "Kelangkaan", "Pengangguran", "Pengeluaran Pemerintah"],
                answer: "Kelangkaan",
            },
            {
                question: "Apa istilah yang digunakan untuk menggambarkan biaya dari alternatif terbaik berikutnya yang diabaikan?",
                options: ["Biaya Peluang", "Biaya Marginal", "Biaya Variabel", "Biaya Tetap"],
                answer: "Biaya Peluang",
            },
            {
                question: "Mana yang termasuk faktor produksi?",
                options: ["Uang", "Tenaga Kerja", "Kebijakan Pemerintah", "Impor"],
                answer: "Tenaga Kerja",
            },
            {
                question: "Sistem ekonomi manakah yang bergantung pada penawaran dan permintaan untuk menentukan harga?",
                options: ["Ekonomi Terencana", "Ekonomi Campuran", "Ekonomi Pasar", "Ekonomi Tradisional"],
                answer: "Ekonomi Pasar",
            },
            {
                question: "Apa yang disebut dengan peningkatan berkelanjutan pada tingkat harga umum barang dan jasa dalam perekonomian?",
                options: ["Resesi", "Deflasi", "Depresiasi", "Inflasi"],
                answer: "Inflasi",
            },
        ],
        2: [
            {
                question: "Apa tujuan utama dari kebijakan moneter?",
                options: ["Pekerjaan penuh", "Mengendalikan inflasi", "Mengurangi kemiskinan", "Surplus perdagangan"],
                answer: "Mengendalikan inflasi",
            },
            {
                question: "Lembaga manakah yang terutama bertanggung jawab atas kebijakan moneter di sebagian besar negara?",
                options: ["Pemerintah", "Bank Sentral", "Bank Komersial", "Pasar Saham"],
                answer: "Bank Sentral",
            },
            {
                question: "Apa alat utama yang digunakan dalam kebijakan moneter?",
                options: ["Pajak Pendapatan", "Suku Bunga", "Tarif", "Subsidi"],
                answer: "Suku Bunga",
            },
            {
                question: "Apa yang terjadi jika suatu negara mencetak terlalu banyak uang?",
                options: ["Deflasi", "Stabilitas Ekonomi", "Inflasi", "Penurunan perdagangan"],
                answer: "Inflasi",
            },
            {
                question: "Operasi pasar terbuka melibatkan aktivitas apa?",
                options: ["Perdagangan dengan negara asing", "Membeli dan menjual obligasi pemerintah", "Pajak", "Membangun infrastruktur"],
                answer: "Membeli dan menjual obligasi pemerintah",
            },
        ],
        3: [
            {
                question: "Istilah apa yang mengacu pada perdagangan tanpa pembatasan pemerintah?",
                options: ["Tarif", "Embargo", "Perdagangan Bebas", "Subsidi"],
                answer: "Perdagangan Bebas",
            },
            {
                question: "Apa istilah untuk pajak yang dikenakan pada barang impor?",
                options: ["Subsidi", "Kuota", "Tarif", "Embargo"],
                answer: "Tarif",
            },
            {
                question: "Negara yang fokus pada produksi barang yang paling efisien disebut sedang melakukan apa?",
                options: ["Keunggulan Absolut", "Keunggulan Komparatif", "Surplus Perdagangan", "Kejenuhan Pasar"],
                answer: "Keunggulan Komparatif",
            },
            {
                question: "Organisasi internasional mana yang mengawasi aturan perdagangan global?",
                options: ["PBB", "IMF", "Bank Dunia", "WTO"],
                answer: "WTO",
            },
            {
                question: "Defisit perdagangan terjadi ketika:",
                options: ["Ekspor suatu negara melebihi impornya", "Negara berhenti berdagang", "Impor suatu negara melebihi ekspornya", "Negara menggunakan tarif"],
                answer: "Impor suatu negara melebihi ekspornya",
            },
        ],
        4:[
            {
                question: "Apa yang dimaksud dengan permintaan dalam konteks ekonomi?",
                options: ["Keinginan pembeli", "Jumlah barang yang diinginkan dan mampu dibeli", "Penawaran barang", "Ketersediaan barang"],
                answer: "Jumlah barang yang diinginkan dan mampu dibeli",
            },
            {
                question: "Hukum permintaan menyatakan bahwa, ceteris paribus, jika harga barang naik, maka:",
                options: ["Permintaan akan tetap", "Permintaan barang tersebut meningkat", "Permintaan barang tersebut menurun", "Penawaran berkurang"],
                answer: "Permintaan barang tersebut menurun",
            },
            {
                question: "Apa yang terjadi ketika harga pasar berada di bawah harga keseimbangan?",
                options: ["Kelebihan penawaran", "Kekurangan permintaan", "Kelebihan permintaan", "Ekuilibrium"],
                answer: "Kelebihan permintaan",
            },
            {
                question: "Elastisitas harga permintaan mengukur:",
                options: ["Respons jumlah barang yang diminta terhadap perubahan harga", "Pendapatan nasional", "Jumlah barang yang diproduksi", "Penawaran barang"],
                answer: "Respons jumlah barang yang diminta terhadap perubahan harga",
            },
            {
                question: "Jika permintaan elastis, maka kenaikan harga barang akan:",
                options: ["Meningkatkan total penerimaan", "Mengurangi total penerimaan", "Tidak mempengaruhi total penerimaan", "Meningkatkan jumlah barang diminta"],
                answer: "Mengurangi total penerimaan",
            },

        ],
        5:[
            {
                question: "Apa yang dimaksud dengan siklus ekonomi?",
                options: ["Kenaikan harga barang secara tiba-tiba", "Perubahan periodik dalam tingkat aktivitas ekonomi", "Peningkatan populasi", "Perubahan nilai tukar"],
                answer: "Perubahan periodik dalam tingkat aktivitas ekonomi",
            },
            {
                question: "Tahapan ekspansi dalam siklus ekonomi ditandai dengan:",
                options: ["Penurunan investasi", "Pengangguran tinggi", "Pertumbuhan produksi dan pendapatan", "Deflasi"],
                answer: "Pertumbuhan produksi dan pendapatan",
            },
            {
                question: "Resesi adalah fase siklus ekonomi di mana terjadi:",
                options: ["Penurunan aktivitas ekonomi yang luas", "Pertumbuhan ekonomi", "Stabilitas harga", "Keseimbangan antara permintaan dan penawaran"],
                answer: "Penurunan aktivitas ekonomi yang luas",
            },
            {
                question: "Apa indikator yang digunakan untuk mengukur siklus ekonomi?",
                options: ["Inflasi", "Produk Domestik Bruto (PDB)", "Tarif impor", "Keseimbangan permintaan"],
                answer: "Produk Domestik Bruto (PDB)",
            },
            {
                question: "Apa dampak dari ekspansi ekonomi pada tingkat pengangguran?",
                options: ["Meningkatkan pengangguran", "Menurunkan pengangguran", "Tidak ada dampak", "Memperburuk resesi"],
                answer: "Menurunkan pengangguran",
            },
        ],
    };
    

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);
    const [feedback, setFeedback] = useState('');
    const [selectedChapter, setSelectedChapter] = useState(null);

    const handleOptionChange = (e) => setSelectedOption(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        const questions = chapterQuestions[selectedChapter];

        if (selectedOption === questions[currentQuestionIndex].answer) {
            setScore(score + 1);
            setFeedback('Benar!');
        } else {
            setFeedback(`Salah! Jawaban yang benar adalah ${questions[currentQuestionIndex].answer}`);
        }

        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < questions.length) {
            setTimeout(() => {
                setCurrentQuestionIndex(nextQuestionIndex);
                setSelectedOption('');
                setFeedback('');
            }, 1500);
        } else {
            setTimeout(() => setQuizFinished(true), 1500);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        setSelectedOption('');
        setScore(0);
        setQuizFinished(false);
        setFeedback('');
        setSelectedChapter(null);
    };

    const selectChapter = (chapter) => setSelectedChapter(chapter);

    const styles = {
        container: {
            backgroundColor: "#f8f9fa",
            minHeight: "100vh",
        },
        quizContainer: {
            padding: "20px",
            marginTop: "80px",
        },
        sectionTitle: {
            color: "#007bff",
            fontSize: "1.5rem",
            fontWeight: "bold",
        },
    };

    return (
        <div style={styles.container}>
        
            <Navbar />
            
            <div style={styles.quizContainer}>
                <h1>Kuis Ekonomi - Kelas 11</h1>
                {!selectedChapter ? (
                    <div className="chapter-selection">
                        <div className="row">
                            {[1, 2, 3, 4, 5].map((chapter) => (
                                <div key={chapter} className="col">
                                    <button 
                                        onClick={() => selectChapter(chapter)} 
                                        className={`btn btn-chapter chapter-${chapter}`}
                                    >
                                        {`Bab ${chapter}`} 📚
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div>
                        {quizFinished ? (
                            <div className="quiz-results">
                                <h2>Kuis Selesai!</h2>
                                <p>Skor Anda: {score} dari {chapterQuestions[selectedChapter].length}</p>
                                <button onClick={restartQuiz}>Mulai Lagi</button>
                            </div>
                        ) : (
                            <div className="quiz-question">
                                <h2>{chapterQuestions[selectedChapter][currentQuestionIndex].question}</h2>
                                <form onSubmit={handleSubmit}>
                                    {chapterQuestions[selectedChapter][currentQuestionIndex].options.map((option, index) => (
                                        <div key={index} className="form-check">
                                            <input
                                                type="radio"
                                                id={`option-${index}`}
                                                name="quiz-option"
                                                value={option}
                                                checked={selectedOption === option}
                                                onChange={handleOptionChange}
                                                className="form-check-input"
                                                required
                                            />
                                            <label htmlFor={`option-${index}`} className="form-check-label">
                                                {option}
                                            </label>
                                        </div>
                                    ))}
                                    <button type="submit" className="btn btn-primary mt-3">Kirim</button>
                                </form>
                                {feedback && <div className="alert alert-info mt-3">{feedback}</div>}
                            </div>
                        )}
                        <button onClick={restartQuiz} className="btn btn-secondary mt-3">Kembali ke Pilihan Bab</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Quiz;
