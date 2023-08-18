import styled from 'styled-components';

const Wrapper = styled.div`
    .values-container {
        position: relative;
        min-height: 80vh;
        display: grid;
        grid-template-rows: 0.5fr 4fr;
        background-color: var(--secondary-200);
        box-shadow: 1px 1px 20px 5px var(--secondary-300);
    }

    .values-container h1 {
        text-align: center;
        padding: 3rem;
        letter-spacing: 1px;
    }

    .values-container span {
        color: var(--primary-300);
    }

    .values {
        width: 70%;
        margin: 0 auto;
        margin-bottom: 4rem;
        display: grid;
        grid-template-columns: 2fr 2fr;
        place-items: center;
        gap: 50px;
        justify-content: center;
        align-items: center;
    }

    .value {
        position: relative;
        width: 100%;
        height: 35vh;
        padding: 2rem;
        display: grid;
        gap: 30px;
        grid-template-rows: 0.5fr 4fr;
        box-shadow: 2px 2px 5px 3px var(--black);
        border-radius: 30px;
        overflow: hidden;
        opacity: 0;
        transform: translateY(50px);
        transition:
            opacity 0.5s ease,
            transform 0.5s ease;
    }

    .visible {
        opacity: 1;
        transform: translateY(0);
    }

    .value-icon {
        position: absolute;
        bottom: -50px;
        right: -50px;
        font-size: 25rem;
        color: var(--secondary-100);
        opacity: 0.2;
    }

    .value h2 {
        width: 100%;
        padding-left: 1rem;
        line-height: 2.5;
        font-weight: 700;
        letter-spacing: 1px;
        border-left: 4px solid var(--primary-300);
        text-transform: uppercase;
    }

    .value p {
        width: 80%;
        line-height: 1.8;
        letter-spacing: 1px;
        font-weight: 400;
        text-align: justify;
    }
`;

export default Wrapper;
