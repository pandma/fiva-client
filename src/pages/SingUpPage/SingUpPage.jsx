import './SingUpPage.css'
import { Container, Row, Col } from "react-bootstrap"
import SingUpForm from "../../components/SingUpForm/SingUpForm"
import AdminNav from '../../components/AdminNav/AdminNav'
import UsersNav from '../../components/UsersNav/UsersNav'

const SingUpPage = () => {
    return (<>
        <AdminNav />
        <UsersNav />
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
    </>
    )
}

export default SingUpPage 