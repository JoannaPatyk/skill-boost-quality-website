import React from 'react';

import Wrapper from '../../assets/wrappers/ServicesSubpage';
import ServicesSubpage from '../../components/ServicesSubpage';

import contentWashingAudit from '../../utils/contentWashingAudit';

function WashingAudit() {
    return (
        <Wrapper>
            <ServicesSubpage {...contentWashingAudit} />
        </Wrapper>
    );
}

export default WashingAudit;
