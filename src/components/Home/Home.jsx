import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import ContactModal from "../ContactModal/ContactModal";
import OurService from "../OurService/OurService";

const Home = () => {


    return (
        <>
            <section id="section1">
                <Container fluid>
                    <Row className="animate">
                        <Col id="titlehome" lg={{ span: 6 }} md={{ span: 12 }} style={{ padding: "0px 60px" }}>
                            <h1>¿Cuánto Podemos bajar en tu factura de la luz?</h1>
                            <ContactModal />
                        </Col>

                        <Col id="ib" lg={{ span: 6 }} md={{ span: 12 }}></Col>
                    </Row>
                </Container>
            </section>

            <section className="OurService">
                <OurService />
            </section>

            <section id="section2">
                <Container fluid>
                    <h2>Nuestra Labor</h2>
                    <h4 id="t-h4">Nuestra plantilla se compone de abogados, administradores e ingenieros especializados en el sector
                        eléctrico, para ofrecer así un servicio de gestión integral en energía</h4>
                    <Row>
                        <Col className="animateImg glow delay-1" xs={12} lg={{ span: 6 }} style={{ padding: "0px" }}>
                            <Image
                                id="im"
                                src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1656244479/istockphoto-1185621229-612x612_jn7l5p.jpg"
                            />
                        </Col>
                        <Col className="animateImg glow delay-2" xs={12} lg={{ span: 6 }} style={{ padding: "0px" }}>
                            <Image
                                id="im"
                                src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1656244479/istockphoto-1164863397-612x612_w8ptfa.jpg"
                            />
                        </Col>
                        <Col className="animateImg glow delay-3" lg={{ span: 6 }} style={{ padding: "0px" }}>
                            <Image
                                id="im"
                                src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1656244479/istockphoto-1178152960-612x612_tifmzf.jpg"
                            />
                        </Col>
                        <Col className="animateImg glow delay-4" id="sect3text" lg={{ span: 6 }} style={{ padding: "0px" }}>
                            <h3>Contactamos con Fiva porque nuestra factura habia aumentado un 30% desde 2020 y
                                gracias a Fiva hemos ahorrado 2000€ en el ultimo año.</h3>
                            <p>Julian</p>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section id="section2-small">
                <Container fluid>
                    <h2 className="centered">Sobre Nosotros</h2>
                    <h4 id="t-h4">Nuestra plantilla se compone de abogados, administradores e ingenieros especializados en el sector
                        eléctrico, para ofrecer así un servicio de gestión integral en energía</h4>
                </Container>
            </section>


            <section id="section5">
                <Container fluid>
                    <Row>
                        <Col id="ib2" lg={{ span: 6 }} md={{ span: 12 }}></Col>

                        <Col id="titlehome" lg={{ span: 6 }} md={{ span: 12 }} style={{ padding: "0px 60px" }}>
                            <h1>¿Te sintes perdido? Preguntanos!</h1>
                            <ContactModal />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Home;
