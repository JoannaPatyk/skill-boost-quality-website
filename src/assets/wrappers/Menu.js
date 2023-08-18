import styled from 'styled-components';

const Wrapper = styled.div`
    .menu-container {
        height: 10vh;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 2fr;
        background-color: var(--secondary-300);
    }

    .menu-container h1 {
        text-align: center;
        line-height: 10vh;
        letter-spacing: 1.5px;
        color: var(--white);
    }

    .menu {
        position: relative;
        padding-right: 2rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        text-transform: uppercase;
    }

    .menu-element {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 140px;
        padding: 0.5rem 1rem;
        font-weight: 600;
        font-size: 1.1rem;
        text-align: center;
        letter-spacing: var(--letterSpacing);
        border: 4px solid var(--primary-300);
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
