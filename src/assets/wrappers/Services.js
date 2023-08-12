import styled from 'styled-components';

const Wrapper = styled.div`
    .services-container {
        background-color: var(--white);
    }

    .services-title {
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 3rem auto 2rem auto;
    }

    .services-title span {
        color: var(--primary-300);
        font-size: 1.5rem;
        font-weight: 800;
    }

    .services-title h3 {
        width: 60%;
        color: var(--black);
        font-weight: 400;
        margin-top: 2rem;
        text-align: center;
        line-height: 1.6;
        text-transform: none;
    }

    .img-container {
        position: relative;
        background-image: url('https://img.freepik.com/darmowe-zdjecie/surowy-kurczaka-mieso-skrzydlo-na-drewnianej-tnacej-desce-i-talerzu-lub_74190-2574.jpg?w=1380&t=st=1691916528~exp=1691917128~hmac=ab970145daea032e35bc3a61c46d1d4499bb36af14333b5030614168e8c920ae');
        min-height: 30vh;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: 10;
    }

    .img-container h1 {
        text-transform: uppercase;
        line-height: 30vh;
        text-align: center;
        font-size: 5rem;
        letter-spacing: 0.5rem;
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
        transition: 0.5s;
        cursor: pointer;
    }

    .service:hover {
        transform: scale(1.15);
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
