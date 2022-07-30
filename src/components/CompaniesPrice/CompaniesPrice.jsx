import './CompaniesPrice.css'

const CompaniesPrice = ({ name, p1, p2, p3, p4, p5, p6 }) => {

    return (
        <>
            <Card className='users-card' style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Precios Por Periodos:
                    </Card.Text>
                    <Card.Text>
                        Periodo 1:
                        <br />
                        {p1}€
                    </Card.Text>
                    <Card.Text>
                        Periodo 2:
                        <br />
                        {p2}€
                    </Card.Text>
                    <Card.Text>
                        Periodo 3:
                        <br />
                        {p3}€
                    </Card.Text>
                    <Card.Text>
                        Periodo 4:
                        <br />
                        {p4}€
                    </Card.Text>
                    <Card.Text>
                        Periodo 5:
                        <br />
                        {p5}€
                    </Card.Text>
                    <Card.Text>
                        Periodo :
                        <br />
                        {p6}€
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}



export default CompaniesPrice