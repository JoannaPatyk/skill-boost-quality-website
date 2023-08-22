import styled from 'styled-components';

const Wrapper = styled.div`
    .footer-container {
        position: relative;
        height: 6vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--secondary-200);
    }

    .footer-text {
        color: var(--white);
        font-size: 0.8rem;
        display: flex;
        gap: 5px;
        align-items: center;
        justify-content: center;
    }

    .footer-container span {
        font-weight: 500;
        color: var(--primary-300);
        font-size: 1rem;
        filter: drop-shadow(0px 1px var(--grey-100));
    }

    .footer-container a {
        color: var(--primary-100);
        font-weight: 500;
    }

    .social-media {
        display: flex;
        align-items: center;
        padding-left: 20px;
        gap: 10px;
        position: absolute;
        top: 0;
        left: 0;
        min-height: 6vh;
    }

    #social-icon {
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

    #social-icon:hover {
        color: var(--primary-300);
        transform: scale(1.1);
    }

    @media (max-width: 870px) {
        .footer-text {
            flex-direction: column;
        }
    }

    @media (max-width: 670px) {
        .social-media {
            display: none;
        }

        .footer-container span {
            font-size: 0.8rem;
        }

        p {
            font-size: 0.7rem;
        }
    }

    @media (max-width: 470px) {
        p {
            font-size: 0.6rem;
        }
    }

    @media (orientation: landscape) and (max-width: 1200px) and (max-height: 700px) {
        .footer-container {
            height: 6vw;
        }
    }
`;

export default Wrapper;
