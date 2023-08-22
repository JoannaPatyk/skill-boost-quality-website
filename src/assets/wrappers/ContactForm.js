import styled from 'styled-components';

const Wrapper = styled.div`
    .contact-form-container {
        position: relative;
        min-height: 70vh;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--black);
        background-image: url('https://raw.githubusercontent.com/JoannaPatyk/skill-boost-quality-website/main/src/assets/img/building.jpg?token=GHSAT0AAAAAAB4247ERMP5KAKP23HTU6MBYZG5ACCA');
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .form-container {
        position: absolute;
        bottom: -2%;
        right: 15%;
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

    .checkbox {
        width: 80%;
    }

    @media (max-width: 1500px) {
        .form-container {
            width: 40%;
        }
    }

    @media (max-width: 1250px) {
        .form-container {
            width: 50%;
        }
    }

    @media (max-width: 1050px) {
        .form-container {
            top: 52%;
            left: 50%;
            transform: translate(-50%, -50%);
            min-width: 550px;
        }
    }

    @media (max-width: 750px) {
        .form-container {
            min-width: 450px;
        }
    }

    @media (max-width: 580px) {
        .form-container {
            min-width: 400px;
        }
    }

    @media (max-width: 480px) {
        .form-container {
            min-width: 350px;
        }
    }

    @media (max-width: 400px) {
        .form-container {
            min-width: 320px;
        }
    }

    @media (orientation: landscape) and (max-width: 1200px) and (max-height: 700px) {
        .contact-form-container {
            min-height: 70vw;
        }
    }
`;

export default Wrapper;
