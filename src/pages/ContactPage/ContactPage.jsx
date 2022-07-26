import ContactList from "../../components/ContactList/ContactList"
import contactUserService from "../../services/contactUser.service"
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";


const ContactPage = () => {
    const [data, setData] = useState([])

    const getContact = async () => {
        const contacts = await contactUserService.getContacts()
        setData(contacts.data.Users)
        console.log("data is ", contacts.data.Users)

    }

    useEffect(() => {
        getContact()
    }, [])


    const contactlist = data.map((contact) => {
        return (
            <ContactList {...contact} />
        )
    })

    return <>
        <Container fluid>
            <h1>List de contactos</h1>
            <Row>
                <Col>
                    {contactlist}
                </Col>
            </Row>
        </Container>
    </>
}
export default ContactPage