import './EnergyEficy.css'
import { Container, Row, Col } from "react-bootstrap"
import ContactModal from '../ContactModal/ContactModal'

const EnergyEficy=()=>{

    return (
        <> 
        <Container className="EnergyEficySect1" fluid>
               <Row>
                   <Col className='ServiceadminTitle' xs={{ span: 12 }} md={{ span: 12 }} >
                       <h1>Estudio De Eficiencia Energetica</h1>
                   </Col>
               </Row>
           </Container>

           <Container className="ServicepymeSect2" fluid>
               <Row>
                   <Col className='ServicepymeSect2Title' xs={{ span: 12 }} md={{ span: 12 }}>
                       <h2>
                           Servicio de Estudio De Eficiencia Energetica
                       </h2>
                   </Col>
               </Row>
               <Row className='space'>
                   <Col className='circle' xs={{ span: 12 }} md={{ span: 6, offset: 3 }} />
                   <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}  >
                       <p>
                            Desde auditorias energéticas, para saber si aprovecha de la mejor manera la energia en su local,
                            a baterias de condensación, contadores autogestionados e instalaciones de LEDs.
                       </p>
                       <br />
                   </Col>
               </Row>
               <Row className='space'>
                   <Col className='circle' xs={{ span: 12 }} md={{ span: 6, offset: 3 }} />
                   <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}  >
                       <p>
                            Damos un soporte integral para que gaste la menor cantidad de energía posible para realizar la misma cantidad de trabajo.
                       </p>
                       <br />
                   </Col>
               </Row>
               <Row className='space'>
                   <Col className='circle' xs={{ span: 12 }} md={{ span: 6, offset: 3 }} />
                   <Col xs={{ span: 12 }} md={{ span: 6, offset: 0 }}  >
                       <p>
                            Solicite que un técnico se ponga en contacto para tener mas información.
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

export default EnergyEficy