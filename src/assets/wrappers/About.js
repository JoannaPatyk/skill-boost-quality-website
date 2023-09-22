import styled from 'styled-components';

const Wrapper = styled.div`
    .about-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: var(--black);
    }

    .backgroundImage {
        width: 50%;
        position: absolute;
        opacity: 0.05;
        z-index: -1;
    }

    .background-img-container {
        min-height: 55vh;
        width: 90vw;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .background-img-container h1 {
        margin-top: 1rem;
        font-weight: 300;
        font-size: 2.5rem;
        letter-spacing: var(--letterSpacing);
    }

    .img-container {
        height: 60vh;
        width: 60vh;
        margin: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
        overflow: hidden;
    }

    .portfolioImage {
        height: 110vh;
        z-index: 100;
    }

    hr {
        width: 65%;
        height: 2px;
        margin: 2rem 0 0.5rem;
    }

    .arrow {
        margin-top: 1.8rem;
        font-size: 2.5rem;
        animation: arrowDown 1.5s infinite;
    }

    .arrowIcon-btn {
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

    .about-description-container {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: var(--white);
    }

    .about-description {
        width: 50%;
        margin: 4rem;
        display: flex;
        gap: 40px;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        line-height: 1.8;
        letter-spacing: 0.05rem;
        text-align: justify;
        font-weight: 400;

        span {
            font-weight: 600;
        }
    }

    @media (max-width: 1485px) {
        .img-container {
            height: 55vh;
            width: 55vh;
        }

        .backgroundImage {
            width: 70%;
        }

        hr {
            width: 70%;
        }

        .about-description {
            width: 60%;
        }
    }

    @media (max-width: 900px) {
        .img-container {
            height: 50vh;
            width: 50vh;
        }

        .backgroundImage {
            width: 80%;
        }

        hr {
            width: 80%;
        }

        .about-description {
            width: 70%;
            font-size: 0.9rem;
        }
    }

    @media (max-width: 590px) {
        .img-container {
            height: 40vh;
            width: 40vh;
        }
    }

    @media (max-width: 430px) {
        .img-container {
            height: 35vh;
            width: 35vh;
        }
    }
`;

export default Wrapper;
