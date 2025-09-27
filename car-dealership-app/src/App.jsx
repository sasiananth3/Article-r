import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Blog from './components/Blog';
import AppRoutes from './routes/AppRoutes';
import './styles/main.css';

const App = () => {
    return (
        <Router>
            <Header />
            <Hero />
            <AppRoutes />
            <Blog />
            <Footer />
        </Router>
    );
};

export default App;