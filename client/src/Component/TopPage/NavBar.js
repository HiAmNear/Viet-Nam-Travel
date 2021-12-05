import react, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {

        return (
            <div className=' bg-black fixed-top '>
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg navbar-dark d-none d-lg-block" style={{ zIndex: 2000 }}>
                    <div className="container-fluid">
                        {/* Navbar brand */}
                        <a className="navbar-brand nav-link" target="_blank" >
                            <strong >TRAVELLER</strong>
                        </a>
                        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01" aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarExample01">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item active color">
                                    <Link to="/" className="nav-link " aria-current="page" >Home</Link>
                                </li>
                                <li className="nav-item active color">
                                    <Link to="/SignIn" className="nav-link " aria-current="page"  >Login</Link>
                                </li>

                            </ul>
                            <ul className="navbar-nav d-flex flex-row">
                                {/* Icons */}
                                <li className="nav-item me-3 me-lg-0">
                                    <a className="nav-link" href="https://www.youtube.com/" rel="nofollow" target="_blank">
                                        <i className="fab fa-youtube" />
                                    </a>
                                </li>
                                <li className="nav-item me-3 me-lg-0">
                                    <a className="nav-link" href="https://www.facebook.com/" rel="nofollow" target="_blank">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                </li>
                                <li className="nav-item me-3 me-lg-0">
                                    <a className="nav-link" href="https://twitter.com/?lang=vi" rel="nofollow" target="_blank">
                                        <i className="fab fa-twitter" />
                                    </a>
                                </li>


                            </ul>
                        </div>
                    </div>
                </nav>
                {/* Navbar */}
            </div>
        )
    }
}
export default NavBar;