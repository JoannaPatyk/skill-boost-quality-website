import styled from 'styled-components';

const Wrapper = styled.div`
    .banner-container {
        height: 20vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
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
`;

export default Wrapper;
