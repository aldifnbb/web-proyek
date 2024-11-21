import React from "react";
import Navbar from "../components/Navbar";

const Bab2 = () => {
    return (
        <div className="container mt-5">
            <Navbar/>
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

            <h4>Tujuan Produksi</h4>
            <p>Produksi dilakukan manusia untuk melakukan pengolahan barang dan jasa yang berkualitas dengan harga yang bisa dijangkau oleh konsumen. Proses produksi bisa dibedakan menjadi dua yakni proses produksi yang memerlukan proses pengerjaan yang cepat dan proses produksi yang memerlukan wajtu yang lambat</p>

            <h3>b. Masalah dalam Kegiatan Distribusi</h3>
            <p>Setelah melakukan kegiatan produksi, seorang produsen tidak selalu bisa menjual produk yang dihasilkannya sehingga memerlukan orang yang sering disebut dengan distributor untuk dapat menyalurkan hasil produk yang dihasilkannya untuk bisa sampai ke tangan konsumen.

            Distribusi adalah suatu kegiatan yang dilakukan dengan tujuan mempermudah penyaluran barang atau jasa dari tangan produsen ke tangan konsumen.
            </p>

            <h3>c. Masalah dalam Kegiatan Konsumsi</h3>
            <p>Konsumsi merupakan suatu kegiatan yang dilakukan untuk mengurangi atau menghabiskan nilai guna dari barang atau jasa untuk mencukupi kebutuhan hidup sekelompok masyarakat.
            Ciri-ciri barang konsumsi:
            </p>
            <ul>
                <li>Barang konsumsi dapat dimanfaatkan untuk memenuhi kebutuhan hidup.</li>
                <li>Barang konsumsi diperoleh dengan memerlukan pengorbanan sehingga membuatnya disebut dengan barang ekonomi.</li>
                <li>Barang ekonomi mempunyai nilai, manfaat, dan volume yang bisa habis dalam kurun waktu tertentu atau bisa habis dalam waktu sekejap.</li>
            </ul>

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
};

export default Bab2;