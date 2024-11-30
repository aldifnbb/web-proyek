import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Row, Col } from "reactstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBookOpen } from "react-icons/fa";
import kopiImage from '../img/kopi.jpg';
import pict1Image from '../img/pict1.jpg';
import pict2Image from '../img/pict2.jpg';
import pict3Image from '../img/pict3.jpg';
import pict4Image from '../img/pict4.jpg';
import pict5Image from '../img/pict5.jpg';

const Materi = () => {
    const navigate = useNavigate();

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

    return (
        <div className="project" style={{ position: "relative", overflow: "hidden" }}>
            <div className="animated-background"></div>

            <Container className="py-5">
                <h2 className="text-primary mb-5" data-aos="fade-down" style={{ position: "relative", zIndex: 2 }}>
                    <span>Materi Ekonomi Lengkap - Kelas 10</span>
                </h2>
                <div className="background-text">TechnocoMinds</div>

                <div className="vertical-line"></div>

                <Row>
                    {/* Bab 1 */}
                    <Col md="6" lg="4" className="my-3" data-aos="zoom-in">
                        <div className="proj-imgbx" style={{ backgroundImage: `url(${pict1Image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className="proj-txtx">
                                <h4>Bab 1: Masalah Ekonomi Dasar</h4>
                                <span>Pelajari masalah dasar dalam ekonomi</span>
                                <Button
                                    color="info"
                                    outline
                                    className="mt-3"
                                    onClick={() => goToChapter(1)}
                                    style={{ borderRadius: "30px" }}
                                >
                                    <FaBookOpen className="mr-2" /> Materi Lengkap
                                </Button>
                            </div>
                        </div>
                    </Col>

                    {/* Bab 2 */}
                    <Col md="6" lg="4" className="my-3" data-aos="zoom-in">
                        <div className="proj-imgbx" style={{ backgroundImage: `url(${pict2Image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className="proj-txtx">
                                <h4>Bab 2: Kebijakan Moneter</h4>
                                <span>Pelajari tentang kebijakan moneter</span>
                                <Button
                                    color="info"
                                    outline
                                    className="mt-3"
                                    onClick={() => goToChapter(2)}
                                    style={{ borderRadius: "30px" }}
                                >
                                    <FaBookOpen className="mr-2" /> Materi Lengkap
                                </Button>
                            </div>
                        </div>
                    </Col>

                    {/* Bab 3 */}
                    <Col md="6" lg="4" className="my-3" data-aos="zoom-in">
                        <div className="proj-imgbx" style={{ backgroundImage: `url(${pict3Image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className="proj-txtx">
                                <h4>Bab 3: Perdagangan Internasional</h4>
                                <span>Pelajari perdagangan antarnegara</span>
                                <Button
                                    color="info"
                                    outline
                                    className="mt-3"
                                    onClick={() => goToChapter(3)}
                                    style={{ borderRadius: "30px" }}
                                >
                                    <FaBookOpen className="mr-2" /> Materi Lengkap
                                </Button>
                            </div>
                        </div>
                    </Col>

                    {/* Bab 4 */}
                    <Col md="6" lg="4" className="my-3" data-aos="zoom-in">
                        <div className="proj-imgbx" style={{ backgroundImage: `url(${pict4Image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className="proj-txtx">
                                <h4>Bab 4: Permintaan dan Penawaran</h4>
                                <span>Pelajari tentang hukum permintaan dan penawaran</span>
                                <Button
                                    color="info"
                                    outline
                                    className="mt-3"
                                    onClick={() => goToChapter(4)}
                                    style={{ borderRadius: "30px" }}
                                >
                                    <FaBookOpen className="mr-2" /> Materi Lengkap
                                </Button>
                            </div>
                        </div>
                    </Col>

                    {/* Bab 5 */}
                    <Col md="6" lg="4" className="my-3" data-aos="zoom-in">
                        <div className="proj-imgbx" style={{ backgroundImage: `url(${pict5Image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className="proj-txtx">
                                <h4>Bab 5: Siklus Ekonomi</h4>
                                <span>Pelajari tentang siklus perekonomian</span>
                                <Button
                                    color="info"
                                    outline
                                    className="mt-3"
                                    onClick={() => goToChapter(5)}
                                    style={{ borderRadius: "30px" }}
                                >
                                    <FaBookOpen className="mr-2" /> Materi Lengkap
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Materi;
