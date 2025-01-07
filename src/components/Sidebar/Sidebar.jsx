import React from 'react';
import { FaHome, FaUsers, FaBuilding, FaCalendarWeek} from 'react-icons/fa';
import { MdWork, MdSchedule, MdSupport, MdSettings } from 'react-icons/md';

import "./Sidebar.css"
const Sidebar = () => {
  return (
    <div className="sidebar fixed top-0 left-0 flex flex-col h-screen w-64 bg-gray-900 bg-opacity-5 text-black p-5 shadow-2xl  transition-width duration-300">
      <div className="flex items-center gap-3 mb-8">
        <FaCalendarWeek size={30} className="text-black" />
        <h1 className="text-2xl font-bold hidden md:block">Vasitum</h1>
      </div>

      <nav className="flex flex-col gap-4">
        <a href="#" className="flex items-center gap-3 hover:text-orange-800 p-2 rounded">
          <FaHome size={20} /> <span className="hidden md:block">Dashboard</span>
        </a>
        <a href="#" className="flex items-center gap-3 hover:text-orange-800 p-2 rounded">
          <MdWork size={20} /> <span className="hidden md:block">Recruitment</span>
        </a>
        <a href="#" className="flex items-center gap-3 hover:text-orange-800 p-2 rounded">
          <MdSchedule size={20} /> <span className="hidden md:block">Schedule</span>
        </a>
        <a href="#" className="flex items-center gap-3 hover:text-orange-800 p-2 rounded">
          <FaUsers size={20} /> <span className="hidden md:block">Employee</span>
        </a>
        <a href="#" className="flex items-center gap-3 hover:text-orange-800 p-2 rounded">
          <FaBuilding size={20} /> <span className="hidden md:block">Department</span>
        </a>
      </nav>

      <div className="mt-auto">
        <a href="#" className="flex items-center gap-3 hover:text-orange-800 p-2 rounded">
          <MdSupport size={20} /> <span className="hidden md:block">Support</span>
        </a>
        <a href="#" className="flex items-center gap-3 hover:text-orange-800 p-2 rounded">
          <MdSettings size={20} /> <span className="hidden md:block">Settings</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
