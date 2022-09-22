import { useState } from "react";
import { Card } from "react-bootstrap";
import CalculateMax50Price from "../CalculateMax50Price/CalculateMax50Price";
import Round from "../../utils/Round";

const Max50List = ({ fiva_id, owner, tariff_type, direction, cups, nif,
    hired_power, hired_price, anual_consumption,
    optimal_anual_consumption, annual_savings,
    recomended_power, annual_savings_optimal_price }) => {

    const newSatate = () => {
        return annual_savings_optimal_price;
    };
    const [max50Data, setMax50data] = useState(newSatate);


    let optimlaAnulaSavings;
    if (annual_savings_optimal_price) {
        optimlaAnulaSavings = Round(annual_savings_optimal_price, 0);

    } else if (max50Data) {
        optimlaAnulaSavings = Round(max50Data, 0);

    } else {
        optimlaAnulaSavings = "Sin calcular";

    }


    return <>
        <Card>
            <Card.Header>{direction}</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p>
                        Tarifa: {tariff_type}
                    </p>
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
                        Consumo anual: {anual_consumption ? Round(anual_consumption, 0) : "Sin calcular"} €
                    </p>
                    <p>
                        Consumo Optimo: {optimal_anual_consumption ? Round(optimal_anual_consumption, 0) : "Sin calcular"} €
                    </p>
                    <p>
                        Ahorro anual: {annual_savings ? Round(annual_savings, 0) : "Sin calcular"} €
                    </p>
                    <p>
                        Potencia recomendad: {recomended_power ? recomended_power : "Sin calcular"}
                    </p>
                    <p>
                        Mejor precio: {optimlaAnulaSavings} €
                    </p>
                    <footer >
                        <CalculateMax50Price setMax50data={setMax50data} fiva_id={fiva_id} direction={direction} />
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    </>;
};

export default Max50List;