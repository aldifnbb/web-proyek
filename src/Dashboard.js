import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from './AuthContext';
import AOS from "aos";
import "aos/dist/aos.css";

function Dashboard() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    if (!user) {
        return <div className="text-center mt-5">Please log in to view this page.</div>;
    }

    return (
        <div className="d-flex">
            <div className="col">
                <header className="d-flex justify-content-between align-items-center p-3 bg-primary text-white">
                    <div data-aos="fade-down">
                        <h2>Selamat Datang di Website SMK N 1 Siborongborong</h2>
                        <p>Halo, <strong>{user.username}</strong>!</p>
                    </div>
                </header>

                <div className="container mt-4">
                    <section className="section mb-4 p-3 bg-white shadow-sm rounded" data-aos="fade-right">
                        <h3 className="text-primary">Visi</h3>
                        <p>Menjadi sekolah unggulan yang berkarakter dan berprestasi.</p>
                    </section>
                    <section className="section mb-4 p-3 bg-white shadow-sm rounded" data-aos="fade-left">
                        <h3 className="text-primary">Misi</h3>
                        <ul>
                            <li>Meningkatkan kualitas pendidikan dan pembelajaran.</li>
                            <li>Membentuk siswa yang berkarakter dan berwawasan luas.</li>
                            <li>Mengembangkan keterampilan siswa dalam bidang kejuruan.</li>
                        </ul>
                    </section>
                    <section className="section mb-4 p-3 bg-white shadow-sm rounded" data-aos="fade-up">
                        <h3 className="text-primary">Informasi Terbaru</h3>
                        <p>Dapatkan informasi terbaru seputar kegiatan dan program unggulan sekolah.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;