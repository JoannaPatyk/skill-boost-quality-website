import React from 'react';
import Wrapper from '../../assets/wrappers/Subpage';
import Subpage from '../../components/Subpage';
import { GiChicken } from 'react-icons/gi';

function WashingAudit() {
    const title = 'Audyty mycia i dezynfekcji ferm drobiu';
    const description =
        'Firma przeprowadza kompleksowe audyty mycia i dezynfekcji ferm drobiu, które mają na celu zapewnienie, że środowisko w fermach jest czyste, bezpieczne i zgodne z regulacjami branżowymi. Zagwarantowanie czystego i bezpiecznego środowiska w fermach drobiu jest niezwykle istotne dla zapobiegania potencjalnym zagrożeniom zdrowotnym. Audyty te pozwalają na identyfikację ewentualnych luk w procedurach mycia i dezynfekcji, co umożliwia wdrożenie skutecznych działań naprawczych. W rezultacie, ryzyko związane z przenoszeniem chorób czy infekcji zostaje znacznie ograniczone, co ma kluczowe znaczenie dla zdrowia ludzi oraz jakości produktów pochodzących z hodowli.';
    return (
        <Wrapper>
            <Subpage title={title} description={description} icon={<GiChicken />} />
        </Wrapper>
    );
}

export default WashingAudit;
