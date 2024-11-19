import React from "react";
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar";
import "./Materi.css";

const Materi = () => {
    const navigate = useNavigate();

    const chapters = {
        1: { title: "Masalah Ekonomi Dasar" },
        2: { title: "Kebijakan Moneter" },
        3: { title: "Perdagangan Internasional" },
        4: { title: "Permintaan dan Penawaran" },
        5: { title: "Siklus Ekonomi" },
    };

    const goToChapter = (chapter) => {
        navigate(`/bab${chapter}`);
    };

    const goToQuiz = (chapter) => {
        navigate(`/quiz?chapter=${chapter}`);
    };

    return (
        <div className="materi-container">
            <Navbar />
            <h1>Materi Ekonomi - Kelas 10</h1>
            <div className="row">
                {Object.entries(chapters).map(([chapter, data]) => (
                    <div key={chapter} className="col-md-6 col-lg-4 my-3">
                        <div className={`card chapter-card chapter-${chapter}`}>
                            <div className="card-body">
                                <h5 className="card-title">{`Bab ${chapter}: ${data.title}`}</h5>
                                <button 
                                    className="btn btn-info mx-1" 
                                    onClick={() => goToChapter(chapter)}
                                >
                                    Materi Lengkap
                                </button>
                                <button 
                                    className="btn btn-primary mx-1" 
                                    onClick={() => goToQuiz(chapter)}
                                >
                                    Kerjakan Kuis
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Materi;
