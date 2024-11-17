import React from "react";

const Bab1 = () => {
    return (
        <div className="container mt-5">
            <h1>Bab 1: Masalah Ekonomi Dasar</h1>
            <p>
                Setiap masyarakat menghadapi masalah ekonomi dasar karena keterbatasan sumber daya dibandingkan 
                dengan kebutuhan manusia yang tidak terbatas. Oleh karena itu, pengambilan keputusan ekonomi menjadi sangat penting.
            </p>

            <h3>3 Masalah Ekonomi Dasar</h3>
            <ul>
                <li>
                    <strong>Apa yang harus diproduksi?</strong>
                    Masyarakat harus memutuskan barang dan jasa apa yang harus dihasilkan untuk memenuhi kebutuhan.
                </li>
                <li>
                    <strong>Bagaimana cara memproduksi?</strong> 
                    Keputusan tentang metode produksi, teknologi, dan penggunaan sumber daya yang efisien.
                </li>
                <li>
                    <strong>Untuk siapa barang diproduksi?</strong> 
                    Distribusi barang dan jasa kepada individu atau kelompok dalam masyarakat.
                </li>
            </ul>

            <h3>Kelangkaan</h3>
            <p>
                Kelangkaan adalah kondisi ketika sumber daya terbatas tidak dapat memenuhi semua kebutuhan dan keinginan manusia. 
                Kelangkaan memaksa masyarakat untuk membuat pilihan dan menentukan prioritas.
            </p>

            <h3>Biaya Peluang</h3>
            <p>
                Biaya peluang adalah nilai dari alternatif terbaik berikutnya yang harus dikorbankan ketika membuat pilihan ekonomi.
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

export default Bab1;

