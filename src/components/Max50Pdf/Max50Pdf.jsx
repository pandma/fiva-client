import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Image
} from "@react-pdf/renderer";
import { useState } from "react";
import SerializePowers from '../../utils/SerializePower';


const styles = StyleSheet.create({
    page: {
        backgroundColor: "white",
        color: "black",
        fontStyle: "Verdana, sans-serif",
        fontSize: "14px",
    },
    title: {
        color: "black",
        fontStyle: "Verdana, sans-serif",
        fontSize: "16px",
        marginTop: "6%",
        marginLeft: "6%"
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
        height: "100px",
    },
    space: {
        marginTop: "3%",
    },
    spacePlus: {
        marginTop: "6%",
    },
    footer: {
        margin: 0,
        padding: 0,
        bottom: 0,
        backgroundColor: "grey",
        color: "white",
        clear: "both",
        position: "relative",
        height: "100px",

    }
});


const Max50Pdf = ({ owner, tariff_type, nif, hired_power,
    anual_consumption, optimal_anual_consumption, annual_savings,
    recomended_power, annual_savings_optimal_price }) => {

    const powers = SerializePowers(hired_power);
    const recomended = SerializePowers(recomended_power);


    //maquetar y limpiar numeros 
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
                    <Text style={styles.space}>Nº de Identificación Fiscal:{nif && nif}</Text>
                    <Text style={styles.space}>Con Tarifa: {tariff_type && tariff_type}</Text>
                    <Text style={styles.space}>Potencia Contratada de:</Text>
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

                    <Text style={styles.space}>Tine un consumo anual de: {anual_consumption}</Text>
                    <Text style={styles.spacePlus}>Con la Información obtenida el resultado optimo seria:</Text>
                    <Text style={styles.space}>Consumo anual de: {optimal_anual_consumption}</Text>
                    <Text style={styles.space}>Ahorro anual de:{annual_savings} </Text>
                    {annual_savings_optimal_price ?
                        <>
                            <Text>Consumo anual con el mejor precio + Ajuste de potencia</Text>
                            <Text style={styles.title} >{annual_savings_optimal_price}</Text>
                        </> : null
                    }
                    <Text style={styles.space}>Potencia recomendada de:</Text>
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
                </View>
                <View style={styles.footer}>
                    <Text >
                        Fiva.    fiva_support@proton.me
                    </Text>
                    <Text>
                        contacto: +34 601118739
                    </Text>
                </View>
            </Page>
        </Document >
    );
};

export default Max50Pdf;