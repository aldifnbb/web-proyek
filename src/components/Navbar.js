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
                <Link className="navbar-brand fw-bold text-primary" to="/" data-aos="fade-down">
                    Econominds
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
        { path: "/quiz", label: "Quiz" },
        { path: "/pengumuman", label: "Pengumuman" },
        { path: "/forum-diskusi", label: "Diskusi" },
        { path: "/inspiratif", label: "Inspiratif" },
    ].map((link, idx) => (
        <li className="nav-item" key={idx}>
            <Link
                className="nav-link"
                to={link.path}
                data-aos="fade-down"
            >
                {link.label}
            </Link>
        </li>
    ))}
</ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
