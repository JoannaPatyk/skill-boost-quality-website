import styled from 'styled-components';

const Wrapper = styled.div`
    .contact-form {
        min-height: 65vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .contact-form h1 {
        margin: 0.5rem;
        font-weight: 200;
        text-align: center;
        font-family: var(--primary-fontFamily);
    }

    .contact-form h3 {
        font-weight: 300;
        letter-spacing: 1px;
        padding: 0.5rem;
        text-align: center;
    }

    .contact-form span {
        color: var(--primary-300);
        font-size: 1.3rem;
        font-weight: 600;
    }

    input,
    textarea {
        width: 25vw;
        margin: 0.85rem 0;
        padding: 1rem;
        font-family: var(--primary-fontFamily);
        border: none;
        border-radius: 30px;
        background-color: var(--white);
    }

    input::placeholder,
    textarea::placeholder {
        font-size: 1rem;
        font-family: var(--primary-fontFamily);
    }

    input:hover,
    textarea:hover {
        box-shadow: 0 0 10px var(--secondary-300);
    }

    input {
        height: 4vh;
    }

    textarea {
        padding-top: 1rem;
        height: 18vh;
        margin-bottom: 1rem;
    }

    .checkbox {
        width: 80%;
        display: flex;
        gap: 30px;
        align-items: center;
        justify-content: center;
    }

    label {
        position: relative;
        padding: 1rem 3rem;
        font-size: 0.8rem;
        font-weight: 300;
        cursor: pointer;
    }

    label:before {
        content: '';
        width: 25px;
        height: 25px;
        margin: 0 1rem;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        background-color: var(--white);
        box-shadow:
            inset 0px 2px 3px 0px rgba(0, 0, 0, 0.3),
            0px 1px 0px 0px rgba(255, 255, 255, 0.8);
    }

    input[type='checkbox'] {
        display: none;
    }

    .checkbox label:before {
        border-radius: 5%;
    }

    input[type='checkbox']:checked + label:before {
        content: '✅';
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--primary-300);
    }

    .btn {
        width: 30%;
    }
`;

export default Wrapper;
