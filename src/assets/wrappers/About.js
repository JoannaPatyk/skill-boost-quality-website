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
        width: 80%;
        position: absolute;
        opacity: 0.05;
        z-index: -100;
    }

    .background-img-container {
        height: 80vh;
        width: 90vw;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .img-container {
        height: 61vh;
        width: 61vh;
        margin: 1.5rem;
        border-radius: 50%;
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
        width: 60%;
        height: 2px;
        margin: 2rem 0 0.5rem;
    }

    .arrow {
        margin-top: 1.8rem;
        font-size: 2.5rem;
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
        margin: 2rem;
        display: flex;
        gap: 30px;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .about-description {
        line-height: 1.8;
        letter-spacing: 0.05rem;
        text-align: justify;
    }
`;

export default Wrapper;
