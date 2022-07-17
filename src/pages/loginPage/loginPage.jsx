import { Container, Row, Col } from "react-bootstrap"
import Loginform from "../../components/LoginForm/LoginForm"
import './loginPage.css'
const LoginPage = () => {
    return (
        <Container id="fomrL">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h1 className="logTitle">Inicia Sesión</h1>
                    <Loginform />
                </Col>
            </Row>
        </Container>
    )
}

export default LoginPage
