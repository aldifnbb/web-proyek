import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Navbar from "../components/Navbar";
import './Pengumuman.css';

const Pengumuman = () => {
    const [pengumumanList, setPengumumanList] = useState([]);
    const [judul, setJudul] = useState('');
    const [konten, setKonten] = useState('');
    const [showNotification, setShowNotification] = useState(false);

    // Load existing pengumuman from localStorage on mount
    useEffect(() => {
        const storedPengumumanList = JSON.parse(localStorage.getItem('pengumumanList')) || [];
        setPengumumanList(storedPengumumanList);
    }, []);

    // Save pengumuman list to localStorage whenever it changes
    useEffect(() => {
        if (pengumumanList.length > 0) {
            localStorage.setItem('pengumumanList', JSON.stringify(pengumumanList));
        }
    }, [pengumumanList]);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (judul && konten) {
            const newPengumuman = {
                id: uuidv4(),
                judul: judul,
                konten: konten,
                tanggal: new Date().toLocaleString(),
            };

            // Add new pengumuman to the list
            setPengumumanList((prevList) => [...prevList, newPengumuman]);
            setJudul('');
            setKonten('');
            setShowNotification(true);

            // Hide notification after 3 seconds
            setTimeout(() => {
                setShowNotification(false);
            }, 3000);
        } else {
            alert('Mohon isi semua kolom pengumuman!');
        }
    };

    // Handle deletion of a pengumuman
    const handleDelete = (id) => {
        const updatedPengumumanList = pengumumanList.filter((pengumuman) => pengumuman.id !== id);
        setPengumumanList(updatedPengumumanList);
    };

    return (
        <div className="pengumuman-container" style={{ paddingTop: "100px" }}>
            <Navbar />
            <header className="pengumuman-header">
                <h1>Pengumuman</h1>
                <p>Tempat untuk menambahkan pengumuman penting.</p>
            </header>

            <section className="pengumuman-form">
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
                    <button type="submit" className="btn btn-submit">Tambah Pengumuman</button>
                </form>
            </section>

            {showNotification && (
                <div className="notification">
                    <span className="icon">✔</span>
                    <p>Selesai!</p>
                </div>
            )}

            <section className="pengumuman-list">
                <h3>Daftar Pengumuman</h3>
                {pengumumanList.length === 0 ? (
                    <p className="empty-list">Belum ada pengumuman yang ditambahkan.</p>
                ) : (
                    <ul className="list-group">
                        {pengumumanList.map((pengumuman) => (
                            <li key={pengumuman.id} className="list-group-item">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{pengumuman.judul}</h5>
                                        <p className="card-text">{pengumuman.konten}</p>
                                        <small className="text-muted">{pengumuman.tanggal}</small>
                                        <button
                                            className="btn btn-danger btn-sm mt-3"
                                            onClick={() => handleDelete(pengumuman.id)}
                                        >
                                            <i className="bi bi-trash"></i> Hapus
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </div>
    );
};

export default Pengumuman;
