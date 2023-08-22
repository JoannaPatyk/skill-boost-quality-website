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
        font-weight: 400;
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

    .small-menu {
        display: none;
    }

    @media (max-width: 1285px) {
        .menu-container h1 {
            font-size: 2.2rem;
        }

        .menu-element {
            min-width: 120px;
            padding: 0.15rem 0.5rem;
            font-size: 1rem;
        }
    }

    @media (max-width: 1285px) {
        .menu-container h1 {
            padding-left: 2rem;
            font-size: 2rem;
        }
    }

    @media (max-width: 1285px) {
        .menu-container h1 {
            padding-left: 2rem;
            font-size: 2rem;
        }
    }

    @media (max-width: 985px) {
        .menu {
            display: none;
        }

        .menu-container h1 {
            text-align: start;
        }

        .menu-container {
            grid-template-columns: 2fr 1fr;
        }

        .menu-box {
            position: relative;
            display: flex;
            justify-content: end;
            align-items: center;
            padding-right: 1rem;
            font-size: 2.5rem;
            transition: var(--transition);
            cursor: pointer;
        }

        .menu-box:hover .small-menu {
            display: block;
            opacity: 1;
        }

        .menu-box:hover .menu-icon {
            display: none;
            opacity: 0;
        }

        .small-menu {
            position: absolute;
            top: 9vh;
            right: 0;
            z-index: 1000;
            width: 300px;
            display: none;
            opacity: 0;
            text-transform: uppercase;
            border-radius: 30px;
            transition: opacity 0.3s ease-in-out;
            background-color: var(--secondary-300);
        }

        .small-menu .menu-element {
            margin: 15px;
        }

        .menu-box:hover .small-menu {
            display: block;
            opacity: 1;
        }
    }

    @media (max-width: 685px) {
        .menu-container h1 {
            font-size: 1.7rem;
        }
    }

    @media (max-width: 485px) {
        .menu-container h1 {
            font-size: 1.5rem;
        }

        .menu-icon {
            font-size: 2rem;
        }
    }

    @media (max-width: 385px) {
        .menu-container h1 {
            font-size: 1.3rem;
        }

        .menu-icon {
            font-size: 1.8rem;
        }
    }
`;

export default Wrapper;
