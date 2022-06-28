import { useContext, useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import authService from "../../services/auth.service"
import { AuthContext } from "./../../context/auth.context"
import { MessageContext } from "../../context/message.context"
import "./LoginForm.css"

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

        <Form id="fomLogin" onSubmit={handleSubmit}>
            <label for="email">Email</label>
            <br></br>
            <div className="inputFieldContainer mt-2">
                <form style={{ width: "100%" }} onSubmit={handleSubmit}>
                    <input id="html" className="formInputField textInputClean textInputBig" type="email" name="email" value={email} placeholder="Write your email" onChange={handleInputChange} />
                </form>
            </div>
            <br></br>
            <label for="password">password</label>
            <br></br>
            <div className="inputFieldContainer mt-2">
                <form style={{ width: "100%" }} onSubmit={handleSubmit}>

                    <input id="html" className="formInputField textInputClean textInputBig" type="password" name="password" value={password} placeholder="Write your password" onChange={handleInputChange} />
                </form>
            </div>
            <button className="bookVanButton mt-4 mb-3" variant="light">
                <strong>Log In</strong>
            </button>
        </Form>
    )
}

export default Loginform
