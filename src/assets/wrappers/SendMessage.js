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
        letter-spacing: 0.5px;
        padding: 0.5rem;
        text-align: center;
    }

    .contact-form span {
        color: var(--primary-300);
        font-size: 1.3rem;
        font-weight: 600;
        filter: drop-shadow(1px 1px var(--primary-100));
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
        padding: 1rem 0 1rem 3.5rem;
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
        content: 'X';
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
        font-size: 20px;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--primary-100);
    }

    .btn {
        width: 30%;
    }

    @media (max-width: 1450px) {
        input,
        textarea {
            width: 30vw;
        }
    }

    @media (max-width: 1080px) {
        input,
        textarea {
            width: 38vw;
        }

        .contact-form h1 {
            font-size: 1.8rem;
        }

        .contact-form h3 {
            font-size: 1.1rem;
        }

        .contact-form span {
            font-size: 1.2rem;
        }
    }

    @media (max-width: 890px) {
        input,
        textarea {
            width: 42vw;
        }
    }

    @media (max-width: 790px) {
        input,
        textarea {
            width: 52vw;
        }

        .contact-form h1 {
            font-size: 1.5rem;
        }

        .contact-form h3 {
            font-size: 1rem;
            padding: 0;
        }

        .contact-form span {
            font-size: 1.1rem;
        }

        input::placeholder,
        textarea::placeholder {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 490px) {
        input,
        textarea {
            width: 60vw;
        }

        .contact-form h1 {
            font-size: 1.3rem;
        }

        .contact-form h3 {
            font-size: 0.8rem;
        }

        .contact-form span {
            font-size: 0.9rem;
        }

        label {
            font-size: 0.7rem;
        }

        input::placeholder,
        textarea::placeholder {
            font-size: 0.8rem;
        }

        .btn {
            width: 40%;
        }
    }
`;

export default Wrapper;
