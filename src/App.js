import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { AuthProvider } from './AuthContext';
import Registration from './Registration';
import Login from './Login';
import Dashboard from './Dashboard';
import Pengumuman from './Pengumuman';
import Quiz from './components/Quiz';
import ForumDiskusi from './components/ForumDiskusi';

function App() {
  return (
    <AuthProvider>
      <Router>
        <MainContent />
      </Router>
    </AuthProvider>
  );
}

function MainContent() {
  const location = useLocation();
  const showHeader = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="mt-5">
      {showHeader && <h1>EconoMinds</h1>}
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/pengumuman" element={<Pengumuman />} />
        <Route path="/forum-diskusi" element={<ForumDiskusi />} />
        <Route path="/" element={<Navigate to="/register" replace />} />
      </Routes>
    </div>
  );
}

export default App;