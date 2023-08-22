import React, { useRef } from 'react';
import Wrapper from '../assets/wrappers/Menu';
import { Link, useNavigate } from 'react-router-dom';
import links from '../utils/links';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

function Menu() {
    const navigate = useNavigate();
    const menuRef = useRef(null);

    const handleChangePage = (path) => {
        navigate(path);
    };

    const displayMenu = links.map(({ id, text, path, cls }) => {
        return (
            <div
                className={`menu-element ${cls}`}
                role="button"
                tabIndex={0}
                key={id}
                onClick={() => handleChangePage(path)}
                onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        handleChangePage(path);
                    }
                }}
                onKeyUp={(event) => {
                    if (event.key === 'Escape') {
                        event.target.blur();
                    }
                }}
            >
                {text}
            </div>
        );
    });

    return (
        <Wrapper>
            <div className="menu-container">
                <Link to="/">
                    <h1>Skill Boost Quality</h1>
                </Link>
                <nav className="menu" ref={menuRef}>
                    {displayMenu}
                </nav>
                <div className="menu-box">
                    <HiOutlineMenuAlt3 className="menu-icon" />
                    <div className="small-menu">{displayMenu}</div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Menu;
