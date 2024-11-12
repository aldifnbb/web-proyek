import React from "react";

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">Ekonomi Kelas 11</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" href="#">Beranda</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Materi</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Latihan Soal</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Diskusi</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Tentang</a></li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Cari materi..." aria aria-label="search"/>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;