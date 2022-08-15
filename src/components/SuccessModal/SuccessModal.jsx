import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const SuccsesModal = ({ show, handleClose, price }) => {
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <>
                    <Modal.Header closeButton>
                        <Modal.Title>Exito</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h2 className='centeredBody'>{price.direction} </h2>
                        <p>Consumo anual: {price.anual_consumption}</p>
                        <p>Consumo anual optimo: {price.optimal_anual_consumption}</p>
                        <p>Ahorro anual: {price.annual_savings}</p>
                        <p>Ahorro anual con el Mejor Precio: {price.annual_savings_optimal_price}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            Volver
                        </Button>
                    </Modal.Footer>
                </>
            </Modal>
        </>
    );
};

export default SuccsesModal;