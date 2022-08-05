import './AdminNavigation.css'
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
            <Nav.Link href="/admin">Home</Nav.Link>
            <Nav.Link href="/admin">Analiticas</Nav.Link>
            <NavDropdown title="Usuarios" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/users">Lista de Usuarios</NavDropdown.Item>
                <NavDropdown.Item href="/register">Crear Usuario</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Precios Electricas" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/companies">Lista de Precios</NavDropdown.Item>
                <NavDropdown.Item href="/newcompany">Añadir Compañia Electrica</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Gestion de Clientes" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/contact-list">Lista de Clientes</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Ajustes de Potencia" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/admin">Calcular potencia</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    );
}

export default AdminNavigation