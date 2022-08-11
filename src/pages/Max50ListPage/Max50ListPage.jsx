import './Max50ListPage.css'
import { useEffect } from "react"
import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import AdminNavigation from "../../components/AdminNavigation/AdminNavigation"
import Max50List from '../../components/Max50List/Max50List'
import Loader from '../../components/Loader/Loader';
import max50Service from '../../services/max50.service';



const Max50ListPage = () => {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    const getMax50 = async () => {
        const serviceData = await max50Service.getMax50()
        const result = serviceData.data
        let arr = result.slice(0, 2)
        setData(arr)
        console.log(result)
        console.log(arr)
        if (data.length > 0) {
            console.log(data)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getMax50()
    }, [])

    const max50 = data.map((comp) => {
        return (
            <Col md={4} xs={6}>
                <Max50List {...comp} />
            </Col>
        )
    })

    if (isLoading) {
        return <>
            <Loader />
        </>
    } else {
        return <>
            <Container fluid>
                <Row className=''>
                    <Col id='main-nav' md={2}>
                        <AdminNavigation />
                    </Col>
                    <Col id='main-admin-component' md={10} >
                        <Container fluid>
                            <h1 className="list-title">Lista de Potencias Calculadas</h1>
                            <Row className='list-row'>
                                {isLoading === false && max50}
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    }

}

export default Max50ListPage