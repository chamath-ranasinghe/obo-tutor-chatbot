// src/components/PromptInput.js
import React from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

function PromptInput() {
  return (
    <div className="bg-white p-4 shadow-md flex items-center border-t border-gray-300 font-sans">
      <input 
        type="text" 
        placeholder="Type your prompt..." 
        className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="text-white p-2 rounded-r-lg hover:bg-blue-600" style={{backgroundColor:"#042f47"}}>
        <PaperAirplaneIcon className="h-6 w-6 transform -rotate-45" />
      </button>
    </div>
  );
}

export default PromptInput;
