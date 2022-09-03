import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Image
} from "@react-pdf/renderer";
import SerializePowers from '../../utils/SerializePower';
import Round from "../../utils/Round";

const styles = StyleSheet.create({
    page: {
        backgroundColor: "white",
        color: "black",
        fontStyle: "Verdana, sans-serif",
        fontSize: "14px",
        paddingTop: "2%"
    },
    title: {
        color: "black",
        fontStyle: "Verdana, sans-serif",
        fontSize: "16px",
        fontStyle: "bold",
        marginTop: "6%",
        marginLeft: "8%"
    },
    priceTitle: {
        marginTop: "4%",
        color: "black",
        fontStyle: "Verdana, sans-serif",
        fontSize: "16px",
        textAlign: "center"
    },
    section: {
        margin: "20%",
    },
    viewer: {
        width: window.innerWidth,
        height: window.innerHeight,
    },
    img: {
        position: "absolute",
        left: "350px",
        width: "200px",
        height: "90px",
    },
    space: {
        marginTop: "3%",
    },
    spacePlus: {
        marginTop: "6%",
    },
    footer: {
        marginLeft: "15%",
        marginRight: "15%",
        bottom: 0,
        color: "purple",
        clear: "both",
        position: "relative",
        height: "100px",
        textAlign: "center",
        fontSize: "10px",
    }
});


const Max50Pdf = ({ owner, tariff_type, nif, hired_power,
    anual_consumption, optimal_anual_consumption, annual_savings,
    recomended_power, annual_savings_optimal_price }) => {

    const powers = SerializePowers(hired_power);
    const recomended = SerializePowers(recomended_power);


    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={{ marginTop: 10 }}>
                    <Image
                        src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1658079723/FIVA_8_2_uwwowr.png"
                        alt="logo"
                        style={styles.img}

                    />
                    <Text style={styles.title}>
                        Cálculo de Ajuste de Potencias
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text>Para:</Text>
                    <Text style={styles.space}>{owner && owner}</Text>
                    <Text style={styles.space}>Nº de Identificación Fiscal: {nif && nif}</Text>
                    <Text style={styles.space}>Con Tarifa: {tariff_type && tariff_type}</Text>
                    <Text style={styles.space}>Potencia Contratada:</Text>
                    {powers ?
                        <>
                            < Text style={styles.space}>
                                Periodo 1: {powers[0]} KW
                                Periodo 2: {powers[1]} KW
                                Periodo 3: {powers[2]} KW
                            </Text>
                            <Text style={styles.space}>
                                Periodo 4: {powers[3]} KW
                                Periodo 5: {powers[4]} KW
                                Periodo 6: {powers[5]} KW
                            </Text>
                        </> : null
                    }
                    <Text style={styles.space}>Tine un consumo anual de: {Round(anual_consumption, 0)} €</Text>
                    <Text style={styles.spacePlus}>Con la Información obtenida el resultado optimo seria:</Text>
                    <Text style={styles.space}>Consumo anual de: {Round(optimal_anual_consumption, 0)} €</Text>
                    <Text style={styles.space}>Ahorro anual de: {Round(annual_savings, 0)} € </Text>
                    <Text style={styles.space}>Potencia recomendada:</Text>
                    {
                        recomended ?
                            <>
                                < Text style={styles.space}>
                                    Periodo 1: {recomended[0]} KW
                                    Periodo 2: {recomended[1]} KW
                                    Periodo 3: {recomended[2]} KW
                                </Text>
                                <Text style={styles.space}>
                                    Periodo 4: {recomended[3]} KW
                                    Periodo 5: {recomended[4]} KW
                                    Periodo 6: {recomended[5]} KW
                                </Text>
                            </> : null
                    }
                    {annual_savings_optimal_price ?
                        <>
                            <Text style={styles.space}>Consumo anual con el mejor precio + Ajuste de potencia:</Text>
                            <Text style={styles.priceTitle} >{Round(annual_savings_optimal_price, 0)} €</Text>
                        </> : null
                    }
                </View>
                <View style={styles.footer}>
                    <Text >
                        Documento creado por el soporte informativo de fiva®,
                        se ruega que el uso de este documento sea meramente informativo, para más
                        información sobre las estructuras de las tarifas contactar con soporte de fiva.
                    </Text>
                </View>
            </Page>
        </Document >
    );
};

export default Max50Pdf;