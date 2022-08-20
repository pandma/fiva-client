import './Navigation.css';
import { Nav, Container, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../context/auth.context";
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';

const Navigation = () => {

    const { user, logOutUser, isLoggedIn, isAdmin } = useContext(AuthContext);


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
                        {!user &&
                            <Link to="/about">
                                <Button variant="ligth" className='butonLog'>Sobre Fiva</Button>
                            </Link>
                        }
                        <NavDropdown variant="ligth" className='butonLog-service'
                            title="Clientes"
                            id={`offcanvasNavbarDropdown-expand-md`}
                        >
                            <NavDropdown.Item >
                                <Link to="/pyme" className='colored-fiva' style={{ textDecoration: 'none' }} >
                                    <p>Pymes</p>
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Link to="/bigconstumer" className='colored-fiva' style={{ textDecoration: 'none' }} >
                                    <p>Grandes consumidores</p>
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Link to="/administrator" className='colored-fiva' style={{ textDecoration: 'none' }} >
                                    <p>Administradores de fincas</p>
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown >
                        <NavDropdown variant="ligth" className='butonLog-service'
                            title="Servicios"
                            id={`offcanvasNavbarDropdown-expand-md`}
                        >
                            <NavDropdown.Item >
                                <Link to="/power" className='colored-fiva' style={{ textDecoration: 'none' }} >
                                    <p>Ajuste de optimización de potencia</p>
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Link to="/energy" className='colored-fiva' style={{ textDecoration: 'none' }} >
                                    <p>Estudios de eficiencia energetica</p>
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Link to="/transition" className='colored-fiva' style={{ textDecoration: 'none' }} >
                                    <p>Transición a energía renovable</p>
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Link to="/price" className='colored-fiva' style={{ textDecoration: 'none' }} >
                                    <p>Comparativa de tarifas</p>
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Link to="/solutions" className='colored-fiva' style={{ textDecoration: 'none' }} >
                                    <p>Soluciones de software</p>
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Link to="/digitalitation" className='colored-fiva' style={{ textDecoration: 'none' }} >
                                    <p>Digitalización</p>
                                </Link>
                            </NavDropdown.Item>
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
};

export default Navigation;

