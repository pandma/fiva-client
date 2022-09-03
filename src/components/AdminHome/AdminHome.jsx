import './AdminHome.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth.context';


const AdminHome = () => {
    const { user } = useContext(AuthContext);

    return (
        <>
            <section className="AdminHomeSection1">
                <Container fluid>
                    <Row className='HomeRow'>
                        <Col className='titleHome' lg={{ span: 12 }} md={{ span: 12 }} >
                            <h1>Bienvenido, {user.name}</h1>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* 
            <section className="AdminHomeSection2">
                <Container fluid>
                    <Row className="animate">
                        <Col className='sect2Title' lg={{ span: 12 }} md={{ span: 12 }} style={{ padding: "0px 60px" }}>
                            <h1>Hazte un Café y ponte a trabajar</h1>
                        </Col>
                    </Row>
                </Container>
            </section> */}
        </>
    );

};

export default AdminHome;