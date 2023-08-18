import React from 'react';
import Wrapper from '../assets/wrappers/Landing';
import factoryImage from '../assets/img/bg.jpg';

import Values from '../components/Values';
import Mission from '../components/Mission';
import Banner from '../components/Banner';
import Information from '../components/Information';
import ContactForm from '../components/ContactForm';
import SlideInAnimation from '../components/SlideInAnimation';

import servicesTitles from '../utils/servicesTitles';
import { Link } from 'react-router-dom';

function Landing() {
    const text = 'Jesteśmy niezastąpionym partnerem dla firm branży spożywczej dostarczającym szeroki zakres usług';

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
                <Values />
                <Mission />
                <ContactForm />
                <Banner />
                <Information />
            </div>
        </Wrapper>
    );
}

export default Landing;
