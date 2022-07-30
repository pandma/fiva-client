import './ContactForm.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import contactUserService from '../../services/contactUser.service';
import { useContext } from 'react';
import { MessageContext } from '../../context/message.context';

const ContactForm = ({ closeModal }) => {

    const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        phone: "",
        product: "",
        message: ""
    })
    const { showMessage } = useContext(MessageContext)


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await contactUserService.createContact(registerData)
            closeModal()
            showMessage('Enviado correctamente', 'Nuestro equipo se pondra en contacto lo antes posible')

        } catch (error) {
            console.error(error)
        }
    }
    const handleInputChange = (e) => {
        const { value, name } = e.currentTarget
        setRegisterData({ ...registerData, [name]: value })
    }

    const { name, email, phone, product, message } = registerData

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombre/ Empresa</Form.Label>
                <Form.Control type="text" placeholder="Nombre" name="name" onChange={handleInputChange} value={name} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" placeholder="Email" name="email" onChange={handleInputChange} value={email} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Numero de contacto</Form.Label>
                <Form.Control type="text" placeholder="Numero" name="phone" maxLength={9} onChange={handleInputChange} value={phone} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledSelect">Que servicio buscas</Form.Label>
                <Form.Select id="product" name="product" onChange={handleInputChange} value={product}>
                    <option>Ajuste de optimización de potencia</option>
                    <option>Estudios de eficiencia energetica</option>
                    <option>Transición a energía renovable</option>
                    <option>Comparativa de tarifas</option>
                    <option>Soluciones de software</option>
                    <option>Digitalizacion</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="message">
                <Form.Label>Dejanos un mensaje</Form.Label>
                <Form.Control as="textarea" rows={3} name="message" maxLength={250} onChange={handleInputChange} value={message} />
            </Form.Group>
            <Button type="submit" variant="outline-dark" className='ContactButton' >
                Enviar
            </Button>

        </Form>
    );
}


export default ContactForm