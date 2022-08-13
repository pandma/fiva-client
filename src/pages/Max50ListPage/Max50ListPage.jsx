import './Max50ListPage.css'
import { useEffect } from "react"
import { useState } from "react"
import { Col, Container, Row, Button } from "react-bootstrap"
import AdminNavigation from "../../components/AdminNavigation/AdminNavigation"
import Max50List from '../../components/Max50List/Max50List'
import Loader from '../../components/Loader/Loader';
import max50Service from '../../services/max50.service';




const Max50ListPage = () => {
    const postsPerPage = 9;
    let arrayForHoldingPosts = [];

    const [maxData, setMaxData] = useState([])
    const [Data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [next, setNext] = useState(9);

    const loopWithSlice = (start, end) => {
        const slicedPosts = maxData.slice(start, end);
        arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
        setData(arrayForHoldingPosts);
        scrollUpwards()
    };
    const getMax50 = async () => {
        const serviceData = await max50Service.getMax50();
        const result = serviceData.data;
        setMaxData(result)
        const copy = [...result];
        setData(copy.slice(0, postsPerPage))
    }
    const handleShowMorePosts = () => {
        loopWithSlice(next, next + postsPerPage);
        setNext(next + postsPerPage);
    };
    const scrollUpwards = () => {
        window.scrollTo(0, 0)
    }
    useEffect(() => {
        getMax50()
        loopWithSlice(0, postsPerPage);
        setIsLoading(false)
    }, [])

    const max50 = Data.map((max) => {
        return (
            <Col md={4} xs={6}>
                <Max50List {...max} />
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
                                {max50}
                            </Row>
                            <Button className='see-more' variant="secondary" onClick={handleShowMorePosts}>ver mas</Button>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    }
}

export default Max50ListPage

