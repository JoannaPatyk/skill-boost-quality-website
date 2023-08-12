import styled from 'styled-components';

const Wrapper = styled.div`
    .services-container {
        background-color: var(--white);
    }

    .services-title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .img-container {
        background-image: url('building.jpg');
        min-height: 60vh;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: 10;
    }

    h2 {
        color: var(--black);
        text-align: center;
    }

    h3,
    p {
        color: var(--black);
    }

    .services-description {
        width: 70%;
        display: grid;
        place-items: center;
        gap: 50px 80px;
        grid-template-columns: 2fr 2fr 2fr;
        margin: 4rem auto;
    }

    .service {
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 40px;
        background-color: var(--grey-100);
        padding: 2rem;
        border-radius: 30px;
    }

    .service-icon {
        font-size: 4rem;
        color: var(--primary-300);
    }

    h3 {
        width: 60%;
        padding-left: 1rem;
        border-left: 3px solid var(--primary-300);
        text-transform: uppercase;
    }

    p {
        line-height: 1.8;
    }

    span {
        font-weight: 600;
    }

    .dot {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.05;
        z-index: -100;
    }
`;

export default Wrapper;
