import React from 'react';

import Banner from '../components/Banner';
import Information from '../components/Information';

import Wrapper from '../assets/wrappers/About';
import backgroundImage from '../assets/img/geometric.png';
import portfolioImage from '../assets/img/men.jpg';

import { HiArrowLongDown } from 'react-icons/hi2';
import sections from '../utils/sectionsAbout';

function About() {
    const arrowIcon = <HiArrowLongDown className="arrow" />;

    return (
        <Wrapper>
            <div className="about-container">
                <div className="background-img-container">
                    <div className="img-container">
                        <img src={portfolioImage} className="portfolioImage" alt="Zdjęcie profilowe" />
                    </div>
                    <h2>POZNAJMY SIĘ!</h2>
                    {arrowIcon}
                    <img src={backgroundImage} className="backgroundImage" alt="Tło" />
                </div>
                <hr />
                <div className="about-description-container">
                    <section className="about-description">
                        {sections.map(({ content, id }) => (
                            <>
                                <p key={id}>{content}</p>
                            </>
                        ))}
                    </section>
                </div>
            </div>
            <Banner />
            <Information />
        </Wrapper>
    );
}

export default About;
