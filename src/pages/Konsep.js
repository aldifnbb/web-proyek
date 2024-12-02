import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap"; 

const EkonomiKonsep = () => {
    return (
        <div className="container mt-5">
            <h1 data-aos="fade-right" className="text-center mb-4 text-primary">Konsep Dasar Ekonomi</h1>
            <p data-aos="fade-up" className="lead text-muted text-center mb-5">
                Ekonomi adalah ilmu yang mempelajari bagaimana individu, perusahaan, dan pemerintah membuat pilihan untuk memenuhi kebutuhan dan keinginan mereka dengan menggunakan sumber daya yang terbatas. 
                Konsep dasar ekonomi mencakup kelangkaan, pilihan, biaya peluang, serta interaksi antara permintaan dan penawaran di pasar.
            </p>

            <Row>
                <Col md={6} className="mb-4">
                    <Card data-aos="fade-up" className="shadow-lg border-0 rounded">
                        <Card.Body>
                            <Card.Title className="text-primary">Kelangkaan (Scarcity)</Card.Title>
                            <Card.Text>
                                Kelangkaan adalah konsep utama dalam ekonomi yang menjelaskan bahwa sumber daya yang terbatas tidak dapat memenuhi kebutuhan manusia yang tidak terbatas. 
                                Oleh karena itu, ekonomi berfokus pada bagaimana mengelola dan mengalokasikan sumber daya tersebut agar dapat memenuhi kebutuhan yang paling mendesak.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} className="mb-4">
                    <Card data-aos="fade-up" className="shadow-lg border-0 rounded">
                        <Card.Body>
                            <Card.Title className="text-primary">Pilihan (Choices)</Card.Title>
                            <Card.Text>
                                Karena kelangkaan, setiap individu atau masyarakat harus membuat pilihan. Pilihan ini melibatkan keputusan tentang bagaimana menggunakan sumber daya terbatas untuk memenuhi kebutuhan yang ada.
                                Pilihan yang dibuat akan menentukan alokasi sumber daya dan mempengaruhi kesejahteraan ekonomi.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col md={6} className="mb-4">
                    <Card data-aos="fade-up" className="shadow-lg border-0 rounded">
                        <Card.Body>
                            <Card.Title className="text-primary">Biaya Peluang (Opportunity Cost)</Card.Title>
                            <Card.Text>
                                Biaya peluang adalah nilai dari pilihan terbaik yang harus dikorbankan ketika membuat keputusan ekonomi. Ini adalah konsekuensi dari memilih satu opsi di atas yang lain, 
                                dan membantu individu atau organisasi untuk memahami trade-off yang terlibat dalam setiap keputusan.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} className="mb-4">
                    <Card data-aos="fade-up" className="shadow-lg border-0 rounded">
                        <Card.Body>
                            <Card.Title className="text-primary">Permintaan dan Penawaran (Supply and Demand)</Card.Title>
                            <Card.Text>
                                Permintaan dan penawaran adalah dua konsep yang saling berkaitan yang menentukan harga dan jumlah barang di pasar. 
                                Permintaan mencerminkan keinginan konsumen untuk membeli barang pada harga tertentu, sedangkan penawaran mencerminkan keinginan produsen untuk menjual barang pada harga tertentu. 
                                Interaksi keduanya menciptakan keseimbangan pasar.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </div>
    );
};

export default EkonomiKonsep;
