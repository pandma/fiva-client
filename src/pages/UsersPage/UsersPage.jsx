import './UsersPage.css'
import AdminNav from '../../components/AdminNav/AdminNav'
import UsersList from '../../components/UsersList/UsersList'
import UsersNav from '../../components/UsersNav/UsersNav'
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import authService from '../../services/auth.service'



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
            <Col md={4} xs={6}>
                <UsersList {...user} />
            </Col>
        )
    })

    return (
        <>
            <AdminNav />
            <UsersNav />
            <Container fluid>
                <h1 className="list-title">Lista de usuarios</h1>
                <Row className='list-row'>
                    {userslist}
                </Row>
            </Container>
        </>
    )
}

export default UsersPage

