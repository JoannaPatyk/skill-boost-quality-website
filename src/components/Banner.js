import React from 'react';
import Wrapper from '../assets/wrappers/Banner';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

function Banner() {
    return (
        <Wrapper>
            <div className="banner-container">
                <div className="banner-text">
                    <h1>
                        <span>Skontaktuj się</span> ze mną. Razem wypracujemy rozwiązanie!
                    </h1>
                    <MdKeyboardDoubleArrowRight className="banner-icon" />
                </div>
            </div>
        </Wrapper>
    );
}

export default Banner;
