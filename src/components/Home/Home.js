import "./Home.css"
import { Container, Row, Col } from "react-bootstrap"
import Image from "react-bootstrap/Image"



const Home = () => {


    return (
        <>
            <section id="section1">
                <Container fluid>
                    <Row>
                        <Col id="title" lg={{ span: 6 }} md={{ span: 12 }} style={{ padding: "0px 60px" }}>
                            <h1>¿Cuanto Podemos bajar en tu factura de la luz?</h1>

                            <button style={{ width: "250px" }} className="Button mb-4" variant="light">
                                <strong>Contactanos</strong>
                            </button>

                        </Col>

                        <Col id="ib" lg={{ span: 6 }} md={{ span: 12 }}></Col>
                    </Row>
                </Container>
            </section>

            <Container fluid>
                <section id="section2">
                    <h2>Qiuenes Somos!!</h2>
                    <Row>
                        <Col lg={{ span: 6 }} style={{ padding: "0px" }}>
                            <Image
                                id="im"
                                src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1656244479/istockphoto-1185621229-612x612_jn7l5p.jpg"
                            />
                        </Col>
                        <Col lg={{ span: 6 }} style={{ padding: "0px" }}>
                            <Image
                                id="im"
                                src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1656244479/istockphoto-1164863397-612x612_w8ptfa.jpg"
                            />
                        </Col>
                        <Col lg={{ span: 6 }} style={{ padding: "0px" }}>
                            <Image
                                id="im"
                                src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1656244479/istockphoto-1178152960-612x612_tifmzf.jpg"
                            />
                        </Col>
                        <Col id="sect3text" lg={{ span: 6 }} style={{ padding: "0px" }}>
                            <h3>After two years renting our van we decided to quit our jobs and start our own business of campervan renting, it's been a long journey but are happy and free now</h3>
                            <p>Petter an jule</p>
                        </Col>
                    </Row>
                </section>
            </Container>

            <section id="section5">
                <Container fluid>
                    <Row>
                        <Col id="ib2" lg={{ span: 6 }} md={{ span: 12 }}></Col>

                        <Col id="title" lg={{ span: 6 }} md={{ span: 12 }} style={{ padding: "0px 60px" }}>
                            <h1>Not Sure yet? Please leave us any question</h1>
                            <button style={{ width: "250px" }} className="Button mb-4" variant="light">
                                <strong>Leave us a Message</strong>
                            </button>

                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Home
