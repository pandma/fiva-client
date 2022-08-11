import './CalculateMax50Page.css'
import { Col, Container, Row } from "react-bootstrap"
import AdminNavigation from "../../components/AdminNavigation/AdminNavigation"
import CalculateMax50 from '../../components/CalculateMax50/CalculateMax50'






const CalculateMax50Page = () => {
    return <>
        <Container fluid>
            <Row className=''>
                <Col id='main-nav' md={2}>
                    <AdminNavigation />
                </Col>
                <Col id='main-admin-component' md={10} >
                    <Container fluid>
                        <h1 className="fivanacci-title">
                            fivanacci <span className='dot'>.</span>
                        </h1>

                        <Row className='new-company'>
                            <Col md={{ span: 6, offset: 3 }}>
                                <CalculateMax50 />
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    </>

}

export default CalculateMax50Page