import React from 'react';
import Wrapper from '../../assets/wrappers/Subpage';
import Subpage from '../../components/Subpage';
import { SlMagnifier } from 'react-icons/sl';

function CompanyOperations() {
    const title = 'Zewnętrzne spojrzenie na działanie firmy';
    const description =
        'Identyfikacja obszarów do poprawy jest kluczowym etapem w doskonaleniu działalności przedsiębiorstwa. Firma, mając doświadczenie w branży spożywczej i głęboką wiedzę o regulacjach oraz standardach, jest w stanie wskazać na obszary, które wymagają ulepszenia lub optymalizacji. To może dotyczyć zarówno procesów produkcyjnych, jak i systemów kontroli jakości czy zarządzania bezpieczeństwem żywności. Optymalizacja, czyli doskonalenie istniejących procesów w celu zwiększenia efektywności, jest kluczowym elementem w dążeniu do osiągnięcia wyższych standardów i konkurencyjności. Dzięki zewnętrznej ekspertyzie, firma może zaproponować innowacyjne rozwiązania, które mogą przyczynić się do skrócenia czasu produkcji, redukcji kosztów czy zwiększenia wydajności. To pozwala firmom nie tylko osiągać lepsze wyniki finansowe, ale także reagować szybciej na zmieniające się potrzeby rynku.';

    return (
        <Wrapper>
            <Subpage title={title} description={description} icon={<SlMagnifier />} />
        </Wrapper>
    );
}

export default CompanyOperations;
