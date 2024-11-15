import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';

function Registration() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const { register } = useAuth();

    const handlesSubmit = (e) => {
        e.preventDefault();
        console.log('Registration submitted:', { username, password });
        register({ username, password });
        navigate('/login');
    };

    return (
        <div className="login-container">
            <div className="card login-card" data-aos="fade-up">
                <h2 className="text-center mb-4">Registration</h2>
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
                    <button type="submit" className="btn btn-primary login-btn">Register</button>
                </form>
                <p className="register-link text-center mt-3">
                    Already have an account? <Link to="/login">Login here</Link>
                </p>
            </div>
        </div>
    );
}

export default Registration;