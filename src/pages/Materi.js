import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Card, CardBody, CardTitle, Button, Container, Row, Col } from "reactstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBookOpen, FaEdit } from "react-icons/fa";
import "./Materi.css";

const Materi = () => {
    const navigate = useNavigate();

    const chapters = {
        1: { title: "Masalah Ekonomi Dasar" },
        2: { title: "Kebijakan Moneter" },
        3: { title: "Perdagangan Internasional" },
        4: { title: "Permintaan dan Penawaran" },
        5: { title: "Siklus Ekonomi" },
    };

    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    const goToChapter = (chapter) => {
        navigate(`/bab${chapter}`);
    };

    const goToQuiz = (chapter) => {
        navigate(`/quiz?chapter=${chapter}`);
    };

    return (
        <div className="materi-container" style={{ position: "relative", overflow: "hidden" }}>
            <Navbar />
            <div className="animated-background"></div>
            <Container className="py-5">
                <h1 className="text-center mb-5 text-primary" data-aos="fade-down">
                    Materi Ekonomi - Kelas 10
                </h1>
                <Row>
                    {Object.entries(chapters).map(([chapter, data]) => (
                        <Col key={chapter} md="6" lg="4" className="my-3" data-aos="zoom-in">
                            <Card className="shadow-lg chapter-card border-0" style={{ borderRadius: "15px", overflow: "hidden", transition: "transform 0.3s ease-in-out" }}>
                                <div className={`chapter-${chapter}-header text-white p-3`} style={{ background: `linear-gradient(to right, #00c6ff, #0072ff)` }}>
                                    <CardTitle tag="h5">{`Bab ${chapter}: ${data.title}`}</CardTitle>
                                </div>
                                <CardBody className="text-center">
                                    <Button
                                        color="info"
                                        outline
                                        className="btn-block mb-3 shadow"
                                        onClick={() => goToChapter(chapter)}
                                        style={{ borderRadius: "30px", transition: "all 0.2s ease-in-out" }}
                                        onMouseOver={(e) => e.target.style.transform = "scale(1.1)"}
                                        onMouseOut={(e) => e.target.style.transform = "scale(1)"}
                                    >
                                        <FaBookOpen className="mr-2" /> Materi Lengkap
                                    </Button>
                                    <Button
                                        color="primary"
                                        outline
                                        className="btn-block shadow"
                                        onClick={() => goToQuiz(chapter)}
                                        style={{ borderRadius: "30px", transition: "all 0.2s ease-in-out" }}
                                        onMouseOver={(e) => e.target.style.transform = "scale(1.1)"}
                                        onMouseOut={(e) => e.target.style.transform = "scale(1)"}
                                    >
                                        <FaEdit className="mr-2" /> Kerjakan Kuis
                                    </Button>
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