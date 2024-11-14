import React, { useState } from "react";
import './Quiz.css'

function Quiz() {
    const questions = [
        {
            question: "What is the basic economic problem faced by every society?",
            options: ["Inflation", "Scarcity", "Unemployment", "Government Spending"],
            answer: "Scarcity",
        },
        {
            question: "What is the term used to describe the cost of the next best alternative foregone?",
            options: ["Opportunity Cost", "Marginal Cost", "Variable Cost", "Fixed Cost"],
            answer: "Opportunity Cost", 
        },
        {
            question: "Which of the following is a factor of production?",
            options: ["Money", "Labor", "Government Policies", "Imports"],
            answer: "Labor",
        },
        {
            question: "Which economic system relies on supply and demand to determine prices?",
            options: ["Command Economy", "Mixed Economy", "Market Economy", "Traditional Economy"],
            answer: "Market Economy",
        },
        {
            question: "What do we call a sustained increase in the general price level of goods and services in an economy?",
            options: ["Recession", "Deflation", "Depreciation", "Inflation"],
            answer: "Inflation",
        },
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);
    const [feedback, setFeedback] = useState('');

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedOption === questions[currentQuestionIndex].answer) {
            setScore(score + 1);
            setFeedback('Correct!');
        } else {
            setFeedback(`Wrong! The correct answer is ${questions[currentQuestionIndex].answer}`);
        }

        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < questions.length) {
            setTimeout(() => {
                setCurrentQuestionIndex(nextQuestionIndex);
                setSelectedOption('');
                setFeedback('');
            }, 1500); 
        } else {
            setTimeout(() => {
                setQuizFinished(true);
            }, 1500);
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
            <h1>Economics Quiz - Grade 10</h1>
            {quizFinished ? (
                <div className="quiz-results">
                    <h2>Quiz Finished!</h2>
                    <p>Your score: {score} out of {questions.length}</p>
                    <button onClick={restartQuiz}>Restart Quiz</button>
                </div>
            ) : (
                <div className="quiz-question">
                    <h2>{questions[currentQuestionIndex].question}</h2>
                    <form onSubmit={handleSubmit}>
                        {questions[currentQuestionIndex].options.map((option, index) => (
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
                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </form>
                    {feedback && <div className="alert alert-info mt-3">{feedback}</div>}
                </div>
            )}
        </div>
    );
}

export default Quiz;
