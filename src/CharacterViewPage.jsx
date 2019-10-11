import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { css } from 'emotion';

import { getSingleCharacter } from './actions/actions.js';
import Spinner from './Spinner.jsx';

const valueCSS = css`
    margin-left: 20px;
`;

function CharacterViewPage(props) {
    const dispatch = useDispatch();
    const isFetching = useSelector(state => state.fetchingReducer.isFetching);
    const character = useSelector(state => state.reducer.character);

    useEffect(() => {
        dispatch(getSingleCharacter(props.characterName));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return isFetching
        ? <Spinner />
        : <div className={css`
            width: 50%;
            padding: 30px;
            background: #a9d5ee;
        `}>
            <h1 className={css`margin: 0 0 20px 0;`}>{character && character[0].name}</h1>

            <div>
                <div>
                    <span>Eye Colour: </span>
                    <span className={valueCSS}>{character && character[0].eye_color}</span>
                </div>
                <div>
                    <span>Hair Colour: </span>
                    <span className={valueCSS}>{character && character[0].hair_color}</span>
                </div>
                <div>
                    <span>Skin Colour: </span>
                    <span className={valueCSS}>{character && character[0].skin_color}</span>
                </div>
                <div>
                    <span>Gender: </span>
                    <span className={valueCSS}>{character && character[0].gender}</span>
                </div>
            </div>
        </div>;
}

export default CharacterViewPage;
