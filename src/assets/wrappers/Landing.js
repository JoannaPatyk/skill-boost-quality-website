import styled from 'styled-components';

const Wrapper = styled.div`
    .container {
        display: flex;
        justify-content: center;
    }

    .background {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    img {
        width: 100%;
        height: 100%;
        opacity: 0.9;
        object-fit: cover;
    }

    h4 {
        position: absolute;
        padding: 0.5rem 1rem;
        text-transform: uppercase;
        color: var(--black);
        background-color: var(--white);
        border-radius: 25px;
        border: 2px solid var(--black);
    }

    .dot {
        position: absolute;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        background-color: var(--white);
        box-shadow: 0 0 20px 9px var(--primary-300);
        cursor: pointer;
        transition: 0.5s;
        animation: pulsating 1.6s linear infinite;
    }

    .dot:hover {
        background-color: var(--secondary-300);
    }

    .washing {
        top: 22%;
        left: 51%;
    }

    .washing-title {
        top: 23%;
        left: 53%;
        transition: 0.5s;
        cursor: pointer;
    }

    .training {
        top: 14%;
        left: 75.2%;
    }

    .training-title {
        top: 13%;
        left: 68.4%;
        transition: 0.5s;
        cursor: pointer;
    }

    .systems {
        top: 20.5%;
        left: 15.8%;
    }

    .systems-title {
        top: 21%;
        left: 18%;
        transition: 0.5s;
        cursor: pointer;
    }

    .expertise {
        top: 58%;
        left: 40%;
    }

    .expertise-title {
        top: 55%;
        left: 41.5%;
        transition: 0.5s;
        cursor: pointer;
    }

    .operations {
        top: 70%;
        left: 74%;
    }

    .operations-title {
        top: 71%;
        left: 76%;
        transition: 0.5s;
        cursor: pointer;
    }

    @keyframes pulsating {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(0.85);
        }
        100% {
            transform: scale(1);
        }
    }
`;

export default Wrapper;
