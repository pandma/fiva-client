import { ListGroup, Badge } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import './CommentCard.css';

const CommentCard = ({ commentsData }) => {
    const commentsCopy = [...commentsData];
    let reduced;

    if (commentsCopy.length > 3) {
        reduced = commentsCopy.slice(0, 3);
    } else {
        reduced = commentsCopy;
    }


    const comments = reduced.map(oneComment => {
        return (
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{oneComment.owner_name}</div>
                    <p>{oneComment.comment}</p>
                </div>
                <Badge bg="primary" pill>
                    {oneComment.date}
                </Badge>
            </ListGroup.Item>
        );
    });
    const dropDownItems = commentsCopy.map((oneComment, index) => {

        return (
            <Dropdown.Item eventKey={index}>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{oneComment.owner_name}</div>
                        <p>{oneComment.comment}</p>
                    </div>
                    <Badge bg="primary" pill>
                        {oneComment.date}
                    </Badge>
                </ListGroup.Item>
            </Dropdown.Item>
        );
    });


    return (<>
        <ListGroup as="ol" numbered>
            {comments}
        </ListGroup>

        {commentsCopy.length > 3 &&
            <>
                <DropdownButton
                    as={ButtonGroup}
                    key="Secondary"
                    id={`dropdown-split-variants-Secondary`}
                    variant="secondary"
                    title="Ver Mas"
                    size="sm"
                    className='drop-item'
                >
                    {dropDownItems}
                </DropdownButton>
                <br />
            </>
        }
    </>
    );
};

export default CommentCard;