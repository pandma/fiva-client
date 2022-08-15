import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Round from '../../utils/Round';

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
                        <p className='smallMargin'>Consumo anual: {Round(price.anual_consumption, 0)}</p>
                        <p className='smallMargin'>Consumo anual optimo: {Round(price.optimal_anual_consumption, 0)}</p>
                        <p className='smallMargin'>Ahorro anual: {Round(price.annual_savings, 0)}</p>
                        <p className='smallMargin'>Ahorro anual con el Mejor Precio: {Round(price.annual_savings_optimal_price, 0)}</p>
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