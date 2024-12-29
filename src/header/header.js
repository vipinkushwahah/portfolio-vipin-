import React from 'react';
import './header.css'
import { useState } from 'react';

import { Link, NavLink } from 'react-router-dom';

const HeaderMain = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <header className="header">
                <div className="header__container">
                    <div className="header__logo">
                        <Link to="/">Vipin</Link>
                    </div>
                    <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
                        <ul className="header__menu">
                            <li className="header__menu-item">
                                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                                    Home
                                </NavLink>
                            </li>
                            <li className="header__menu-item">
                                <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
                                    Resume
                                </NavLink>
                            </li>
                            <li className="header__menu-item">
                                <NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>
                                    Work
                                </NavLink>
                            </li>
                            <li className="header__menu-item">
                                <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
                                    Contact
                                </NavLink>
                            </li>
                            <li className="header__menu-item header__menu-item__hire">
                                <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
                                    Hire me
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <button
                        className="header__toggle"
                        aria-label="Toggle navigation"
                        onClick={toggleMenu}
                    >
                        ☰
                    </button>
                </div>
            </header>
        </div>
    );
};
export default HeaderMain;
