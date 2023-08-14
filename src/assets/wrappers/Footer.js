import styled from 'styled-components';

const Wrapper = styled.div`
    .footer-container {
        height: 6vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--secondary-200);
    }

    p {
        margin: 0 auto;
        color: var(--white);
        font-size: 0.9rem;
    }

    span {
        font-weight: 500;
        color: var(--primary-100);
    }
`;

export default Wrapper;
