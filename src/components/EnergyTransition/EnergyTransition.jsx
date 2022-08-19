import './EnergyTransition.css';
import { Container, Row, Col } from "react-bootstrap";
import ContactModal from '../ContactModal/ContactModal';



const EnergyTransition = () => {
    return (
        <>
            <Container className="TransitionSect1" fluid>
                <Row>
                    <Col className='ServicepymeTitle' xs={{ span: 12 }} md={{ span: 12 }} >
                        <h1>Transición a Energia Renovable</h1>
                    </Col>
                </Row>
            </Container>

            <Container className="ServicepymeSect2" fluid>
                <Row>
                    <Col className='ServicepymeSect2Title' xs={{ span: 12 }} md={{ span: 12 }}>
                        <h2>
                            Servicios de Transición a Energia Renovable
                        </h2>
                    </Col>
                </Row>
                <Row className='space'>
                    <Col className='circle' xs={{ span: 12 }} md={{ span: 6, offset: 3 }} />
                    <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}  >
                        <p>
                            Estamos viviendo la modernización de la manera en la que obtendremos energías durante las próximas generaciones.
                        </p>
                        <br />
                    </Col>
                </Row>
                <Row className='space'>
                    <Col className='circle' xs={{ span: 12 }} md={{ span: 6, offset: 3 }} />
                    <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}  >
                        <p>
                            Las tecnologías renovables han llegado para quedarse y ahora es el momento de dar el paso y fomentar el autoconsumo, aportando cada uno su grano de arena.
                        </p>
                        <br />
                    </Col>
                </Row>
                <Row className='space'>
                    <Col className='circle' xs={{ span: 12 }} md={{ span: 6, offset: 3 }} />
                    <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}  >
                        <p>
                            Tanto si su empresa necesita cubrir emisiones de CO2, cómo si le preocupa la calidad del aire que respiramos, instalar alternativas de autoconsumo aportará un grano de arena en esta carrera por la sostenibilidad ambinetal
                        </p>
                    </Col>
                </Row>
                <Row className='space'>
                    <Col className='circle' xs={{ span: 12 }} md={{ span: 6, offset: 3 }} />
                    <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}  >
                        <p>
                            Disfrute de nuestras ofertas y precios y solicite ya mismo un presupuesto
                        </p>
                    </Col>
                </Row>
            </Container>

            <Container className='ServicepymeSect3' fluid>
                <Row>
                    <Col className='contactImg' lg={{ span: 6 }} md={{ span: 12 }}></Col>

                    <Col className='contactserviceTitle' lg={{ span: 6 }} md={{ span: 12 }} style={{ padding: "0px 60px" }}>
                        <h1>Contacta con Nosotros</h1>
                        <ContactModal />
                    </Col>
                </Row>
            </Container>
        </>

    );
};


export default EnergyTransition;