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

    const gradients = [
        "linear-gradient(to right, #ff7e5f, #feb47b)",
        "linear-gradient(to right, #00c6ff, #0072ff)",
        "linear-gradient(to right, #76b852, #8dc26f)",
        "linear-gradient(to right, #f953c6, #b91d73)",
        "linear-gradient(to right, #fc4a1a, #f7b733)",
    ];

    useEffect(() => {
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
                    {Object.entries(chapters).map(([chapter, data], index) => (
                        <Col key={chapter} md="6" lg="4" className="my-3" data-aos="zoom-in">
                            <Card
                                className="shadow-lg chapter-card border-0"
                                style={{
                                    borderRadius: "20px",
                                    overflow: "hidden",
                                    transition: "transform 0.3s ease-in-out",
                                }}
                                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                            >
                                <div
                                    className={`chapter-${chapter}-header chapter-header text-white`}
                                    style={{
                                        background: gradients[index % gradients.length],
                                    }}
                                >
                                    <CardTitle tag="h5">{`Bab ${chapter}: ${data.title}`}</CardTitle>
                                </div>
                                <CardBody className="text-center">
                                    <Button
                                        color="info"
                                        outline
                                        className="btn-block mb-3 shadow"
                                        onClick={() => goToChapter(chapter)}
                                        style={{ borderRadius: "30px" }}
                                    >
                                        <FaBookOpen size={20} className="mr-2" /> Materi Lengkap
                                    </Button>
                                    <Button
                                        color="primary"
                                        outline
                                        className="btn-block shadow"
                                        onClick={() => goToQuiz(chapter)}
                                        style={{ borderRadius: "30px" }}
                                    >
                                        <FaEdit size={20} className="mr-2" /> Kerjakan Kuis
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
