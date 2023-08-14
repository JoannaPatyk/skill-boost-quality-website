import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Details from './components/Details';
import Menu from './components/Menu';
import Landing from './pages/Landing';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

import Expertise from './pages/subpage/Expertise';
import OperationsCompanies from './pages/subpage/OperationsCompanies';
import SystemsAudit from './pages/subpage/SystemsAudit';
import Training from './pages/subpage/Training';
import WashingAudit from './pages/subpage/WashingAudit';

function App() {
    return (
        <Router>
            <div className="App">
                <Details />
                <Menu />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="about" element={<About />} />
                    <Route path="services" element={<Services />}>
                        <Route path="expertise" element={<Expertise />} />
                        <Route path="operations-companies" element={<OperationsCompanies />} />
                        <Route path="systems-audit" element={<SystemsAudit />} />
                        <Route path="training" element={<Training />} />
                        <Route path="washing-audit" element={<WashingAudit />} />
                    </Route>
                    <Route path="contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
