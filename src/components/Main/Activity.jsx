import React from 'react';

function Activity() {
  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-4">Recently Activity</h3>
      <p className="text-gray-700 mb-3">10:40 AM, Fri 10 Sept 2021</p>
      <p className="font-semibold">You Posted a New Job</p>
      <p className="text-gray-600 mb-4">Kindly check the requirements and terms of work to ensure everything is right.</p>
      <button className="text-blue-500 font-semibold hover:underline">See All Activity</button>
    </div>
  );
}

export default Activity;
