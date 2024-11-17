import React from "react";

const Bab5 = () => {
    return (
        <div className="container mt-5">
            <h1>Bab 5: Siklus Ekonomi</h1>
            <p>
                Siklus ekonomi adalah fluktuasi periodik dalam aktivitas ekonomi suatu negara, termasuk fase ekspansi dan kontraksi.
            </p>

            <h3>Tahapan Siklus Ekonomi</h3>
            <ul>
                <li><strong>Ekspansi:</strong> Pertumbuhan produksi, pendapatan, dan lapangan kerja.</li>
                <li><strong>Puncak:</strong> Aktivitas ekonomi mencapai titik tertinggi.</li>
                <li><strong>Resesi:</strong> Penurunan aktivitas ekonomi yang signifikan.</li>
                <li><strong>Depresi:</strong> Penurunan aktivitas ekonomi yang panjang dan dalam.</li>
                <li><strong>Pemulihan:</strong> Aktivitas ekonomi mulai meningkat kembali.</li>
            </ul>

            <h3>Indikator Ekonomi</h3>
            <p>
                Beberapa indikator penting untuk memahami siklus ekonomi meliputi Produk Domestik Bruto (PDB), tingkat pengangguran, 
                dan tingkat inflasi.
            </p>

            <button 
                onClick={() => window.history.back()} 
                className="btn btn-secondary mt-4"
            >
                Kembali ke Materi
            </button>
        </div>
    );
};

export default Bab5;

