import React from 'react';

function Announcement() {
  const announcements = [
    { title: 'Outing schedule for every department', time: '5 Minutes ago' },
    { title: 'Meeting HR Department', time: 'Yesterday, 12:30 PM' },
    { title: 'IT Department need more talents for UX/UI Designer position', time: 'Yesterday, 03:15 AM' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-4">Announcement</h3>
      <ul>
        {announcements.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center border-b pb-3 mb-3 last:border-none last:pb-0 last:mb-0"
          >
            <p>{item.title}</p>
            <span className="text-gray-500 text-sm">{item.time}</span>
          </li>
        ))}
      </ul>
      <a href="#" className="text-blue-500 font-semibold hover:underline">See All Announcement</a>
    </div>
  );
}

export default Announcement;
