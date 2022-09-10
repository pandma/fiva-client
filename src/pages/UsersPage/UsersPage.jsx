import './UsersPage.css';
import UsersList from '../../components/UsersList/UsersList';
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import authService from '../../services/auth.service';
import AdminNavigation from '../../components/AdminNavigation/AdminNavigation';



const UsersPage = () => {

    const [data, setData] = useState([]);

    const getUsers = async () => {
        const users = await authService.getUsers();
        setData(users.data);
    };

    useEffect(() => {
        getUsers();
    }, []);


    const userslist = data.map((user) => {
        return (
            <UsersList {...user} />
        );
    });

    return (
        <>
            <Container fluid>
                <Row className=''>
                    <Col id='main-nav' md={2}>
                        <AdminNavigation />
                    </Col>
                    <Col md={10} className="adminBody" >
                        <Container fluid>
                            <h1 className="DashTitle">Lista de Usuarios</h1>
                            <Row className='list-row'>
                                {userslist}
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default UsersPage

