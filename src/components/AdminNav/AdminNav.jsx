import './AdminNav.css'
import { Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const AdminNav = () => {
    return (
        <Nav className='admin-nav' justify variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Link to="/#">
                    <Button variant="ligth" className=''>Fivanachi Ajuste Potencia</Button>
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/contact-list">
                    <Button variant="ligth" className=''>Formularios de Contacto</Button>
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/users">
                    <Button variant="ligth" className=''>Usuarios</Button>
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/#">
                    <Button variant="ligth" className=''>Precios de potencia</Button>
                </Link>
            </Nav.Item>
        </Nav>
    );
}

export default AdminNav;