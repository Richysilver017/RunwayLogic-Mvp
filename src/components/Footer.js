import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">PLATFORM</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-pink-500">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-500">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-500">API</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-500">Documentation</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">RESOURCES</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-pink-500">Success Stories</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-500">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-pink-500">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-500">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-500">Terms</a></li>
            </ul>
          </div>
          <div>
            <p className="text-gray-600">© 2024 SmartPriceMarket. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

