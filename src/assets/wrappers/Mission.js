import styled from 'styled-components';

const Wrapper = styled.div`
    .mission-container {
        min-height: 100vh;
        width: 100%;
        color: var(--black);
        display: flex;
        gap: 60px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .mission-title {
        display: flex;
        gap: 20px;
        align-items: center;
        justify-content: center;
    }

    .chickenImage {
        width: 28%;
        opacity: 0.8;
    }

    .backgroundImage {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        opacity: 0.03;
    }

    .mission-container h1 {
        width: 60%;
        margin: 2rem 0;
    }

    .mission-container span {
        color: var(--secondary-100);
    }

    .mission-text {
        width: 70%;
        display: flex;
        gap: 60px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 1.3rem;
        letter-spacing: 1px;
    }

    .mission-text h2 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        font-weight: 600;
        text-transform: uppercase;
    }

    .mission-text p {
        font-weight: 300;
    }

    .mission-text article:nth-of-type(1) {
        padding-left: 2rem;
        border-left: 4px solid var(--secondary-100);
    }
    .mission-text article:nth-of-type(2) {
        padding-right: 2rem;
        text-align: right;
        border-right: 4px solid var(--secondary-100);
    }

    @media (max-width: 1200px) {
        .chickenImage {
            width: 34%;
        }

        .mission-container h1 {
            font-size: 1.7rem;
        }

        .mission-text h2 {
            font-size: 1.3rem;
        }

        .mission-text p {
            font-size: 1.1rem;
        }
    }

    @media (max-width: 850px) {
        .chickenImage {
            width: 38%;
        }

        .mission-text {
            width: 80%;
            gap: 40px;
        }
    }

    @media (max-width: 750px) {
        .mission-container h1 {
            font-size: 1.5rem;
            margin: 1rem 0;
        }

        .mission-text h2 {
            font-size: 1.2rem;
        }

        .mission-text p {
            font-size: 1rem;
        }

        .mission-text {
            width: 90%;
            gap: 30px;
        }
    }

    @media (max-width: 505px) {
        .mission-container h1 {
            font-size: 1.2rem;
        }

        .mission-text h2 {
            font-size: 1.1rem;
        }

        .mission-text p {
            font-size: 0.9rem;
        }
    }
`;

export default Wrapper;
