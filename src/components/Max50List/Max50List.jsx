import { useState } from "react";
import { Card } from "react-bootstrap";
import CalculateMax50Price from "../CalculateMax50Price/CalculateMax50Price";
import Round from "../../utils/Round";

const Max50List = ({ fiva_id, owner, tariff_type, direction, cups, nif,
    hired_power, hired_price, anual_consumption,
    optimal_anual_consumption, annual_savings,
    recomended_power, annual_savings_optimal_price }) => {

    const [max50Data, setMax50data] = useState({
        fiva_id: fiva_id,
        owner: owner,
        tariff_type: tariff_type,
        direction: direction,
        cups: cups,
        nif: nif,
        hired_power: hired_power,
        hired_price: hired_price,
        anual_consumption: anual_consumption,
        optimal_anual_consumption: optimal_anual_consumption,
        annual_savings: annual_savings,
        recomended_power: recomended_power,
        annual_savings_optimal_price: annual_savings_optimal_price

    });


    return (
        <>
            <Card>
                <Card.Header>{max50Data.direction}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            Tarifa: {max50Data.tariff_type}
                        </p>
                        <p>
                            Nombre: {max50Data.owner}
                        </p>
                        <p>
                            CUPS: {max50Data.cups}
                        </p>
                        <p>
                            Nº/Identificación Fiscal: {max50Data.nif}
                        </p>
                        <p>
                            Potencia Contratada: {max50Data.hired_power}
                        </p>
                        <p>
                            Precio del Cliente: {max50Data.hired_price}
                        </p>
                        <p>
                            Consumo anual: {max50Data.anual_consumption ? Round(max50Data.anual_consumption, 0) : "Sin calcular"} €

                        </p>
                        <p>
                            Consumo Optimo: {max50Data.optimal_anual_consumption ? Round(max50Data.optimal_anual_consumption, 0) : "Sin calcular"} €

                        </p>
                        <p>
                            Ahorro anual: {max50Data.annual_savings ? Round(max50Data.annual_savings, 0) : "Sin calcular"} €

                        </p>
                        <p>
                            Potencia recomendad: {max50Data.recomended_power ? max50Data.recomended_power : "Sin calcular"}

                        </p>
                        <p>
                            Mejor precio: {max50Data.annual_savings_optimal_price ? Round(max50Data.annual_savings_optimal_price, 0) : "Sin calcular"} €
                        </p>

                        <footer >
                            <CalculateMax50Price setMax50data={setMax50data} fiva_id={fiva_id} direction={direction} />
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </>
    );

};

export default Max50List;