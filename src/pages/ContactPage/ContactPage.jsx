import './ContactPage.css'
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactList from "../../components/ContactList/ContactList"
import contactUserService from "../../services/contactUser.service"
import Loader from '../../components/Loader/Loader';
import AdminNavigation from '../../components/AdminNavigation/AdminNavigation';



const ContactPage = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    const getContact = async () => {
        const contacts = await contactUserService.getContacts()
        setData(contacts.data.Users)

    }

    useEffect(() => {
        getContact()
        setIsLoading(false)
    }, [])


    const contactlist = data.map((contact) => {
        return (
            <Col md={4} xs={6}>
                <ContactList {...contact} />
            </Col>
        )
    })
    if (isLoading) {
        return <>
            <Loader />
        </>
    } else {
        return <>
            <Container fluid>
                <Row className=''>
                    <Col id='main-nav' md={2}>
                        <AdminNavigation />
                    </Col>
                    <Col id='main-admin-component' md={10} >
                        <Container fluid>
                            <h1 className="list-title">Lista de contactos</h1>
                            <Row className='list-row'>
                                {contactlist}
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    }
}
export default ContactPage