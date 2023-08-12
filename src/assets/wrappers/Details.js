import styled from 'styled-components';

const Wrapper = styled.div`
    .details-container {
        height: 5vh;
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
        font-size: 1.8rem;
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
    }

    .contact-data p {
        color: var(--white);
        font-weight: 400;
        font-size: 1rem;
    }

    .icon {
        font-size: 1.2rem;
    }
`;

export default Wrapper;
