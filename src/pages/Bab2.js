import React from "react";

const Bab2 = () => {
    return (
        <div className="container mt-5">
            <h1>Bab 2: Kebijakan Moneter</h1>
            <p>
                Kebijakan moneter adalah alat yang digunakan oleh bank sentral untuk mengatur jumlah uang yang beredar 
                dan menjaga stabilitas ekonomi. Tujuan utama kebijakan moneter adalah:
            </p>
            <ul>
                <li>Mengendalikan inflasi.</li>
                <li>Mencapai pertumbuhan ekonomi yang stabil.</li>
                <li>Menjaga tingkat pengangguran rendah.</li>
                <li>Menstabilkan nilai tukar mata uang.</li>
            </ul>

            <h3>Alat Kebijakan Moneter</h3>
            <p>
                Bank sentral menggunakan berbagai alat kebijakan moneter untuk mencapai tujuannya, di antaranya:
            </p>
            <ul>
                <li><strong>Operasi Pasar Terbuka:</strong> Membeli atau menjual obligasi pemerintah untuk mengontrol jumlah uang yang beredar.</li>
                <li><strong>Pengaturan Suku Bunga:</strong> Menyesuaikan tingkat suku bunga untuk memengaruhi pinjaman dan tabungan.</li>
                <li><strong>Cadangan Wajib:</strong> Mengatur jumlah minimum dana yang harus disimpan oleh bank komersial di bank sentral.</li>
            </ul>

            <h3>Contoh Implementasi</h3>
            <p>
                Ketika inflasi meningkat, bank sentral dapat menaikkan suku bunga untuk mengurangi jumlah uang yang beredar. 
                Sebaliknya, saat ekonomi melambat, bank sentral dapat menurunkan suku bunga untuk mendorong pinjaman dan investasi.
            </p>

            <h3>Kesimpulan</h3>
            <p>
                Kebijakan moneter adalah alat penting untuk menjaga stabilitas ekonomi. Dengan memahami bagaimana kebijakan ini bekerja, 
                kita dapat lebih memahami bagaimana keputusan pemerintah memengaruhi kehidupan sehari-hari.
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

export default Bab2;

