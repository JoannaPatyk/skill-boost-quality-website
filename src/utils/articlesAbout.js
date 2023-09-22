import React from 'react';
import { HiArrowLongDown } from 'react-icons/hi2';

const arrowIcon = <HiArrowLongDown className="arrow" />;

const sections = [
    {
        id: 0,
        icon: arrowIcon,
        content: [
            <p key={0}>
                Moja przygoda w przemyśle spożywczym <span>rozpoczęła się w 2012 roku jako Line Leader</span> w
                zakładzie produkującym przyprawy w Wielkiej Brytanii. Pasja do kulinariów i zaangażowanie w pracę nad
                produkcją wysokiej jakości produktów sprawiły, że szybko zyskałem uznanie w zespole.
            </p>
        ]
    },
    {
        id: 1,
        icon: arrowIcon,
        content: [
            <p key={0}>
                <span>Młody wiek nie był dla mnie przeszkodą w zdobyciu zaufania współpracowników i przełożonych.</span>{' '}
                Jako Junior Production Supervisor, mając niespełna 25 lat, dostałem możliwość zarządzania produkcją
                przypraw i sosów w tej samej brytyjskiej firmie. Dzięki zaangażowaniu i pracy w zespole, osiągnąłem
                wyższe poziomy wydajności i jakości produkcji.
            </p>
        ]
    },
    {
        id: 2,
        icon: arrowIcon,
        content: [
            <p key={0}>
                W 2015 roku, mając 26 lat, awansowałem na stanowisko Senior Factory Supervisor, gdzie pełniłem nadzór
                nad całym procesem produkcyjnym. Zdolności organizacyjne, umiejętności dotyczące audytu i zrozumienie
                procedur produkcyjnych przyczyniły się do osiągnięcia wyjątkowych wyników.
            </p>
        ]
    },
    {
        id: 3,
        icon: arrowIcon,
        content: [
            <p key={0}>
                W wieku 27 lat, w 2016 roku, doceniając moją zdolności w zakresie kontroli jakości, firma mianowała mnie
                na stanowisko Senior QA Supervisor. Moim zadaniem było wdrażanie standardów jakościowych, takich jak
                BRC, w produkcji przypraw i sosów.{' '}
                <span>
                    Dzięki staraniom i konsekwentnej pracy, zakład zdobył certyfikat BRC na poziomie AA+, co było
                    znaczącym osiągnięciem dla firmy.
                </span>
            </p>
        ]
    },
    {
        id: 4,
        icon: arrowIcon,
        content: [
            <p key={0}>
                W wieku 29 lat, w 2018 roku, rozpoczęła się nowa przygoda, gdy przeprowadziłem się do Polski
                rozpoczynając pracę w zakładzie przodującym toppery na jogurty. Dostałem stanowisko Deputy Quality
                Manager, a moje główne zadanie polegało na nadzorowaniu i wprowadzaniu systemów kontroli jakości oraz
                audytów w nowej lokalizacji.
            </p>
        ]
    },
    {
        id: 5,
        icon: arrowIcon,
        content: [
            <p key={0}>
                Obecnie, mając 34 lata, nadal pełnie funkcję Quality Control Manager w Polskim zakładzie. Teraz
                produkcja obejmuje świeże mięso drobiowe oraz surowe wyroby mięsne. Doświadczenie oraz umiejętności w
                rozwiązywaniu problemów przyczyniły się do znaczącej poprawy procesów produkcyjnych i kontroli jakości.
            </p>
        ]
    },
    {
        id: 6,
        icon: arrowIcon,
        content: [
            <p key={0}>
                Moja ścieżka kariery jest niesamowitym przykładem sukcesu w przemyśle spożywczym, osiągniętego w
                stosunkowo młodym wieku.{' '}
                <span>
                    Zaangażowanie w ciągłe doskonalenie, zdolności analityczne oraz osiągnięcia w zakresie standardów
                    jakościowych takich jak BRC pomogły mi uzyskać sukcesy na każdym etapie kariery.
                </span>
            </p>
        ]
    }
];

export default sections;
