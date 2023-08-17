import styled from 'styled-components';

const Wrapper = styled.div`
    .information-container {
        height: 40vh;
        width: 100%;
        background-color: var(--secondary-300);
        box-shadow: 2px 2px 20px var(--secondary-300);
    }

    .elements {
        height: 100%;
        width: 70%;
        margin: 0 auto;
        display: flex;
        gap: 60px;
        align-items: center;
        justify-content: center;
    }

    .elements span {
        font-weight: 600;
        font-size: 0.8rem;
        color: var(--primary-100);
    }

    .mission,
    .services {
        width: 40%;
    }

    .data,
    .address {
        width: 20%;
    }

    .mission,
    .data,
    .address,
    .services {
        height: 100%;
        display: grid;
        gap: 10px;
        grid-template-rows: 1fr 4fr;
    }

    .mission h2,
    .data h2,
    .address h2,
    .services h2 {
        padding: 1rem 0;
        margin: 1rem 0;
        border-bottom: 2px solid var(--white);
        color: var(--primary-300);
        text-transform: uppercase;
        text-align: left;
    }

    .mission p,
    .data p,
    .address p,
    .services p {
        padding: 0 0.2rem;
        font-size: 0.8rem;
        color: var(--white);
        letter-spacing: 1px;
        text-decoration: none;
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
`;

export default Wrapper;
