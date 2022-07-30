import './ContactPage.css'
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactList from "../../components/ContactList/ContactList"
import contactUserService from "../../services/contactUser.service"
import AdminNav from '../../components/AdminNav/AdminNav';
import Loader from '../../components/Loader/Loader';



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
            <AdminNav />
            <Container fluid>
                <h1 className="list-title">Lista de contactos</h1>
                <Row className='list-row'>
                    {contactlist}
                </Row>
            </Container>
        </>
    }
}
export default ContactPage