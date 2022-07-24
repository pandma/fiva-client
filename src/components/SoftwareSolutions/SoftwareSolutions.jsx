import './SoftwareSolutions.css'
import { Container, Row, Col } from "react-bootstrap"
import ContactModal from '../ContactModal/ContactModal'


const SoftwareSolutions=()=>{
    return(
        <>
        <Container className="ServiceAdmineSect1" fluid>
            <Row>
                <Col className='ServiceadminTitle' xs={{ span: 12 }} md={{ span: 12 }} >
                    <h1>Administradores de Fincas</h1>
                </Col>
            </Row>
        </Container>

        <Container className="ServicepymeSect2" fluid>
            <Row>
                <Col className='ServicepymeSect2Title' xs={{ span: 12 }} md={{ span: 12 }}>
                    <h2>
                        Servicios Para Administradores de Fincas
                    </h2>
                </Col>
            </Row>
            <Row className='space'>
                <Col className='circle' xs={{ span: 12 }} md={{ span: 6, offset: 3 }} />
                <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}  >
                    <p>
                        Si esta al cargo de una o varias comunidades o administra varios negocios, consulte nuestras ofertas colectivas multicif.
                    </p>
                    <br />
                </Col>
            </Row>
            <Row className='space'>
                <Col className='circle' xs={{ span: 12 }} md={{ span: 6, offset: 3 }} />
                <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}  >
                    <p>
                        Simplemente solicite un informe detallado de cuánto gastan al año, a que hora y que potencia debe contratar
                    </p>
                    <br />
                </Col>
            </Row>
            <Row className='space'>
                <Col className='circle' xs={{ span: 12 }} md={{ span: 6, offset: 3 }} />
                <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}  >
                    <p>
                        Introduzca sus datos y un asesor se pondrá en contacto con ustedes para buscar la mejor oferta para vuestro administrados.
                    </p>
                </Col>
            </Row>
            <Row className='space'>
                <Col className='circle' xs={{ span: 12 }} md={{ span: 6, offset: 3 }} />
                <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}  >
                    <p>
                        Y si administra más de 30 comunidades, le regalamos la factura de su oficina del mes siguiente.
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

export default SoftwareSolutions