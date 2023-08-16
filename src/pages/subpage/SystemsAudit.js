import React from 'react';
import Wrapper from '../../assets/wrappers/Subpage';
import Subpage from '../../components/Subpage';
import { FaHandshakeAngle } from 'react-icons/fa6';

function SystemsAudit() {
    const title = 'Audyty systemów zarządzania';
    const description =
        'Firma specjalizuje się w szerokim zakresie audytów systemów zarządzania, które obejmują zarówno analizę wewnętrzną, jak i zewnętrzną. Audyty wewnętrzne koncentrują się na ocenie zgodności procesów i działań firmy z jej własnymi standardami oraz politykami. Z kolei audyty zewnętrzne skupiają się na dostawcach, mając na celu zapewnienie, że spełniają one rygorystyczne wymagania jakościowe i bezpieczeństwa. Wyniki tych przeprowadzanych przez firmę audytów dostarczają firmom niezwykle cennych informacji i wskazówek. Analizy dokonywane podczas audytów umożliwiają identyfikację obszarów, które wymagają usprawnienia lub modyfikacji. Otrzymywane raporty zawierają precyzyjne dane dotyczące wykrytych niedoskonałości lub potencjalnych zagrożeń, co umożliwia firmom podejmowanie konkretnych działań naprawczych.';

    return (
        <Wrapper>
            <Subpage title={title} description={description} icon={<FaHandshakeAngle />} />
        </Wrapper>
    );
}

export default SystemsAudit;
