import styled from 'styled-components';
const Position = {
    washing: { top: '80%', left: '74%' },
    training: { top: '25%', left: '75%' },
    systems: { top: '39%', left: '14.5%' },
    expertise: { top: '24%', left: '44%' },
    optimization: { top: '63%', left: '26%' },
    operations: { top: '66%', left: '40%' }
};

const transitionEffect = 'transition: opacity 0.5s, transform 0.5s;';

const Wrapper = styled.div`
    .landing-container {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .landing-background {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .landing-title {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -40%);
        width: 100%;
        height: 12vh;
        background-color: #f3873f84;
    }

    .landing-title h1 {
        padding-right: 2rem;
        font-size: 2rem;
        font-weight: 700;
        letter-spacing: 2px;
        line-height: 1.5;
        text-align: right;
        color: var(--white);
        border-right: 6px solid var(--white);
        text-shadow: 1px 1px 5px var(--secondary-300);
        text-transform: uppercase;
    }

    .factoryImage {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .dot h4 {
        position: absolute;
        padding: 0.5rem 1rem;
        text-transform: uppercase;
        color: var(--secondary-300);
        font-weight: 700;
        font-size: 1.2rem;
        letter-spacing: 1px;
        background-color: var(--white);
        box-shadow: 4px 4px 5px 5px var(--black);
    }

    .dot {
        position: absolute;
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 50%;
        background-color: var(--white);
        box-shadow: 1px 1px 10px 5px var(--primary-300);
        background-color: var(--white);
        animation: pulsating 4s linear infinite;
        transition: 0.5s;
        cursor: pointer;
    }

    .dot:hover {
        background-color: var(--primary-300);
    }

    .washing-title,
    .training-title,
    .systems-title,
    .expertise-title,
    .optimization-title,
    .operations-title {
        width: 18vw;
        display: none;
        top: 19%;
        left: 53%;
        opacity: 0;
        font-size: 1.5rem;
        text-align: center;
        font-weight: 300;
        ${transitionEffect}
        cursor: pointer;
    }

    .washing:hover .washing-title,
    .training:hover .training-title,
    .systems:hover .systems-title,
    .expertise:hover .expertise-title,
    .optimization:hover .optimization-title,
    .operations:hover .operations-title {
        display: block;
        opacity: 1;
    }

    .washing {
        top: ${Position.washing.top};
        left: ${Position.washing.left};
    }

    .training {
        top: ${Position.training.top};
        left: ${Position.training.left};
    }

    .systems {
        top: ${Position.systems.top};
        left: ${Position.systems.left};
    }

    .expertise {
        top: ${Position.expertise.top};
        left: ${Position.expertise.left};
    }

    .optimization {
        top: ${Position.optimization.top};
        left: ${Position.optimization.left};
    }

    .operations {
        top: ${Position.operations.top};
        left: ${Position.operations.left};
    }

    @keyframes pulsating {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(0.9);
        }
        100% {
            transform: scale(1);
        }
    }

    @media (max-width: 1700px) {
        .landing-title h1 {
            font-size: 1.6rem;
        }

        .dot {
            width: 1.5rem;
            height: 1.5rem;
        }
    }

    @media (max-width: 1460px) {
        .landing-title h1 {
            font-size: 1.4rem;
        }
    }

    @media (max-width: 1350px) {
        .landing-title {
            height: 12vh;
        }

        .landing-title h1 {
            font-size: 1.3rem;
        }

        .dot {
            width: 1.2rem;
            height: 1.2rem;
        }

        .dot h4 {
            font-size: 1rem;
        }
    }

    @media (max-width: 1180px) {
        .dot h4 {
            font-size: 0.9rem;
        }

        .landing-title h1 {
            font-size: 1.2rem;
        }
    }

    @media (max-width: 985px) {
        .landing-title {
            height: 13vh;
        }

        .dot {
            width: 1rem;
            height: 1rem;
        }
    }

    @media (max-width: 985px) {
        .landing-title {
            height: 10vh;
        }

        .landing-title h1 {
            border: none;
            text-align: center;
            font-size: 1rem;
            padding: 0;
        }
    }

    @media (max-width: 805px) {
        .landing-title {
            display: none;
        }

        .washing-title,
        .training-title,
        .systems-title,
        .expertise-title,
        .optimization-title,
        .operations-title {
            display: block;
            opacity: 1;
        }

        .dot {
            width: 10px;
            height: 10px;
            animation-duration: 6s;
        }

        .dot h4 {
            width: 28vw;
            top: 50%;
            right: 50%;
            transform: translate(-50%, 0);
            font-size: 0.9rem;
            letter-spacing: 0;
            text-transform: none;
            color: var(--white);
            background-color: transparent;
            filter: drop-shadow(1px 1px var(--black));
            box-shadow: none;
        }
    }

    @media (max-width: 570px) {
        .dot h4 {
            font-size: 0.7rem;
        }
    }

    @media (max-width: 530px) {
        .dot h4 {
            font-size: 0.6rem;
        }
    }

    @media (max-width: 430px) {
        .dot h4 {
            font-size: 0.5rem;
        }
    }
`;

export default Wrapper;
