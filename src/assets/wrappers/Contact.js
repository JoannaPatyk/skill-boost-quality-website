import styled from 'styled-components';

const Wrapper = styled.div`
    .contact-container {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 100%;
        min-height: 70vh;
        color: var(--black);
        background-image: url('https://cdn.pixabay.com/photo/2015/06/24/15/45/computer-820281_1280.jpg');
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .form-container {
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
