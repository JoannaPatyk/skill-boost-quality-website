import React from 'react';
import Wrapper from '../assets/wrappers/Information';
import ServiceLink from './ServiceLink';
import services from '../utils/services';

function Information() {
    return (
        <Wrapper>
            <div className="information-container">
                <div className="elements">
                    <div className="mission">
                        <div className="element-title">
                            <h2>Misja</h2>
                        </div>
                        <div className="element-text">
                            <p>
                                Misją <span>Skill Boost Quality</span> jest wzmocnienie umiejętności naszych Klientów
                                poprzez dostarczanie wysokiej jakości usług konsultingowych. Naszym celem jest nie tylko
                                identyfikacja obszarów poprawy, ale także dostarczanie konkretnych rozwiązań, które
                                skutkują realnym wzrostem wydajności działalności.
                            </p>
                        </div>
                    </div>

                    <div className="services">
                        <div className="element-title">
                            <h2>Usługi</h2>
                        </div>
                        <div className="element-text">
                            {services.map((service, index) => (
                                <ServiceLink key={index} to={service.to} title={service.title} />
                            ))}
                        </div>
                    </div>

                    <div className="data">
                        <div className="element-title">
                            <h2>Adres</h2>
                        </div>
                        <div className="element-text">
                            <span>Skill Boost Quality</span>
                            <p>ul. Mickiewicza 10/45</p>
                            <p>31-234 Kraków</p>
                            <p>NIP: 0000000000</p>
                            <p>REGON: 0000000000</p>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Information;
