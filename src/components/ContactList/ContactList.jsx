
import './ContactList.css';
import { Button, Card, ListGroup } from 'react-bootstrap';
import contactUserService from "../../services/contactUser.service";
import { useState } from 'react';
import NewCommentForm from '../NewCommentForm/NewCommentForm';



const ContactList = ({ name, email, message, state, phone, comment, id }) => {

    const [data, setData] = useState(
        {
            name, email, message, state, phone
        }
    );
    const [commentsData, setCommnetsData] = useState(comment);

    const changeState = async () => {
        const getUser = await contactUserService.updateContactState({ "name": name });
        const oneUser = getUser.data.user;
        setData({ ...oneUser });

    };

    const comments = commentsData.map((oneComment) => {
        return (
            <ListGroup.Item>{oneComment}</ListGroup.Item>

        );
    });


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
            <Card.Body>
                <Card.Header>Comentarios</Card.Header>
                <ListGroup variant="flush">
                    {comments}
                </ListGroup>
                <br />
                <NewCommentForm commentsData={commentsData} setCommnetsData={setCommnetsData} clientId={id} />
            </Card.Body>
        </Card>
    );
};


export default ContactList;