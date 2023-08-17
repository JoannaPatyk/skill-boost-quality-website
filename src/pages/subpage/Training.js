import React from 'react';

import Wrapper from '../../assets/wrappers/ServicesSubpage';
import ServicesSubpage from '../../components/ServicesSubpage';

import contentTraining from '../../utils/contentTraining';

function Training() {
    return (
        <Wrapper>
            <ServicesSubpage {...contentTraining} />
        </Wrapper>
    );
}

export default Training;
