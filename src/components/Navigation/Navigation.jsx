import './Navigation.css'
import { Nav, Container, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { AuthContext } from "../../context/auth.context"
import { useContext } from 'react';
import Button from 'react-bootstrap/Button'

const Navigation = () => {

    const { user, logOutUser, isLoggedIn, isAdmin } = useContext(AuthContext)


    return (
        <Navbar collapseOnSelect id='navigation' expand="lg" variant="dark">
            <Container>
                <Navbar.Brand >
                    <Link to="/">
                        <img src='https://res.cloudinary.com/dzzkeb6xp/image/upload/v1658079723/FIVA_8_3_u0dayt.png' width={120} />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav id='info' className="me-auto">
                        <Link to="/">
                            <Button variant="ligth" className='butonLog'>Home</Button>
                        </Link>
                        <Link to="/about">
                            <Button variant="ligth" className='butonLog'>Sobre Fiva</Button>
                        </Link>
                        <NavDropdown variant="ligth" className='butonLog'
                            title="Clientes"
                            id={`offcanvasNavbarDropdown-expand-md`}
                        >
                            <NavDropdown.Item >
                                <Link to="/pyme">
                                    <p>Pymes</p>
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Link to="/bigconstumer">
                                    <p>Grandes consumidores</p>
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Link to="/administrator">
                                    <p>Administradores de fincas</p>
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown >
                        <NavDropdown variant="ligth" className='butonLog'
                            title="Servicios"
                            id={`offcanvasNavbarDropdown-expand-md`}
                        >
                            <NavDropdown.Item href="#action3">Ajuste de optimización de potencia</NavDropdown.Item>
                            <NavDropdown.Item href="#action3">Estudios de eficiencia energetica</NavDropdown.Item>
                            <NavDropdown.Item href="#action3">Transición a energía renovable</NavDropdown.Item>
                            <NavDropdown.Item href="#action3">Comparativa de tarifas</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Soluciones de software</NavDropdown.Item>
                            <NavDropdown.Item href="#action3">Digitalización</NavDropdown.Item>
                        </NavDropdown >
                        {isAdmin &&
                            <Link to="/admin">
                                <Button variant="ligth" className='butonLog'>Admin Area</Button>
                            </Link>
                        }
                    </Nav>

                    <Nav id='info' className="me-auto">
                        {user &&
                            <Nav.Link className='link'>Hola, {user.name}</Nav.Link>
                        }
                        {isLoggedIn ?
                            <Nav.Link onClick={logOutUser}>Log out</Nav.Link>
                            :
                            <Link to="/login">
                                <Button variant="ligth" className='butonLog'>Inicia Sesión</Button>
                            </Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation

