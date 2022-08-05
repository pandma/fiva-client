import './CompaniesPriceModal.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import CompaniePriceForm from '../CompaniePriceForm/CompaniePriceForm';

const CompaniesPriceModal = ({ nameProp, p1, p2, p3, p4, p5, p6 }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button onClick={handleShow} variant="primary">
                <strong>Editar Precios</strong>
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Editar Precios</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CompaniePriceForm handleClose={handleClose} nameProp={nameProp} prop1={p1} prop2={p2} prop3={p3} prop4={p4} prop5={p5} prop6={p6} closeModal={handleClose} />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default CompaniesPriceModal