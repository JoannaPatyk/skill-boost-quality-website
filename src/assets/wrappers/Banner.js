import styled from 'styled-components';

const Wrapper = styled.div`
    .banner-container {
        min-height: 18vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 100;
        background-color: var(--primary-100);
    }

    .banner-text {
        display: flex;
        gap: 20px;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: var(--white);
    }

    .banner-container h1 {
        font-weight: 200;
        font-size: 2.5rem;
    }

    .banner-container span {
        font-weight: 600;
    }

    .banner-icon {
        font-size: 2.5rem;
        animation: arrow 2s infinite;
    }

    @media (max-width: 1405px) {
        .banner-container h1,
        .banner-icon {
            font-size: 2.2rem;
        }

        .banner-text {
            gap: 10px;
        }
    }

    @media (max-width: 1150px) {
        .banner-container h1,
        .banner-icon {
            font-size: 1.8rem;
        }

        .banner-text {
            gap: 5px;
        }
    }

    @media (max-width: 985px) {
        .banner-container h1,
        .banner-icon {
            font-size: 1.5rem;
        }
    }

    @media (max-width: 985px) {
        .banner-text {
            flex-direction: column;
        }

        .banner-container h1 {
            text-align: center;
        }

        .banner-icon {
            display: none;
        }
    }

    @media (max-width: 585px) {
        .banner-container h1 {
            font-size: 1.4rem;
        }
        .banner-container span {
            font-size: 1.3rem;
        }
    }
`;

export default Wrapper;
