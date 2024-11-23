import React from "react";

const Bab2 = () => {
    return (
        <div className="container mt-5">
            <h1>Permasalahan Ekonomi dalam Sistem Ekonomi</h1>
            <h3>a. Masalah yang Ada di Dalam Kegiatan Produksi</h3>
            <p>Proses produksi merupakan kegiatan yang dilakukan untuk mengolah input atau produksi untuk menambah atau menciptakan nilai guna barang dan jasa. Faktor yang diperlukan dalam proses produksi:
            </p>
            <ul>
                <li>Sumber Daya Manusia.</li>
                <li>Sumber Daya Alam.</li>
                <li>Keahlian atau Kewirausahaan.</li>
                <li>Modal.</li>
            </ul>

                <h4 className="mt-4 text-success">Tujuan Produksi</h4>
                <p>
                    Produksi dilakukan manusia untuk mengolah barang dan jasa berkualitas dengan harga yang terjangkau. Proses produksi dapat dibedakan menjadi dua: proses yang cepat dan proses yang memerlukan waktu lebih lama.
                </p>
            </div>

            <div data-aos="fade-right" className="mt-5">
                <h3 className="text-info">b. Masalah dalam Kegiatan Distribusi</h3>
                <p>
                    Setelah kegiatan produksi, produsen membutuhkan distributor untuk menyalurkan produk ke konsumen. Berikut beberapa masalah dalam kegiatan distribusi:
                </p>
                <ul className="list-group">
                    <li className="list-group-item">
                        <strong>Infrastruktur yang Tidak Memadai:</strong> Ketidakcukupan sarana transportasi dan logistik untuk mendukung penyaluran barang dan jasa secara efisien.
                    </li>
                    <li className="list-group-item">
                        <strong>Biaya Distribusi yang Tinggi:</strong> Besarnya pengeluaran untuk transportasi, penyimpanan, dan pengemasan barang selama proses distribusi.
                    </li>
                    <li className="list-group-item">
                        <strong>Ketidakseimbangan Distribusi:</strong> Kesenjangan dalam pendistribusian barang dan jasa di berbagai wilayah atau segmen masyarakat.
                    </li>
                    <li className="list-group-item">
                        <strong>Hambatan Regulasi dan Birokrasi:</strong> Proses administratif yang rumit menghambat kelancaran distribusi barang.
                    </li>
                    <li className="list-group-item">
                        <strong>Perilaku Pelaku Distribusi:</strong> Praktik tidak etis seperti penimbunan atau manipulasi harga.
                    </li>
                </ul>
            </div>

            <div data-aos="fade-up" className="mt-5">
                <h3 className="text-info">c. Masalah dalam Kegiatan Konsumsi</h3>
                <p>
                    Konsumsi adalah kegiatan mengurangi atau menghabiskan nilai guna barang atau jasa untuk memenuhi kebutuhan hidup. Berikut ciri-ciri barang konsumsi:
                </p>
                <ul className="list-group">
                    <li className="list-group-item">
                        Barang konsumsi digunakan untuk memenuhi kebutuhan hidup.
                    </li>
                    <li className="list-group-item">
                        Barang konsumsi memerlukan pengorbanan sehingga disebut barang ekonomi.
                    </li>
                    <li className="list-group-item">
                        Barang ekonomi memiliki nilai, manfaat, dan volume yang habis dalam kurun waktu tertentu.
                    </li>
                </ul>
            </div>

            {/* Kuis 1 */}
            <div data-aos="zoom-in" className="mt-5">
                <h4 className="text-center text-primary">Kuis 1: Apa yang menjadi tujuan utama dalam proses produksi?</h4>
                <div className="d-flex justify-content-center mt-3">
                    <button
                        id="btnOption1"
                        className="btn btn-lg btn-primary mx-2 px-4 py-3 rounded-pill shadow-lg transition-all duration-300 hover:bg-blue-600 hover:scale-105"
                        onClick={() => handleAnswer1("A")}
                    >
                        A. Menambah nilai guna barang
                    </button>
                    <button
                        id="btnOption2"
                        className="btn btn-lg btn-primary mx-2 px-4 py-3 rounded-pill shadow-lg transition-all duration-300 hover:bg-blue-600 hover:scale-105"
                        onClick={() => handleAnswer1("B")}
                    >
                        B. Meningkatkan distribusi barang
                    </button>
                    {feedback1 === "correct" && (
                        <Tooltip
                            placement="top"
                            isOpen={tooltipOpen1}
                            target="btnOption1"
                            toggle={() => setTooltipOpen1(!tooltipOpen1)}
                        >
                            Pilihan A benar! Tujuan utama produksi adalah untuk menambah nilai guna barang.
                        </Tooltip>
                    )}
                    {feedback1 === "incorrect" && (
                        <Tooltip
                            placement="top"
                            isOpen={tooltipOpen1}
                            target="btnOption2"
                            toggle={() => setTooltipOpen1(!tooltipOpen1)}
                        >
                            Pilihan B salah! Tujuan utama produksi bukan untuk distribusi, melainkan untuk menambah nilai guna barang.
                        </Tooltip>
                    )}
                </div>
            </div>

            {/* Kuis 2 */}
            <div data-aos="zoom-in" className="mt-5">
                <h4 className="text-center text-primary">Kuis 2: Apa masalah yang muncul terkait distribusi barang?</h4>
                <div className="d-flex justify-content-center mt-3">
                    <button
                        id="btnOption3"
                        className="btn btn-lg btn-info mx-2 px-4 py-3 rounded-pill shadow-lg transition-all duration-300 hover:bg-cyan-600 hover:scale-105"
                        onClick={() => handleAnswer2("A")}
                    >
                        A. Ketidakseimbangan distribusi
                    </button>
                    <button
                        id="btnOption4"
                        className="btn btn-lg btn-info mx-2 px-4 py-3 rounded-pill shadow-lg transition-all duration-300 hover:bg-cyan-600 hover:scale-105"
                        onClick={() => handleAnswer2("B")}
                    >
                        B. Kurangnya produksi barang
                    </button>
                    {feedback2 === "correct" && (
                        <Tooltip
                            placement="top"
                            isOpen={tooltipOpen2}
                            target="btnOption3"
                            toggle={() => setTooltipOpen2(!tooltipOpen2)}
                        >
                            Pilihan A benar! Ketidakseimbangan distribusi adalah salah satu masalah utama.
                        </Tooltip>
                    )}
                    {feedback2 === "incorrect" && (
                        <Tooltip
                            placement="top"
                            isOpen={tooltipOpen2}
                            target="btnOption4"
                            toggle={() => setTooltipOpen2(!tooltipOpen2)}
                        >
                            Pilihan B salah! Masalah distribusi lebih berkaitan dengan kesenjangan distribusi, bukan kurangnya produksi barang.
                        </Tooltip>
                    )}
                </div>
            </div>

            {/* Kuis 3 */}
            <div data-aos="zoom-in" className="mt-5">
                <h4 className="text-center text-primary">Kuis 3: Apa yang diperlukan untuk proses konsumsi barang?</h4>
                <div className="d-flex justify-content-center mt-3">
                    <button
                        id="btnOption5"
                        className="btn btn-lg btn-success mx-2 px-4 py-3 rounded-pill shadow-lg transition-all duration-300 hover:bg-green-600 hover:scale-105"
                        onClick={() => handleAnswer3("A")}
                    >
                        A. Pengorbanan ekonomi
                    </button>
                    <button
                        id="btnOption6"
                        className="btn btn-lg btn-success mx-2 px-4 py-3 rounded-pill shadow-lg transition-all duration-300 hover:bg-green-600 hover:scale-105"
                        onClick={() => handleAnswer3("B")}
                    >
                        B. Barang yang tidak habis
                    </button>
                    {feedback3 === "correct" && (
                        <Tooltip
                            placement="top"
                            isOpen={tooltipOpen3}
                            target="btnOption5"
                            toggle={() => setTooltipOpen3(!tooltipOpen3)}
                        >
                            Pilihan A benar! Barang konsumsi memerlukan pengorbanan ekonomi.
                        </Tooltip>
                    )}
                    {feedback3 === "incorrect" && (
                        <Tooltip
                            placement="top"
                            isOpen={tooltipOpen3}
                            target="btnOption6"
                            toggle={() => setTooltipOpen3(!tooltipOpen3)}
                        >
                            Pilihan B salah! Barang konsumsi adalah barang yang dapat habis setelah digunakan.
                        </Tooltip>
                    )}
                </div>
            </div>

            <div className="text-center my-4">
                <button onClick={() => window.history.back()} className="btn btn-primary btn-lg">
                    Kembali
                </button>
            </div>
        </div>
    );
}

export default Bab2;
