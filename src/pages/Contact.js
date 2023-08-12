import React from 'react';
import Wrapper from '../assets/wrappers/Contact';

function Contact() {
    return (
        <Wrapper>
            <div className="contact-container">
                <div className="contact-wrapper">
                    <form className="contact-form">
                        <h2>FORMULARZ KONTAKTOWY</h2>
                        <h3>
                            z chęcią odpowiem na <span>Twoje</span> pytania
                        </h3>
                        <input type="text" placeholder="Imię" />
                        <input type="email" placeholder="E-mail" />
                        <textarea placeholder="Wiadomość..."></textarea>
                        <div className="agreement">
                            <label className="form-control">
                                <input type="checkbox" id="checkbox" name="checkbox" />
                                <p>
                                    Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z ustawą o ochronie
                                    danych osobowych w związku z realizacją zgłoszenia.
                                </p>
                            </label>
                        </div>
                        <button className="btn" type="submit">
                            wyślij
                        </button>
                    </form>
                </div>
            </div>
        </Wrapper>
    );
}

export default Contact;
