import React from 'react';
import Wrapper from '../assets/wrappers/Information';

function Information() {
    return (
        <Wrapper>
            <div className="information-container">
                <div className="elements">
                    <div className="mission">
                        <h2>Misja</h2>
                        <h5>
                            Misją <span>Skill Boost Quality</span> jest wzmocnienie umiejętności naszych Klientów
                            poprzez dostarczanie wysokiej jakości usług konsultingowych. Naszym celem jest nie tylko
                            identyfikacja obszarów poprawy, ale także dostarczanie konkretnych rozwiązań i narzędzi,
                            które skutkują realnym wzrostem wydajności działalności.
                        </h5>
                    </div>
                    <div className="data">
                        <h2>Dane</h2>
                        <p>Skill Boost Quality</p>
                        <p>NIP: 0000000000</p>
                        <p>REGON: 0000000000</p>
                    </div>
                    <div className="address">
                        <h2>Adres</h2>
                        <p>Skill Boost Quality</p>
                        <p>ul. Mickiewicza 10/45</p>
                        <p>31-234 Kraków</p>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Information;
