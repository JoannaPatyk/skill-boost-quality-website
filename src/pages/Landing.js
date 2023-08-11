import React from 'react';
import Wrapper from '../assets/wrappers/Landing';
import factory from '../assets/img/background-img.jpg';

function Landing() {
    return (
        <Wrapper>
            <div className="container">
                <div className="background">
                    <img src={factory} alt="Przedsiębiorstwo" />

                    <div className="dot washing"></div>
                    <h4 className="washing-title">audyt mycia</h4>

                    <div className="dot training"></div>
                    <h4 className="training-title">szkolenia</h4>

                    <div className="dot systems"></div>
                    <h4 className="systems-title">audyt systemów</h4>

                    <div className="dot expertise"></div>
                    <h4 className="expertise-title">ekspertyza</h4>

                    <div className="dot operations"></div>
                    <h4 className="operations-title">działanie firm</h4>
                </div>
            </div>
        </Wrapper>
    );
}

export default Landing;
