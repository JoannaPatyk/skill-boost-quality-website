import React from 'react';
import values from '../utils/values';
import Wrapper from '../assets/wrappers/Values';

function Values() {
    return (
        <Wrapper>
            <div className="values-container">
                <h1>
                    Jakie <span>wartości</span> mną kierują
                </h1>
                <div className="values">
                    {values.map(({ id, icon, title, text }) => {
                        return (
                            <div key={id} className="value">
                                {icon}
                                <h2>{title}</h2>
                                <p>{text}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Wrapper>
    );
}

export default Values;
