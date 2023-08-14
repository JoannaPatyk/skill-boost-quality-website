import React from 'react';
import Wrapper from '../assets/wrappers/ContactForm';
import SendMessage from '../components/SendMessage';
import imagePath from '../assets/img/building.jpg';

function ContactForm() {
    return (
        <Wrapper>
            <div className="contact-form-container" style={{ backgroundImage: `url('${imagePath}')` }}>
                <div className="form-container">
                    <SendMessage />
                </div>
            </div>
        </Wrapper>
    );
}

export default ContactForm;
