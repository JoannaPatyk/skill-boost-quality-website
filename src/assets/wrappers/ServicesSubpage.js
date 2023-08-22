import styled from 'styled-components';

const Wrapper = styled.div`
    .subpage-container {
        position: relative;
        min-height: 90vh;
        background-color: var(--white);
    }

    .img-container {
        position: relative;
        min-height: 45vh;
        background-attachment: fixed;
        background-position: bottom;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: 10;
        filter: grayscale(95%) blur(1px);
    }

    .training {
        background-image: url('https://img.freepik.com/darmowe-zdjecie/futurystyczny-projekt-biura-z-nowoczesnym-sprzetem-technologicznym-generowanym-przez-ai_188544-22666.jpg?w=1380&t=st=1692180552~exp=1692181152~hmac=abfeb130716cf06494c6c335c8f27a3fc7cd04a57ff1502eef13fcfb44f167a8');
    }

    .operations {
        background-image: url('https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg');
    }

    .optimization {
        background-image: url('https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg');
    }

    .expertise {
        background-image: url('https://cdn.pixabay.com/photo/2015/09/28/17/10/signature-962388_1280.jpg');
    }

    .washing {
        background-image: url('https://cdn.pixabay.com/photo/2016/11/23/00/39/chicken-1851495_1280.jpg');
    }

    .systems {
        filter: grayscale(80%);
        background-image: url('https://cdn.pixabay.com/photo/2015/07/06/17/05/industry-833517_1280.jpg');
    }

    .dot {
        width: 120%;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.03;
        z-index: -100;
    }

    .subpage-contents {
        min-height: 80vh;
        width: 60%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: var(--black);
        border-radius: 30px;
    }

    .subpage-contents h3 {
        text-transform: uppercase;
        letter-spacing: 0.05rem;
        color: var(--primary-300);
        font-weight: 400;
        margin: 1rem;
        text-align: center;
    }

    .subpage-icon {
        display: none;
        position: absolute;
        top: 5%;
        left: 20%;
        font-size: 10rem;
        color: var(--primary-100);
    }

    .subpage-title {
        padding-left: 1rem;
        margin-bottom: 1rem;
        border-left: 3px solid var(--primary-300);
    }

    .subpage-description {
        margin: 1.5rem 4rem;
        line-height: 2;
        letter-spacing: 0.05rem;
        text-align: justify;
    }

    .subpage-description p {
        margin: 1rem 0;
        font-weight: 400;
    }

    .subpage-btn {
        width: 40%;
        margin: 1rem;
    }

    .banner-container {
        position: relative;
        z-index: 100;
    }

    @media (max-width: 1510px) {
        .img-container {
            min-height: 40vh;
        }
    }

    @media (max-width: 1150px) {
        .subpage-contents {
            width: 70%;
        }

        .subpage-title {
            font-size: 1.4rem;
        }

        .subpage-description {
            margin: 1rem 3rem;
        }

        .subpage-description p {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 760px) {
        .subpage-contents {
            width: 90%;
        }

        .subpage-title {
            font-size: 1.3rem;
        }
    }

    @media (max-width: 630px) {
        .subpage-container {
            min-height: 90vh;
        }

        .subpage-contents {
            min-height: 100vh;
        }
    }

    @media (max-width: 605px) {
        .subpage-title {
            font-size: 1.2rem;
            text-align: center;
        }

        .subpage-description {
            line-height: 1.7;
        }

        .subpage-container h3 {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 500px) {
        .subpage-container {
            min-height: 110vh;
        }

        .subpage-description {
            margin: 0.75rem 2rem;
        }

        .subpage-title {
            font-size: 1.1rem;
            margin-bottom: 0;
        }
    }

    @media (max-width: 460px) {
        .subpage-container {
            min-height: 130vh;
        }
    }
`;

export default Wrapper;
