import './NewClientForm.css';
import ContactForm from '../../components/ContactForm/ContactForm';
import AdminNavigation from '../../components/AdminNavigation/AdminNavigation';
import { Container, Row, Col } from 'react-bootstrap';

const NewClientForm = () => {

    return <>
        <Container fluid>
            <Row className=''>
                <Col id='main-nav' md={2}>
                    <AdminNavigation />
                </Col>
                <Col id='main-admin-component' md={10} >
                    <Container fluid className='clientContainer'>
                        <h1 style={{
                            textAlign: "center",
                            marginBottom: "2%"
                        }}>Añade nuevo Cliente</h1>
                        <Row>
                            <Col md={{ span: 4, offset: 4 }}>
                                <ContactForm isPage={true} />
                            </Col>
                        </Row>
                    </Container>;
                </Col>
            </Row>
        </Container>
    </>;

};
export default NewClientForm;