import React from 'react';
import Wrapper from '../assets/wrappers/ContactForm';
import SendMessage from '../components/SendMessage';

function ContactForm() {
    return (
        <Wrapper>
            <div className="contact-form-container">
                <div className="form-container">
                    <SendMessage />
                </div>
            </div>
        </Wrapper>
    );
}

export default ContactForm;
