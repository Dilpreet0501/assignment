import React from 'react';
import StatsCards from './StatsCards';
import TotalStats from './TotalStats';
import Announcement from './Announcement';
import Activity from './Activity';
import Schedule from './Schedule';

function Dashboard() {
  return (
    <div className="p-6 space-y-6">
   
    

     
      <div className="grid lg:grid-cols-3 gap-6">
   
        
        <div className="lg:col-span-2 space-y-6">
        <StatsCards />
        <TotalStats />
          <Announcement />
        </div>

    
        <div className="space-y-6">
          <Activity />
          <Schedule />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;



