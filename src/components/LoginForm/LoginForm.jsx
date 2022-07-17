import "./LoginForm.css"
import { useContext, useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import authService from "../../services/auth.service"
import { AuthContext } from "./../../context/auth.context"
import { MessageContext } from "../../context/message.context"


const Loginform = () => {
    const [loginData, setLoginData] = useState({
        password: "",
        email: "",
    })

    const navigate = useNavigate()

    const { storeToken, authenticateUser } = useContext(AuthContext)
    const { showMessage } = useContext(MessageContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        authService
            .login(loginData)
            .then(({ data }) => {
                console.log(data.jwt)
                storeToken(data.jwt)
                showMessage("Welcome", "Successfully logged in")
                authenticateUser()
                navigate("/")
            })
            .catch((err) => console.log(err))
    }

    const handleInputChange = (e) => {
        const { value, name } = e.currentTarget
        setLoginData({ ...loginData, [name]: value })
    }

    const { password, email } = loginData

    return (
        <>
            <Form className="fomLogin" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={handleInputChange} />
                </Form.Group>

                <Button className="loginbuton" variant="light" type="submit">
                    Log In
                </Button>
            </Form>
        </>
    )
}

export default Loginform



