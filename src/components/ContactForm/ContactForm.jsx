import './ContactForm.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ContactForm = () => {


    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre/ Empresa</Form.Label>
                <Form.Control type="text" placeholder="Nombre" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledSelect">Que servicio buscas</Form.Label>
                <Form.Select id="disabledSelect">
                    <option>Optimizacion de Potencia Pymes</option>
                    <option>Optimizacion de potencia Gran consumidor</option>
                    <option>Estudios de eficiencia energetica</option>
                    <option>Soluciones de software</option>
                    <option>Digitalizacion</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Dejanos un mensaje </Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>

        </Form>
    );
}


export default ContactForm