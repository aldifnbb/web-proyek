import React, { useState } from "react";
import './Quiz.css';
import Navbar from "../components/Navbar";

function Quiz() {
    const chapterQuestions = { 
        // Pertanyaan kuis tetap sama seperti sebelumnya
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
            marginTop: "80px", // Beri margin agar navbar tidak menutupi konten
        },
        sectionTitle: {
            color: "#007bff",
            fontSize: "1.5rem",
            fontWeight: "bold",
        },
    };

    return (
        <div style={styles.container}>
            {/* Navbar seperti di DashboardEkonomi */}
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
