import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { NavigationBar } from './components/NavigationBar';
import { Sidebar } from './components/Sidebar';
import { Feed } from './components/Feed';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { Profile } from './components/Profile';

export default function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />
        <Route
          path="/feed"
          element={
            <div className="min-h-screen bg-gray-100">
              <Navbar />
              <div className="flex">
                <Sidebar />
                <main className="flex-1 ml-64">
                  <Feed />
                </main>
              </div>
            </div>
          }
        />
        <Route
          path="/profile"
          element={
            <div className="min-h-screen bg-gray-100">
              <Navbar />
              <Profile />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}