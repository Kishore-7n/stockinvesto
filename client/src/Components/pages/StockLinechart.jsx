import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function StockLinechart({data}) {
    

      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Stock Market Values Over a Week',
          },
        },
      };
    
      const chartData = {
        labels: data.map(d => d.day),
        datasets: [
          {
            label: 'Stock Price',
            data: data.map(d => d.price),
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
          },
        ],
      };
      
  return <Line options={options} data={chartData} />;
}

export default StockLinechart
