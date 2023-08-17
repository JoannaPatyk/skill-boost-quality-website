import React from 'react';

import Wrapper from '../../assets/wrappers/ServicesSubpage';
import ServicesSubpage from '../../components/ServicesSubpage';

import contentSystemOptimization from '../../utils/contentSystemOptimization';

function SystemOptimization() {
    return (
        <Wrapper>
            <ServicesSubpage {...contentSystemOptimization} />
        </Wrapper>
    );
}

export default SystemOptimization;
