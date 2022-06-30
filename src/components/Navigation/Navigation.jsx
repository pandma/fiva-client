import './Navigation.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from "../../context/auth.context"
import { useContext } from 'react';
import Button from 'react-bootstrap/Button'

const Navigation = () => {

    const { user, logOutUser, isLoggedIn } = useContext(AuthContext)


    return (
        <Navbar collapseOnSelect id='navigation' expand="lg" variant="dark">
            <Container>
                <Navbar.Brand >
                    <Link to="/">
                        <img src='https://res.cloudinary.com/dzzkeb6xp/image/upload/v1656182281/FIVA_LOGO2_rovx00.png' width={110} />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav id='info' className="me-auto">
                        <Nav.Link className='link' >Home</Nav.Link>
                        <Nav.Link className='link' href="#home">Sobre Fiva</Nav.Link>
                        <Nav.Link className='link' href="#pricing">Productos</Nav.Link>
                        <Nav.Link className='link' href="#features">Area Cliente</Nav.Link>
                    </Nav>
                    <Nav id='info' className="me-auto">
                        {user &&
                            <Nav.Link className='link'>Hola, {user.name}</Nav.Link>
                        }
                        {isLoggedIn ?

                            <Nav.Link onClick={logOutUser}>Log out</Nav.Link>

                            :

                            <Link to="/login">

                                <Button variant="ligth" className='butonLog'>
                                    Log in
                                </Button>

                            </Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation

