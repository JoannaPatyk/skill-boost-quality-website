import React, { useState, useEffect } from 'react';
import values from '../utils/values';
import Wrapper from '../assets/wrappers/Values';

function Values() {
    const [visibleValues, setVisibleValues] = useState([]);

    useEffect(() => {
        const handleScroll = () => {
            const newVisibleValues = values.map((_, index) => {
                const elementOffset = index * 250;
                return window.scrollY > elementOffset;
            });

            setVisibleValues(newVisibleValues);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Wrapper>
            <div className="values-container">
                <h1>
                    Jakie <span>wartości</span> kierują naszą firmą?
                </h1>
                <div className="values">
                    {values.map(({ id, icon, title, text }, index) => (
                        <div key={id} className={`value ${visibleValues[index] ? 'visible' : ''}`}>
                            {icon}
                            <h2>{title}</h2>
                            <p>{text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Wrapper>
    );
}

export default Values;
