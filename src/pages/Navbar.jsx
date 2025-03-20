import { Link } from 'react-router-dom';


export default function Navbar() {
return (
<div className={Navbar}>
    {/* Navbar Start */}
    <div className="container-fluid bg-primary">
        <div className="container">
            <nav className="navbar navbar-dark navbar-expand-lg py-0">
                <a href="index.html" className="navbar-brand">
                    <h1 className="text-white fw-bold d-block">Dora<span className="text-secondary">Infotech</span> </h1>
                </a>
                <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse bg-transparent" id="navbarCollapse">
                    <div className="navbar-nav ms-auto mx-xl-auto p-0">
                        <Link to='/' className="nav-item nav-link active text-secondary">Home</Link>
                        <Link to="/about" className="nav-item nav-link">About</Link>
                        
                        <div className="nav-item dropdown">
                            <div to={"/services"} className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</div>
                            <div className="dropdown-menu rounded">
                                <a href="#" className="dropdown-item">Printer Services</a>
                                <a href="#" className="dropdown-item">Laptop Services</a>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu rounded">
                                <Link to='/blog' className='dropdown-item'>Blog </Link>
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
)
}