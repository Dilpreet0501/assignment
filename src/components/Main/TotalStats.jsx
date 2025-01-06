import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

function TotalStats() {
  const stats = [
    {
      title: 'Total Employees',
      value: 216,
      sub: [
        { label: '120 Men', growth: '+2%' },
        { label: '96 Women', growth: '' },
      ],
      chartData: {
        labels: Array(7).fill(''), 
        datasets: [
          {
            label: 'Employees',
            data: [200, 205, 210, 215, 220, 218, 216],
            borderColor: '#4CAF50',
            backgroundColor: 'rgba(76, 175, 80, 0.2)',
            borderWidth: 2,
            tension: 0.3,
          },
        ],
      },
    },
    {
      title: 'Talent Request',
      value: 16,
      sub: [
        { label: '6 Men', growth: '' },
        { label: '10 Women', growth: '+5%' },
      ],
      chartData: {
        labels: Array(7).fill(''), 
        datasets: [
          {
            label: 'Requests',
            data: [10, 12, 14, 15, 16, 17, 16],
            borderColor: '#36A2EB',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderWidth: 2,
            tension: 0.3,
          },
        ],
      },
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow space-y-4"
        >
          <h3 className="text-xl font-semibold">{stat.title}</h3>
          <div className="flex items-center justify-between">
            <h2 className="text-4xl font-bold">{stat.value}</h2>
            <div className="flex flex-col items-end space-y-2">
              {stat.sub.map((item, idx) => (
                <p key={idx} className="flex items-center text-gray-700">
                  {item.label}
                  {item.growth && (
                    <span className="text-sm text-green-500 ml-2">
                      {item.growth}
                    </span>
                  )}
                </p>
              ))}
            </div>
          </div>
        
          <div className="mt-4">
            <Line
              data={stat.chartData}
              options={{
                responsive: true,
                plugins: {
                  legend: { display: false }, 
                },
                scales: {
                  x: {
                    display: false, 
                    grid: { display: false },
                  },
                  y: {
                    display: false, 
                    grid: { display: false }, 
                  },
                },
                elements: {
                  point: {
                    radius: 3, 
                  },
                },
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default TotalStats;


