import './UsersPage.css'
import AdminNav from '../../components/AdminNav/AdminNav'
import UsersList from '../../components/UsersList/UsersList'
import UsersNav from '../../components/UsersNav/UsersNav'
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import authService from '../../services/auth.service'
import AdminNavigation from '../../components/AdminNavigation/AdminNavigation';



const UsersPage = () => {

    const [data, setData] = useState([])

    const getUsers = async () => {
        const users = await authService.getUsers()
        setData(users.data)
    }

    useEffect(() => {
        getUsers()
    }, [])


    const userslist = data.map((user) => {
        return (
            <UsersList {...user} />
        )
    })

    return (
        <>
            {/* <AdminNav /> */}
            {/* <UsersNav /> */}
            <Container fluid>
                <Row className=''>
                    <Col id='main-nav' md={2}>
                        <AdminNavigation />
                    </Col>
                    <Col md={10} >
                        <Container>
                            <Row>
                                <h1 className="">Lista de Usuarios</h1>
                                <Col lg={2}>
                                    {userslist}
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default UsersPage

