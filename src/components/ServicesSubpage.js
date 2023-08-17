import React from 'react';
import Wrapper from '../assets/wrappers/Details';
import Banner from './Banner';
import Information from './Information';
import dot from '../assets/img/geometric.png';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

function ServicesSubpage({ title, description, icon }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/contact');
        window.scrollTo(0, 0);
    };

    return (
        <Wrapper>
            <div className="img-container"></div>
            <div className="subpage-container">
                <div className="subpage-contents">
                    <img src={dot} className="dot" alt="" />
                    <h2 className="subpage-title">{title}</h2>
                    <p className="subpage-description">{description}</p>
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
    icon: PropTypes.string
};

export default ServicesSubpage;
