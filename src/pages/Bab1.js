// src/Bab1.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Bab1.css'; 
import Navbar from "../components/Navbar";

const Bab1 = () => {
    return (
        
        <div className="bab1-container">
            <Navbar/>
            <header className="bab1-header text-center py-5">
                <h1 className="text-white display-4">Konsep Ilmu Ekonomi</h1>
                <p className="text-white lead">Mempelajari dasar ekonomi untuk kehidupan yang lebih baik</p>
            </header>

            <div className="container my-5">
                <div className="content my-4">
                    <h2 className="section-title">Pengertian Ilmu Ekonomi</h2>
                    <p className="text-muted">
                        Ilmu ekonomi merupakan salah satu cabang ilmu sosial yang mempelajari beragam perilaku ekonomi yang berhubungan dengan pengambilan keputusan yang dilakukan manusia untuk memenuhi kebutuhan hidupnya dengan berusaha memanfaatkan sumber daya yang ada.
                    </p>
                </div>

                <div className="content my-4">
                    <h2 className="section-title">Manfaat Ilmu Ekonomi</h2>
                    <p>Ilmu ekonomi memiliki banyak manfaat, antara lain:</p>
                    <ul className="list-group">
                        <li className="list-group-item">Membantu dalam pengambilan keputusan ekonomi yang lebih baik.</li>
                        <li className="list-group-item">Memberikan pemahaman tentang berbagai masalah ekonomi.</li>
                        <li className="list-group-item">Menjadi dasar untuk perencanaan dan kebijakan ekonomi.</li>
                    </ul>
                </div>

                <div className="content my-4">
                    <h2 className="section-title">Pembagian Ilmu Ekonomi</h2>
                    <p>Ilmu ekonomi dapat dibagi menjadi dua kategori utama:</p>
                    <ol className="list-group">
                        <li className="list-group-item">
                            <strong>Ilmu Ekonomi Teori:</strong> Berfokus pada teori-teori ekonomi yang mendasari perilaku ekonomi.
                        </li>
                        <li className="list-group-item">
                            <strong>Ilmu Ekonomi Deskriptif:</strong> Menggambarkan keadaan ekonomi dan analisis data ekonomi.
                        </li>
                    </ol>
                </div>

                <div className="content my-4">
                    <h2 className="section-title">Kelangkaan dan Cara Mengatasinya</h2>

                    <h3 className="text-primary">Pengertian Kelangkaan</h3>
                    <p className="text-muted">
                        Kelangkaan adalah kondisi di mana sumber daya yang ada tidak cukup untuk memenuhi semua kebutuhan dan keinginan manusia.
                    </p>

                    <h3 className="text-primary">Cara yang Dapat Digunakan untuk Mengatasi Kelangkaan</h3>
                    <ul className="list-group">
                        <li className="list-group-item">Efisiensi dalam penggunaan sumber daya.</li>
                        <li className="list-group-item">Inovasi untuk menciptakan sumber daya baru.</li>
                        <li className="list-group-item">Prioritas dalam pemenuhan kebutuhan.</li>
                    </ul>
                </div>

                <div className="text-center my-4">
                    <button
                        onClick={() => window.history.back()}
                        className="btn btn-secondary mt-4 btn-hover"
                    >
                        Kembali ke Materi
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Bab1;