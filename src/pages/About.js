import React from 'react';
import Wrapper from '../assets/wrappers/About';
import men from '../assets/img/men.jpg';
import { HiArrowLongDown } from 'react-icons/hi2';
import dot from '../assets/img/dot.png';

function About() {
    return (
        <Wrapper>
            <div className="about-container">
                <div className="background-img-container">
                    <div className="img-container">
                        <img src={men} className="men-img" alt="Zdjęcie profilowe" />
                    </div>
                    <h2>POZNAJMY SIĘ!</h2>
                    <HiArrowLongDown className="arrow" />
                    <img src={dot} className="dot" alt="" />
                </div>

                <div className="about-description-container">
                    <hr />

                    <div className="about-description">
                        <p>
                            Moja przygoda w przemyśle spożywczym rozpoczęła się w 2012 roku jako Line Leader w zakładzie
                            produkującym przyprawy w Wielkiej Brytanii. Pasja do kulinariów i zaangażowanie w pracę nad
                            produkcją wysokiej jakości produktów sprawiły, że szybko zyskałem uznanie w zespole.{' '}
                        </p>
                        <HiArrowLongDown className="arrow" />
                        <p>
                            Młody wiek nie był dla mnie przeszkodą w zdobyciu zaufania współpracowników i
                            przełożonych.Jako Junior Production Supervisor, mając niespełna 25 lat, dostałem możliwość
                            zarządzania produkcją przypraw i sosów w tej samej brytyjskiej firmie. Dzięki zaangażowaniu
                            i pracy w zespole, osiągnąłem wyższe poziomy wydajności i jakości produkcji.
                        </p>
                        <HiArrowLongDown className="arrow" />
                        <p>
                            W 2015 roku, mając 26 lat, awansowałem na stanowisko Senior Factory Supervisor, gdzie
                            pełniłem nadzór nad całym procesem produkcyjnym. Zdolności organizacyjne, umiejętności
                            audytowe i zrozumienie procedur produkcyjnych przyczyniły się do osiągnięcia wyjątkowych
                            wyników.
                        </p>
                        <HiArrowLongDown className="arrow" />
                        <p>
                            W wieku 27 lat, w 2016 roku, doceniając moją zdolności w zakresie kontroli jakości, firma
                            mianowała mnie na stanowisko Senior QA Supervisor. Moim zadaniem było wdrażanie standardów
                            jakościowych, takich jak BRC, w produkcji przypraw i sosów. Dzięki staraniom i konsekwentnej
                            pracy, zakład zdobył certyfikat BRC na poziomie AA+, co było znaczącym osiągnięciem dla
                            firmy.
                        </p>
                        <HiArrowLongDown className="arrow" />
                        <p>
                            W wieku 29 lat, w 2018 roku, rozpoczęła się nowa przygoda, gdy przeprowadziłem się do Polski
                            rozpoczynając pracę w zakładzie przodującym toppery na jogurty. Dostałem stanowisko Deputy
                            Quality Manager, a moje główne zadanie polegało na nadzorowaniu i wprowadzaniu systemów
                            kontroli jakości oraz audytów w nowej lokalizacji.
                        </p>
                        <HiArrowLongDown className="arrow" />
                        <p>
                            Obecnie, mając 34 lata, nadal pełnie funkcję Quality Control Manager w Polskim zakładzie.
                            Teraz produkcja obejmuje świeże mięso drobiowe oraz surowe wyroby mięsne. Doświadczenie,
                            umiejętności audytowe i zdolności w rozwiązywaniu problemów przyczyniły się do znaczącej
                            poprawy procesów produkcyjnych i kontroli jakości.
                        </p>
                        <HiArrowLongDown className="arrow" />
                        <p>
                            Ścieżka kariery mojej osoby jest niesamowitym przykładem sukcesu w przemyśle spożywczym,
                            osiągniętego w stosunkowo młodym wieku. Zaangażowanie w ciągłe doskonalenie, zdolności
                            analityczne i zdobycze w zakresie standardów jakościowych takich jak BRC pomogły mi osiągnąć
                            sukcesy na każdym etapie kariery. Jestem nie tylko dumny z własnych osiągnięć, ale także z
                            dumą reprezentuje firmę, która dzięki ciężkiej pracy zdobyła uznanie jako producent wysokiej
                            jakości produktów spożywczych w Europie.
                        </p>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default About;
