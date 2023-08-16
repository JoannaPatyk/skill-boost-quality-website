import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Details from './components/Details';
import Menu from './components/Menu';
import Footer from './components/Footer';
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

import { MdKeyboardDoubleArrowUp } from 'react-icons/md';

function App() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            const windowHeight = window.innerHeight;
            const halfWindowHeight = windowHeight / 2;

            if (position > halfWindowHeight) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleButtonUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
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
                {showButton && (
                    <button id="btn-up" onClick={handleButtonUp}>
                        <MdKeyboardDoubleArrowUp className="btn-up-icon" />
                    </button>
                )}
            </div>
        </Router>
    );
}

export default App;
