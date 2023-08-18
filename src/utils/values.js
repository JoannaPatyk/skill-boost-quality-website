import React from 'react';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { GiPuzzle, GiLightBulb } from 'react-icons/gi';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';

const values = [
    {
        id: 0,
        icon: <PiBookOpenTextLight className="value-icon" />,
        title: 'Kompetencja',
        text: 'Nasza wiedza i doświadczenie są głęboko zakorzenione, co umożliwia nam oferowanie usług na absolutnie najwyższym poziomie. To nie tylko teoria, ale także praktyka, zdobywana przez lata pracy.'
    },
    {
        id: 1,
        icon: <GiPuzzle className="value-icon" />,
        title: 'Dostosowanie',
        text: 'Indywidualne podejście pozwala nam tworzyć spersonalizowane strategie i rozwiązania, które precyzyjnie odpowiadają na konkretne wyzwania. Nasze podejście opiera się na słuchaniu i zrozumieniu potrzeb naszych Klientów.'
    },
    {
        id: 2,
        icon: <AiOutlineSafetyCertificate className="value-icon" />,
        title: 'Uczciwość',
        text: 'Prowadzimy działalność w sposób oparty na zasadach etyki i uczciwości, zawsze kładąc nacisk na optymalne zaspokojenie potrzeb i oczekiwań naszych Klientów. W każdym aspekcie pracy dążymy do zachowania najwyższych standardów.'
    },
    {
        id: 3,
        icon: <GiLightBulb className="value-icon" />,
        title: 'Innowacje',
        text: 'Nieustannie wprowadzamy świeże i innowacyjne podejścia do analizy oraz rozwiązywania różnorodnych problemów. Nasza wyjątkowa kreatywność stanowi kluczowy czynnik, który przyczynia się do tworzenia niekonwencjonalnych strategii.'
    }
];

export default values;
