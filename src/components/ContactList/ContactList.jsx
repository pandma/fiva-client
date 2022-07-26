import { Button, Card } from 'react-bootstrap';



const ContactList = ({ name, email, message, state, phone }) => {


    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {email}
                </Card.Text>
                <Card.Text>
                    {phone}
                </Card.Text>
                <Card.Text>
                    {message}
                </Card.Text>
                <Card.Text>
                    {state}
                </Card.Text>
                <Button variant="primary">finalizar</Button>
            </Card.Body>
        </Card>
    );
}


export default ContactList