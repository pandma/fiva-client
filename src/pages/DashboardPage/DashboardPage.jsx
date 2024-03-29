import './DashboardPage.css';
import { GraphUsersByMonth } from "../../components/GraphUsersByMonth/GraphUsersByMonth";
import AdminNavigation from "../../components/AdminNavigation/AdminNavigation";
import { GraphCalculatedPowers } from '../../components/GraphCalculatedPowers/GraphCalculatedPowers';
import { GraphTariffTypeSave } from '../../components/GraphTariffTypeSave/GraphTariffTypeSave';
import { GraphNumOfTariff } from '../../components/GraphNumOfTariff/GraphNumOfTariff';
import { Col, Container, Row } from "react-bootstrap";


const DashboardPage = () => {
    return (
        <Container fluid>
            <Row >
                <Col id='main-nav' md={2}>
                    <AdminNavigation />
                </Col>
                <Col className='mainboard' md={10} >
                    <Container fluid>
                        <Row >
                            <Col >
                                <h1 className="DashTitle">Dashboard</h1>
                            </Col>
                        </Row>
                        <Row className='fadedboard'>
                            <Col>
                                <h3 style={{
                                    textAlign: 'center',
                                    marginTop: "2%"
                                }}>Usuarios activos</h3>
                                <div className='graphSize'>
                                    <GraphUsersByMonth />
                                </div>
                            </Col>
                        </Row>
                        <Row className='fadedboard'>
                            <Col className='powersGraph'>
                                <h3 style={{
                                    textAlign: 'center',
                                    marginTop: "2%"
                                }}>Calculos de potencia realizados</h3>
                                <div className='graphSize'>
                                    <GraphCalculatedPowers />
                                </div>
                            </Col>
                        </Row>
                        <Row className='fadedboard'>
                            <Col className='powersGraph' md={6}>
                                <div className='graphDouL'>
                                    <h3 style={{
                                        textAlign: 'center',
                                        marginTop: "2%"
                                    }}>Ahorro por cada tipo de tarifa</h3>
                                    <GraphTariffTypeSave />
                                </div>
                            </Col>
                            <Col className='powersGraph' md={6}>
                                <div className='graphDou'>
                                    <h3 style={{
                                        textAlign: 'center',
                                        marginTop: "2%"
                                    }}>Total de cada tipo detarifa</h3>
                                    <GraphNumOfTariff />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container >
    );
};

export default DashboardPage;