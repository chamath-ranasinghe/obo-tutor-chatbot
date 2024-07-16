// src/components/Header.js
import React from 'react';
import Logo from "../assets/squar logo-01.png"

function Header() {
  return (
    <header className="bg-white shadow-md w-full font-sans">
      <div className="container mx-auto p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
          <img src={Logo} alt="Chat GPT Logo" className="object-contain h-12 w-12" />
          <h1 className="text-xl font-bold">RoboticGen</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/sign-up" className="text-gray-700 hover:text-black"></a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
