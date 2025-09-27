import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Blog from '../components/Blog';

const AppRoutes = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Hero} />
                <Route path="/blog" component={Blog} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default AppRoutes;