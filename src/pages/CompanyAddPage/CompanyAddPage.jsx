import CompanyAddForm from "../../components/CompanyAddForm/CompanyAddForm"
import { Col, Container, Row } from "react-bootstrap"
import AdminNavigation from "../../components/AdminNavigation/AdminNavigation"
import './CompanyAddPage.css'



const CompanyAddPage = () => {
    return <>
        <Container fluid>
            <Row className=''>
                <Col id='main-nav' md={2}>
                    <AdminNavigation />
                </Col>
                <Col id='main-admin-component' md={10} >
                    <Container fluid>
                        <h1 className="newcompany-title">Añadir Comercializadora</h1>

                        <Row className='new-company'>
                            <Col md={{ span: 6, offset: 3 }}>
                                <CompanyAddForm />
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    </>

}

export default CompanyAddPage