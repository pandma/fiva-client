import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import Round from '../../utils/Round';
import SerializePowers from '../../utils/SerializePower';
import './Max50SucessModal.css';


const Max50SucessModal = ({ show, handleClose, direction, fiva_id, anual_consumption, optimal_anual_consumption, annual_savings, recomended_power }) => {
    let powers = SerializePowers(recomended_power);
    const { p1, p2, p3, p4, p5, p6 } = { ...powers };
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
                    <Modal.Title>Exito</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h2 className='centeredBody'>{direction}</h2>
                    <p className='smallMargin'>Consumo anual: {Round(anual_consumption, 0)} KW</p>
                    <p className='smallMargin'>Consumo anual optimo: {Round(optimal_anual_consumption, 0)} KW</p>
                    <p className='smallMargin'>Ahorro anual: {Round(annual_savings, 0)} €</p>
                    <p className='smallMargin'>Potencia recomendada: {SerializePowers(recomended_power)}</p>
                    {powers &&
                        <p className='smallMargin'>Periodo 1 {p1} Periodo 3 {p2} Periodo 2 {p3}</p>

                    }

                </Modal.Body>
                <Modal.Footer>
                    <Link to='/getmax50'>
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