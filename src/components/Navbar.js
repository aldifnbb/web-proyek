import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../pages/AuthContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaSignOutAlt, FaSignInAlt } from "react-icons/fa"; 
import "./Navbar.css";

const Navbar = () => {
    const { user, logout, isLoading } = useAuth();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = (e) => {
        e.stopPropagation();
        setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    useEffect(() => {
        // Effect to log when user changes
        console.log('User has changed:', user);
    }, [user]); // This effect runs when user state changes

    // Handle click outside to close dropdown
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest('.nav-item.dropdown')) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    if (isLoading) {
        return <div>Loading...</div>; // Tampilkan loading jika data belum siap
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-grey shadow sticky-top">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/" data-aos="fade-down">
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
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard" data-aos="fade-down">
                                Dashboard
                            </Link>
                        </li>
                        {/* Dropdown Menu for "Tentang Ekonomi" */}
                        <li className="nav-item dropdown" onClick={toggleDropdown}>
                            <a
                                className="nav-link dropdown-toggle"
                                href="#!"
                                role="button"
                                aria-expanded={isDropdownOpen ? "true" : "false"}
                                data-aos="fade-down"
                            >
                                Tentang Ekonomi
                            </a>
                            <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
                                <li>
                                    <Link className="dropdown-item" to="/ekonomi-sejarah">
                                        Sejarah Ekonomi
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/ekonomi-konsep">
                                        Konsep Ekonomi
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/ekonomi-perkembangan">
                                        Perkembangan Ekonomi
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/materi" data-aos="fade-down">
                                Materi
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/quiz" data-aos="fade-down">
                                Quiz
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/inspiratif" data-aos="fade-down">
                            Inspiratif
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" data-aos="fade-down">
                                Contact U
                            </Link>
                        </li>
                        <li className="nav-item d-flex align-items-center">
                            {user ? (
                                <>
                                    {user.username && (
                                        <h1 className="halo-message me-3" data-aos="fade-down">
                                            Halo, {user.username}
                                        </h1>
                                    )}
                                    <button
                                        className="btn logout-btn d-flex align-items-center"
                                        onClick={handleLogout}
                                        data-aos="fade-left"
                                    >
                                        <FaSignOutAlt className="me-1" /> Logout
                                    </button>
                                </>
                            ) : (
                                <Link
                                    to="/login"
                                    className="btn sign-in-btn d-flex align-items-center"
                                    data-aos="fade-left"
                                >
                                    <FaSignInAlt className="me-1" /> Sign In
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;