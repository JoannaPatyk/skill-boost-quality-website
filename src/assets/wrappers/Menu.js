import styled from 'styled-components';

const Wrapper = styled.div`
    .menu-container {
        height: 15vh;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 2fr;
        background-color: var(--secondary-500);
    }

    h1 {
        text-align: center;
        line-height: 15vh;
    }

    .menu {
        padding-right: 2rem;
        display: flex;
        gap: 30px;
        align-items: center;
        justify-content: flex-end;
        text-transform: uppercase;
    }

    .menu-element {
        width: 140px;
        padding: 0.5rem 1rem;
        font-weight: 500;
        text-align: center;
        letter-spacing: var(--letterSpacing);
        border: 2px solid var(--primary-500);
        border-radius: 25px;
        transition: var(--transition);
        cursor: pointer;
    }

    .menu-element:hover {
        background-color: var(--primary-500);
        box-shadow: 4px 4px 1px 2px var(--primary-100);
        transform: scale(0.95);
    }

    @media (max-width: 600px) {
        .menu-element {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 450px) {
        .menu {
            padding: 0.35rem 0;
            gap: 5px;
        }

        .menu-element {
            font-size: 0.75rem;
        }
    }
`;

export default Wrapper;
