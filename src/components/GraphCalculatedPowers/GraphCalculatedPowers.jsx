import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: false,
            text: 'Calculos de potencia realizados',
        },
    },
};

const labels = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

const test = [15, 55, 55, 67, 78, 90, 43, 13, 567, 11, 345, 677];

export const data = {
    labels,
    datasets: [
        {
            label: 'Calculos de potencia realizados',
            data: test,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ],
};

export const GraphCalculatedPowers = () => {
    return <Bar options={options} data={data} />;

}

