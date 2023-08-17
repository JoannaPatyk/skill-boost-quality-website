import React from 'react';
import Wrapper from '../assets/wrappers/Contact';

import SendMessage from '../components/SendMessage';
import Banner from '../components/Banner';
import Information from '../components/Information';

function Contact() {
    return (
        <Wrapper>
            <div className="contact-container">
                <div className="contact-wrapper">
                    <SendMessage />
                </div>
            </div>
            <Banner />
            <Information />
        </Wrapper>
    );
}

export default Contact;
