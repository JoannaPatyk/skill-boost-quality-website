import React from 'react';
import Wrapper from '../assets/wrappers/Mission';
import backgroundImage from '../assets/img/geometric.png';
import chickenImage from '../assets/img/chicken.png';

function Mission() {
    return (
        <Wrapper>
            <div className="mission-container">
                <section className="mission-text">
                    <h1>
                        Naszą misją jest <span>wzmocnienie umiejętności i jakości</span> naszych Klientów
                    </h1>
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
                <img src={chickenImage} className="chickenImage" alt="Kura" />
                <img src={backgroundImage} className="backgroundImage" alt="Tło" />
            </div>
        </Wrapper>
    );
}

export default Mission;
