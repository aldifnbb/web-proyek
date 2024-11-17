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
import Bab1 from "./pages/Bab1";
import Bab2 from "./pages/Bab2";
import Bab3 from "./pages/Bab3";
import Bab4 from "./pages/Bab4";
import Bab5 from "./pages/Bab5";

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
        <Route path="/materi" element={<Materi />} />
        <Route path="/bab1" element={<Bab1 />} />
        <Route path="/bab2" element={<Bab2 />} />
        <Route path="/bab3" element={<Bab3 />} />
        <Route path="/bab4" element={<Bab4 />} />
        <Route path="/bab5" element={<Bab5 />} />
      </Routes>
    </div>
  );
}

export default App;
