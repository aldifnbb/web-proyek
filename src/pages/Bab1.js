import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    Button,
    Container,
    Tooltip,
    Card,
    CardBody,
    CardTitle,
    CardText,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Bab1 = () => {
    const [open, setOpen] = useState("1");
    const [tooltipOpen1, setTooltipOpen1] = useState(false);
    const [tooltipOpen2, setTooltipOpen2] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    const toggle = (id) => setOpen(open === id ? null : id);
    const toggleTooltip1 = () => setTooltipOpen1(!tooltipOpen1);
    const toggleTooltip2 = () => setTooltipOpen2(!tooltipOpen2);

    return (
        <Container className="mt-5 p-4 rounded shadow-lg" style={{ background: "linear-gradient(135deg, #f3f4f6, #dbe6f6)" }} data-aos="fade-up">
            <h1 className="text-center mb-4 text-primary">Bab 1: Masalah Ekonomi Dasar</h1>
            <p data-aos="fade-up">
                Masalah ekonomi dasar adalah persoalan yang dihadapi masyarakat dalam memenuhi kebutuhan yang tidak terbatas 
                dengan sumber daya yang terbatas. Masalah ini muncul karena kelangkaan (scarcity).
            </p>

            <h4 className="mt-4 text-secondary" data-aos="fade-right">3 Masalah Ekonomi Dasar</h4>

            <Accordion open={open} toggle={toggle} className="mb-4" style={{ border: "none" }}>
                <AccordionItem data-aos="flip-right">
                    <AccordionHeader targetId="1" className="bg-light text-dark">
                        Apa yang harus diproduksi?
                    </AccordionHeader>
                    <AccordionBody accordionId="1">
                        <Card className="my-3 border-0 shadow-sm" style={{ borderRadius: "10px", overflow: "hidden" }}>
                            <div style={{ background: "linear-gradient(135deg, #6dd5ed, #2193b0)", color: "white", padding: "10px 20px" }}>
                                <CardTitle tag="h5">Keputusan Produksi</CardTitle>
                            </div>
                            <CardBody>
                                <CardText>
                                    Merujuk pada keputusan tentang barang dan jasa apa yang harus dihasilkan untuk memenuhi kebutuhan masyarakat. Karena sumber daya terbatas...
                                </CardText>
                                <img
                                    src="https://via.placeholder.com/300"
                                    alt="Production Example"
                                    className="img-fluid my-3"
                                    data-aos="zoom-in"
                                />
                                <div>
                                    <p><strong>Kuis Singkat:</strong> Apa yang memengaruhi keputusan tentang apa yang harus diproduksi?</p>
                                    <Button id="btnOption1" color="info" size="sm" className="mr-2">A. Prioritas masyarakat</Button>
                                    <Button id="btnOption2" color="info" size="sm">B. Teknologi</Button>
                                    <Tooltip placement="top" isOpen={tooltipOpen1} target="btnOption1" toggle={toggleTooltip1}>
                                        Pilihan A mungkin tepat!
                                    </Tooltip>
                                    <Tooltip placement="top" isOpen={tooltipOpen2} target="btnOption2" toggle={toggleTooltip2}>
                                        Pertimbangkan efek teknologi
                                    </Tooltip>
                                </div>
                            </CardBody>
                        </Card>
                    </AccordionBody>
                </AccordionItem>

                <AccordionItem data-aos="flip-right">
                    <AccordionHeader targetId="2" className="bg-light text-dark">
                        Bagaimana cara memproduksi?
                    </AccordionHeader>
                    <AccordionBody accordionId="2">
                        <Card className="my-3 border-0 shadow-sm" style={{ borderRadius: "10px", overflow: "hidden" }}>
                            <div style={{ background: "linear-gradient(135deg, #ff9966, #ff5e62)", color: "white", padding: "10px 20px" }}>
                                <CardTitle tag="h5">Metode Produksi</CardTitle>
                            </div>
                            <CardBody>
                                <CardText>
                                    Mengacu pada pilihan metode, teknologi, dan sumber daya yang akan digunakan dalam proses produksi...
                                </CardText>
                                <div className="bg-success text-white text-center p-2 my-3 rounded" data-aos="flip-left">
                                    <strong>Contoh Penggunaan Energi (Animasi Placeholder)</strong>
                                </div>
                                <div>
                                    <p><strong>Kuis Singkat:</strong> Metode produksi apa yang bisa dipilih untuk efisiensi tinggi?</p>
                                    <Button color="info" size="sm" className="mr-2">A. Manual</Button>
                                    <Button color="info" size="sm">B. Teknologi otomatis</Button>
                                </div>
                            </CardBody>
                        </Card>
                    </AccordionBody>
                </AccordionItem>

                <AccordionItem data-aos="flip-right">
                    <AccordionHeader targetId="3" className="bg-light text-dark">
                        Untuk siapa barang diproduksi?
                    </AccordionHeader>
                    <AccordionBody accordionId="3">
                        <Card className="my-3 border-0 shadow-sm" style={{ borderRadius: "10px", overflow: "hidden" }}>
                            <div style={{ background: "linear-gradient(135deg, #56ccf2, #2f80ed)", color: "white", padding: "10px 20px" }}>
                                <CardTitle tag="h5">Distribusi Barang</CardTitle>
                            </div>
                            <CardBody>
                                <CardText>
                                    Merujuk pada keputusan mengenai bagaimana hasil produksi didistribusikan di antara anggota masyarakat...
                                </CardText>
                                <img
                                    src="https://via.placeholder.com/300"
                                    alt="Distribution Example"
                                    className="img-fluid my-3"
                                    data-aos="zoom-in"
                                />
                                <div>
                                    <p><strong>Kuis Singkat:</strong> Apa yang menentukan distribusi barang?</p>
                                    <Button color="info" size="sm" className="mr-2">A. Pendapatan</Button>
                                    <Button color="info" size="sm">B. Prioritas produksi</Button>
                                </div>
                            </CardBody>
                        </Card>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>

            <h3 data-aos="fade-left">Kelangkaan</h3>
            <p data-aos="fade-up">Kelangkaan adalah kondisi ketika sumber daya terbatas tidak dapat memenuhi semua kebutuhan manusia.</p>

            <h3 data-aos="fade-left">Biaya Peluang</h3>
            <p data-aos="fade-up">Biaya peluang adalah nilai dari alternatif terbaik berikutnya yang harus dikorbankan ketika membuat pilihan ekonomi.</p>

            <Button
                onClick={() => window.history.back()}
                color="primary"
                className="mt-4 shadow"
                data-aos="fade-up"
            >
                Kembali ke Materi
            </Button>
        </Container>
    );
};

export default Bab1;
