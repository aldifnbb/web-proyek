import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from './AuthContext';
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from './Navbar';  
import './Dashboard.css';

function DashboardEkonomi() {
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
        <div className="dashboard-ekonomi">
            <header className="sticky-header d-flex justify-content-between align-items-center p-3 text-white shadow">
                <h2 data-aos="fade-down">Mata Pelajaran Ekonomi Kelas 11</h2>
                <p data-aos="fade-down">Halo, <strong>{user.username}</strong>!</p>
            </header>
            <Navbar /> 

            <main className="container1 mt-4">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <section className="col" data-aos="fade-up">
                        <div className="section p-4 bg-white shadow rounded">
                            <h3 className="text-primary">Materi</h3>
                            <p>Daftar materi yang akan dipelajari, seperti dasar-dasar ekonomi, permintaan dan penawaran, sistem ekonomi, dan lainnya.</p>
                        </div>
                    </section>

                    <section className="col" data-aos="fade-up">
                        <div className="section p-4 bg-white shadow rounded">
                            <h3 className="text-primary">Latihan Soal</h3>
                            <p>Lihat tugas yang diberikan dan pastikan untuk mengumpulkannya tepat waktu.</p>
                        </div>
                    </section>

                    <section className="col" data-aos="fade-up">
                        <div className="section p-4 bg-white shadow rounded">
                            <h3 className="text-primary">Pengumuman</h3>
                            <p>Pengumuman penting terkait kegiatan kelas atau informasi lainnya.</p>
                        </div>
                    </section>

                    <section className="col" data-aos="fade-up">
                        <div className="section p-4 bg-white shadow rounded">
                            <h3 className="text-primary">Diskusi</h3>
                            <p>Tempat berdiskusi dengan teman-teman dan guru mengenai topik ekonomi yang dipelajari.</p>
                        </div>
                    </section>

                    <section className="col" data-aos="fade-up">
                        <div className="section p-4 bg-white shadow rounded">
                            <h3 className="text-primary">Tugas</h3>
                            <p>Tempat berdiskusi dengan teman-teman dan guru mengenai topik ekonomi yang dipelajari.</p>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default DashboardEkonomi;
