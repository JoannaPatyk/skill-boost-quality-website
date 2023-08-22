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
        margin: 3rem auto 0 auto;
        color: var(--black);
    }

    .services-title h2 {
        width: 60%;
        font-weight: 400;
        text-align: center;
    }

    .services-title span {
        color: var(--primary-300);
        font-size: 1.5rem;
        font-weight: 600;
    }

    .services-title h3 {
        width: 70%;
        color: var(--black);
        font-weight: 300;
        margin: 2rem 0;
        text-align: center;
        line-height: 1.6;
        text-transform: none;
    }

    .img-container {
        position: relative;
        background-image: url('https://cdn.pixabay.com/photo/2019/09/13/15/13/chickens-4474176_1280.jpg');
        min-height: 60vh;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: 10;
    }

    .services-description {
        width: 80%;
        display: grid;
        place-items: center;
        gap: 80px;
        grid-template-columns: 2fr 2fr 2fr;
        margin: 2rem auto 4rem;
    }

    .service {
        min-height: 65vh;
        display: grid;
        grid-template-rows: 0.75fr 1fr 1.75fr 0.5fr;
        gap: 20px;
        align-items: center;
        padding: 2rem;
        border-radius: 30px;
        box-shadow: 4px 4px 10px var(--black);
        transition: 0.5s;
    }

    .service:hover {
        transform: scale(1.05);
    }

    .service-icon {
        font-size: 4rem;
        color: var(--primary-300);
    }

    .service h3,
    .service p {
        color: var(--black);
    }

    .service h3 {
        width: 90%;
        padding-left: 1rem;
        border-left: 3px solid var(--primary-300);
        text-transform: uppercase;
    }

    .service p {
        line-height: 1.8;
        font-weight: 400;
    }

    .service-btn {
        width: 40%;
        font-size: 0.9rem;
    }

    @media (max-width: 1680px) {
        .services-description {
            gap: 50px;
        }
    }

    @media (max-width: 1510px) {
        .img-container {
            min-height: 40vh;
        }

        .services-title h3 {
            width: 80%;
        }

        .service h3 {
            font-size: 1.1rem;
        }

        .service p {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 1220px) {
        .services-description {
            grid-template-columns: 3fr 3fr;
        }

        .service {
            min-height: 45vh;
        }
    }

    @media (max-width: 1000px) {
        .services-title h2 {
            width: 70%;
        }

        .services-title h3 {
            width: 90%;
            font-size: 1.1rem;
        }
    }

    @media (max-width: 980px) {
        .service {
            min-height: 50vh;
        }

        .service h3 {
            font-size: 1rem;
        }

        .service p {
            font-size: 0.85rem;
            line-height: 1.7;
        }
    }

    @media (max-width: 920px) {
        .services-description {
            gap: 30px;
        }

        .service {
            gap: 5px;
            grid-template-rows: 0.75fr 0.75fr 2.5fr 0.5fr;
        }

        .service-icon {
            font-size: 3rem;
        }
    }

    @media (max-width: 750px) {
        .services-description {
            grid-template-columns: 6fr;
        }

        .service {
            gap: 15px;
            min-height: 35vh;
        }
    }

    @media (max-width: 560px) {
        .services-title h2 {
            width: 80%;
            font-size: 1.3rem;
        }

        .services-title span {
            font-size: 1.3rem;
        }

        .services-title h3 {
            width: 95%;
            font-size: 1rem;
        }
    }

    @media (max-width: 420px) {
        .services-title h2 {
            font-size: 1.1rem;
        }

        .services-title span {
            font-size: 1.2rem;
        }

        .services-title h3 {
            font-size: 0.9rem;
        }
    }

    @media (orientation: landscape) {
        .service {
            min-height: 45vw;
        }
    }
`;

export default Wrapper;
