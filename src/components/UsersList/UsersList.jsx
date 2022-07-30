import './UsersList.css'
import { Button, Card } from 'react-bootstrap';
import { useState } from 'react';
import authService from '../../services/auth.service';


const UsersList = ({ id, name, email, role }) => {

    const [data, setData] = useState(
        { id, name, email, role }
    )


    const changeState = async () => {
        const user = await authService.updateUsers(
            { id, name, email, role: "Admin" }
        )
        const oneUser = user.data[0][0]
        console.log("working on progres", user, oneUser)

        setData({ ...oneUser })

    }
    return (
        <>
            <Card className='users-card' style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>
                        Correo:
                        <br />
                        {data.email}
                    </Card.Text>
                    <Card.Text>
                        Permisos:
                        <br />
                        {data.role === "Admin" ? "Aministrador" : "Usuario"}
                    </Card.Text>
                    {data.role === "Admin" ?
                        <Button variant="success">
                            Aministrador
                        </Button> :
                        <Button onClick={changeState} variant="primary">
                            Hacer Administrador
                        </Button>}
                </Card.Body>
            </Card>
        </>
    )
}

export default UsersList

