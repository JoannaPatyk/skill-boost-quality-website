import React from 'react';
import Wrapper from '../assets/wrappers/Services';
import { PiCertificateLight, PiChartLineUp, PiFactory } from 'react-icons/pi';
import { GiChicken } from 'react-icons/gi';
import { SlMagnifier } from 'react-icons/sl';
import { FaHandshakeAngle } from 'react-icons/fa6';
import Banner from '../components/Banner';
import Information from '../components/Information';

function Services() {
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
            <div className="services-description">
                <div className="service">
                    <FaHandshakeAngle className="service-icon" />
                    <h3>Audyty systemów zarządzania</h3>
                    <p>
                        Przeprowadzenie audytów systemów zarządzania, w tym wewnętrzne i dostawców,{' '}
                        <span>dostarczając cennych wskazówek</span> dla doskonalenia procesów i relacji biznesowych.
                    </p>
                    <button className="btn service-btn">dowiedz się więcej</button>
                </div>
                <div className="service">
                    <GiChicken className="service-icon" />
                    <h3>Audyty mycia i dezynfekcji ferm drobiu</h3>
                    <p>
                        Kompleksowe audyty mycia i dezynfekcji ferm drobiu, które mają na celu zapewnienie, że ich
                        środowisko jest czyste, bezpieczne i <span>zgodne z regulacjami branżowymi</span>.
                    </p>
                    <button className="btn service-btn">dowiedz się więcej</button>
                </div>
                <div className="service">
                    <PiFactory className="service-icon" />
                    <h3>Ekspertyza oceny zgodności</h3>
                    <p>
                        Niezależne ekspertyzy oceny zgodności procesów, produktów i systemów w firmach spożywczych,
                        potwierdzające, że <span>działania są zgodne z wymaganiami</span> regulacyjnymi i standardami.
                    </p>
                    <button className="btn service-btn">dowiedz się więcej</button>
                </div>
                <div className="service">
                    <SlMagnifier className="service-icon" />
                    <h3>Zewnętrzne spojrzenie na działanie firmy</h3>
                    <p>
                        Zewnętrzne spojrzenie na działanie firm w branży spożywczej, identyfikacja obszarów do poprawy
                        oraz optymalizacji co przyczynia się do{' '}
                        <span>podniesienia konkurencyjności i efektywności</span>.
                    </p>
                    <button className="btn service-btn">dowiedz się więcej</button>
                </div>
                <div className="service">
                    <PiChartLineUp className="service-icon" />
                    <h3>Optymalizacja systemów zarządzania</h3>
                    <p>
                        Wsparcie w wdrażaniu, analizie, prowadzeniu oraz <span>optymalizacji systemów zarządzania</span>
                        jakością, bezpieczeństwem żywności oraz innymi aspektami operacyjnymi.
                    </p>
                    <button className="btn service-btn">dowiedz się więcej</button>
                </div>
                <div className="service">
                    <PiCertificateLight className="service-icon" />
                    <h3>Szkolenia i podnoszenie kwalifikacji</h3>
                    <p>
                        Szkolenia dla pracowników oraz kadry zarządzającej w firmach spożywczych, które pomagają
                        <span>podnosić kwalifikacje</span>, świadomość oraz kompetencje pracowników.
                    </p>
                    <button className="btn service-btn">dowiedz się więcej</button>
                </div>
            </div>
            <Banner />
            <Information />
        </Wrapper>
    );
}

export default Services;
