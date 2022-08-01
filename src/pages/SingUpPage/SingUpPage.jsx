import './SingUpPage.css'
import { Container, Row, Col } from "react-bootstrap"
import SingUpForm from "../../components/SingUpForm/SingUpForm"
import AdminNavigation from '../../components/AdminNavigation/AdminNavigation'

const SingUpPage = () => {
    return (
        <>
            <Container fluid>
                <Row className=''>
                    <Col id='main-nav' md={2}>
                        <AdminNavigation />
                    </Col>
                    <Col id='main-admin-component' md={10} >
                        <Container>
                            <Row>
                                <h1 className="New-user-title">
                                    Alta nuevo Usuario
                                </h1>
                                <Col md={{ span: 6, offset: 3 }}>
                                    <SingUpForm />
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SingUpPage 