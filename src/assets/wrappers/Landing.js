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
        background-color: #414d4492;
    }

    .landing-title h1 {
        padding-right: 2rem;
        width: 70%;
        font-size: 2rem;
        font-weight: 200;
        letter-spacing: 2.5px;
        line-height: 1.8;
        text-align: right;
        border-right: 2px solid var(--white);
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
        background-color: var(--white);
        border-radius: 25px;
        border: 1px solid var(--black);
        box-shadow: 4px 4px 5px 5px var(--secondary-300);
    }

    .dot {
        position: absolute;
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 50%;
        background-color: var(--white);
        box-shadow: 0 0 10px 5px var(--grey-300);
        cursor: pointer;
        transition: 0.5s;
        animation: pulsating 3s linear infinite;
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
