import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import './Max50SucessModal.css';



const Max50SucessModal = ({ show, handleClose, direction, anual_consumption, optimal_anual_consumption, annual_savings, recomended_power }) => {


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
                    <Modal.Title>Resultados</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h2 className='susessTitle'>Exito</h2>
                    <h4>Potencia optima para <br /> {direction} </h4>
                    <p>Consumo anual: {anual_consumption}</p>
                    <p>Consumo anual optimo: {optimal_anual_consumption}</p>
                    <p>Ahorro anual: {annual_savings}</p>
                    <p>Potencia recomendada: {recomended_power}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Calcular Mejor Precio
                    </Button>
                    <Link to={'/getmax50'}>
                        <Button variant="primary" onClick={handleClose}>
                            Ver listado
                        </Button>
                    </Link>

                </Modal.Footer>

            </Modal>
        </>
    );

};

export default Max50SucessModal;