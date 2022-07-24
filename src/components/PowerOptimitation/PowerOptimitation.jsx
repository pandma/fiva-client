import './PowerOptimitation.css'
import { Container, Row, Col } from "react-bootstrap"
import ContactModal from '../ContactModal/ContactModal'


const PowerOtimitation=()=>{
    return(
        <>
         <Container className="PowerOptimitationSect1" fluid>
                <Row>
                    <Col className='ServiceadminTitle' xs={{ span: 12 }} md={{ span: 12 }} >
                        <h1>Optimización de Potencia</h1>
                    </Col>
                </Row>
            </Container>

            <Container className="ServicepymeSect2" fluid>
                <Row>
                    <Col className='ServicepymeSect2Title' xs={{ span: 12 }} md={{ span: 12 }}>
                        <h2>
                            Servicio de Optimización de Potencia
                        </h2>
                    </Col>
                </Row>
                <Row className='space'>
                    <Col className='circle' xs={{ span: 12 }} md={{ span: 6, offset: 3 }} />
                    <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}  >
                        <p>
                            Os pedimos autorización para consultar vuestros datos en SIPS (Sistema de Intercambio de Punto de Suministro) 
                            y con nuestra aplicación ajustamos la potencia contratada a la demanda real a lo largo del año.
                        </p>
                        <br />
                    </Col>
                </Row>
                <Row className='space'>
                    <Col className='circle' xs={{ span: 12 }} md={{ span: 6, offset: 3 }} />
                    <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}  >
                        <p>
                            Nuestros algoritmo a sido optimizado para optener el maximo ahorro posible.
                        </p>
                        <br />
                    </Col>
                </Row>
                <Row className='space'>
                    <Col className='circle' xs={{ span: 12 }} md={{ span: 6, offset: 3 }} />
                    <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}  >
                        <p>
                            Confiamos tanto en nuestro Software que solo cobramos si consegimos ahorrar en su factura.
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

export default PowerOtimitation

