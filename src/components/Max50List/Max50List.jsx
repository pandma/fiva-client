import { Card, Button } from "react-bootstrap"

const Max50List = (owner, direction, cups, nif, hired_power, hired_price, anual_consumption, optimal_anual_consumption, annual_savings, recomended_power, annual_savings_optimal_price) => {


    return (
        <>
            <Card className='users-card' style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{owner}</Card.Title>
                    <Card.Text>
                        Dicrección:
                        <br />
                        {direction}
                    </Card.Text>
                    <Card.Text>
                        CUPS:
                        <br />
                        {cups}
                    </Card.Text>
                    <Card.Text>
                        Nº/Identificación Fiscal:
                        <br />
                        {nif}
                    </Card.Text>
                    <Card.Text>
                        Potencia Contratada:
                        <br />
                        {hired_power}
                    </Card.Text>
                    <Card.Text>
                        Precio del Cliente:
                        <br />
                        {hired_price}
                    </Card.Text>
                    <Card.Text>
                        Consumo anual:
                        <br />
                        {anual_consumption && "Calcula la Potencia ideal"}
                    </Card.Text>
                    <Card.Text>
                        Consumo Optimo:
                        <br />
                        {optimal_anual_consumption && "Calcula la Potencia ideal"}
                    </Card.Text>
                    <Card.Text>
                        Ahorro anual:
                        <br />
                        {annual_savings && "Calcula la Potencia ideal"}
                    </Card.Text>
                    <Card.Text>
                        Potencia recomendad:
                        <br />
                        {recomended_power && "Calcula la Potencia ideal"}
                    </Card.Text>
                    <Card.Text>
                        Mejor precio:
                        <br />
                        {annual_savings_optimal_price && "Calcula el Precio ideal"}
                    </Card.Text>

                    <Button variant="success">
                        Calcular Mejor Precio
                    </Button>
                </Card.Body>
            </Card>
        </>
    )

}

export default Max50List