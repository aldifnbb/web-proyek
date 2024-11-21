import React from "react";
import Navbar from "../components/Navbar";

const Bab3 = () => {
    return (
        <div className="container mt-5">
            <Navbar/>ba
            <h1>Bab 3: Perdagangan Internasional</h1>
            <p>
                Perdagangan internasional adalah kegiatan pertukaran barang dan jasa antara negara yang berbeda. 
                Hal ini penting untuk memanfaatkan keunggulan komparatif dan meningkatkan kesejahteraan ekonomi global.
            </p>

            <h3>Manfaat Perdagangan Internasional</h3>
            <ul>
                <li>Meningkatkan efisiensi melalui spesialisasi.</li>
                <li>Memperluas pasar dan peluang investasi.</li>
                <li>Meningkatkan kualitas hidup dengan menyediakan barang yang tidak dapat diproduksi secara lokal.</li>
            </ul>

            <h3>Hambatan Perdagangan</h3>
            <p>
                Meskipun memiliki banyak manfaat, perdagangan internasional menghadapi hambatan seperti tarif, kuota, 
                dan regulasi pemerintah yang dapat membatasi aliran barang dan jasa.
            </p>
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

export default Bab3;

