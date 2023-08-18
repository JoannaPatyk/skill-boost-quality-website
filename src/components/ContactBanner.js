import React from 'react';
import Wrapper from '../assets/wrappers/Banner';
import { HiOutlinePhone } from 'react-icons/hi';

function Banner() {
    return (
        <Wrapper>
            <div className="banner-container">
                <div className="banner-text">
                    <HiOutlinePhone className="banner-icon" />
                    <h1>
                        <span>Zadzwoń (+48) 000 000 000</span> ustalimy szczegóły współpracy!
                    </h1>
                </div>
            </div>
        </Wrapper>
    );
}

export default Banner;
