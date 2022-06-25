import './Navigation.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {

    return (
        <Navbar id='navigation' variant='dark'>
            <Container>
                <Navbar.Brand href="#home">
                    <img src='https://res.cloudinary.com/dzzkeb6xp/image/upload/v1656182281/FIVA_LOGO2_rovx00.png' width={110} />
                </Navbar.Brand>

                <Nav id='info' className="me-auto">
                    <Nav.Link className='link' href="#home">Home</Nav.Link>
                    <Nav.Link className='link' href="#home">About Fiva</Nav.Link>
                    <Nav.Link className='link' href="#pricing">Products</Nav.Link>
                    <Nav.Link className='link' href="#features">Clients Area</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation

