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
            <Nav.Link className='adminNav' href="/admin">Home</Nav.Link>
            <Nav.Link className='adminNav' href="/admin">Analiticas</Nav.Link>
            <NavDropdown className='adminNav' title="Usuarios" id="navbarScrollingDropdown">
                <NavDropdown.Item className='adminNav' href="/users">Lista de Usuarios</NavDropdown.Item>
                <NavDropdown.Item className='adminNav' href="/register">Crear Usuario</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className='adminNav' title="Precios Electricas" id="navbarScrollingDropdown">
                <NavDropdown.Item className='adminNav' href="/companies">Lista de Precios</NavDropdown.Item>
                <NavDropdown.Item className='adminNav' href="/newcompany">Añadir Compañia Electrica</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className='adminNav' title="Gestion de Clientes" id="navbarScrollingDropdown">
                <NavDropdown.Item className='adminNav' href="/contact-list">Lista de Clientes</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className='adminNav' title="Ajustes de Potencia" id="navbarScrollingDropdown">
                <NavDropdown.Item className='adminNav' href="/calculatemax50">Calcular Potencia optima</NavDropdown.Item>
                <NavDropdown.Item className='adminNav' href="/getmax50">Lista de Potencias </NavDropdown.Item>
            </NavDropdown>
        </Nav>
    );
};

export default AdminNavigation;