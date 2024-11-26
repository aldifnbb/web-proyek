import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Materi.css";

const Materi = () => {
    const navigate = useNavigate();

    const chapters = [
        { id: 1, title: "Masalah Ekonomi Dasar", icon: "📘", bgColor: "#ff7e5f" },
        { id: 2, title: "Kebijakan Moneter", icon: "💰", bgColor: "#6a11cb" },
        { id: 3, title: "Perdagangan Internasional", icon: "🌐", bgColor: "#00c6ff" },
        { id: 4, title: "Permintaan dan Penawaran", icon: "📊", bgColor: "#f953c6" },
        { id: 5, title: "Siklus Ekonomi", icon: "🔄", bgColor: "#fc4a1a" },
    ];

    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    const goToChapter = (chapterId) => {
        navigate(`/bab${chapterId}`);
    };

    return (
        <div className="materi-container">
            <Navbar />
            <Container className="py-5">
                <h1
                    className="text-center mb-5 text-primary fw-bold display-4"
                    data-aos="fade-down"
                >
                    Semua Bab - Ekonomi Kelas 10
                </h1>
                <Row className="g-4">
                    {chapters.map((chapter) => (
                        <Col key={chapter.id} md="6" lg="4" data-aos="zoom-in">
                            <Card
                                className="shadow-lg chapter-card border-0"
                                style={{
                                    borderRadius: "20px",
                                    overflow: "hidden",
                                    position: "relative",
                                    background: `linear-gradient(135deg, ${chapter.bgColor}, #ffffff)`,
                                    transform: "scale(1)",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "scale(1.05)";
                                    e.currentTarget.style.boxShadow =
                                        "0 15px 30px rgba(0, 0, 0, 0.2)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "scale(1)";
                                    e.currentTarget.style.boxShadow = "none";
                                }}
                            >
                                <div className="text-center chapter-icon mt-4">
                                    <span style={{ fontSize: "3.5rem" }}>{chapter.icon}</span>
                                </div>
                                <CardBody className="text-center px-4">
                                    <h5 className="chapter-title fw-bold mb-4">
                                        {chapter.title}
                                    </h5>
                                    <button
                                        className="btn btn-primary btn-gradient mt-3"
                                        onClick={() => goToChapter(chapter.id)}
                                    >
                                        Buka Materi
                                    </button>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Materi;
