import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './Login.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    useEffect(() => {
        AOS.init({ duration : 1000});
    }, []);

    const handlesSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempted:', {username, password});
        console.log('Login submitted:', { username, password });
        login({username});
        navigate('/dashboard');
    };

    return(
        <div className="login-container">
            <div className="card login-card" data-aos="fade-up">
            <h2>Login</h2>
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
                <div className="form-group mb-3">
                    <label htmlFor="password">Password:</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div className="input-group-append">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            onChange={() => setShowPassword(!showPassword)}
                        />
                        <label className="form-check-label" htmlFor="showPassword">Show</label>
                    </div>
                </div>
                <button type="submit" className="btn login-btn">Login</button>
            </form>
            <p className="register-link">
                Don't have an account? <Link to="/register">Register here</Link>
            </p>
            </div>
        </div>
    )
}

export default Login;
