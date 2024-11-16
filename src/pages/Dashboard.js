import { useEffect } from "react";
import { useAuth } from "./AuthContext";
import Navbar from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

function DashboardEkonomi() {
    const { user } = useAuth();

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const styles = {
        container: {
            backgroundColor: "#f8f9fa",
            minHeight: "100vh",

        },
        section: {
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            margin: "20px 0",
        },
        sectionHover: {
            transform: "translateY(-10px)",
            boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)",
        },
        sectionTitle: {
            color: "#007bff",
            fontSize: "1.5rem",
            fontWeight: "bold",
        },
        sectionText: {
            color: "#6c757d",
            fontSize: "1rem",
            marginTop: "10px",
        },
    };

    if (!user) {
        return <div className="text-center mt-5">Please log in to view this page.</div>;
    }

    return (
        <div style={styles.container}>
            <Navbar />
            <main className="container mt-4">
                <div className="text-center mb-4" data-aos="fade-up">
                    <h2 style={{ color: "#343a40", fontWeight: "bold", fontSize: "2rem" }}>
                        Belajar Seru dengan Ekonomi Kelas 11
                    </h2>
                    <p style={{ color: "#6c757d", fontSize: "1rem" }}>
                        Temukan berbagai materi, tugas, dan quiz menarik untuk membantu Anda memahami ekonomi dengan mudah.
                    </p>
                </div>
    
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {[
                        { title: "Materi", text: "Daftar materi yang akan dipelajari, seperti dasar-dasar ekonomi, permintaan dan penawaran, sistem ekonomi, dan lainnya." },
                        { title: "Tugas", text: "Lihat tugas yang diberikan dan pastikan untuk mengumpulkannya tepat waktu." },
                        { title: "Quiz", text: "Mengikuti Quiz setelah belajar beberapa materi." },
                        { title: "Pengumuman", text: "Pengumuman penting terkait kegiatan kelas atau informasi lainnya." },
                        { title: "Diskusi", text: "Tempat berdiskusi dengan teman-teman dan guru mengenai topik ekonomi yang dipelajari." },
                    ].map((section, idx) => (
                        <div
                            className="col"
                            data-aos="fade-up"
                            key={idx}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = styles.sectionHover.transform;
                                e.currentTarget.style.boxShadow = styles.sectionHover.boxShadow;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "none";
                                e.currentTarget.style.boxShadow = styles.section.boxShadow;
                            }}
                            style={{ ...styles.section }}
                        >
                            <div>
                                <h3 style={styles.sectionTitle}>{section.title}</h3>
                                <p style={styles.sectionText}>{section.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default DashboardEkonomi;
