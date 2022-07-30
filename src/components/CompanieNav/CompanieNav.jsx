import './CompanieNav.css'
import { Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const CompanieNav = () => {
    return (
        <Nav className='flex-column use-nav' variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Link to="/#">
                    <Button variant="ligth" className='butonUsers'>Lista de Precios</Button>
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/#">
                    <Button variant="ligth" className='butonUsers'>Añadir Compañia Electrica</Button>
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/#">
                    <Button variant="ligth" className='butonUsers'>Actualizar Precios</Button>
                </Link>
            </Nav.Item>
        </Nav>
    )

}

export default CompanieNav