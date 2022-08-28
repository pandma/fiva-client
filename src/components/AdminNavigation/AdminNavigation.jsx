import './AdminNavigation.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminNavigation = () => {
    return (
        <Nav defaultActiveKey="/home" className="flex-column">
            <Navbar.Brand >
                <Link to="/">
                    <img src='https://res.cloudinary.com/dzzkeb6xp/image/upload/v1658079723/FIVA_8_2_uwwowr.png' width={240} />
                </Link>
            </Navbar.Brand>
            <br />
            <Nav.Link className='adminNav' >
                <Link to="/admin" style={{ textDecoration: 'none' }}>
                    Home
                </Link>
            </Nav.Link>
            <Nav.Link className='adminNav' href="/admin">
                <Link to="/admin" style={{ textDecoration: 'none' }}>
                    Dashboard
                </Link>
            </Nav.Link>
            <NavDropdown className='adminNav' title="Usuarios" id="navbarScrollingDropdown">
                <NavDropdown.Item >
                    <Link to="/users" className='colored-fiva' style={{ textDecoration: 'none' }}>
                        <p>
                            Lista de Usuarios
                        </p>
                    </Link>
                </NavDropdown.Item>
                <NavDropdown.Item >
                    <Link to="/register" className='colored-fiva' style={{ textDecoration: 'none' }}>
                        <p>
                            Crear Usuario
                        </p>
                    </Link>
                </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className='adminNav' title="Precios Electricas" id="navbarScrollingDropdown">
                <NavDropdown.Item c>
                    <Link to="/companies" className='colored-fiva' style={{ textDecoration: 'none' }}>
                        <p>
                            Lista de Precios
                        </p>
                    </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className='adminNav' >
                    <Link to="/newcompany" className='colored-fiva' style={{ textDecoration: 'none' }}>
                        <p>
                            Añadir Compañia Electrica
                        </p>
                    </Link>
                </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className='adminNav' title="Gestion de Clientes" id="navbarScrollingDropdown">
                <NavDropdown.Item className='adminNav'>
                    <Link to="/contact-list" className='colored-fiva' style={{ textDecoration: 'none' }}>
                        <p>
                            Lista de Clientes
                        </p>
                    </Link>
                </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className='adminNav' title="Ajustes de Potencia" id="navbarScrollingDropdown">
                <NavDropdown.Item  >
                    <Link to="/calculatemax50" className='colored-fiva' style={{ textDecoration: 'none' }}>
                        <p>
                            Calcular Potencia optima
                        </p>
                    </Link>
                </NavDropdown.Item>
                <NavDropdown.Item >
                    <Link to="/getmax50" className='colored-fiva' style={{ textDecoration: 'none' }}>
                        <p>
                            Lista de Potencias
                        </p>
                    </Link>
                </NavDropdown.Item>
            </NavDropdown>
        </Nav>
    );
};

export default AdminNavigation;