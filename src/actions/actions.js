const BASE_URL = 'https://swapi.co/api';
const CHARACTER_URL = `${BASE_URL}/people`

export const getCharacters = () => {
    let characters = [];
    return dispatch => {
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
            const remainingPages = Math.ceil((data.count - 1) / 10);
            const fetchCalls = [];
            
            for (let i = 2; i <= remainingPages; i++) {
                fetchCalls.push(fetchRemainingPages(i))
            }

            return Promise.all(fetchCalls)
        }).then(characterData => {
            characters = characterData.reduce((acc, currentArray) => {
                return acc.concat(currentArray)
            }, characters)

            return dispatch({ type: 'GET_CHARACTERS', payload: characters })
        });
    }
}

const fetchRemainingPages = (pageNumber) => {
    return fetch(`${CHARACTER_URL}?page=${pageNumber}`, {
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
}
    
