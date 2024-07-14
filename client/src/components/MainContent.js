// src/components/MainContent.js
import React from 'react';
import PromptInput from './PromptInput';

function MainContent({ isSidebarOpen }) {
  return (
    <div className={`flex-grow flex flex-col ${isSidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300 font-sans`}>
      <div className="flex-grow p-4 overflow-y-auto">
        {/* Add main content here */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-4">
          <h2 className="text-lg font-bold mb-2">Obo Tutor</h2>
          <p className="text-gray-700">Welcome to Obo Tutor. Start a new conversation or select a past chat from the left.</p>
        </div>
      </div>
      <PromptInput />
    </div>
  );
}

export default MainContent;
