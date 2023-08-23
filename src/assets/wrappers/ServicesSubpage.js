import styled from 'styled-components';

const Wrapper = styled.div`
    .subpage-container {
        position: relative;
        min-height: 90vh;
        background-color: var(--white);
    }

    .img-container {
        position: relative;
        min-height: 45vh;
        background-attachment: fixed;
        background-position: bottom;
        background-repeat: no-repeat;
        background-size: auto;
        z-index: 10;
        filter: grayscale(95%) blur(0.5px);
    }

    .training {
        background-image: url('https://github.com/JoannaPatyk/skill-boost-quality-website/blob/main/src/assets/img/training-M.jpg?raw=true');
    }

    .operations {
        background-image: url('https://github.com/JoannaPatyk/skill-boost-quality-website/blob/main/src/assets/img/operations-M.jpg?raw=true');
    }

    .optimization {
        background-image: url('https://github.com/JoannaPatyk/skill-boost-quality-website/blob/main/src/assets/img/optimization-M.jpg?raw=true');
    }

    .expertise {
        background-image: url('https://github.com/JoannaPatyk/skill-boost-quality-website/blob/main/src/assets/img/expertise-M.jpg?raw=true');
    }

    .washing {
        background-image: url('https://github.com/JoannaPatyk/skill-boost-quality-website/blob/main/src/assets/img/washing-M.jpg?raw=true');
    }

    .systems {
        background-image: url('https://github.com/JoannaPatyk/skill-boost-quality-website/blob/main/src/assets/img/systems-M.jpg?raw=true');
    }

    .dot {
        width: 120%;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.03;
        z-index: -100;
    }

    .subpage-contents {
        min-height: 80vh;
        width: 60%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: var(--black);
        border-radius: 30px;
    }

    .subpage-contents h3 {
        width: 70%;
        text-transform: uppercase;
        letter-spacing: 0.05rem;
        color: var(--primary-300);
        font-weight: 300;
        margin: 1rem;
        text-align: center;
    }

    .subpage-icon {
        display: none;
        position: absolute;
        top: 5%;
        left: 20%;
        font-size: 10rem;
        color: var(--primary-100);
    }

    .subpage-title {
        padding-left: 1rem;
        margin-bottom: 1rem;
        border-left: 3px solid var(--primary-300);
    }

    .subpage-description {
        margin: 1.5rem 4rem;
        line-height: 2;
        letter-spacing: 1px;
    }

    .subpage-description p {
        margin: 1rem 0;
        font-weight: 400;
        text-align: justify;
    }

    .subpage-btn {
        width: 40%;
        margin: 1rem;
    }

    .banner-container {
        position: relative;
        z-index: 100;
    }

    @media (max-width: 1510px) {
        .img-container {
            min-height: 25vh;
        }
    }

    @media (max-width: 1150px) {
        .subpage-contents {
            width: 70%;
        }

        .subpage-title {
            font-size: 1.4rem;
        }

        .subpage-description {
            margin: 1rem 3rem;
        }

        .subpage-description p {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 900px) {
        .dot {
            display: none;
        }
    }

    @media (max-width: 760px) {
        .subpage-contents {
            width: 90%;
        }

        .subpage-title {
            font-size: 1.3rem;
        }

        .subpage-contents h3 {
            width: 80%;
        }
    }

    @media (max-width: 630px) {
        .subpage-container {
            min-height: 90vh;
        }

        .subpage-contents {
            min-height: 100vh;
        }

        .training,
        .operations,
        .optimization,
        .expertise,
        .washing,
        .systems {
            background-attachment: local;
            background-position: center;
        }

        .training {
            background-image: url('https://github.com/JoannaPatyk/skill-boost-quality-website/blob/main/src/assets/img/training-S.jpg?raw=true');
        }

        .operations {
            background-image: url('https://github.com/JoannaPatyk/skill-boost-quality-website/blob/main/src/assets/img/operations-S.jpg?raw=true');
        }

        .optimization {
            background-image: url('https://github.com/JoannaPatyk/skill-boost-quality-website/blob/main/src/assets/img/optimization-S.jpg?raw=true');
        }

        .expertise {
            background-image: url('https://github.com/JoannaPatyk/skill-boost-quality-website/blob/main/src/assets/img/expertise-S.jpg?raw=true');
        }

        .washing {
            background-image: url('https://github.com/JoannaPatyk/skill-boost-quality-website/blob/main/src/assets/img/washing-S.jpg?raw=true');
        }

        .systems {
            background-image: url('https://github.com/JoannaPatyk/skill-boost-quality-website/blob/main/src/assets/img/systems-S.jpg?raw=true');
        }
    }

    @media (max-width: 605px) {
        .subpage-title {
            font-size: 1.2rem;
            margin: 0 2rem;
            text-align: center;
        }

        .subpage-description {
            line-height: 1.7;
        }

        .subpage-container h3 {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 500px) {
        .subpage-container {
            min-height: 110vh;
        }

        .subpage-description {
            margin: 0.75rem 2rem;
        }

        .subpage-title {
            font-size: 1.1rem;
            margin-bottom: 0;
        }

        .subpage-container h3 {
            font-size: 0.8rem;
        }
    }

    @media (max-width: 460px) {
        .subpage-container {
            min-height: 130vh;
        }
    }

    @media (orientation: landscape) and (max-width: 1200px) and (max-height: 700px) {
        .subpage-container {
            min-height: 120vw;
        }
    }
`;

export default Wrapper;
