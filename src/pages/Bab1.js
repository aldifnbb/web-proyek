import React from "react";

const Bab1 = () => {
    return (
        <div className="container mt-5 bg-light p-4 rounded shadow">
            <h1>Bab 1: Masalah Ekonomi Dasar</h1>
            <p>
                Masalah ekonomi dasar adalah persoalan yang dihadapi masyarakat dalam memenuhi kebutuhan yang tidak terbatas 
                dengan sumber daya yang terbatas. Masalah ini muncul karena kelangkaan (scarcity), yaitu ketidakseimbangan antara kebutuhan dan alat pemuas kebutuhan.
            </p>

            <h4>3 Masalah Ekonomi Dasar</h4>
            <ul>
                <li>
                    <strong>Apa yang harus diproduksi?</strong>
                    <p>merujuk pada keputusan tentang barang dan jasa apa yang harus dihasilkan untuk memenuhi kebutuhan masyarakat. Karena sumber daya terbatas, tidak semua kebutuhan manusia dapat dipenuhi secara bersamaan. Oleh karena itu, pilihan harus dibuat mengenai jenis barang atau jasa yang paling penting dan mendesak. 
                    Misalnya, sebuah negara harus memutuskan apakah akan fokus memproduksi kebutuhan dasar seperti pangan, pakaian, dan perumahan, atau barang-barang mewah seperti mobil dan perhiasan. Keputusan ini biasanya dipengaruhi oleh prioritas masyarakat, tingkat kebutuhan, serta ketersediaan sumber daya. Pilihan yang diambil memiliki konsekuensi besar terhadap kesejahteraan ekonomi suatu masyarakat.
                    </p>
                </li>
                <li>
                    <strong>Bagaimana cara memproduksi?</strong> 
                    <p>mengacu pada pilihan metode, teknologi, dan sumber daya yang akan digunakan dalam proses produksi. Karena sumber daya terbatas, keputusan ini bertujuan untuk memaksimalkan efisiensi dan mengurangi pemborosan.
                    Produsen harus menentukan apakah akan menggunakan tenaga kerja manual atau teknologi otomatis, serta memilih antara sumber daya yang ramah lingkungan atau yang lebih murah tetapi berdampak negatif terhadap lingkungan. Misalnya, dalam menghasilkan listrik, suatu negara dapat memilih menggunakan batu bara yang murah namun polutif, atau energi terbarukan seperti matahari atau angin yang lebih ramah lingkungan tetapi memerlukan investasi besar.
                    Keputusan ini juga melibatkan bagaimana kombinasi faktor produksi (tanah, tenaga kerja, modal, dan kewirausahaan) digunakan untuk menghasilkan barang atau jasa. Pilihan yang diambil memengaruhi biaya produksi, kualitas barang, dampak lingkungan, serta keadilan sosial dalam distribusi pekerjaan.</p>
                </li>
                <li>
                    <strong>Untuk siapa barang diproduksi?</strong> 
                    <p>merujuk pada keputusan mengenai bagaimana hasil produksi didistribusikan di antara anggota masyarakat. Karena sumber daya terbatas, tidak semua orang bisa mendapatkan barang atau jasa dalam jumlah yang sama. Oleh karena itu, harus ada mekanisme untuk menentukan siapa yang akan menikmati barang dan jasa tersebut.
                    Distribusi ini biasanya bergantung pada beberapa faktor, seperti tingkat pendapatan, daya beli, atau kebijakan pemerintah. Dalam sistem ekonomi pasar, barang cenderung diberikan kepada mereka yang mampu membayar, sehingga orang dengan pendapatan lebih tinggi memiliki akses lebih besar. Sebaliknya, dalam sistem ekonomi yang diatur pemerintah, distribusi mungkin didasarkan pada kebutuhan masyarakat, seperti program subsidi untuk kelompok miskin.
                    Misalnya, negara harus memutuskan apakah barang tertentu, seperti layanan kesehatan atau pendidikan, akan diberikan secara gratis untuk semua, dijual hanya kepada yang mampu membayar, 
                    atau didistribusikan secara khusus kepada kelompok yang paling membutuhkan. Keputusan ini sangat penting karena memengaruhi keadilan sosial dan stabilitas ekonomi suatu masyarakat.</p>
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
