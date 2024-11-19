import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../pages/AuthContext";
import AOS from "aos";
import "aos/dist/aos.css";
import './Navbar.css';

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    React.useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-grey shadow sticky-top">
            <div className="container">
                {/* Brand/Logo */}
                <Link className="navbar-brand fw-bold text-primary" to="/" data-aos="fade-down">
                    Ekonomi Kelas 11
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    aria-expanded={isOpen}
                    onClick={toggleNavbar}
                    aria-label="Toggle navigation"
                    style={{
                        border: "none",
                        outline: "none",
                    }}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {[ 
                            { path: "/dashboard", label: "Home" },
                            { path: "/materi", label: "Materi" },
                            { path: "/tugas", label: "Tugas" },
                            { path: "/quiz", label: "Quiz" },
                            { path: "/pengumuman", label: "Pengumuman" },
                            { path: "/forum-diskusi", label: "Diskusi" },
                        ].map((link, idx) => (
                            <li className="nav-item" key={idx}>
                                <Link
                                    className="nav-link"
                                    to={link.path}
                                    data-aos="fade-down"
                                    style={{
                                        color:"#ffff",
                                        textDecoration:"none",
                                        fontWeight:"bold"

                                        
                                    }}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}

                        {user && (
                            <li className="nav-item d-flex align-items-center ms-lg-3 mt-2 mt-lg-0" data-aos="fade-down">
                                <span
                                    className="nav-link"
                                    style={{
                                        fontFamily: "'Caveat', cursive",
                                        fontOpticalSizing: "auto",
                                        fontSize: "20px",
                                        fontStyle: "normal",
                                        color: "#ffc107",
                                        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
                                    }}
                                >
                                    Halo, <strong>{user.username}</strong>!
                                </span>
                            </li>
                        )}

                        <li className="nav-item">
                            <button
                                className="btn btn-outline-danger fw-semibold ms-lg-3 mt-2 mt-lg-0"
                                onClick={handleLogout}
                                data-aos="fade-down"
                            >
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
