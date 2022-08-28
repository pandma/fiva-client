import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import Round from '../../utils/Round';
import SerializePowers from '../../utils/SerializePower';
import './Max50SucessModal.css';


const Max50SucessModal = ({ show, handleClose, direction, anual_consumption, optimal_anual_consumption, annual_savings, recomended_power }) => {
    const [periodData, setPeriodData] = useState([]);

    const powersByPeriod = () => {
        const powers = SerializePowers(recomended_power);
        setPeriodData(powers);

    };

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                onShow={powersByPeriod}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Exito</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h2 className='centeredBody'>{direction}</h2>
                    <p className='smallMargin'>Consumo anual: <strong>{Round(anual_consumption, 0)} KW</strong> </p>
                    <p className='smallMargin'>Consumo anual optimo: <strong>{Round(optimal_anual_consumption, 0)} KW</strong> </p>
                    <p className='smallMargin'>Ahorro anual:<strong>{Round(annual_savings, 0)} €</strong> </p>
                    {recomended_power &&
                        <p className='smallMargin'>
                            Periodo 1: <strong>{periodData[0]} KW </strong>
                            Periodo 2: <strong>{periodData[1]} KW </strong>
                            Periodo 3: <strong>{periodData[2]} KW </strong>
                            <br />
                            Periodo 4: <strong>{periodData[3]} KW </strong>
                            Periodo 5: <strong>{periodData[4]} KW </strong>
                            Periodo 6: <strong>{periodData[5]} KW </strong>
                        </p>
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