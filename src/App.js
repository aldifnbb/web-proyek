import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { AuthProvider } from './pages/AuthContext';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Materi from './pages/Materi';
import Pengumuman from './pages/Pengumuman';
import Quiz from './pages/Quiz';
import ForumDiskusi from './pages/ForumDiskusi';

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
    <div>
      {showHeader && <h1>EconoMinds</h1>}
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/materi" element={<Materi/>} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/pengumuman" element={<Pengumuman />} />
        <Route path="/forum-diskusi" element={<ForumDiskusi />} />
        <Route path="/" element={<Navigate to="/register" replace />} />
      </Routes>
    </div>
  );
}

export default App;