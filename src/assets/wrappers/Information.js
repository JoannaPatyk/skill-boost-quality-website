import styled from 'styled-components';

const Wrapper = styled.div`
    .information-container {
        height: 45vh;
        width: 100%;
        background-color: var(--secondary-300);
    }

    .elements {
        height: 100%;
        width: 70%;
        margin: 0 auto;
        display: flex;
        gap: 50px;
        align-items: center;
        justify-content: center;
    }

    .mission {
        line-height: 2;
        border-right: 2px solid var(--white);
    }

    .mission span {
        font-weight: 600;
        color: var(--primary-100);
    }

    .mission,
    .data,
    .address {
        width: 40%;
        display: flex;
        gap: 10px;
        flex-direction: column;
    }

    h5 {
        font-weight: 300;
        padding-right: 2rem;
    }

    .data h2,
    .address h2 {
        padding: 1rem 0;
        margin: 1rem 0;
        border-bottom: 2px solid var(--white);
    }

    h2 {
        color: var(--primary-300);
        text-transform: uppercase;
    }
`;

export default Wrapper;
