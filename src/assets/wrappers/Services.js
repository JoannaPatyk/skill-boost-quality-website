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
        color: var(--black);
    }
    .services-title h2 {
        font-weight: 400;
    }

    .services-title span {
        color: var(--primary-300);
        font-size: 1.5rem;
        font-weight: 600;
    }

    .services-title h3 {
        width: 60%;
        color: var(--black);
        font-weight: 300;
        margin-top: 2rem;
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
        width: 70%;
        display: grid;
        place-items: center;
        gap: 80px;
        grid-template-columns: 2fr 2fr 2fr;
        margin: 6rem auto;
    }

    .service {
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 40px;
        padding: 2rem;
        border-radius: 30px;
        box-shadow: 8px 8px 10px var(--grey-300);
        transition: 0.5s;
        cursor: pointer;
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
        width: 60%;
        padding-left: 1rem;
        border-left: 3px solid var(--primary-300);
        text-transform: uppercase;
    }

    .service p {
        line-height: 1.8;
    }

    .service-btn {
        width: 40%;
        font-size: 0.9rem;
    }
`;

export default Wrapper;
