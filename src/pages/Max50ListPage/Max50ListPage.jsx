import './Max50ListPage.css';
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row, Button, Dropdown, Form } from "react-bootstrap";
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
    const [searchData, setSearchData] = useState("");
    const [newData, setNewData] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

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
    const handSearchData = (event) => {

        setSearchData(event.target.value);

        if (event.target.getAttribute("value")) {
            const searchBy = event.target.getAttribute("value");
            let res = [];
            Data.filter(val => {
                if (val.owner.toLowerCase().includes(searchBy.toLowerCase())) {
                    res.push(val);
                }
            });

            if (res.length) {
                setNewData(res);
                setIsLoading(true);
                console.log("no funciona");
            }
        }
    };
    useEffect(() => {
        if (isSearching) {
            console.log("hey");
            setData(newData);
            setIsLoading(false);
            setIsSearching(false);
        }
        getMax50();
        loopWithSlice(0, postsPerPage);
        setIsLoading(false);
    }, []);

    useEffect(() => {
        console.log("hey");
        setData(newData);
        setIsLoading(false);
        setIsSearching(true);

    }, [isSearching == true]);

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
                            <Row style={{
                                marginTop: "2%",
                                marginBottom: "2%"
                            }}>
                                <Col md={{ span: 4 }} style={{
                                    marginLeft: "2%"
                                }}>
                                    <h1 className="DashTitle">Potencias Calculadas</h1>
                                </Col>
                                <Col md={{ span: 4, offset: 2 }} style={{
                                    marginTop: "1%",
                                }}>
                                    <div>
                                        <Form.Control type="text"
                                            placeholder="Search"
                                            name="search"
                                            onChange={handSearchData} />

                                        {searchData ?
                                            <div className='searchs' >
                                                {
                                                    Data.filter(val => {
                                                        if (!searchData) {
                                                            return null;
                                                        } else if (val.owner.toLowerCase().startsWith(searchData.toLowerCase())) {
                                                            return val.owner;
                                                        }
                                                    }).map((val, key) => {
                                                        return <div className='listItem' value={val.owner} onClick={handSearchData} key={key}>
                                                            <p>{val.owner}</p>
                                                        </div>;
                                                    })
                                                }
                                            </div> : null
                                        }
                                    </div>
                                </Col>
                            </Row>
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

