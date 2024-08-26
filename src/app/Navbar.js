import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg text-white p-3 pt-3 pb-3" style={{ backgroundColor: "#435E55FF" }}>
            <div className="container-fluid">
                <Link href="/" className="navbar-brand text-white" style={{ fontSize: "30px" }}>
                    <i className="fas fa-heart text-danger"></i> ConnectSoulmate
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ fontSize: "20px" }}>
                        <li className="nav-item">
                            <Link href="/general" className="nav-link text-white">
                                <i className="fas fa-user-plus"></i> General Report
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/revenue" className="nav-link text-white">
                                <i className="fas fa-question-circle"></i> Revenue Report
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
