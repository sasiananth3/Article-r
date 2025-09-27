import React from 'react';
import './Footer.css'; // Assuming you have a separate CSS file for footer styles

const Footer = () => {
    return (
        <footer>
            <section className="container">
                <p>© {new Date().getFullYear()} Quick Ride. All Rights Reserved.</p>
            </section>
        </footer>
    );
};

export default Footer;