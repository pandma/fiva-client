import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Max50FailModal.css';

const Max50FailModal = ({ show, handleClose, errorMessage }) => {
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
                    <h2 className='failTitle'>Algo ha salido mal</h2>
                    {errorMessage ?
                        <h4>{errorMessage}</h4>
                        : null
                    }
                    <h4>Comprueba los valores y vuelve a probar</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Volver
                    </Button>
                </Modal.Footer>

            </Modal>
        </>
    );

};


export default Max50FailModal;
