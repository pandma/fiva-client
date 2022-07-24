import './SoftwareSolutions.css'
import { Container, Row, Col } from "react-bootstrap"
import ContactModal from '../ContactModal/ContactModal'


const SoftwareSolutions=()=>{
    return(
        <>
        <Container className="SolutionsSect1" fluid>
            <Row>
                <Col className='ServiceadminTitle' xs={{ span: 12 }} md={{ span: 12 }} >
                    <h1> {"<Soluciones de Software>"} </h1>
                </Col>
            </Row>
        </Container>

        <Container className="ServicepymeSect2" fluid>
            <Row>
                <Col className='ServicepymeSect2Title' xs={{ span: 12 }} md={{ span: 12 }}>
                    <h2>
                        Servicio de Soluciones basadas en Software
                    </h2>
                </Col>
            </Row>
            <Row className='space'>
                <Col className='circle' xs={{ span: 12 }} md={{ span: 6, offset: 3 }} />
                <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}  >
                    <p>
                        Contactanos y Nuestro equipo de desarrollo analizara tus necesidades y te ofrecerá la mejor solucion.

                    </p>
                    <br />
                </Col>
            </Row>
            <Row className='space'>
                <Col className='circle' xs={{ span: 12 }} md={{ span: 6, offset: 3 }} />
                <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}  >
                    <p>
                        Servicios de CRM, Customer Relationship Management.
                    </p>
                    <br />
                </Col>
            </Row>
            <Row className='space'>
                <Col className='circle' xs={{ span: 12 }} md={{ span: 6, offset: 3 }} />
                <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}  >
                    <p>
                        Servicios de SAS, Statistical Analysis System.
                    </p>
                </Col>
            </Row>
            <Row className='space'>
                <Col className='circle' xs={{ span: 12 }} md={{ span: 6, offset: 3 }} />
                <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}  >
                    <p>
                        Soluciones personalizadas.
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