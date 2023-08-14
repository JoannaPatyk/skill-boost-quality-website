import React from 'react';
import Wrapper from '../assets/wrappers/Information';
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

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
                                identyfikacja obszarów poprawy, ale także dostarczanie konkretnych rozwiązań i narzędzi,
                                które skutkują realnym wzrostem wydajności działalności.
                            </p>
                        </div>
                    </div>
                    <div className="services">
                        <div className="element-title">
                            <h2>Usługi</h2>
                        </div>
                        <div className="element-text">
                            <Link to="/systems-audit">
                                <p>
                                    <MdKeyboardDoubleArrowRight className="banner-icon" />
                                    Audyty systemów zarządzania
                                </p>
                            </Link>

                            <Link to="/expertise">
                                <p>
                                    <MdKeyboardDoubleArrowRight className="banner-icon" />
                                    Ekspertyza oceny zgodności w branży spożywczej
                                </p>
                            </Link>

                            <Link to="/operations-companies">
                                <p>
                                    <MdKeyboardDoubleArrowRight className="banner-icon" />
                                    Optymalizacja systemów zarządzania
                                </p>
                            </Link>

                            <Link to="/training">
                                <p>
                                    <MdKeyboardDoubleArrowRight className="banner-icon" />
                                    Szkolenia Podnoszenie kwalifikacji pracowników
                                </p>
                            </Link>

                            <Link to="/washing-audit">
                                <p>
                                    <MdKeyboardDoubleArrowRight className="banner-icon" />
                                    Audyty Mycia i Dezynfekcji Ferm drobiu
                                </p>
                            </Link>
                        </div>
                    </div>
                    <div className="data">
                        <div className="element-title">
                            <h2>Dane</h2>
                        </div>
                        <div className="element-text">
                            <p>
                                <span>Skill Boost Quality</span>
                            </p>
                            <p>NIP: 0000000000</p>
                            <p>REGON: 0000000000</p>
                        </div>
                    </div>

                    <div className="address">
                        <div className="element-title">
                            <h2>Adres</h2>
                        </div>
                        <div className="element-text">
                            <p>
                                <span>Skill Boost Quality</span>
                            </p>
                            <p>ul. Mickiewicza 10/45</p>
                            <p>31-234 Kraków</p>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Information;
