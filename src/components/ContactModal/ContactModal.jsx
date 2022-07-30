import './ContactModal.css'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ContactForm from '../ContactForm/ContactForm';


const ContactModal = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button style={{ width: "250px" }} className='Button mb-4' onClick={handleShow} variant="outline-dark" >
                <strong>Contactanos</strong>
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Que servicio necesitas</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ContactForm closeModal={handleClose} />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ContactModal