import React from 'react';
import { css, keyframes } from 'emotion';

const spinnerAnimation = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

function Spinner(props) {
    return <div className={css`
        display: inline-block;
        overflow: hidden;
    `}>
        <div className={css`
            display: inline-block;
            padding: 2px;
            animation: ${spinnerAnimation} 2s linear infinite;
        `}>
            <div
                className={css`
                    margin: auto;
                    width: 120px;
                    height: 120px;
                    border: 4px solid white;
                    border-top: 4px solid #132148;
                    border-radius: 50%;
                `}
            ></div>
        </div>
    </div>;
}

export default Spinner;
