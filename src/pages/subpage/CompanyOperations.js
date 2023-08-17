import React from 'react';

import Wrapper from '../../assets/wrappers/ServicesSubpage';
import ServicesSubpage from '../../components/ServicesSubpage';

import contentCompanyOperations from '../../utils/contentCompanyOperations';

function CompanyOperations() {
    return (
        <Wrapper>
            <ServicesSubpage {...contentCompanyOperations} />
        </Wrapper>
    );
}

export default CompanyOperations;
