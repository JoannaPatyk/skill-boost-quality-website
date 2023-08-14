import React from 'react';
import Wrapper from '../assets/wrappers/Menu';
import MenuElements from './MenuElements';

function Menu() {
    return (
        <Wrapper>
            <div className="menu-container">
                <h1>Skill Boost Quality</h1>
                <MenuElements />
            </div>
        </Wrapper>
    );
}

export default Menu;
