import styled from 'styled-components';

const Wrapper = styled.div`
    .values-container {
        min-height: 80vh;
        display: grid;
        grid-template-rows: 1fr 4fr;
        background-color: var(--secondary-200);
        box-shadow: 2px 2px 20px var(--secondary-300);
    }

    h1 {
        text-align: center;
        padding: 3rem;
    }

    span {
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
        height: 30vh;
        padding: 2rem;
        display: grid;
        gap: 30px;
        grid-template-rows: 0.5fr 4fr;
        box-shadow: 5px 5px 5px var(--black);
        border-radius: 30px;
        overflow: hidden;
    }

    .value-icon {
        position: absolute;
        bottom: -50px;
        right: -50px;
        font-size: 20rem;
        color: var(--secondary-100);
        opacity: 0.1;
    }

    h2 {
        width: 100%;
        padding-left: 1rem;
        line-height: 2.5;
        font-weight: 700;
        border-left: 3px solid var(--primary-300);
        text-transform: uppercase;
    }

    p {
        line-height: 1.8;
        letter-spacing: 0.02rem;
        font-weight: 400;
    }
`;

export default Wrapper;
