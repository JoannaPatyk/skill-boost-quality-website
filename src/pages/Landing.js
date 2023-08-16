import React from 'react';
import Wrapper from '../assets/wrappers/Landing';
import factory from '../assets/img/background-img.jpg';
import servicesTitles from '../utils/servicesTitles';
import Values from '../components/Values';
import Mission from '../components/Mission';
import Banner from '../components/Banner';
import Information from '../components/Information';
import ContactForm from '../components/ContactForm';

function Landing() {
    return (
        <Wrapper>
            <div className="landing-container">
                <div className="landing-background">
                    <img src={factory} alt="Przedsiębiorstwo" />
                    {servicesTitles.map(({ id, icon, text, cls }) => {
                        return (
                            <div key={id}>
                                {icon}
                                <div className={`dot ${cls}`}></div>
                                <h4 className={`${cls}-title`}>{text}</h4>
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
