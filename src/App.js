import React from 'react';
import Dashboard from './pages/dashboard';
import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import EkonomiSejarah from './pages/Sejarah';
import Contact from './pages/Contact';
import EkonomiKonsep from './pages/Konsep';
import Materi from './pages/Materi';
import Bab1 from "./pages/Bab1";
import Bab2 from "./pages/Bab2";
import Bab3 from "./pages/Bab3";
import Bab4 from "./pages/Bab4";
import Bab5 from "./pages/Bab5";
import Quiz from './pages/Quiz';
import Pengumuman from './pages/Pengumuman';
import Inspiratif from './pages/Inspiratif';
import { AuthProvider, useAuth } from './pages/AuthContext';
import { Routes, Route, Navigate } from 'react-router-dom';
import EkonomiPerkembangan from './pages/Perkembangan';

function PrivateRoute({ children }) {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return <div>Loading...</div>;  // Menunggu hingga state user terdeteksi
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

function App() {
    return (
        <AuthProvider>
            <div className="page-container">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Navigate to="/dashboard" replace />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    <Route path="/ekonomi-sejarah" element={<PrivateRoute><EkonomiSejarah /></PrivateRoute>} />
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/ekonomi-konsep" element={<PrivateRoute><EkonomiKonsep /></PrivateRoute>} />
                    <Route path="/ekonomi-perkembangan" element={<PrivateRoute><EkonomiPerkembangan /></PrivateRoute>} />
                    <Route path="/materi" element={<PrivateRoute><Materi /></PrivateRoute>} />
                    <Route path="/bab1" element={<Bab1 />} />
                    <Route path="/bab2" element={<Bab2 />} />
                    <Route path="/bab3" element={<Bab3 />} />
                    <Route path="/bab4" element={<Bab4 />} />
                    <Route path="/bab5" element={<Bab5 />} />
                    <Route path="/quiz" element={<PrivateRoute><Quiz /></PrivateRoute>} />
                    <Route path="/pengumuman" element={<PrivateRoute><Pengumuman /></PrivateRoute>} />
                    <Route path="/inspiratif" element={<PrivateRoute><Inspiratif /></PrivateRoute>} />
                </Routes>
            </div>
        </AuthProvider>
    );
}

export default App;
