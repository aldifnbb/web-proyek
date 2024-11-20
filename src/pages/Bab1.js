// src/Bab1.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Bab1 = () => {
    return (
        <div className="container">
            <h1 className="text-center my-4">Konsep Ilmu Ekonomi</h1>

            <div className="content my-4">
                <h2>Pengertian Ilmu Ekonomi</h2>
                <p>
                    Ilmu ekonomi merupakan salah satu cabang ilmu sosial yang mempelajari beragam perilaku ekonomi yang berhubungan dengan pengambilan keputusan yang dilakukan manusia untuk memenuhi kebutuhan hidupnya dengan berusaha memanfaatkan sumber daya yang ada.
                </p>
            </div>

            <div className="content my-4">
                <h2>Manfaat Ilmu Ekonomi</h2>
                <p>Ilmu ekonomi memiliki banyak manfaat, antara lain:</p>
                <ul>
                    <li>Membantu dalam pengambilan keputusan ekonomi yang lebih baik.</li>
                    <li>Memberikan pemahaman tentang berbagai masalah ekonomi.</li>
                    <li>Menjadi dasar untuk perencanaan dan kebijakan ekonomi.</li>
                </ul>
            </div>

            <div className="content my-4">
                <h2>Pembagian Ilmu Ekonomi</h2>
                <p>Ilmu ekonomi dapat dibagi menjadi dua kategori utama:</p>
                <ol>
                    <li><strong>Ilmu Ekonomi Teori:</strong> Berfokus pada teori-teori ekonomi yang mendasari perilaku ekonomi.</li>
                    <li><strong>Ilmu Ekonomi Deskriptif:</strong> Menggambarkan keadaan ekonomi dan analisis data ekonomi.</li>
                </ol>
            </div>

            <div className="content my-4">
                <h2>Kelangkaan dan Cara Mengatasinya</h2>
                <h3>Pengertian Kelangkaan</h3>
                <p>
                    Kelangkaan adalah kondisi di mana sumber daya yang ada tidak cukup untuk memenuhi semua kebutuhan dan keinginan manusia.
                </p>

                <h3>Cara yang Dapat Digunakan untuk Mengatasi Kelangkaan</h3>
                <p>Beberapa cara yang dapat digunakan untuk mengatasi kelangkaan antara lain:</p>
                <ul>
                    <li>Efisiensi dalam penggunaan sumber daya.</li>
                    <li>Inovasi untuk menciptakan sumber daya baru.</li>
                    <li>Prioritas dalam pemenuhan kebutuhan.</li>
                </ul>
            </div>

            <div className="text-center my-4">
                <button 
                    onClick={() => window.history.back()} 
                    className="btn btn-secondary mt-4"
                >
                    Kembali ke Materi
                </button>
            </div>
        </div>
    );
}

export default Bab1;