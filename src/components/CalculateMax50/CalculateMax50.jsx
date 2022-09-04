import './CalculateMax50.css';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import max50Service from '../../services/max50.service';
import Max50SucessModal from '../Max50SucessModal/Max50SucessModal';
import Max50FailModal from '../Max50FailModal/Max50FailModal';
import Loader from '../../components/Loader/Loader';

const CalculateMax50 = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showFail, setShowFail] = useState(false);
    const handleCloseFail = () => setShowFail(false);
    const handleShowFail = () => setShowFail(true);

    const [isLoading, setIsLoading] = useState(false);
    const [serviceData, setServiceData] = useState({});
    const [errorMessage, setErrorMessage] = useState("");

    const [max50Data, setMax50Data] = useState({
        owner: "",
        tariff_type: "",
        direction: "",
        postalcode: "",
        cups: "",
        nif: "",
        quarter_hour_curve: "",
        hired_power: "",
        hired_price: ""

    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const resultFromService = await max50Service.calculateMax50(max50Data);
            console.log(resultFromService.data);

            if (resultFromService.status === 200 && resultFromService.data.message != 'Error') {
                const result = resultFromService.data.data;
                console.log(result);
                if (result === "negative annual_savings") {
                    setErrorMessage("ahorro anual negativo");
                    setIsLoading(false);
                    handleShowFail();
                } else {
                    setServiceData({ ...result });
                    setIsLoading(false);
                    handleShow();
                }
            } else {
                setIsLoading(false);
                handleShowFail();
            }
        } catch (error) {
            console.error(JSON.stringify(error));
            setIsLoading(false);
            handleShowFail();
        }
    };

    const handleInputChange = (e) => {
        const { value, name } = e.currentTarget;
        setMax50Data({ ...max50Data, [name]: value });
    };

    const { tariff_type, owner, direction, postalcode, cups, nif, quarter_hour_curve, hired_power, hired_price } = max50Data;

    if (isLoading) {
        return <>
            <Loader />
        </>;
    } else {
        return <>
            <Form className="companyForm" onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">Tipo de tarifa</Form.Label>
                    <Form.Select id="tariff_type" name="tariff_type" onChange={handleInputChange} value={tariff_type} required >
                        <option>Selecciona Tipo de tarifa</option>
                        <option value={"3.0"}>3.0</option>
                        <option value={"6.1"}>6.1</option>
                        <option value={"6.2"}>6.2</option>
                        <option value={"6.3"}>6.3</option>
                        <option value={"6.4"}>6.4</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>Nombre/empresa</Form.Label>
                    <Form.Control type="text" placeholder="Company name" name="owner" value={owner} onChange={handleInputChange} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control type="text" placeholder="direction" name="direction" value={direction} onChange={handleInputChange} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>Codigo postal</Form.Label>
                    <Form.Control type="text" placeholder="postalcode" name="postalcode" value={postalcode} onChange={handleInputChange} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>CUPS</Form.Label>
                    <Form.Control type="text" placeholder="cups" name="cups" value={cups} onChange={handleInputChange} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>NIF/Nº identificaón fiscal</Form.Label>
                    <Form.Control type="text" placeholder="nif/Nº identificaón fiscal" name="nif" value={nif} onChange={handleInputChange} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>Potencia contratada</Form.Label>
                    <Form.Control type="text" placeholder="potencia contratada" name="hired_power" value={hired_power} onChange={handleInputChange} required />
                    <Form.Text className="text-muted">
                        Ingresa las potencias de cada periodo con un espacio entremedias.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>Precio por periodo"</Form.Label>
                    <Form.Control type="text" placeholder="precio por periodo" name="hired_price" value={hired_price} onChange={handleInputChange} required />
                    <Form.Text className="text-muted">
                        Ingresa los precios de cada periodo con un espacio entremedias.
                    </Form.Text>
                    <Form.Text className="text-muted">
                        Recuerda usar puntos en vez de comas para numeros decimales.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>Curva cuarto horaria anual</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="curva cuarto horaria anual" name="quarter_hour_curve" value={quarter_hour_curve} onChange={handleInputChange} required />
                </Form.Group>

                <Button className="loginbuton" variant="light" type="submit" >
                    Calcular
                </Button>

                <Max50SucessModal show={show} handleClose={handleClose} direction={direction} {...serviceData} />
                <Max50FailModal show={showFail} handleClose={handleCloseFail} direction={direction} errorMessage={errorMessage} {...serviceData} />

            </Form>
        </>;
    }
};

export default CalculateMax50;

