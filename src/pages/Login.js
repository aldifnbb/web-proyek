import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from './AuthContext';
import './Login.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoMdEye, IoMdEyeOff } from "react-icons/io"; // Importing eye icons

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth(); // Destructure login from useAuth

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Login attempted:', { username, password });
        try {
            await login({ username, password }); // Added password for login
            navigate('/dashboard');
        } catch (error) {
            console.error("Login failed:", error);
            // Optionally, handle error with a state or alert
        }
    };

    return (
        <div className="login-container">
            <div className="card login-card" data-aos="fade-up">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}> {/* Corrected handlesSubmit to handleSubmit */}
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
                            {showPassword ? <IoMdEyeOff /> : <IoMdEye />} {/* Use imported icons */}
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
