import React from 'react';
import Wrapper from '../../assets/wrappers/Subpage';
import Subpage from '../../components/Subpage';
import { PiCertificateLight } from 'react-icons/pi';

function Training() {
    const title = 'Szkolenia i podnoszenie kwalifikacji';
    const description =
        'Dodatkowym elementem działalności firmy jest organizacja specjalistycznych szkoleń dla pracowników oraz kadry zarządzającej w firmach spożywczych. Szkolenia te mają znaczenie w kontekście podnoszenia kwalifikacji, świadomości oraz kompetencji zespołu, co skutkuje wyższą jakością produkcji i ogólnego działania firmy. Szkolenia, którę oferuję stanowią cenny wkład w rozwój kapitału ludzkiego w branży spożywczej. W miarę jak przemysł ten staje się coraz bardziej złożony i regulowany, odpowiednio przeszkolona kadra pracownicza jest niezbędna dla efektywnej i zgodnej z przepisami pracy. Podnoszenie kwalifikacji pracowników ma bezpośredni wpływ na jakość produkcji. Dobrze przeszkolony personel jest bardziej świadomy procesów i zagrożeń, co przekłada się na lepsze wykrywanie i zapobieganie problemom. W rezultacie, produkty wychodzące z linii produkcyjnej są bardziej spójne, bezpieczne i zgodne z normami jakościowymi.';

    return (
        <Wrapper>
            <Subpage title={title} description={description} icon={<PiCertificateLight />} />
        </Wrapper>
    );
}

export default Training;
