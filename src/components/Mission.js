import React from 'react';
import Wrapper from '../assets/wrappers/Mission';
import backgroundImage from '../assets/img/geometric.png';

function Mission() {
    return (
        <Wrapper>
            <div className="mission-container">
                <h1>
                    Naszą misją jest <span>wzmocnienie umiejętności i jakości</span> naszych Klientów.
                </h1>
                <section className="mission-text">
                    <article>
                        <h2>Identyfikacja obszarów poprawy</h2>
                        <p>
                            Naszym głównym celem jest identyfikacja obszarów, w których istnieje potencjał do poprawy.
                            Dostarczamy spersonalizowane i innowacyjne rozwiązania, które generują mierzalny wzrost
                            wydajności i jakości działalności.
                        </p>
                    </article>
                    <article>
                        <h2>Zaawansowana wiedza i konkurencyjność</h2>
                        <p>
                            Wykorzystując naszą zaawansowaną wiedzę branżową oraz dostosowane strategie, przekształcamy
                            perspektywy naszych klientów, umożliwiając im osiągnięcie doskonałości i zwiększenie
                            konkurencyjności na rynku.
                        </p>
                    </article>
                </section>
                <img src={backgroundImage} className="bg-image" alt="Tło" />
            </div>
        </Wrapper>
    );
}

export default Mission;
