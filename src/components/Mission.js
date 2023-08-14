import React from 'react';
import Wrapper from '../assets/wrappers/Mission';
import bg from '../assets/img/geometric.png';

function Mission() {
    return (
        <Wrapper>
            <div className="mission-container">
                <h1>
                    Moja misją jest <span>wzmocnienie umiejętności i jakości</span> naszych Klientów.
                </h1>
                <div className="mission-text">
                    <p>
                        Naszym głównym celem jest nie tylko identyfikacja obszarów, w których istnieje potencjał do
                        poprawy, lecz także dostarczanie spersonalizowanych i innowacyjnych rozwiązań, które generują
                        realne, mierzalne wzrosty wydajności i jakości w ich działalności.
                    </p>
                    <p>
                        Poprzez naszą zaawansowaną wiedzę branżową i strategie dostosowane do indywidualnych potrzeb,
                        dążymy do przekształcania perspektyw naszych klientów, umożliwiając im osiągnięcie nowych
                        poziomów doskonałości oraz zwiększenie konkurencyjności na rynku.
                    </p>
                </div>

                <img src={bg} className="bg-image" alt="" />
            </div>
        </Wrapper>
    );
}

export default Mission;
