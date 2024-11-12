import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { AuthProvider } from './AuthContext';
import Registration from './Registration';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="mt-5">
          <h1>EconoMinds</h1>
          <Routes>
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Navigate to="/register" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;