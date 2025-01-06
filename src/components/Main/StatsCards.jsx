import React from 'react';

function StatsCards() {
  const stats = [
    { title: 'Available Position', value: 24, sub: '4 Urgently needed', color: 'bg-red-100 text-red-500' },
    { title: 'Job Open', value: 10, sub: '4 Active hiring', color: 'bg-blue-100 text-blue-500' },
    { title: 'New Employees', value: 24, sub: '4 Department', color: 'bg-pink-100 text-pink-500' },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`p-4 rounded-lg shadow ${stat.color} flex flex-col items-center`}
        >
          <p className="text-lg font-semibold">{stat.title}</p>
          <h2 className="text-3xl font-bold">{stat.value}</h2>
          <p>{stat.sub}</p>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;
