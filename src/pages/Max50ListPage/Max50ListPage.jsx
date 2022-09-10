import './Max50ListPage.css';
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row, Button, Dropdown } from "react-bootstrap";
import AdminNavigation from "../../components/AdminNavigation/AdminNavigation";
import Max50List from '../../components/Max50List/Max50List';
import Loader from '../../components/Loader/Loader';
import max50Service from '../../services/max50.service';
import Max50Pdf from '../../components/Max50Pdf/Max50Pdf';
import { PDFDownloadLink } from "@react-pdf/renderer";

const Max50ListPage = () => {
    const postsPerPage = 9;
    let handlindData = [];

    const [maxData, setMaxData] = useState([]);
    const [Data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [next, setNext] = useState(9);
    const isLast = next === maxData.length;
    const isFirst = next === postsPerPage;

    const loopWithSlice = (start, end) => {
        const slicedPosts = maxData.slice(start, end);
        handlindData = [...handlindData, ...slicedPosts];
        setData(handlindData);
        scrollUpwards();
    };

    const loopWithSliceRevers = (start, end) => {
        const slicedPosts = maxData.slice(end, start);
        handlindData = [...handlindData, ...slicedPosts];
        setData(handlindData);
        scrollUpwards();
    };
    const getMax50 = async () => {
        const serviceData = await max50Service.getMax50();
        const result = serviceData.data;
        setMaxData(result);
        const copy = [...result];
        setData(copy.slice(0, postsPerPage));
    };
    const handleShowMore = () => {
        loopWithSlice(next, next + postsPerPage);
        setNext(next + postsPerPage);
    };
    const handleShowLess = () => {
        loopWithSliceRevers(next, next - postsPerPage);
        setNext(next - postsPerPage);
    };
    const scrollUpwards = () => {
        window.scrollTo(0, 0);
    };
    useEffect(() => {
        getMax50();
        loopWithSlice(0, postsPerPage);
        setIsLoading(false);
    }, []);

    const max50 = Data.map((max) => {
        return (
            <Col className='power-card' md={10} xs={10}>
                <Max50List {...max} />
                <PDFDownloadLink
                    document={<Max50Pdf {...max} />}
                    fileName={`AjustePotencia_${max.owner}.pdf`}
                >
                    <Dropdown>
                        <Dropdown.Toggle className='rigth-pdf' variant="secondary" id="dropdown-basic">
                            Descargar PDF
                        </Dropdown.Toggle>
                    </Dropdown>
                </PDFDownloadLink>
            </Col >
        );
    });

    if (isLoading) {
        return <>
            <Loader />
        </>;
    } else {
        return <>
            <Container fluid>
                <Row className=''>
                    <Col id='main-nav' md={2}>
                        <AdminNavigation />
                    </Col>
                    <Col id='main-admin-component' className='adminBody' md={10} >
                        <Container fluid>
                            <h1 className="DashTitle" >Potencias Calculadas</h1>
                            <Row className='list-row'>
                                {max50}
                            </Row>
                            {isLast ?
                                <Button className='see-more' variant="secondary" >No hay mas resultados</Button>
                                :
                                <Button className='see-more' variant="secondary" onClick={handleShowMore}>Siguiente</Button>
                            }
                            {isFirst === false &&
                                <Button className='see-more' variant="secondary" onClick={handleShowLess}>Anterior</Button>
                            }

                        </Container>
                    </Col>
                </Row>
            </Container>
        </>;
    }
};

export default Max50ListPage;

