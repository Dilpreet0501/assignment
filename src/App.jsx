import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Main/Dashboard';

function App() {
  return (
    <div className="flex h-full bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-64">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
