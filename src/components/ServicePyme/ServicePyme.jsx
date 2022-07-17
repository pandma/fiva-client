import './ServicePyme.css'
import { Container, Row, Col } from "react-bootstrap"
import ContactModal from '../ContactModal/ContactModal'

const ServicePyme = () => {
    return (
        <>
            <Container className="ServicepymeSect1" fluid>
                <Row>
                    <Col className='ServicepymeTitle' xs={{ span: 12 }} md={{ span: 12 }} >
                        <h1>Pequeñas y Medianas Empresas</h1>
                    </Col>
                </Row>
            </Container>

            <Container className="ServicepymeSect2" fluid>
                <Row>
                    <Col className='ServicepymeSect2Title' xs={{ span: 12 }} md={{ span: 12 }}>
                        <h2>
                            Servicios Para Pymes
                        </h2>
                    </Col>
                </Row>
                <Row className='space'>
                    <Col className='circle' xs={{ span: 12 }} md={{ span: 6, offset: 3 }} />
                    <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}  >
                        <p>
                            Trae la energía renovable a tu negocio y analiza si tu tarifa se adapta a tu horario de consumo.
                        </p>
                        <br />
                    </Col>
                </Row>
                <Row className='space'>
                    <Col className='circle' xs={{ span: 12 }} md={{ span: 6, offset: 3 }} />
                    <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}  >
                        <p>
                            Comparamos entre decenas de tarifas estándar y analizamos la posibilidad de que compréis energía directamente en el mercado mayoritario.
                        </p>
                        <br />
                    </Col>
                </Row>
                <Row className='space'>
                    <Col className='circle' xs={{ span: 12 }} md={{ span: 6, offset: 3 }} />
                    <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}  >
                        <p>
                            Recibe un informe sencillo de tus gastos y las ofertas que mas se adaptan a ti, así como las potencias óptimas a contratar.
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
    )
}

export default ServicePyme