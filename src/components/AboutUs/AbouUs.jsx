import './AboutUs.css'
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap'

const AboutUs = () => {
    return (
        <>
            <section id="section1AB">
                <Container fluid>
                    <Row>
                        <Col id="title" lg={{ span: 12 }} md={{ span: 12 }} style={{ padding: "0px 60px" }}>
                            <h1>Conoce el equipo que hay detras de Fiva</h1>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section id="section2AB">
                <h2>¿Quienes somos?</h2>
                <Container fluid>
                    <Row id='team'>
                        <Col lg={{ span: 6 }} style={{ padding: "0px" }}>
                            <Image
                                id="im"
                                src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1656244479/istockphoto-1185621229-612x612_jn7l5p.jpg"
                            />
                        </Col>

                        <Col id="sect3text" lg={{ span: 6 }} style={{ padding: "0px" }}>
                            <h3>Contactamos con Fiva porque nuestra factura habia aumentado un 30% desde 2020 y
                                gracias a Fiva hemos ahorrado 2000€ en el ultimo año.</h3>
                            <p>Julian</p>
                        </Col>
                    </Row >
                    <Row id='team'>
                        <Col id="sect3text" lg={{ span: 6 }} style={{ padding: "0px" }}>
                            <h3>Contactamos con Fiva porque nuestra factura habia aumentado un 30% desde 2020 y
                                gracias a Fiva hemos ahorrado 2000€ en el ultimo año.</h3>
                            <p>Julian</p>
                        </Col>
                        <Col lg={{ span: 6 }} style={{ padding: "0px" }}>
                            <Image
                                id="im"
                                src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1656244479/istockphoto-1185621229-612x612_jn7l5p.jpg"
                            />
                        </Col>
                    </Row>
                    <Row id='team'>
                        <Col lg={{ span: 6 }} style={{ padding: "0px" }}>
                            <Image
                                id="im"
                                src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1656244479/istockphoto-1185621229-612x612_jn7l5p.jpg"
                            />
                        </Col>

                        <Col id="sect3text" lg={{ span: 6 }} style={{ padding: "0px" }}>
                            <h3>Contactamos con Fiva porque nuestra factura habia aumentado un 30% desde 2020 y
                                gracias a Fiva hemos ahorrado 2000€ en el ultimo año.</h3>
                            <p>Julian</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section id="section3AB">
                <h2>¿Que hacemos?</h2>
                <Container fluid>
                    <Row id='work'>
                        <Col id='s1' lg={{ span: 3 }} >
                            <Card style={{ width: '20rem' }}>
                                <Card.Img id='im2' variant="top" src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1656590699/istockphoto-854354958-612x612_ole4ld.jpg" />
                                <Card.Body>
                                    <Card.Title>Ajustes de optimizacion de potencia</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button className='Buttonsm' variant="secondary">Go somewhere</Button>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col id='s1' lg={{ span: 3 }} >
                            <Card style={{ width: '20rem' }}>
                                <Card.Img id='im2' variant="top" src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1656590691/ajuste_ysqjla.jpg" />
                                <Card.Body>
                                    <Card.Title>Estudios de eficiencia energetica</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button className='Buttonsm' variant="secondary">Go somewhere</Button>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col id='s1' lg={{ span: 3 }}>
                            <Card style={{ width: '20rem' }}>
                                <Card.Img id='im2' variant="top" src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1656590702/istockphoto-1128549235-612x612_fk1ftr.jpg" />
                                <Card.Body>
                                    <Card.Title>Digitalización y soluciones de software</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button className='Buttonsm' variant="secondary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row >
                </Container>
            </section>

        </>


    )
}

export default AboutUs