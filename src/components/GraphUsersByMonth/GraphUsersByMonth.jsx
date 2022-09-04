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
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: false,
            text: 'Relacion de Usuarios activos',
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
            label: 'Usuarios',
            data: test,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ],
};

export const GraphUsersByMonth = () => {
    return <Bar options={options} data={data} />;

};