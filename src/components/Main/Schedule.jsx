import React from 'react';

function Schedule() {
  const schedules = [
    { priority: 'Priority', items: ['Review candidate applications (11:30 AM)'] },
    { priority: 'Other', items: ['Interview with candidates (10:30 AM)', 'Short meeting with product designer from IT Department (09:15 AM)'] },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-4">Upcoming Schedule</h3>
      {schedules.map((schedule, index) => (
        <div key={index} className="mb-4">
          <h4 className="font-semibold mb-2">{schedule.priority}</h4>
          <ul className="space-y-2">
            {schedule.items.map((item, idx) => (
              <li key={idx} className="text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button className="text-orange-500 font-semibold hover:underline">Create a New Schedule</button>
    </div>
  );
}

export default Schedule;
