import React from 'react';
import { css } from 'emotion'

function PageLayout(props) {
    return <div
        className={css`
            display: flex;
            flex-direction: column;
            height: 100%;
        `}
    >
        <div className={css`
            flex: none;
            display: flex;
            align-items: center;
            padding: 10px 20px;
            background: #163c8e;
        `}>
            <span>Star Wars</span>
        </div>

        <div className={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 45px;
            box-sizing: border-box;
            height: 100%;
        `}>
            {props.children}
        </div>
    </div>;
}

export default PageLayout;