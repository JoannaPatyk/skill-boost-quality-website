import React from 'react';
import Wrapper from '../assets/wrappers/Contact';
import SendMessage from '../components/SendMessage';
import Information from '../components/Information';
import ContactBanner from '../components/ContactBanner';

function Contact() {
    return (
        <Wrapper>
            <div className="contact-container">
                <div className="form-container">
                    <SendMessage />
                </div>
            </div>
            <ContactBanner />
            <Information />
        </Wrapper>
    );
}

export default Contact;
