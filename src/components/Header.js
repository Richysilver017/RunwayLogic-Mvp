import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-pink-500">SmartPriceMarket</div>
        <ul className="flex space-x-4">
          <li><a href="#features" className="text-gray-600 hover:text-pink-500">Features</a></li>
          <li><a href="#pricing" className="text-gray-600 hover:text-pink-500">Pricing</a></li>
          <li><a href="#" className="text-gray-600 hover:text-pink-500">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

