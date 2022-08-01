import { Col, Container, Row } from "react-bootstrap"
import AdminNavigation from "../../components/AdminNavigation/AdminNavigation"
import CompaniesPrice from "../../components/CompaniesPrice/CompaniesPrice"


const CompaniesPage = () => {

    return <>
        <>
            <Container fluid>
                <Row className=''>
                    <Col id='main-nav' md={2}>
                        <AdminNavigation />
                    </Col>
                    <Col id='main-admin-component' md={10} >
                        <CompaniesPrice />
                    </Col>
                </Row>
            </Container>
        </>
    </>

}

export default CompaniesPage