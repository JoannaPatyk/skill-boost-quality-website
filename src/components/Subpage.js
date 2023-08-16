import React from 'react';
import Wrapper from '../assets/wrappers/Details';
import Banner from './Banner';
import Information from './Information';
import dot from '../assets/img/geometric.png';
import PropTypes from 'prop-types';

function Subpage({ title, description, icon }) {
    return (
        <Wrapper>
            <div className="img-container"></div>
            <div className="subpage-container">
                <div className="subpage-contents">
                    <img src={dot} className="dot" alt="" />
                    <h2 className="subpage-title">{title}</h2>
                    <p className="subpage-description">{description}</p>
                    <h3>Skontaktuj się ze mną aby uzyskać szczegółowe informację odnośnie oferty.</h3>
                    <button className="btn subpage-btn">kontakt</button>
                </div>
                <div className="subpage-icon">{icon}</div>
            </div>
            <Banner />
            <Information />
        </Wrapper>
    );
}

Subpage.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.string
};

export default Subpage;
