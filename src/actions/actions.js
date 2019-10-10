const BASE_URL = 'https://swapi.co/api';
const CHARACTER_URL = `${BASE_URL}/people`;
const SHIPS_URL = `${BASE_URL}/starships`;

const getRemainingPages = (count, url) => {
    const remainingPages = Math.ceil((count - 1) / 10);
    const fetchCalls = [];

    for (let i = 2; i <= remainingPages; i++) {
        fetchCalls.push(fetchPages(i, url));
    }

    return Promise.all(fetchCalls);
};

const fetchPages = (pageNumber, url) => {
    return fetch(`${url}?page=${pageNumber}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return response.json();
    }).then(data => data.results);
};

export const getCharacters = () => {
    let characters = [];

    return dispatch => {
        dispatch({ type: 'REQUEST_DATA' });

        fetch(`${CHARACTER_URL}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }

            return response.json();
        }).then(data => {
            characters = data.results;

            return getRemainingPages(data.count, CHARACTER_URL);
        }).then(characterData => {
            characters = characterData.reduce((acc, currentArray) => {
                return acc.concat(currentArray);
            }, characters);

            return dispatch({ type: 'GET_CHARACTERS', payload: characters });
        });
    };
};

export const getShips = (characters) => {
    let ships = [];
    return dispatch => {
        dispatch({ type: 'REQUEST_DATA' });

        return fetch(`${SHIPS_URL}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }

            return response.json();
        }).then(data => {
            ships = data.results;

            return getRemainingPages(data.count, SHIPS_URL);
        }).then(shipData => {
            ships = shipData.reduce((acc, currentArray) => {
                return acc.concat(currentArray);
            }, ships);

            return dispatch({ type: 'GET_SHIPS', payload: ships });
        });
    };
};
