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
        font-size: 2.5rem;
        font-weight: 400;
        color: var(--white);
        filter: drop-shadow(1px 1px var(--grey-100));
        transition: var(--transition);
        cursor: pointer;
    }

    .menu-container h1:hover {
        color: var(--primary-100);
    }

    .menu {
        position: relative;
        padding-right: 2rem;
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: flex-end;
        text-transform: uppercase;
    }

    .menu-element {
        min-width: 140px;
        padding: 0.25rem 0.75rem;
        font-weight: 200;
        font-size: 1.2rem;
        text-align: center;
        letter-spacing: var(--letterSpacing);
        border: 2px solid var(--primary-300);
        border-radius: 25px;
        transition: var(--transition);
        cursor: pointer;
    }

    .menu-element:hover {
        transform: scale(0.98);
        background-color: var(--primary-300);
    }
`;

export default Wrapper;
