import { PiCertificateLight, PiChartLineUp, PiFactory } from 'react-icons/pi';
import { GiChicken } from 'react-icons/gi';
import { FaHandshakeAngle } from 'react-icons/fa6';

const services = [
    {
        id: 0,
        icon: <GiChicken />,
        title: 'Audyty mycia i dezynfekcji ferm drobiu',
        text: 'Firma przeprowadza kompleksowe audyty mycia i dezynfekcji ferm drobiu, które mają na celu zapewnienie, że środowisko w fermach jest czyste, bezpieczne i zgodne z regulacjami branżowymi. Dzięki tym audytom, firmy hodowlane mogą uniknąć ryzyka związanego z potencjalnymi zagrożeniami zdrowotnymi oraz zapewnić dobre warunki hodowli zwierząt.',
        cls: 'washing'
    },
    {
        id: 1,
        icon: <PiCertificateLight />,
        title: 'Szkolenia podnoszenie kwalifikacji',
        text: ' Firma organizuje szkolenia dla pracowników oraz kadry zarządzającej w firmach spożywczych. Te szkolenia pomagają podnosić kwalifikacje, świadomość oraz kompetencje pracowników, przyczyniając się do lepszej jakości produkcji i działania firmy',
        cls: 'training'
    },
    {
        id: 2,
        icon: <FaHandshakeAngle />,
        title: 'Audyty systemów zarządzania',
        text: 'Firma specjalizuje się w przeprowadzaniu różnych rodzajów audytów systemów zarządzania. Obejmuje to audyty wewnętrzne, pierwszej strony, w których analizuje się zgodność z wewnętrznymi standardami oraz politykami firmy. Druga strona audytuje zaś dostawców, zapewniając, że są zgodni z wymaganiami jakości i bezpieczeństwa. Wyniki tych audytów dostarczają cennych informacji i wskazówek dla firm, pomagając im doskonalić swoje procesy i wzmocnić relacje z dostawcami.',
        cls: 'systems'
    },
    {
        id: 3,
        icon: <PiFactory />,
        title: 'Niezależna ekspertyza oceny zgodności w branży spożywczej',
        text: 'Firma oferuje niezależne ekspertyzy oceny zgodności, co oznacza, że przeprowadza obiektywne oceny procesów, produktów i systemów w firmach spożywczych. Dzięki temu firmy mogą być pewne, że ich działania są zgodne z wymaganiami regulacyjnymi i standardami jakościowymi.',
        cls: 'expertise'
    },
    {
        id: 4,
        icon: <PiChartLineUp />,
        title: 'Optymalizacja systemów zarządzania',
        text: 'Firma wspiera firmy w wdrażaniu, analizie, prowadzeniu oraz optymalizacji systemów zarządzania jakością, bezpieczeństwem żywności oraz innymi aspektami operacyjnymi. To pomaga firmom osiągnąć i utrzymać wysoki poziom standardów.',
        cls: 'operations'
    }
];

export default services;
