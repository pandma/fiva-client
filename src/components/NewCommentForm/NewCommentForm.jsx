import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import contactUserService from '../../services/contactUser.service';

const NewCommentForm = ({ commentsData, setCommnetsData, clientId }) => {
    const [formData, setFormData] = useState({});
    const [commentValue, setComentValue] = useState("");

    const handleSubmit = async (e, form) => {
        try {
            e.preventDefault();
            const body = {
                commet_id: clientId,
                comment: formData.value
            };
            const fetchComments = await contactUserService.addComments(body);
            const comments = fetchComments.data.comments;
            setCommnetsData(comments);
            setComentValue("");

        } catch (error) {
            console.error("Error in comments form");
            console.error(error);
        }

    };
    const handleInputChange = (e) => {
        const { value } = e.currentTarget;
        setFormData({ ...commentValue, value });
        setComentValue(value);
    };

    return (<>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail" onSubmit={handleSubmit}>
                <Form.Control type="text" placeholder="Añade un comentario" name='comment' value={commentValue} onChange={handleInputChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Enviar
            </Button>
        </Form>
    </>);

};

export default NewCommentForm;