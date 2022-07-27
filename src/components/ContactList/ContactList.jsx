
import './ContactList.css'
import { Button, Card } from 'react-bootstrap';
import contactUserService from "../../services/contactUser.service"
import { useState } from 'react';



const ContactList = ({ name, email, message, state, phone }) => {

    const [data, setData] = useState(
        { name, email, message, state, phone }
    )


    const changeState = async () => {
        const getUser = await contactUserService.updateContactState({ "name": name })
        const oneUser = getUser.data.user
        setData({ ...oneUser })

    }


    return (
        <Card className='contact-card' style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>
                    Correo:
                    <br />
                    {data.email}
                </Card.Text>
                <Card.Text>
                    Numero de telefono:
                    <br />
                    {data.phone}
                </Card.Text>
                <Card.Text>
                    Descripción:
                    <br />
                    {data.message}
                </Card.Text>
                <Card.Text>
                    Estado:
                    <br />
                    {data.state === "Processed" ? "Finalizado" : "Pendiente"}
                </Card.Text>
                {data.state === "Processed" ?
                    <Button onClick={changeState} variant="success">
                        Finalizado
                    </Button> :
                    <Button onClick={changeState} variant="primary">
                        Pendiente
                    </Button>}

            </Card.Body>
        </Card>
    );
}


export default ContactList