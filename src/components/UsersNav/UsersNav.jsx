import './UsersNav.css'
import { Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const UsersNav = () => {
    return (
        <Nav className='flex-column use-nav' variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Link to="/users">
                    <Button variant="ligth" className='butonUsers'>Lista de Usuarios</Button>
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/register">
                    <Button variant="ligth" className='butonUsers'>Crear Usuario</Button>
                </Link>
            </Nav.Item>
        </Nav>
    )
}

export default UsersNav