import Nav from 'react-bootstrap/Nav';


const AdminNav = () => {
    return (
        <Nav justify variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link eventKey="link-1">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Formularios de contacto</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Usuarios</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Precios de Ajustes de potencia</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default AdminNav;