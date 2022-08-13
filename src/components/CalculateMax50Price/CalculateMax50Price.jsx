import './CalculateMax50Price.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import max50Service from '../../services/max50.service';
import companyService from '../../services/companies.service';



const CalculateMax50Price = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [companies, setCompanies] = useState([]);

    const getCompanies = async () => {
        try {
            const comps = await companyService.getCompanies();
            console.log(comps);
            setCompanies(comps);

        } catch (error) {
            console.error(error);

        }
    };

    const handleShow = () => {
        getCompanies();
        setShow(true);

    };
    const electricComp = companies.map((comp) => {
        console.log(comp);
        return (
            <NavDropdown.Item href="/#">{comp.name}</NavDropdown.Item>
        );
    });



    return (
        <>
            <Button onClick={handleShow} variant="primary">
                <strong>Calcular Mejor Precio</strong>
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
                    <Nav.Link href="/#">Analiticas</Nav.Link>
                    <NavDropdown title="Usuarios" id="navbarScrollingDropdown">
                        {electricComp}
                    </NavDropdown>
                </Modal.Body>
            </Modal>
        </>
    );



};
export default CalculateMax50Price;