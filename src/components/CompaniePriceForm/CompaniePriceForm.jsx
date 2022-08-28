import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import companyService from '../../services/companies.service';
import './CompaniePriceForm.css';

const CompaniePriceForm = ({ handleClose, nameProp, prop1, prop2, prop3, prop4, prop5, prop6 }) => {

    const [companyData, setCompanyData] = useState({
        name: nameProp,
        p1: prop1,
        p2: prop2,
        p3: prop3,
        p4: prop4,
        p5: prop5,
        p6: prop6

    });

    const refreshPage = () => {
        window.location.reload(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await companyService.updateCompany(companyData);
        handleClose();
        refreshPage();

    };

    const handleInputChange = (e) => {
        const { value, name } = e.currentTarget;
        setCompanyData({ ...companyData, [name]: value });
    };

    const { name, p1, p2, p3, p4, p5, p6 } = companyData;

    return <>
        <Form className="companyForm" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label>Nombre/empresa</Form.Label>
                <Form.Control type="text" placeholder="Company name" name="name" value={name} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label>Periodo 1</Form.Label>
                <Form.Control type="number" placeholder="period 1" name="p1" value={p1} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label>Periodo 2</Form.Label>
                <Form.Control type="number" placeholder="period 2" name="p2" value={p2} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label>Periodo 3</Form.Label>
                <Form.Control type="number" placeholder="period 3" name="p3" value={p3} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label>Periodo 4</Form.Label>
                <Form.Control type="number" placeholder="period 4" name="p4" value={p4} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label>Periodo 5</Form.Label>
                <Form.Control type="number" placeholder="period 5" name="p5" value={p5} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label>Periodo 6</Form.Label>
                <Form.Control type="number" placeholder="period 6" name="p6" value={p6} onChange={handleInputChange} />
            </Form.Group>
            <Button className="loginbuton" variant="light" type="submit">
                Actualizar
            </Button>
        </Form>
    </>;
};


export default CompaniePriceForm;