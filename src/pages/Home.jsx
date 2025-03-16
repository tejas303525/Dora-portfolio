import React from 'react';

export default function Home() {
    return (
        <div>
            {/* Topbar Start */}
            <div className="container-fluid bg-light-blue py-2">
                <div className="container d-flex justify-content-between align-items-center">
                    <h1 className="text-white">DoraInfotech</h1>
                    <div className="top-link d-flex align-items-center">
                        <a href="#" className="btn btn-sm-square rounded-circle me-2">
                            <i className="fab fa-facebook-f text-primary"></i>
                        </a>
                        <a href="#" className="btn btn-sm-square rounded-circle me-2">
                            <i className="fab fa-twitter text-primary"></i>
                        </a>
                        <a href="#" className="btn btn-sm-square rounded-circle me-2">
                            <i className="fab fa-instagram text-primary"></i>
                        </a>
                        <a href="#" className="btn btn-sm-square rounded-circle">
                            <i className="fab fa-linkedin-in text-primary"></i>
                        </a>
                    </div>
                </div>
            </div>
            {/* Topbar End */}

            {/* Navbar Start */}
            <div className="container-fluid bg-primary">
                <div className="container">
                    <nav className="navbar navbar-dark navbar-expand-lg py-0">
                        <a href="#" className="navbar-brand">
                            <h1 className="text-white fw-bold">Dora<span className="text-secondary">InfoTech</span></h1>
                        </a>
                        <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse bg-transparent" id="navbarCollapse">
                            <div className="navbar-nav ms-auto mx-xl-auto p-0">
                                <a href="#" className="nav-item nav-link active text-secondary">Home</a>
                                <a href="#" className="nav-item nav-link">About</a>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</a>
                                    <div className="dropdown-menu rounded">
                                        <a href="#" className="dropdown-item">Printer Services</a>
                                        <a href="#" className="dropdown-item">Laptop Services</a>
                                    </div>
                                </div>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu rounded">
                                        <a href="#" className="dropdown-item">Our Blog</a>
                                        <a href="#" className="dropdown-item">Our Team</a>
                                        <a href="#" className="dropdown-item">Testimonials</a>
                                    </div>
                                </div>
                                <a href="#" className="nav-item nav-link">Contact</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* Navbar End */}
        </div>
    );
}


