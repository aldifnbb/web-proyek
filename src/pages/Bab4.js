import React from "react";

const Bab4 = () => {
    return (
        <div className="container mt-5">
            <h1>Bab 4: Permintaan dan Penawaran</h1>
            <p>
                Permintaan dan penawaran adalah konsep dasar dalam ekonomi yang menggambarkan interaksi antara konsumen 
                dan produsen di pasar. Harga barang ditentukan oleh keseimbangan antara jumlah yang diminta dan jumlah yang ditawarkan.
            </p>

            <h3>Hukum Permintaan</h3>
            <p>
                Hukum permintaan menyatakan bahwa, ceteris paribus, jika harga barang naik, jumlah barang yang diminta akan turun.
            </p>

            <h3>Hukum Penawaran</h3>
            <p>
                Hukum penawaran menyatakan bahwa, ceteris paribus, jika harga barang naik, jumlah barang yang ditawarkan akan meningkat.
            </p>

            <h3>Keseimbangan Pasar</h3>
            <p>
                Keseimbangan pasar terjadi ketika jumlah barang yang diminta sama dengan jumlah barang yang ditawarkan, 
                menghasilkan harga keseimbangan.
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

export default Bab4;

