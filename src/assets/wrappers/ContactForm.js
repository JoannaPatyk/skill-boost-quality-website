import styled from 'styled-components';

const Wrapper = styled.div`
    .contact-form-container {
        position: relative;
        min-height: 70vh;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--black);
        background-color: var(--grey-100);
    }

    .form-container {
        position: absolute;
        bottom: -5%;
        right: 10%;
        z-index: 10;
        height: 100%;
        width: 35%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 30px;
        background-color: var(--grey-100);
        box-shadow: 5px 5px 8px var(--secondary-300);
    }
`;

export default Wrapper;
