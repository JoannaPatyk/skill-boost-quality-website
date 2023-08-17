import React from 'react';
import Wrapper from '../assets/wrappers/SendMessage';

function SendMessage() {
    return (
        <Wrapper>
            <form className="contact-form">
                <h1>FORMULARZ KONTAKTOWY</h1>
                <h3>
                    z chęcią <span>odpowiem na Twoje</span> pytania
                </h3>
                <input type="text" placeholder="Imię" />
                <input type="email" placeholder="E-mail" />
                <textarea placeholder="Treść wiadomości"></textarea>
                <div className="agreement">
                    <label className="form-control" htmlFor="checkbox">
                        <input type="checkbox" id="checkbox" name="checkbox" />
                        <p>
                            Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z ustawą o ochronie danych
                            osobowych w związku z realizacją zgłoszenia.
                        </p>
                    </label>
                </div>
                <button className="btn" type="submit">
                    wyślij
                </button>
            </form>
        </Wrapper>
    );
}

export default SendMessage;
