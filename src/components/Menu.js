import React, { useRef } from 'react';
import Wrapper from '../assets/wrappers/Menu';
import { Link, useNavigate } from 'react-router-dom';
import links from '../utils/links';

function Menu() {
    const navigate = useNavigate();
    const menuRef = useRef(null);

    const handleChangePage = (path) => {
        navigate(path);
    };

    return (
        <Wrapper>
            <div className="menu-container">
                <Link to="/">
                    <h1>Skill Boost Quality</h1>
                </Link>
                <nav className="menu" ref={menuRef}>
                    {links.map(({ id, text, path, cls }) => {
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
                    })}
                </nav>
            </div>
        </Wrapper>
    );
}

export default Menu;
