import './SingUpForm.css'
import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import authService from "../../services/auth.service"



const SingUpForm = () => {
    const [singData, setSingData] = useState({
        password: "",
        email: "",
        name: ""

    })

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        authService
            .signup(singData)
            .then(() => {
                navigate("/users")
            })
            .catch((err) => console.log(err))
    }

    const handleInputChange = (e) => {
        const { value, name } = e.currentTarget
        setSingData({ ...singData, [name]: value })
    }

    const { password, email, name } = singData

    return (
        <>
            <Form className="fomLogin" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" name="name" value={name} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={handleInputChange} />
                </Form.Group>

                <Button className="loginbuton" variant="light" type="submit">
                    Sing Up
                </Button>
            </Form>
        </>
    )
}

export default SingUpForm