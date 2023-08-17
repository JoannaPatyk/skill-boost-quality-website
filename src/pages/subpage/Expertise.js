import React from 'react';

import Wrapper from '../../assets/wrappers/ServicesSubpage';
import ServicesSubpage from '../../components/ServicesSubpage';

import contentExpertise from '../../utils/contentExpertise';

function Expertise() {
    return (
        <Wrapper>
            <ServicesSubpage {...contentExpertise} />
        </Wrapper>
    );
}

export default Expertise;
