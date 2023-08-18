import styled from 'styled-components';
const Position = {
    washing: { top: '38%', left: '71%' },
    training: { top: '23%', left: '45.2%' },
    systems: { top: '39%', left: '17.5%' },
    expertise: { top: '35%', left: '40%' },
    optimization: { top: '55%', left: '22%' },
    operations: { top: '60%', left: '51%' }
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
        top: 70%;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 15vh;
        background-color: #39473c84;
    }

    .landing-title h1 {
        padding-right: 2rem;
        width: 60%;
        font-size: 2rem;
        letter-spacing: 2px;
        line-height: 1.5;
        text-align: right;
        color: var(--white);
        text-transform: uppercase;
        border-right: 6px solid var(--white);
        text-shadow: 1px 1px 5px var(--secondary-300);
    }

    .factoryImage {
        width: 100%;
        height: 100%;
        filter: blur(1.5px);
        object-fit: cover;
    }

    .dot h4 {
        position: absolute;
        padding: 0.5rem 1rem;
        text-transform: uppercase;
        color: var(--black);
        font-weight: 700;
        font-size: 1.2rem;
        letter-spacing: 1px;
        background-color: var(--white);
        border-radius: 25px;
        box-shadow: 4px 4px 10px 10px var(--black);
    }

    .dot {
        position: absolute;
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 50%;
        background-color: var(--white);
        box-shadow: 1px 1px 10px 5px var(--secondary-300);
        background-color: var(--white);
        animation: pulsating 3s linear infinite;
        transition: 0.5s;
        cursor: pointer;
    }

    .dot:hover {
        background-color: var(--primary-100);
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
`;

export default Wrapper;
