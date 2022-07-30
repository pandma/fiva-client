import './ContactPage.css'
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactList from "../../components/ContactList/ContactList"
import contactUserService from "../../services/contactUser.service"
import AdminNav from '../../components/AdminNav/AdminNav';



const ContactPage = () => {
    const [data, setData] = useState([])

    const getContact = async () => {
        const contacts = await contactUserService.getContacts()
        setData(contacts.data.Users)

    }

    useEffect(() => {
        getContact()
    }, [])


    const contactlist = data.map((contact) => {
        return (
            <Col md={4} xs={6}>
                <ContactList {...contact} />
            </Col>
        )
    })

    return <>
        <AdminNav />
        <Container fluid>
            <h1 className="list-title">Lista de contactos</h1>
            <Row className='list-row'>
                {contactlist}
            </Row>
        </Container>
    </>
}
export default ContactPage