import './AboutUs.css';
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import ContactModal from '../ContactModal/ContactModal';

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
            <section id="About-fiva">
                <Container className="ServicepymeSect2" fluid>
                    <Row>
                        <Col className='ServicepymeSect2Title' xs={{ span: 12 }} md={{ span: 12 }}>
                            <h2>
                                Que hacemos en fiva
                            </h2>
                        </Col>
                    </Row>
                    <Row className='space'>
                        <Col className='circle' md={{ span: 6, offset: 3 }} />
                        <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}  >
                            <p>
                                Fiva se compone de profesionales especializados en el sector energetico y tecnologico pàra poder ofrecer los mejores servicios fiva cuenta con profesionales
                                con amplia experiencia.
                            </p>
                            <br />
                        </Col>
                    </Row>
                    <Row className='space'>
                        <Col className='circle' xs={{ span: 12 }} md={{ span: 6, offset: 3 }} />
                        <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}  >
                            <p>
                                Ofrecemos un servicio de asesoría con el que garantizamos reducir la factura eléctrica de su administración, compañía,
                                empresa u organización a la vez que la ponemos a
                                funcionar con energía 100% procedente de fuentes renovables sin que tenga que invertir un euro.
                            </p>
                            <br />
                        </Col>
                    </Row>
                    <Row className='space'>
                        <Col className='circle' xs={{ span: 12 }} md={{ span: 6, offset: 3 }} />
                        <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}  >
                            <p>
                                Fiva se caracteriza por unir el sector energético con el tecnológico creando productos y servicios de gran valor como nuestro
                                sistema de optimización de potencia, diseñado para encontrar la potencia que más se ajusta a las necesidades de nuestro cliente o
                                nuestros sistemas de gestión creados para ahorrar tiempo y dinero a comercializadoras y consultoras.

                            </p>
                        </Col>
                    </Row>

                </Container>
            </section>
            <section id="section3AB">
                <h2>Que Servicios Ofrecemos</h2>
                <Container fluid>
                    <Row id='work'>
                        <Col id='s1' lg={{ span: 3 }} >
                            <Card style={{ width: '20rem' }}>
                                <Card.Img id='im2' variant="top" src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1656590699/istockphoto-854354958-612x612_ole4ld.jpg" />
                                <Card.Body>
                                    <Card.Title>Ajustes de optimizacion de potencia</Card.Title>
                                    <Button href='/power' className='Buttonsm' variant="secondary">ver más</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col id='s1' lg={{ span: 3 }} >
                            <Card style={{ width: '20rem' }}>
                                <Card.Img id='im2' variant="top" src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1656590691/ajuste_ysqjla.jpg" />
                                <Card.Body>
                                    <Card.Title>Estudios de eficiencia energetica</Card.Title>
                                    <Button href='/energy' className='Buttonsm' variant="secondary">ver más</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col id='s1' lg={{ span: 3 }}>
                            <Card style={{ width: '20rem' }}>
                                <Card.Img id='im2' variant="top" src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1656590702/istockphoto-1128549235-612x612_fk1ftr.jpg" />
                                <Card.Body>
                                    <Card.Title>Digitalización y soluciones de software</Card.Title>
                                    <Button href='/solutions' className='Buttonsm' variant="secondary">ver más</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row >
                </Container>
            </section>

            <section id="section2AB">
                <h2>Nuestro Equipo</h2>
                <Container fluid>
                    <Row id='team'>
                        <Col lg={{ span: 6, offset: 1 }} style={{ padding: "0px" }}>
                            <Image
                                id="im"
                                src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1656244479/istockphoto-1185621229-612x612_jn7l5p.jpg"
                            />
                        </Col>

                        <Col id="sect3text" lg={{ span: 4 }} style={{ padding: "0px" }}>
                            <h3>Sales Manager</h3>
                            <p>Lorenzo Velazco</p>
                        </Col>
                    </Row >
                    <Row id='team'>
                        <Col id="sect4text" lg={{ span: 4 }} style={{ padding: "0px" }}>
                            <h3>CTO</h3>
                            <p>Eric Franciso Moral</p>
                        </Col>
                        <Col lg={{ span: 6, offset: 1 }} style={{ padding: "0px" }}>
                            <Image
                                id="im"
                                src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1656244479/istockphoto-1185621229-612x612_jn7l5p.jpg"
                            />
                        </Col>
                    </Row>
                    <Row id='team'>
                        <Col lg={{ span: 6, offset: 1 }} style={{ padding: "0px" }}>
                            <Image
                                id="im"
                                src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1656244479/istockphoto-1185621229-612x612_jn7l5p.jpg"
                            />
                        </Col>

                        <Col id="sect3text" lg={{ span: 4 }} style={{ padding: "0px" }}>
                            <h3>CEO</h3>
                            <p>Pablo Andreu</p>
                        </Col>
                    </Row>
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

export default AboutUs;