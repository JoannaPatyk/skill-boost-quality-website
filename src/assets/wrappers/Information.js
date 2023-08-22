import styled from 'styled-components';

const Wrapper = styled.div`
    .information-container {
        width: 100%;
        min-height: 30vh;
        background-color: var(--secondary-300);
        box-shadow: 2px 2px 20px var(--secondary-300);
    }

    .elements {
        width: 70%;
        margin: 0 auto;
        display: flex;
        gap: 60px;
        align-items: center;
        justify-content: center;
    }

    .elements span {
        font-weight: 600;
        font-size: 0.85rem;
        color: var(--primary-300);
        filter: drop-shadow(1px 1px var(--grey-100));
    }

    .mission,
    .services {
        width: 45%;
    }

    .data,
    .address {
        width: 20%;
    }

    .mission,
    .address,
    .services {
        display: grid;
        gap: 10px;
        grid-template-rows: 1fr 2.5fr;
    }

    .mission h2,
    .address h2,
    .services h2 {
        padding: 1rem 0;
        margin: 1rem 0;
        border-bottom: 2px solid var(--white);
        color: var(--primary-300);
        text-transform: uppercase;
        text-align: left;
        filter: drop-shadow(0px 1px var(--grey-100));
    }

    .mission p,
    .address p,
    .services p {
        padding: 0 0.2rem;
        font-size: 0.85rem;
        font-weight: 200;
        color: var(--white);
        letter-spacing: 1px;
        text-decoration: none;
        text-align: left;
        line-height: 2.2;
        transition: 0.5s;
        cursor: pointer;
    }

    #service-link-menu {
        display: flex;
        align-items: center;
        gap: 5px;
        color: var(--white);
        border: none;
        background-color: transparent;
    }

    #service-link-menu:hover {
        width: 100%;
        background-color: var(--primary-100);
    }

    @media (max-width: 1800px) {
        .elements {
            gap: 40px;
        }
    }

    @media (max-width: 1600px) {
        .elements {
            gap: 30px;
        }
    }

    @media (max-width: 1550px) {
        .elements {
            width: 80%;
        }

        .mission p,
        .address p,
        .services p {
            width: 100%;
        }

        .mission p {
            line-height: 2;
        }
    }

    @media (max-width: 1105px) {
        .elements {
            gap: 0;
        }

        .mission h2,
        .address h2,
        .services h2 {
            padding: 0.5rem 0;
            margin: 0.5rem 0;
        }

        .mission p,
        .address p,
        .services p {
            font-size: 0.75rem;
        }

        .mission p {
            width: 90%;
            letter-spacing: 0;
        }
    }

    @media (max-width: 1040px) {
        .elements {
            flex-direction: column;
        }

        .mission p {
            width: 90%;
            letter-spacing: 1px;
            line-height: 2.2;
        }

        .mission,
        .services,
        .address {
            width: 70%;
        }
    }

    @media (max-width: 780px) {
        .mission,
        .services,
        .address {
            width: 80%;
        }
    }

    @media (max-width: 690px) {
        .mission {
            grid-template-rows: 0.7fr 2fr;
        }
    }

    @media (max-width: 590px) {
        .mission,
        .services,
        .address {
            width: 95%;
        }
    }
`;

export default Wrapper;
