import './CompaniesPriceModal.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import CompaniePriceForm from '../CompaniePriceForm/CompaniePriceForm';

const CompaniesPriceModal = () => {

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
                    <CompaniePriceForm closeModal={handleClose} />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default CompaniesPriceModal