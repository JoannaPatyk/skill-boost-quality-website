import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Wrapper from '../assets/wrappers/Services';

import Banner from '../components/Banner';
import Information from '../components/Information';

import services from '../utils/services';

function Services() {
    const navigate = useNavigate();

    const handleLinkClick = (to) => {
        navigate(to);
        window.scrollTo(0, 0);
    };

    const renderedServices = services.map(({ id, icon, title, description, to }) => (
        <div className="service" key={id}>
            {icon}
            <h3>{title}</h3>
            <p>{description}</p>
            <Link to={to} className="btn service-btn" onClick={() => handleLinkClick(to)}>
                więcej
            </Link>
        </div>
    ));

    return (
        <Wrapper>
            <div className="img-container"></div>
            <div className="services-container"></div>
            <div className="services-title">
                <h2>
                    Zapoznaj się z <span>szeroką ofertą usług</span>, które skutecznie przyspieszą rozwój Twojego
                    przedsiębiorstwa!
                </h2>
                <h3>
                    Czy zastanawiałeś się kiedyś, jak zwiększyć wydajność i efektywność swojego firmy? Teraz masz szansę
                    dowiedzieć się tego dzięki naszym profesjonalnym usługą! Jestem pasjonatem branży drobiarskiej,
                    gotowym pomóc Ci w osiągnięciu optymalnych wyników...
                </h3>
            </div>
            <div className="services-description">{renderedServices}</div>
            <Banner />
            <Information />
        </Wrapper>
    );
}

export default Services;
