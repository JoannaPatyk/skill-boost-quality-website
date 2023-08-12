import styled from 'styled-components';

const Wrapper = styled.div`
    .contact-container {
        position: relative;
        width: 100%;
        min-height: 80vh;
        overflow: hidden;
        color: var(--black);
    }

    .contact-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .contact-form {
        height: 65vh;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h2 {
        margin: 0.5rem;
        font-weight: 500;
        text-align: center;
        font-family: var(--primary-fontFamily);
    }

    h3 {
        width: 45vw;
        font-weight: 400;
        letter-spacing: 0.15rem;
        padding: 0.5rem;
        text-align: center;
    }

    span {
        color: var(--primary-300);
        font-weight: 600;
    }

    input,
    textarea {
        width: 28vw;
        margin: 0.85rem 0;
        padding: 1rem;
        font-family: var(--primary-fontFamily);
        border: 1px solid var(--black);
        border-radius: 30px;
    }

    input::placeholder,
    textarea::placeholder {
        font-size: 1rem;
        font-family: var(--primary-fontFamily);
    }

    input:hover,
    textarea:hover {
        box-shadow: 0 0 1px 1px var(--secondary-300);
    }

    input {
        height: 4vh;
    }

    textarea {
        padding-top: 1rem;
        height: 18vh;
        margin-bottom: 1rem;
    }

    .agreement {
        display: flex;
        margin: 0.5rem 0;
    }

    form {
        display: grid;
        place-content: center;
    }

    .form-control {
        width: 28vw;
        font-size: 0.7rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
    }

    input[type='checkbox'] {
        -webkit-appearance: none;
        display: grid;
        place-content: center;
        appearance: none;
        width: 0.1rem;
        height: 0.1rem;
        color: var(--primary-300);
        border: 1px solid var(--black);
        border-radius: 50px;
    }

    input[type='checkbox']::before {
        content: '';
        width: 0.1rem;
        height: 0.1rem;
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
        transform: scale(0);
        transform-origin: bottom left;
    }

    input[type='checkbox']:checked::before {
        transform: scale(1);
    }

    input[type='checkbox']:checked {
        outline: max(2px, 0.15em) solid var(--primary-300);
        outline-offset: max(2px, 0.15em);
    }

    .btn {
        width: 20%;
    }
`;

export default Wrapper;
