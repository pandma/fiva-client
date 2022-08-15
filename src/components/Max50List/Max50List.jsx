import { Card, Button } from "react-bootstrap";
import CalculateMax50Price from "../CalculateMax50Price/CalculateMax50Price";

const Max50List = ({ fiva_id, owner, direction, cups, nif,
    hired_power, hired_price, anual_consumption,
    optimal_anual_consumption, annual_savings,
    recomended_power, annual_savings_optimal_price }) => {


    return (
        <>
            <Card>
                <Card.Header>{direction}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            Nombre: {owner}
                        </p>
                        <p>
                            CUPS: {cups}
                        </p>
                        <p>
                            Nº/Identificación Fiscal: {nif}
                        </p>
                        <p>
                            Potencia Contratada: {hired_power}
                        </p>
                        <p>
                            Precio del Cliente: {hired_price}
                        </p>
                        <p>
                            Consumo anual: {anual_consumption ? anual_consumption : "Sin calcular"}

                        </p>
                        <p>
                            Consumo Optimo: {optimal_anual_consumption ? optimal_anual_consumption : "Sin calcular"}

                        </p>
                        <p>
                            Ahorro anual: {annual_savings ? annual_savings : "Sin calcular"}

                        </p>
                        <p>
                            Potencia recomendad: {recomended_power ? recomended_power : "Sin calcular"}

                        </p>
                        <p>
                            Mejor precio: {annual_savings_optimal_price ? annual_savings_optimal_price : "Sin calcular"}
                        </p>

                        <footer >
                            <CalculateMax50Price fiva_id={fiva_id} direction={direction} />
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </>
    );

};

export default Max50List;