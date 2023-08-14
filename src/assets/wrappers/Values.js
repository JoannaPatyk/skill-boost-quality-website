import styled from 'styled-components';

const Wrapper = styled.div`
    .values-container {
        min-height: 80vh;
        background-color: var(--secondary-300);
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
        margin: 2rem auto;
        display: flex;
        gap: 50px;
        justify-content: center;
    }

    .value {
        position: relative;
        width: 35%;
        height: 50vh;
        padding: 2rem;
        margin-bottom: 2rem;
        display: grid;
        gap: 30px;
        grid-template-rows: 0.5fr 4fr;
        justify-content: center;
        background-color: var(--primary-100);
        box-shadow: 5px 5px 10px var(--secondary-100);
        border-radius: 30px;
        overflow: hidden;
        transition: 0.5s;
        cursor: pointer;
    }

    .value-icon {
        position: absolute;
        bottom: -50px;
        right: -50px;
        font-size: 18rem;
        color: var(--primary-300);
        opacity: 0.2;
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
