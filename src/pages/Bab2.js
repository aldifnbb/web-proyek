import React, { useState } from "react";
import { Collapse, Tooltip } from "react-bootstrap";

const Bab2 = () => {
    const [openProduction, setOpenProduction] = useState(false);
    const [openDistribution, setOpenDistribution] = useState(false);
    const [openConsumption, setOpenConsumption] = useState(false);

    return (
        <div className="container mt-5">
            <h1>Permasalahan Ekonomi dalam Sistem Ekonomi</h1>

            <div className="section">
                <h3 
                    onClick={() => setOpenProduction(!openProduction)} 
                    aria-controls="production-content" 
                    aria-expanded={openProduction}
                    className="cursor-pointer"
                >
                    a. Masalah yang Ada di Dalam Kegiatan Produksi{" "}
                    <span className="small text-muted">(Klik untuk Buka/Tutup)</span>
                </h3>
                <Collapse in={openProduction}>
                    <div id="production-content">
                        <p>Proses produksi merupakan kegiatan yang dilakukan untuk mengolah input atau produksi untuk menambah atau menciptakan nilai guna barang dan jasa. Faktor yang diperlukan dalam proses produksi:</p>
                        <ul>
                            <li>Sumber Daya Manusia.</li>
                            <li>Sumber Daya Alam.</li>
                            <li>Keahlian atau Kewirausahaan.</li>
                            <li>Modal.</li>
                        </ul>
                        <h4>Tujuan Produksi</h4>
                        <p>
                            Produksi dilakukan manusia untuk melakukan pengolahan barang dan jasa yang berkualitas dengan harga yang bisa dijangkau oleh konsumen. Proses produksi bisa dibedakan menjadi dua, yakni proses produksi yang memerlukan pengerjaan cepat dan proses yang membutuhkan waktu yang lebih lama.
                        </p>
                    </div>
                </Collapse>
            </div>

            <div className="section mt-4">
                <h3 
                    onClick={() => setOpenDistribution(!openDistribution)} 
                    aria-controls="distribution-content" 
                    aria-expanded={openDistribution}
                    className="cursor-pointer"
                >
                    b. Masalah dalam Kegiatan Distribusi{" "}
                    <span className="small text-muted">(Klik untuk Buka/Tutup)</span>
                </h3>
                <Collapse in={openDistribution}>
                    <div id="distribution-content">
                        <p>
                            Setelah melakukan kegiatan produksi, seorang produsen tidak selalu bisa menjual produk yang dihasilkannya sehingga memerlukan distributor untuk menyalurkan hasil produk ke konsumen. Distribusi adalah kegiatan yang bertujuan mempermudah penyaluran barang atau jasa dari produsen ke konsumen.
                        </p>
                    </div>
                </Collapse>
            </div>

            <div className="section mt-4">
                <h3 
                    onClick={() => setOpenConsumption(!openConsumption)} 
                    aria-controls="consumption-content" 
                    aria-expanded={openConsumption}
                    className="cursor-pointer"
                >
                    c. Masalah dalam Kegiatan Konsumsi{" "}
                    <span className="small text-muted">(Klik untuk Buka/Tutup)</span>
                </h3>
                <Collapse in={openConsumption}>
                    <div id="consumption-content">
                        <p>
                            Konsumsi adalah kegiatan yang dilakukan untuk mengurangi atau menghabiskan nilai guna barang atau jasa untuk mencukupi kebutuhan hidup masyarakat.
                        </p>
                        <p>Ciri-ciri barang konsumsi:</p>
                        <ul>
                            <li>
                                <Tooltip placement="top" title="Barang yang dapat digunakan untuk kebutuhan sehari-hari.">
                                    Barang konsumsi dapat dimanfaatkan untuk memenuhi kebutuhan hidup.
                                </Tooltip>
                            </li>
                            <li>
                                Barang konsumsi diperoleh dengan memerlukan pengorbanan, sehingga disebut barang ekonomi.
                            </li>
                            <li>
                                Barang ekonomi mempunyai nilai, manfaat, dan volume yang bisa habis dalam kurun waktu tertentu atau bisa habis dalam waktu sekejap.
                            </li>
                        </ul>
                    </div>
                </Collapse>
            </div>

            <button 
                onClick={() => window.history.back()} 
                className="btn btn-secondary mt-4"
            >
                Kembali ke Materi
            </button>
        </div>
    );
};

export default Bab2;
