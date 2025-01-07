import React from 'react';

function Activity() {
  return (
    <div className="bg-blue-950 p-6 rounded-lg shadow">
      <h3 className="text-xl text-white  font-semibold mb-4">Recently Activity</h3>
      <p className="text-stone-400 mb-3">10:40 AM, Fri 10 Sept 2021</p>
      <p className="font-semibold text-white">You Posted a New Job</p>
      <p className="text-stone-400 mb-4">Kindly check the requirements and terms of work to ensure everything is right.</p>
      <button className="text-white  bg-orange-400 selection:font-semibold hover:underline p-2 rounded-sm">See All Activity</button>
    </div>
  );
}

export default Activity;
