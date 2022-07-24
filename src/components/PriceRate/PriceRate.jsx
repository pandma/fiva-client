import './PriceRate.css'
import { Container, Row, Col } from "react-bootstrap"
import ContactModal from '../ContactModal/ContactModal'


const PriceRate=()=>{
    return(
        <>
        <Container className="PriceRateSect1" fluid>
            <Row>
                <Col className='ServiceadminTitle' xs={{ span: 12 }} md={{ span: 12 }} >
                    <h1>Comparativa de Tarifas</h1>
                </Col>
            </Row>
        </Container>

        <Container className="ServicepymeSect2" fluid>
            <Row>
                <Col className='ServicepymeSect2Title' xs={{ span: 12 }} md={{ span: 12 }}>
                    <h2>
                        Servicios De Comparativa de tarifas
                    </h2>
                </Col>
            </Row>
            <Row className='space'>
                <Col className='circle' xs={{ span: 12 }} md={{ span: 6, offset: 3 }} />
                <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}  >
                    <p>
                        Analizamos cual es la mejor oferta para su negocio realizando una comparativa con todas las ofertas y precios del mercado adaptados a sus necesidades.
                    </p>
                    <br />
                </Col>
            </Row>
            <Row className='space'>
                <Col className='circle' xs={{ span: 12 }} md={{ span: 6, offset: 3 }} />
                <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}  >
                    <p>
                        Las tarifas industriales son horarias, y por lo tanto es importante saber que campaña contratar según su perfil de cliente.
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

export default PriceRate