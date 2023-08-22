import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Details from './components/Details';
import Menu from './components/Menu';
import Footer from './components/Footer';
import ScrollButton from './components/ScrollButton';
import Landing from './pages/Landing';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Expertise from './pages/subpage/Expertise';
import CompanyOperations from './pages/subpage/CompanyOperations';
import SystemsAudit from './pages/subpage/SystemsAudit';
import Training from './pages/subpage/Training';
import WashingAudit from './pages/subpage/WashingAudit';
import SystemOptimization from './pages/subpage/SystemOptimization';

function App() {
    return (
        <Router>
            <div className="App">
                <Details />
                <Menu />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="about" element={<About />} />
                    <Route path="services" element={<Services />} />
                    <Route path="expertise" element={<Expertise />} />
                    <Route path="company-operations" element={<CompanyOperations />} />
                    <Route path="system-optimization" element={<SystemOptimization />} />
                    <Route path="systems-audit" element={<SystemsAudit />} />
                    <Route path="training" element={<Training />} />
                    <Route path="washing-audit" element={<WashingAudit />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
            <ScrollButton />
        </Router>
    );
}

export default App;
