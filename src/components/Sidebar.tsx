import React from 'react';
import { Briefcase, Users, BookOpen } from 'lucide-react';

export function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-lg fixed left-0 h-screen pt-20">
      <div className="p-4">
        <div className="text-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="font-bold text-xl">John </h2>
          <p className="text-gray-600">Software engineer</p>
        </div>
        
        <div className="space-y-4">
          <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg">
            <Briefcase className="h-5 w-5" />
            <span>My Jobs</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg">
            <Users className="h-5 w-5" />
            <span>My Network</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg">
            <BookOpen className="h-5 w-5" />
            <span>Learning</span>
          </button>
        </div>
      </div>
    </div>
  );
}