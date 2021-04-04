import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import avatar from '../../img/avatar.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <nav className="navbar__nav">
                <div className="navbar__profile">
                    <img src={avatar} alt="avatar" />
                </div>
                <ul className="navbar__navItems">
                    <li className="navbar__navItem">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="navbar__navItem">
                        <NavLink to="/about" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="navbar__navItem">
                        <NavLink to="/workExperience" exact activeClassName="active">
                            Work Experience
                        </NavLink>
                    </li>
                    <li className="navbar__navItem">
                        <NavLink to="/blogs" exact activeClassName="active">
                            Projects/Blogs
                        </NavLink>
                    </li>
                    <li className="navbar__navItem">
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <footer className="nav__footer">
                    <p>@2021 Lorem Ipsum</p>
                </footer>
            </nav>
        </div>
    )
}

export default Navbar
