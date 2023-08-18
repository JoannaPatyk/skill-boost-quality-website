import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Wrapper from '../assets/wrappers/Information';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

function ServiceLink({ to, title }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to);
        window.scrollTo(0, 0);
    };

    return (
        <Wrapper>
            <button id="service-link-menu" onClick={handleClick}>
                <MdKeyboardDoubleArrowRight className="banner-icon" />
                <p>{title}</p>
            </button>
        </Wrapper>
    );
}

ServiceLink.propTypes = {
    title: PropTypes.string,
    to: PropTypes.string
};

export default ServiceLink;
