"use client"
import Link from 'next/link';
import { useEffect } from 'react';
import React from 'react';

const Navbar = () => {
    useEffect(() => {
        // Ensure Bootstrap JS is loaded if necessary
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#435E55FF" }}>
        <div class="container-fluid">
        <Link href="/" className="navbar-brand" style={{ fontSize: "30px", color: "white" }}>
                    <i className="fas fa-heart text-danger"></i> ConnectSoulmate
                </Link>          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
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

export default Navbar;
