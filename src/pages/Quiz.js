import React, { useState } from "react";

function Quiz() {
    const allQuestions = [
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
        // Tambahkan pertanyaan lainnya sesuai kebutuhan
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);
    const [feedback, setFeedback] = useState('');

    const handleOptionChange = (e) => setSelectedOption(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();

        if (selectedOption === allQuestions[currentQuestionIndex].answer) {
            setScore(score + 1);
            setFeedback('Benar!');
        } else {
            setFeedback(`Salah! Jawaban yang benar adalah ${allQuestions[currentQuestionIndex].answer}`);
        }

        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < allQuestions.length) {
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
    };

    return (
        
        <div className="quiz-container">
            <div className="quiz-box">
                <h1 className="quiz-title">Kuis Ekonomi - Kelas 10</h1>
                {quizFinished ? (
                    <div className="results">
                        <h2>Kuis Selesai!</h2>
                        <p>Skor Anda: {score} dari {allQuestions.length}</p>
                        <button onClick={restartQuiz} className="btn restart-btn">Mulai Lagi</button>
                    </div>
                ) : (
                    <div className="question-box">
                        <h2>{allQuestions[currentQuestionIndex].question}</h2>
                        <form onSubmit={handleSubmit} className="quiz-form">
                            {allQuestions[currentQuestionIndex].options.map((option, index) => (
                                <div key={index} className="option">
                                    <input
                                        type="radio"
                                        id={`option-${index}`}
                                        name="quiz-option"
                                        value={option}
                                        checked={selectedOption === option}
                                        onChange={handleOptionChange}
                                        className="option-input"
                                        required
                                    />
                                    <label htmlFor={`option-${index}`} className="option-label">
                                        {option}
                                    </label>
                                </div>
                            ))}
                            <button type="submit" className="btn_quiz submit-btn">Kirim Jawaban</button>
                        </form>
                        {feedback && <div className="feedback">{feedback}</div>}
                    </div>
                )}
                <button 
                    onClick={() => window.history.back()}
                    className="btn back-btn"
                >
                    Kembali ke halaman awal
                </button>
            </div>
        </div>
    );
}

export default Quiz;
