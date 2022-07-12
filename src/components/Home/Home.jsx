import "./Home.css"
import { Container, Row, Col } from "react-bootstrap"
import Image from "react-bootstrap/Image"
import ContactModal from "../ContactModal/ContactModal"

const Home = () => {


    return (
        <>
            <section id="section1">
                <Container fluid>
                    <Row className="animate">
                        <Col id="title" lg={{ span: 6 }} md={{ span: 12 }} style={{ padding: "0px 60px" }}>
                            <h1>¿Cuanto Podemos bajar en tu factura de la luz?</h1>
                            <ContactModal />
                        </Col>

                        <Col id="ib" lg={{ span: 6 }} md={{ span: 12 }}></Col>
                    </Row>
                </Container>
            </section>

            <Container fluid>
                <section id="section2">
                    <h2>¿A que nos dedicamos?</h2>
                    <h4 id="t-h4">Ayudamos a empresas a ahorrar en su factura de la luz.</h4>
                    <Row>
                        <Col className="animateImg glow delay-1" lg={{ span: 6 }} style={{ padding: "0px" }}>
                            <Image
                                id="im"
                                src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1656244479/istockphoto-1185621229-612x612_jn7l5p.jpg"
                            />
                        </Col>
                        <Col className="animateImg glow delay-2" lg={{ span: 6 }} style={{ padding: "0px" }}>
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
                </section>
            </Container>

            <section id="section5">
                <Container fluid>
                    <Row>
                        <Col id="ib2" lg={{ span: 6 }} md={{ span: 12 }}></Col>

                        <Col id="title" lg={{ span: 6 }} md={{ span: 12 }} style={{ padding: "0px 60px" }}>
                            <h1>¿Te sintes perdido? Preguntanos!</h1>
                            <ContactModal />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Home
