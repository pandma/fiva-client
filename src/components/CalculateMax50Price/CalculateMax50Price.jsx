import './CalculateMax50Price.css';
import { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import max50Service from '../../services/max50.service';
import companyService from '../../services/companies.service';
import Loader from '../../components/Loader/Loader';
import Max50FailModal from '../Max50FailModal/Max50FailModal';
import SuccsesModal from '../SuccessModal/SuccessModal';


const CalculateMax50Price = ({ fiva_id, direction }) => {
    const [showSuccess, setShowSuccess] = useState(false);
    const handleCloseSuccess = () => setShowSuccess(false);
    const handleShowSucess = () => setShowSuccess(true);

    const [showFail, setShowFail] = useState(false);
    const handleCloseFail = () => setShowFail(false);
    const handleShowFail = () => setShowFail(true);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [companies, setCompanies] = useState([]);
    const [price, setPrice] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        company: ""
    });


    const getCompanies = async () => {
        try {
            const comps = await companyService.getCompanies();
            const reqResult = comps.data.companies;
            setCompanies(reqResult);

        } catch (error) {
            console.error(error);

        }
    };
    const handleShow = () => {
        getCompanies();
        setShow(true);

    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const oneComp = await companyService.getOneCompany(formData.company);
            const companyId = oneComp.data.company.id;
            const fivaId = fiva_id;
            const max50 = { companyId, fivaId };
            const optimalPrice = await max50Service.calculateMax50Price({ ...max50 });
            const optimalPriceRes = optimalPrice.data.maximeter;
            setPrice(optimalPriceRes);
            setIsLoading(false);
            handleShowSucess();
            handleClose();

        } catch (error) {
            console.error(error);
            handleShowFail();
            handleClose();
        }
    };
    const electricComp = companies.map((comp) => {
        return (
            <option>{comp.name}</option>
        );
    });
    const handleInputChange = (e) => {
        const { value, name } = e.currentTarget;
        setFormData({ ...formData, [name]: value });
    };
    const { company } = formData;

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
                centered
            >
                <Form onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Calcula el Mejor Precio</Modal.Title>
                    </Modal.Header>
                    {isLoading ?
                        <Loader />
                        :
                        <>
                            <Modal.Body >
                                <h2 className='centeredBody'>{direction}</h2>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="disabledSelect">Elige Comercializadora</Form.Label>
                                    <Form.Select id="company" name="company" onChange={handleInputChange} value={company}>
                                        {electricComp}
                                    </Form.Select>
                                </Form.Group>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button type="submit" variant="outline-dark" className='ContactButton' >
                                    <strong>Calcular</strong>
                                </Button>
                            </Modal.Footer>
                        </>
                    }
                </Form>

            </Modal>
            <SuccsesModal show={showSuccess} handleClose={handleCloseSuccess} price={price} />
            <Max50FailModal show={showFail} handleClose={handleCloseFail} />

        </>
    );
};

export default CalculateMax50Price;