import styled from 'styled-components';

const Wrapper = styled.div`
    .mission-container {
        position: relative;
        min-height: 60vh;
        width: 100%;
        color: var(--black);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .bg-image {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        opacity: 0.05;
    }

    .mission-container h1 {
        margin: 2rem 0;
    }

    .mission-container span {
        color: var(--secondary-100);
    }

    .mission-text {
        width: 70%;
        display: flex;
        gap: 50px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
    }

    .mission-text p:nth-of-type(1) {
        padding-left: 2rem;
        border-left: 4px solid var(--secondary-100);
    }
    .mission-text p:nth-of-type(2) {
        padding-right: 2rem;
        text-align: right;
        border-right: 4px solid var(--secondary-100);
    }
`;

export default Wrapper;
