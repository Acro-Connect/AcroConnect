import React from 'react';
import { Search, Bell, MessageSquare, UserCircle, Menu } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-black shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-red-600 text-2xl font-bold">AcroConnect</div>
            <div className="ml-4 relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-900 text-white pl-10 pr-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <button className="text-white hover:text-red-600">
              <Bell className="h-6 w-6" />
            </button>
            <button className="text-white hover:text-red-600">
              <MessageSquare className="h-6 w-6" />
            </button>
            <button className="text-white hover:text-red-600">
              <UserCircle className="h-6 w-6" />
            </button>
            <button className="text-white hover:text-red-600 md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}