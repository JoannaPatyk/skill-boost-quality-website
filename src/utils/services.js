import React from 'react';
import { PiCertificateLight, PiChartLineUp, PiFactory } from 'react-icons/pi';
import { GiChicken } from 'react-icons/gi';
import { SlMagnifier } from 'react-icons/sl';
import { FaHandshakeAngle } from 'react-icons/fa6';

const services = [
    {
        id: 0,
        icon: <GiChicken className="service-icon" />,
        title: 'Audyty mycia i dezynfekcji ferm drobiu',
        description:
            'Przeprowadzamy kompleksowe audyty mycia i dezynfekcji ferm drobiu, które mają na celu zapewnienie, że środowisko w fermach jest czyste, bezpieczne i zgodne z regulacjami branżowymi. Decydując się na usługę możesz uniknąć ryzyka związanego z potencjalnymi zagrożeniami zdrowotnymi.',
        cls: 'washing',
        to: '/washing-audit'
    },
    {
        id: 1,
        icon: <PiCertificateLight className="service-icon" />,
        title: 'Szkolenia podnoszenie kwalifikacji',
        description:
            'Organizujemy szkolenia dla pracowników oraz kadry zarządzającej w firmach spożywczych. Szkolenia pomagają podnosić kwalifikacje, świadomość oraz kompetencje pracowników, przyczyniając się do lepszej jakości produkcji i działania firmy, przynoszą lepsze rezultaty.',
        cls: 'training',
        to: '/training'
    },
    {
        id: 2,
        icon: <FaHandshakeAngle className="service-icon" />,
        title: 'Audyty systemów zarządzania',
        description:
            'Przeprowadzamy różnego rodzaju audyty systemów zarządzania. Obejmujące audyty wewnętrzne, pierwszej strony, w których analizuje się zgodność z wewnętrznymi standardami oraz politykami firmy. Druga strona dotyczy dostawców, zapewniając, że ich działania są zgodni z wymaganiami.',
        cls: 'systems',
        to: '/systems-audit'
    },
    {
        id: 3,
        icon: <PiFactory className="service-icon" />,
        title: 'Ekspertyza oceny zgodności',
        description:
            'Dokonujemy niezależnych ekspertyz oceny zgodności. Przeprowadza obiektywne oceny procesów, produktów i systemów w firmach spożywczych. Dzięki temu firmy mogą być pewne, że ich działania są zgodne z wymaganiami regulacyjnymi i standardami jakościowymi.',
        cls: 'expertise',
        to: '/expertise'
    },
    {
        id: 4,
        icon: <SlMagnifier className="service-icon" />,
        title: 'Zewnętrzne spojrzenie na działanie firmy',
        description:
            'Dostarczamy zewnętrzne spojrzenie na działanie firm w branży spożywczej, co pozwala na identyfikację obszarów do poprawy oraz optymalizacji. To niewątpliwie przyczynia się do podniesienia konkurencyjności i efektywności operacyjnej.',
        cls: 'operations',
        to: '/company-operations'
    },
    {
        id: 5,
        icon: <PiChartLineUp className="service-icon" />,
        title: 'Optymalizacja systemów zarządzania',
        description:
            'Wspieramy firmy w wdrażaniu, analizie, prowadzeniu oraz optymalizacji systemów zarządzania jakością, bezpieczeństwem żywności oraz innymi aspektami operacyjnymi co pomaga osiągnąć i utrzymać wysoki poziom standardów.',
        cls: 'optimization',
        to: '/system-optimization'
    }
];

export default services;
