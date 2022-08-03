import { Card, Button } from 'react-bootstrap'
import CompaniesPriceModal from '../CompaniesPriceModal/CompaniesPriceModal'
import './CompaniesPrice.css'


const CompaniesPrice = ({ name, p1, p2, p3, p4, p5, p6 }) => {


    return (
        <>
            <Card className='users-card' style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Periodo 1: {p1}€
                    </Card.Text>
                    <Card.Text>
                        Periodo 2: {p2}€
                    </Card.Text>
                    <Card.Text>
                        Periodo 3: {p3}€
                    </Card.Text>
                    <Card.Text>
                        Periodo 4: {p4}€
                    </Card.Text>
                    <Card.Text>
                        Periodo 5: {p5}€
                    </Card.Text>
                    <Card.Text>
                        Periodo 6: {p6}€
                    </Card.Text>

                    <CompaniesPriceModal />

                </Card.Body>
            </Card>
        </>
    )
}



export default CompaniesPrice