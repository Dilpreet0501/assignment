import React from 'react';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Header from './components/Header';
import Dashboard from './components/Main/Dashboard';
import "./App.css"
function App() {
  return (
    <div className="flex h-full bg-gray-100">
      <Sidebar />
      <div className=" display flex-1 flex flex-col ml-64">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
