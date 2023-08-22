import styled from 'styled-components';

const Wrapper = styled.div`
    .details-container {
        height: 6vh;
        width: 100%;
        padding-right: 30px;
        display: grid;
        gap: 30px;
        grid-template-columns: 1fr 2fr;
        background-color: var(--secondary-200);
    }

    .social-media {
        display: flex;
        align-items: center;
        padding-left: 50px;
        gap: 10px;
        height: 5vh;
    }

    .social-icon {
        display: flex;
        align-items: center;
        font-size: 2rem;
        color: var(--white);
        text-decoration: none;
        filter: drop-shadow(1px 1px var(--grey-100));
        animation: button 1.5s infinite;
        transition: 0.5s;
        cursor: pointer;
    }

    .social-icon:hover {
        color: var(--primary-300);
        transform: scale(1.1);
    }

    .contact-data-container {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 30px;
    }

    .contact-data {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        color: var(--white);
        transition: 0.5s;
        cursor: pointer;
    }

    .contact-data:hover {
        color: var(--primary-300);
    }

    .contact-data p {
        color: var(--white);
        font-weight: 400;
        font-size: 1rem;
    }

    a {
        color: var(--white);
        text-decoration: none;
    }

    .icon {
        font-size: 1.3rem;
        animation: button 1.5s infinite;
    }

    @media (max-width: 1100px) {
        .social-icon {
            font-size: 1.8rem;
        }

        .contact-data p {
            font-size: 0.8rem;
        }

        .icon {
            font-size: 1.1rem;
        }
    }

    @media (max-width: 680px) {
        .details-container {
            padding: 0 10px;
        }

        .contact-data-container {
            gap: 1px;
            flex-direction: column;
            align-items: flex-end;
            justify-content: center;
        }

        .contact-data {
            gap: 5px;
        }

        .icon,
        .social-icon {
            display: none;
        }
    }
`;

export default Wrapper;
