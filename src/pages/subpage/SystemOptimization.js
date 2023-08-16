import React from 'react';
import Wrapper from '../../assets/wrappers/Subpage';
import Subpage from '../../components/Subpage';

import { PiChartLineUp } from 'react-icons/pi';

function SystemOptimization() {
    const title = 'Optymalizacja systemów zarządzania';
    const description =
        'Firma nie tylko oferuje niezależne ekspertyzy oceny zgodności, ale także stanowi wszechstronne wsparcie dla firm spożywczych poprzez wdrażanie, analizę, prowadzenie oraz optymalizację systemów zarządzania jakością, bezpieczeństwem żywności i innymi kluczowymi aspektami operacyjnymi. To kompleksowe podejście ma na celu zapewnienie firmom solidnych fundamentów do osiągania i utrzymywania wysokich standardów, co przekłada się na efektywność, konkurencyjność i zaufanie Klientów. Wdrażanie odpowiednich systemów zarządzania to nie tylko spełnianie wymogów regulacyjnych, ale także budowanie struktur, które sprzyjają ciągłej poprawie procesów. Firma nie tylko pomaga w stworzeniu tych systemów, ale także dostosowuje je do specyficznych potrzeb każdej firmy. Dzięki temu przedsiębiorstwa są w stanie skonstruować elastyczne ramy pracy, które mogą dostosowywać się do zmieniających się wymagań rynku i regulacji.';

    return (
        <Wrapper>
            <Subpage title={title} description={description} icon={<PiChartLineUp />} />
        </Wrapper>
    );
}

export default SystemOptimization;
