
import './ContactList.css';
import { Button, Card } from 'react-bootstrap';
import contactUserService from "../../services/contactUser.service";
import { useState } from 'react';
import CommentCard from '../CommentCard/CommentCard';
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


    return (
        <Card className='contact-card' style={{ width: '25rem' }}>
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
                <CommentCard commentsData={commentsData} />
                <br />
                <NewCommentForm commentsData={commentsData} setCommnetsData={setCommnetsData} clientId={id} />
            </Card.Body>
        </Card>
    );
};


export default ContactList;