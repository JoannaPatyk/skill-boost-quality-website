import styled from 'styled-components';

const Wrapper = styled.div`
    .menu-container {
        height: 10vh;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 2fr;
        background-color: var(--secondary-300);
    }

    h1 {
        text-align: center;
        line-height: 10vh;
    }

    .menu {
        position: relative;
        padding-right: 2rem;
        display: flex;
        gap: 30px;
        align-items: center;
        justify-content: flex-end;
        text-transform: uppercase;
    }

    .menu-element {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 130px;
        padding: 0.5rem 1rem;
        font-weight: 200;
        text-align: center;
        letter-spacing: var(--letterSpacing);
        border: 3px solid var(--primary-300);
        border-radius: 30px;
        transition: var(--transition);
        cursor: pointer;
    }

    .menu-element:hover {
        top: 40%;
        background-color: var(--primary-300);
    }

    .start {
        right: 41%;
    }

    .about {
        right: 29%;
    }

    .services {
        right: 17%;
    }

    .contact {
        right: 5%;
    }
`;

export default Wrapper;
