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
            'Przeprowadzamy kompleksowe audyty mycia i dezynfekcji ferm drobiu, które mają na celu zapewnienie, że środowisko w fermach jest bezpieczne i zgodne z regulacjami.',
        cls: 'washing',
        to: '/washing-audit'
    },
    {
        id: 1,
        icon: <PiCertificateLight className="service-icon" />,
        title: 'Szkolenia podnoszenie kwalifikacji',
        description:
            'Organizujemy szkolenia dla pracowników oraz kadry zarządzającej które pomagają podnosić kwalifikacje oraz kompetencje, przyczyniając się do lepszej jakości produkcji.',
        cls: 'training',
        to: '/training'
    },
    {
        id: 2,
        icon: <FaHandshakeAngle className="service-icon" />,
        title: 'Audyty systemów zarządzania',
        description:
            'Oferujemy wewnętrzne i zewnętrzne audyty systemów zarządzania. Wewnętrzne, w których analizuje się zgodność ze standardami i zewnętrzne, zapewniające, że działania dostawców są zgodne z wymaganiami.',
        cls: 'systems',
        to: '/systems-audit'
    },
    {
        id: 3,
        icon: <PiFactory className="service-icon" />,
        title: 'Ekspertyza oceny zgodności',
        description:
            'Dokonujemy niezależnych ekspertyz oceny zgodności, oceny procesów, produktów i systemów. Dzięki temu firmy mogą być pewne, że ich działania są zgodne z wymaganiami i standardami jakościowymi.',
        cls: 'expertise',
        to: '/expertise'
    },
    {
        id: 4,
        icon: <SlMagnifier className="service-icon" />,
        title: 'Zewnętrzne spojrzenie na działanie firmy',
        description:
            'Dostarczamy świeże, zewnętrzne spojrzenie na działanie firm, co pozwala na identyfikację obszarów do poprawy, co przyczynia się do podniesienia konkurencyjności i efektywności.',
        cls: 'operations',
        to: '/company-operations'
    },
    {
        id: 5,
        icon: <PiChartLineUp className="service-icon" />,
        title: 'Optymalizacja systemów zarządzania',
        description:
            'Wspieramy w analizie oraz optymalizacji systemów zarządzania jakością, bezpieczeństwem żywności oraz innymi aspektami operacyjnymi co pomaga osiągnąć i utrzymać wysoki poziom.',

        cls: 'optimization',
        to: '/system-optimization'
    }
];

export default services;
