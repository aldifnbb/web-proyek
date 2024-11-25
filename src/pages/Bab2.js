import React, { useState, useEffect } from "react";
import { Tooltip } from "reactstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const Bab2 = () => {
    // State untuk kuis
    const [feedback1, setFeedback1] = useState(null);
    const [feedback2, setFeedback2] = useState(null);
    const [feedback3, setFeedback3] = useState(null);

    // State untuk tooltip
    const [tooltipOpen1, setTooltipOpen1] = useState(false);
    const [tooltipOpen2, setTooltipOpen2] = useState(false);
    const [tooltipOpen3, setTooltipOpen3] = useState(false);

    // Fungsi untuk menangani jawaban kuis
    const handleAnswer1 = (option) => {
        setFeedback1(option === "A" ? "correct" : "incorrect");
    };

    const handleAnswer2 = (option) => {
        setFeedback2(option === "A" ? "correct" : "incorrect");
    };

    const handleAnswer3 = (option) => {
        setFeedback3(option === "A" ? "correct" : "incorrect");
    };

    // Inisialisasi AOS
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="container mt-5">
            <h1>Permasalahan Ekonomi dalam Sistem Ekonomi</h1>
            <h3>a. Masalah yang Ada di Dalam Kegiatan Produksi</h3>
            <p>Proses produksi merupakan kegiatan yang dilakukan untuk mengolah input atau produksi untuk menambah atau menciptakan nilai guna barang dan jasa. Faktor yang diperlukan dalam proses produksi:</p>
            <ul>
                <li>Sumber Daya Manusia.</li>
                <li>Sumber Daya Alam.</li>
                <li>Keahlian atau Kewirausahaan.</li>
                <li>Modal.</li>
            </ul>

            {/* Kuis 1 */}
            <div data-aos="zoom-in" className="mt-5">
                <h4 className="text-center text-primary">Kuis 1: Apa yang menjadi tujuan utama dalam proses produksi?</h4>
                <div className="d-flex justify-content-center mt-3">
                    <button
                        id="btnOption1"
                        className="btn btn-lg btn-primary mx-2 px-4 py-3 rounded-pill shadow-lg"
                        onClick={() => handleAnswer1("A")}
                    >
                        A. Menambah nilai guna barang
                    </button>
                    <button
                        id="btnOption2"
                        className="btn btn-lg btn-primary mx-2 px-4 py-3 rounded-pill shadow-lg"
                        onClick={() => handleAnswer1("B")}
                    >
                        B. Meningkatkan distribusi barang
                    </button>
                </div>
                {feedback1 && (
                    <Tooltip
                        placement="top"
                        isOpen={tooltipOpen1}
                        target={feedback1 === "correct" ? "btnOption1" : "btnOption2"}
                        toggle={() => setTooltipOpen1(!tooltipOpen1)}
                    >
                        {feedback1 === "correct"
                            ? "Pilihan A benar! Tujuan utama produksi adalah untuk menambah nilai guna barang."
                            : "Pilihan B salah! Tujuan utama produksi bukan untuk distribusi, melainkan untuk menambah nilai guna barang."}
                    </Tooltip>
                )}
            </div>

            {/* Kuis 2 */}
            <div data-aos="zoom-in" className="mt-5">
                <h4 className="text-center text-primary">Kuis 2: Apa masalah yang muncul terkait distribusi barang?</h4>
                <div className="d-flex justify-content-center mt-3">
                    <button
                        id="btnOption3"
                        className="btn btn-lg btn-info mx-2 px-4 py-3 rounded-pill shadow-lg"
                        onClick={() => handleAnswer2("A")}
                    >
                        A. Ketidakseimbangan distribusi
                    </button>
                    <button
                        id="btnOption4"
                        className="btn btn-lg btn-info mx-2 px-4 py-3 rounded-pill shadow-lg"
                        onClick={() => handleAnswer2("B")}
                    >
                        B. Kurangnya produksi barang
                    </button>
                </div>
                {feedback2 && (
                    <Tooltip
                        placement="top"
                        isOpen={tooltipOpen2}
                        target={feedback2 === "correct" ? "btnOption3" : "btnOption4"}
                        toggle={() => setTooltipOpen2(!tooltipOpen2)}
                    >
                        {feedback2 === "correct"
                            ? "Pilihan A benar! Ketidakseimbangan distribusi adalah salah satu masalah utama."
                            : "Pilihan B salah! Masalah distribusi lebih berkaitan dengan kesenjangan distribusi, bukan kurangnya produksi barang."}
                    </Tooltip>
                )}
            </div>

            {/* Kuis 3 */}
            <div data-aos="zoom-in" className="mt-5">
                <h4 className="text-center text-primary">Kuis 3: Apa yang diperlukan untuk proses konsumsi barang?</h4>
                <div className="d-flex justify-content-center mt-3">
                    <button
                        id="btnOption5"
                        className="btn btn-lg btn-success mx-2 px-4 py-3 rounded-pill shadow-lg"
                        onClick={() => handleAnswer3("A")}
                    >
                        A. Pengorbanan ekonomi
                    </button>
                    <button
                        id="btnOption6"
                        className="btn btn-lg btn-success mx-2 px-4 py-3 rounded-pill shadow-lg"
                        onClick={() => handleAnswer3("B")}
                    >
                        B. Barang yang tidak habis
                    </button>
                </div>
                {feedback3 && (
                    <Tooltip
                        placement="top"
                        isOpen={tooltipOpen3}
                        target={feedback3 === "correct" ? "btnOption5" : "btnOption6"}
                        toggle={() => setTooltipOpen3(!tooltipOpen3)}
                    >
                        {feedback3 === "correct"
                            ? "Pilihan A benar! Barang konsumsi memerlukan pengorbanan ekonomi."
                            : "Pilihan B salah! Barang konsumsi adalah barang yang dapat habis setelah digunakan."}
                    </Tooltip>
                )}
            </div>

            <div className="text-center my-4">
                <button onClick={() => window.history.back()} className="btn btn-primary btn-lg">
                    Kembali
                </button>
            </div>
        </div>
    );
};

export default Bab2;
