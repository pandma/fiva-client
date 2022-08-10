import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import CompaniePriceForm from '../CompaniePriceForm/CompaniePriceForm';



const Max50SucessModal = ({ direction, anual_consumption, optimal_anual_consumption, annual_savings, recomended_power }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Editar Precios</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h2>Exito</h2>
                </Modal.Body>
                <Button onClick={handleClose} variant="primary">
                    <strong>Calcular Precio</strong>
                </Button>
                <Button onClick={handleClose} variant="secondary">
                    <strong>Ver listado</strong>
                </Button>
            </Modal>
        </>
    );

}

export default Max50SucessModal