import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="container">
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    onClick={toggleNavbar}
                    aria-controls="navbarNav" 
                    aria-expanded={isNavbarOpen ? "true" : "false"} 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Beranda</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/materi">Materi</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/quiz">Quiz</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/diskusi">Diskusi</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pengumuman">Pengumuman</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/tugas">Tugas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/tentang">Tentang</Link>
                        </li>
                    </ul>
                </div>
                <form className="d-flex">
                    <input 
                        className="form-control me-1" 
                        type="search" 
                        placeholder="Cari materi..." 
                        aria-label="search" 
                    />
                </form>
            </div>
        </nav>
    );
};

export default Navbar;
