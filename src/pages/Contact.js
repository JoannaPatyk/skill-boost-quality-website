import React from 'react';
import Wrapper from '../assets/wrappers/Contact';
import SendMessage from '../components/SendMessage';

function Contact() {
    return (
        <Wrapper>
            <div className="contact-container">
                <div className="contact-wrapper">
                    <SendMessage />
                </div>
            </div>
        </Wrapper>
    );
}

export default Contact;
