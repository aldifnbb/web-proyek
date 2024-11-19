import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './Login.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(''); 
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const handlesSubmit = (e) => {
        e.preventDefault();

        const storedUserData = JSON.parse(localStorage.getItem('registeredUser'));

        if (username.trim() === '') {
            setError('Username cannot be empty');
            return;
        }
        if (password.trim() === '') {
            setError('Password cannot be empty');
            return;
        }

        if (storedUserData && username === storedUserData.username && password === storedUserData.password) {
            console.log('Login successful:', { username });
            setError('');
            navigate('/dashboard');
        } else {
            setError('Username atau password salah. Silahkan coba lagi.');

            setTimeout(() => {
                setError('');
            }, 1500); 
        }
    };

    return (
        <div className="login-container">
            <div className="card login-card" data-aos="fade-up">
                <h2>Login</h2>
                {error && <div className="alert alert-danger">{error}</div>} 
                <form onSubmit={handlesSubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            className="form-control"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group mb-3 password-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span
                            className="password-toggle"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-eye-off"
                                >
                                    <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20.5a10.94 10.94 0 0 1-5.94-2.06m11.88-5.88A10.94 10.94 0 0 0 12 3.5a10.94 10.94 0 0 0-5.94 2.06M3 3l18 18"></path>
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-eye"
                                >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                            )}
                        </span>
                    </div>
                    <button type="submit" className="btn login-btn">Login</button>
                </form>
                <p className="register-link">
                    Don't have an account? <Link to="/register">Register here</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
