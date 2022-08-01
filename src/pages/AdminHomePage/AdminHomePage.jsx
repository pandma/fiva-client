import './AdminHomePage.css'
import AdminHome from '../../components/AdminHome/AdminHome'
import AdminNavigation from '../../components/AdminNavigation/AdminNavigation'
import { Container, Row, Col } from 'react-bootstrap'

const AdminHomePage = () => {
    return (
        <>
            <Container fluid>
                <Row >
                    <Col id='main-nav' md={2}>
                        <AdminNavigation />
                    </Col>
                    <Col id='main-admin-component' md={10} >
                        <AdminHome />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AdminHomePage