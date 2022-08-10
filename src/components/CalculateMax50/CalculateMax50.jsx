import './CalculateMax50.css'
import { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import max50Service from '../../services/max50.service'
import Max50SucessModal from '../Max50SucessModal/Max50SucessModal'

const CalculateMax50 = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);



    const [max50Data, setMax50Data] = useState({
        owner: "",
        direction: "",
        postalcode: "",
        cups: "",
        nif: "",
        quarter_hour_curve: "",
        hired_power: "",
        hired_price: ""

    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = await max50Service.calculateMax50(max50Data)
        console.log(data)

    }

    const handleInputChange = (e) => {
        const { value, name } = e.currentTarget
        setMax50Data({ ...max50Data, [name]: value })
    }

    const { owner, direction, postalcode, cups, nif, quarter_hour_curve, hired_power, hired_price } = max50Data

    return <>
        <Form className="companyForm" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label>Nombre/empresa</Form.Label>
                <Form.Control type="text" placeholder="Company name" name="owner" value={owner} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label>Dirección</Form.Label>
                <Form.Control type="text" placeholder="direction" name="direction" value={direction} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label>Codigo postal</Form.Label>
                <Form.Control type="text" placeholder="postalcode" name="postalcode" value={postalcode} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label>CUPS</Form.Label>
                <Form.Control type="text" placeholder="cups" name="cups" value={cups} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label>NIF/Nº identificaón fiscal</Form.Label>
                <Form.Control type="text" placeholder="nif/Nº identificaón fiscal" name="nif" value={nif} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label>Potencia contratada</Form.Label>
                <Form.Control type="text" placeholder="potencia contratada" name="hired_power" value={hired_power} onChange={handleInputChange} />
                <Form.Text className="text-muted">
                    Ingresa las potencias de cada periodo con un espacio entremedias.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label>Precio por periodo"</Form.Label>
                <Form.Control type="text" placeholder="precio por periodo" name="hired_price" value={hired_price} onChange={handleInputChange} />
                <Form.Text className="text-muted">
                    Ingresa los precios de cada periodo con un espacio entremedias.
                </Form.Text>
                <Form.Text className="text-muted">
                    Recuerda usar puntos en vez de comas para numeros decimales.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label>Curva cuarto horaria anual</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="curva cuarto horaria anual" name="quarter_hour_curve" value={quarter_hour_curve} onChange={handleInputChange} />
            </Form.Group>

            <Button onClick={handleShow} className="loginbuton" variant="light" type="submit" >
                Calcular
            </Button>

            <Max50SucessModal />

        </Form>
    </>

}

export default CalculateMax50

