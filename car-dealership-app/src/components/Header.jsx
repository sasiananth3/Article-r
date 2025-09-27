import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you will create a separate CSS file for Header styles

const Header = () => {
    return (
        <header>
            <section className="container">
                <div className="logo">QUICK RIDE</div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/blog">Blog</Link>
                </nav>
            </section>
        </header>
    );
};

export default Header;