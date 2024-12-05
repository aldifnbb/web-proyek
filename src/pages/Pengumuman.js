import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const Pengumuman = () => {
    const [pengumumanList, setPengumumanList] = useState([]);
    const [judul, setJudul] = useState('');
    const [konten, setKonten] = useState('');
    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });

        const storedPengumumanList = JSON.parse(localStorage.getItem('pengumumanList')) || [];
        setPengumumanList(storedPengumumanList);
    }, []);

    useEffect(() => {
        if (pengumumanList.length > 0) {
            localStorage.setItem('pengumumanList', JSON.stringify(pengumumanList));
        }
    }, [pengumumanList]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (judul && konten) {
            const newPengumuman = {
                id: uuidv4(),
                judul: judul,
                konten: konten,
                tanggal: new Date().toLocaleString(),
            };

            setPengumumanList((prevList) => [...prevList, newPengumuman]);
            setJudul('');
            setKonten('');
            setShowNotification(true);

            setTimeout(() => {
                setShowNotification(false);
            }, 3000);
        } else {
            alert('Mohon isi semua kolom pengumuman!');
        }
    };

    const handleDelete = (id) => {
        const updatedPengumumanList = pengumumanList.filter((pengumuman) => pengumuman.id !== id);
        setPengumumanList(updatedPengumumanList);
    };

    return (
        <div className="pengumuman-container">
            <div className="background-text">Pengumuman</div>
            <header className="pengumuman-header" data-aos="fade-down">
                <h1>Pengumuman</h1>
                <p>Tempat untuk menambahkan pengumuman penting.</p>
            </header>

            <section className="pengumuman-form" data-aos="fade-right">
                <h3>Tambah Pengumuman Baru</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="judul">Judul Pengumuman</label>
                        <input
                            type="text"
                            id="judul"
                            className="form-control"
                            placeholder="Masukkan judul pengumuman"
                            value={judul}
                            onChange={(e) => setJudul(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="konten">Isi Pengumuman</label>
                        <textarea
                            id="konten"
                            className="form-control"
                            placeholder="Masukkan isi pengumuman"
                            value={konten}
                            onChange={(e) => setKonten(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-submit" data-aos="fade-right">
                        Tambah Pengumuman  
                    </button>
                </form>
            </section>

            {showNotification && (
                <div className="notification" data-aos="fade-left">
                    <span className="icon">✔</span>
                    <p>Selesai!</p>
                </div>
            )}

            <section className="pengumuman-list" data-aos="fade-right">
                <h3>Daftar Pengumuman</h3>
                {pengumumanList.length === 0 ? (
                    <p className="empty-list">Belum ada pengumuman yang ditambahkan.</p>
                ) : (
                    <div className="card-columns">
                        {pengumumanList.map((pengumuman) => (
                            <div key={pengumuman.id} className="card" data-aos="zoom-in">
                                <div className="card-body">
                                    <h5 className="card-title">{pengumuman.judul}</h5>
                                    <p className="card-text">{pengumuman.konten}</p>
                                    <small className="text-muted">{pengumuman.tanggal}</small>
                                    <button
                                        className="btn btn-danger btn-sm mt-3"
                                        onClick={() => handleDelete(pengumuman.id)}
                                        data-aos="fade-right"
                                    >
                                        <i className="bi bi-trash"></i> Hapus
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};

export default Pengumuman;