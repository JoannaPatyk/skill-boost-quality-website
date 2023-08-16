import React from 'react';
import Wrapper from '../../assets/wrappers/Subpage';
import Subpage from '../../components/Subpage';
import { PiFactory } from 'react-icons/pi';

function Expertise() {
    const title = 'Niezależna ekspertyza oceny zgodności w branży spożywczej';
    const description =
        'Niezależna ekspertyza oceny zgodności w branży spożywczej stanowi niezastąpiony filar wspierający firmy w osiąganiu doskonałości operacyjnej i zapewnianiu najwyższej jakości swoich produktów. Działając jako zewnętrzny obserwator, podejmuje się misji oceny procesów, produktów i systemów w firmach spożywczych w sposób całkowicie obiektywny. W dzisiejszym dynamicznym i rygorystycznym środowisku regulacyjnym, zachowanie zgodności z wymaganiami prawnymi i standardami jakościowymi staje się kluczowe dla sukcesu firmy. Właśnie dlatego niezależne ekspertyzy oceny zgodności zdobywają coraz większe znaczenie. Firmy, które skorzystają z tych usług, mogą być pewne, że ich procedury produkcyjne, składniki używane w produkcji oraz systemy kontroli są w pełni zgodne z przepisami.';

    return (
        <Wrapper>
            <Subpage title={title} description={description} icon={<PiFactory />} />
        </Wrapper>
    );
}

export default Expertise;
