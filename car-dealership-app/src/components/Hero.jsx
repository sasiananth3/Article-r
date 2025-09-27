import React from 'react';

const Hero = () => {
    return (
        <section id="hero">
            <div className="container">
                <div className="hero-text">
                    <h1>Find Your Dream Drive Today.</h1>
                    <p>
                        Welcome to Gemini Auto. We offer a curated selection of high-quality, pre-owned luxury vehicles, backed by our commitment to trust and customer satisfaction.
                    </p>
                    <a href="#inventory" className="cta-button">View Inventory</a>
                </div>
                <div className="hero-image">
                    <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d" alt="A modern luxury sports car" />
                </div>
            </div>
        </section>
    );
};

export default Hero;