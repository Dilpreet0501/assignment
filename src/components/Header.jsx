import React from 'react';
import { FiSearch, FiBell, FiMessageCircle, FiChevronDown } from 'react-icons/fi'; // Icons from React Icons

const Header = () => {
  return (
    <header className="bg-white shadow-md flex justify-between items-center px-4 py-3 md:px-6">
     

  
      <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-4 py-2">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent focus:outline-none text-gray-600 placeholder-gray-400 w-60"
        />
        <button className="text-gray-500 hover:text-gray-700">
          <FiSearch className="w-5 h-5" />
        </button>
      </div>

      
      <div className="flex items-center space-x-4">
       
        <button className="relative text-gray-600 hover:text-gray-800">
          <FiBell className="w-6 h-6" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </button>

       
        <button className="relative text-gray-600 hover:text-gray-800">
          <FiMessageCircle className="w-6 h-6" />
          <span className="absolute top-0 right-0 bg-blue-500 text-white text-xs rounded-full px-1">
            5
          </span>
        </button>

        
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-grey-300 border-2 border-yellow-500">
            <img
              src="./avatar.jpg"
              alt="User Avatar"
              className="w-full h-full rounded-full "
            />
          </div>
          <button className="text-gray-600 hover:text-gray-800">
            <FiChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

