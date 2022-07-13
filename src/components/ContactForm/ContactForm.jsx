import './ContactForm.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import contactUserService from '../../services/contactUser.service';

const ContactForm = ({ closeModal }) => {

    const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        phone: "",
        product: "",
        message: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const register = await contactUserService.createContact(registerData)
            console.log("eeee", register)
            const close = await closeModal()

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
                <Form.Control type="text" placeholder="Numero" name="phone" onChange={handleInputChange} value={phone} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledSelect">Que servicio buscas</Form.Label>
                <Form.Select id="product" name="product" onChange={handleInputChange} value={product}>
                    <option>Optimizacion de Potencia Pymes</option>
                    <option>Optimizacion de potencia Gran consumidor</option>
                    <option>Estudios de eficiencia energetica</option>
                    <option>Soluciones de software</option>
                    <option>Digitalizacion</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="message">
                <Form.Label>Dejanos un mensaje</Form.Label>
                <Form.Control as="textarea" rows={3} name="message" onChange={handleInputChange} value={message} />
            </Form.Group>
            <Button type="submit" variant="outline-dark" className='ContactButton' >
                Enviar
            </Button>

        </Form>
    );
}


export default ContactForm