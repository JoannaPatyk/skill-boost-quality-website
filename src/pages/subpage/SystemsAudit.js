import React from 'react';

import Wrapper from '../../assets/wrappers/ServicesSubpage';
import ServicesSubpage from '../../components/ServicesSubpage';

import contentSystemsAudit from '../../utils/contentSystemsAudit';

function SystemsAudit() {
    return (
        <Wrapper>
            <ServicesSubpage {...contentSystemsAudit} />
        </Wrapper>
    );
}

export default SystemsAudit;
