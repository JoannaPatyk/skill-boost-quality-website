import React from 'react';
import { HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';
import { AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai';
import Wrapper from '../assets/wrappers/Details';

function Details() {
    return (
        <Wrapper>
            <div className="details-container">
                <div className="social-media">
                    <AiOutlineInstagram className="social-icon" />
                    <AiFillFacebook className="social-icon" />
                </div>
                <div className="contact-data-container">
                    <div className="contact-data">
                        <HiOutlinePhone className="icon" />
                        <p>(+48) 000 000 000</p>
                    </div>
                    <div className="contact-data">
                        <HiOutlineMail className="icon" />
                        <p>skill-boost-quality@gmail.com</p>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Details;
