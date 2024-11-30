import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../pages/AuthContext'; // Import useAuth
import AOS from 'aos';
import 'aos/dist/aos.css';

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth(); // Menggunakan register dari AuthContext
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Periksa apakah username sudah ada
    const existingUser = storedUsers.find(user => user.username === formData.username);
    if (existingUser) {
      setError('Username sudah digunakan.');
    } else {
      // Menambahkan pengguna baru ke dalam array users
      storedUsers.push(formData);
      localStorage.setItem('users', JSON.stringify(storedUsers)); // Simpan ke localStorage
      register(formData); // Register melalui AuthContext
      navigate('/login'); // Arahkan ke halaman login setelah registrasi berhasil
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-section" data-aos="zoom-in">
        <div className="background-text">REGISTER</div>
        <div className="auth-container">
          <form className="auth-form" onSubmit={handleSubmit} data-aos="zoom-in">
            <h2 className="auth-title"><span>Register</span></h2>
            {error && <p className="auth-error">{error}</p>}
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="submit" className="auth-btn">Register</button>
            <p className="auth-switch">
              Sudah punya akun? <a href="/login">Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;