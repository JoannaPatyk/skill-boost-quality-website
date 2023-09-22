import React from 'react';

import Banner from '../components/Banner';
import Information from '../components/Information';

import Wrapper from '../assets/wrappers/About';
import backgroundImage from '../assets/img/geometric.png';
import portfolioImage from '../assets/img/men.jpg';
import { HiArrowLongDown } from 'react-icons/hi2';
import articles from '../utils/articlesAbout';

function About() {
    const arrowIcon = <HiArrowLongDown className="arrow" />;

    const handleButtonUp = () => {
        const threeQuarterWindowHeight = window.innerHeight * 0.75;
        window.scrollTo({
            top: threeQuarterWindowHeight,
            behavior: 'smooth'
        });
    };

    const displayDescription = articles.map(({ content, id }) => (
        <div key={id}>
            <p>{content}</p>
        </div>
    ));

    return (
        <Wrapper>
            <main className="about-container">
                <div className="background-img-container">
                    <div className="img-container">
                        <img src={portfolioImage} className="portfolioImage" alt="Zdjęcie profilowe" />
                    </div>
                    <h1>POZNAJMY SIĘ!</h1>
                    <button className="arrowIcon-btn" onClick={handleButtonUp}>
                        {arrowIcon}
                    </button>
                    <img src={backgroundImage} className="backgroundImage" alt="Tło" />
                </div>
                <hr />
                <div className="about-description-container">
                    <section className="about-description">{displayDescription}</section>
                </div>
            </main>
            <Banner />
            <Information />
        </Wrapper>
    );
}

export default About;
