import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminNavigation from "../../components/AdminNavigation/AdminNavigation";
import CompaniesPrice from "../../components/CompaniesPrice/CompaniesPrice";
import companyService from "../../services/companies.service";
import Loader from '../../components/Loader/Loader';



const CompaniesPage = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const getCompany = async () => {
        const companies = await companyService.getCompanies();
        setData(companies.data.companies);

    };

    useEffect(() => {
        getCompany();
        setIsLoading(false);
    }, []);


    const comapnies = data.map((comp) => {
        return (
            <Col md={4} xs={6}>
                <CompaniesPrice {...comp} />
            </Col>
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
                    <Col id='main-admin-component' className="adminBody" md={10} >
                        <Container fluid>
                            <h1 className="DashTitle">Lista de Electricas</h1>
                            <Row className='list-row'>
                                {comapnies}
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>;
    }
};

export default CompaniesPage;