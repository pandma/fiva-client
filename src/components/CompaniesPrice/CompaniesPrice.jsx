import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import CompaniesPriceModal from '../CompaniesPriceModal/CompaniesPriceModal';
import './CompaniesPrice.css';


const CompaniesPrice = ({ id, name, p1, p2, p3, p4, p5, p6 }) => {

    const [data, setData] = useState({
        name, p1, p2, p3, p4, p5, p6
    });


    return (
        <>
            <Card className='conpany-card' style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title className='companyCardTitle'>{data.name}</Card.Title>
                    <Card.Text>
                        <span className='spaceRigth'> Periodo 1: {data.p1}€</span><span> Periodo 2: {data.p2}€</span>
                    </Card.Text>
                    <Card.Text>
                        <span className='spaceRigth'> Periodo 3: {data.p3}€</span><span> Periodo 4: {data.p4}€</span>
                    </Card.Text>
                    <Card.Text>
                        <span className='spaceRigth'> Periodo 5: {data.p5}€</span><span> Periodo 6: {data.p6}€</span>
                    </Card.Text>
                    <hr />
                    <CompaniesPriceModal id={id} nameProp={name} p1={p1} p2={p2} p3={p3} p4={p4} p5={p5} p6={p6} setData={setData} />
                </Card.Body>
            </Card>
        </>
    );
};



export default CompaniesPrice;