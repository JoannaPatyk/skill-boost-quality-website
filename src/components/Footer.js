import React from 'react';
import Wrapper from '../assets/wrappers/Footer';
import { AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai';

function Footer() {
    return (
        <Wrapper>
            <div className="footer-container">
                <div className="footer-text">
                    <p>
                        <span>Skill Boost Quality </span>created by
                    </p>
                    <p>
                        <a href="https://joannapatyk.github.io/portfolio-joanna-patyk">JP</a> | Copyright © 2023 | All
                        rights reserved
                    </p>
                </div>

                <div className="social-media">
                    <a href="https://www.instagram.com" id="social-icon">
                        <AiOutlineInstagram />
                    </a>
                    <a href="https://www.facebook.com" id="social-icon">
                        <AiFillFacebook />
                    </a>
                </div>
            </div>
        </Wrapper>
    );
}

export default Footer;
