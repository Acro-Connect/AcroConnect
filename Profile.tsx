import React from 'react';
import { MapPin, Briefcase, Calendar, Link as LinkIcon, Mail, Phone, Edit } from 'lucide-react';

export function Profile() {
  return (
    <div className="max-w-4xl mx-auto pt-24 px-4">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Cover Image */}
        <div className="h-48 bg-gradient-to-r from-red-500 to-red-700"></div>
        
        {/* Profile Info */}
        <div className="relative px-6 pb-6">
          <div className="flex justify-between items-end">
            <div className="-mt-16">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white"
              />
            </div>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-700">
              <Edit className="h-4 w-4" />
              <span>Edit Profile</span>
            </button>
          </div>
          
          <div className="mt-4">
            <h1 className="text-3xl font-bold text-gray-900">John Doe</h1>
            <p className="text-xl text-gray-600">Senior Software Engineer</p>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <Briefcase className="h-5 w-5" />
                <span>Tech Solutions Inc.</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="h-5 w-5" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Calendar className="h-5 w-5" />
                <span>Joined January 2024</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="h-5 w-5" />
                <span>john.doe@example.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <LinkIcon className="h-5 w-5" />
                <a href="#" className="text-red-600 hover:text-red-700">portfolio.com</a>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">About</h2>
            <p className="text-gray-600">
              Passionate software engineer with over 8 years of experience in full-stack development.
              Specialized in React, Node.js, and cloud technologies. Always eager to learn and share
              knowledge with the community.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Node.js', 'AWS', 'Docker', 'GraphQL'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}