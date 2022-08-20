import './OurService.css';
import { Container, Row, Col } from 'react-bootstrap';

const OurService = () => {
    return (

        <Container fluid>
            <h2 className='Servicetitle'>Nuestros Servicios</h2>
            <Row >
                <Col className='d-flex justify-content-center' xs={{ span: 12 }} md={{ span: 4, offset: 2 }}>
                    <img src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657968992/potencia_fd2mre.jpg" alt="" srcset="" />
                </Col>
                <Col className='title1' xs={12} md={6}>
                    <h3>Ajuste de optimización de potencia</h3>
                </Col>
            </Row>
            <Row className='Servicerow'>
                <Col className='d-flex justify-content-center' xs={{ span: 12 }} md={{ span: 4, offset: 2 }}>
                    <img src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657968992/eficiencia_blliwp.jpg" alt="" srcset="" />
                </Col>
                <Col className='title1' xs={12} md={6} >
                    <h3>Estudios de eficiencia energetica</h3>
                </Col>
            </Row>
            <Row className='Servicerow'>
                <Col className='d-flex justify-content-center' xs={{ span: 12 }} md={{ span: 4, offset: 2 }}>
                    <img src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657968992/comparativa_rhkhyf.jpg" alt="" srcset="" />
                </Col>
                <Col className='title1' xs={12} md={6}>
                    <h3>Comparativa de tarifas</h3>
                </Col>
            </Row>
            <Row className='Servicerow'>
                <Col className='d-flex justify-content-center' xs={{ span: 12 }} md={{ span: 4, offset: 2 }}>
                    <img src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657968992/software_fwwzro.jpg" alt="" srcset="" />
                </Col>
                <Col className='title1' xs={12} md={6}>
                    <h3>Soluciones de software</h3>
                </Col>
            </Row>
            <Row className='Servicerow'>
                <Col className='d-flex justify-content-center' xs={{ span: 12 }} md={{ span: 4, offset: 2 }}>
                    <img src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657968992/digit_uvqarg.jpg" alt="" srcset="" />
                </Col>
                <Col className='title1' xs={12} md={6}>
                    <h3>Digitalización</h3>
                </Col>
            </Row>

        </Container>

    );
};

export default OurService;