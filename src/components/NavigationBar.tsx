import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function NavigationBar() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  if (isAuthPage) {
    return (
      <div className="fixed top-0 left-0 right-0 bg-black p-4 flex justify-between items-center">
        <Link to="/" className="text-red-600 text-2xl font-bold">
          AcroConnect
        </Link>
        <div className="space-x-4">
          <Link
            to="/login"
            className={`px-4 py-2 rounded-lg ${
              location.pathname === '/login'
                ? 'bg-red-600 text-white'
                : 'text-white hover:text-red-600'
            }`}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className={`px-4 py-2 rounded-lg ${
              location.pathname === '/signup'
                ? 'bg-red-600 text-white'
                : 'text-white hover:text-red-600'
            }`}
          >
            Sign Up
          </Link>
        </div>
      </div>
    );
  }

  return null;
}