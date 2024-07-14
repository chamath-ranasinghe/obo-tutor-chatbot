// src/components/Sidebar.js
import React from 'react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`text-white flex-shrink-0 ${isOpen ? 'w-64' : 'w-20'} transition-all duration-300 h-full font-sans`} style={{backgroundColor:"#042f47"}}>
      <div className="p-4 flex justify-between items-center">
        <h2 className={`text-xl font-bold ${isOpen ? 'block' : 'hidden'}`}>Past Chats</h2>
        <button onClick={toggleSidebar}>
          {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>
      <div className="overflow-y-auto">
        {/* Add your past chats here */}
        <ul>
          <li className="p-2 hover:bg-gray-700 cursor-pointer">Chat 1</li>
          <li className="p-2 hover:bg-gray-700 cursor-pointer">Chat 2</li>
          <li className="p-2 hover:bg-gray-700 cursor-pointer">Chat 3</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
