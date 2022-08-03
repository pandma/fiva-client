import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import companyService from '../../services/companies.service'
import './CompaniePriceForm.css'




const CompaniePriceForm = () => {

    const [companyData, setCompanyData] = useState({
        name: "",
        p1: "",
        p2: "",
        p3: "",
        p4: "",
        p5: "",
        p6: "",

    })

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const companyUpdate = await companyService.updateCompany(companyData)
        console.log(companyUpdate)
        navigate('/companies')

    }

    const handleInputChange = (e) => {
        const { value, name } = e.currentTarget
        setCompanyData({ ...companyData, [name]: value })
    }

    const { name, p1, p2, p3, p4, p5, p6 } = companyData

    return <>
        <Form className="companyForm" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label>Nombre/empresa</Form.Label>
                <Form.Control type="text" placeholder="Company name" name="name" value={name} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label>Periodo 1</Form.Label>
                <Form.Control type="text" placeholder="period 1" name="p1" value={p1} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label>Periodo 2</Form.Label>
                <Form.Control type="text" placeholder="period 2" name="p2" value={p2} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label>Periodo 3</Form.Label>
                <Form.Control type="text" placeholder="period 3" name="p3" value={p3} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label>Periodo 4</Form.Label>
                <Form.Control type="text" placeholder="period 4" name="p4" value={p4} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label>Periodo 5</Form.Label>
                <Form.Control type="text" placeholder="period 5" name="p5" value={p5} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label>Periodo 6</Form.Label>
                <Form.Control type="text" placeholder="period 6" name="p6" value={p6} onChange={handleInputChange} />
            </Form.Group>
            <Button className="loginbuton" variant="light" type="submit">
                Actualizar
            </Button>
        </Form>
    </>
}


export default CompaniePriceForm