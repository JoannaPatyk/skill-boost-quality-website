import React from 'react';
import Wrapper from '../assets/wrappers/Landing';
import factoryImage from '../assets/img/bg.jpg';

import Values from '../components/Values';
import Mission from '../components/Mission';
import Banner from '../components/Banner';
import Information from '../components/Information';
import ContactForm from '../components/ContactForm';
import ContactBanner from '../components/ContactBanner';
import SlideInAnimation from '../components/SlideInAnimation';

import servicesTitles from '../utils/servicesTitles';
import { Link } from 'react-router-dom';

function Landing() {
    const text = `Smakuj sukces razem z nami, z pasją tworzymy nowoczesne rozwiązania dla branży spożywczej...`;

    return (
        <Wrapper>
            <div className="landing-container">
                <div className="landing-background">
                    <img src={factoryImage} className="factoryImage" alt="Przedsiębiorstwo" />
                    <div className="landing-title">
                        <h1>
                            <SlideInAnimation text={text} />
                        </h1>
                    </div>
                    {servicesTitles.map(({ id, icon, text, to, cls }) => {
                        return (
                            <div key={id}>
                                {icon}
                                <Link to={to}>
                                    <div className={`dot ${cls}`}>
                                        <h4 className={`${cls}-title`}>{text}</h4>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
                <Banner />
                <Mission />
                <Values />
                <ContactForm />
                <ContactBanner />
                <Information />
            </div>
        </Wrapper>
    );
}

export default Landing;
