import React from 'react';
import Wrapper from '../assets/wrappers/Details';
import Banner from './Banner';
import Information from './Information';
import backgroundImage from '../assets/img/geometric.png';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

function ServicesSubpage({ title, description, icon, cls }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/contact');
        window.scrollTo(0, 0);
    };

    return (
        <Wrapper>
            <div className={`img-container ${cls}`}></div>
            <div className="subpage-container">
                <div className="subpage-contents">
                    <img src={backgroundImage} className="dot" alt="Tło" />
                    <h2 className="subpage-title">{title}</h2>
                    <div className="subpage-description">{description}</div>
                    <h3>Skontaktuj się ze mną aby uzyskać szczegółowe informację odnośnie oferty.</h3>
                    <button className="btn subpage-btn" onClick={handleClick}>
                        kontakt
                    </button>
                </div>
                <div className="subpage-icon">{icon}</div>
            </div>
            <Banner />
            <Information />
        </Wrapper>
    );
}

ServicesSubpage.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.string,
    cls: PropTypes.string
};

export default ServicesSubpage;
