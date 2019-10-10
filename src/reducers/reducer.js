const reducer = (state = { isFetching: true }, action) => {
    switch (action.type) {
    case 'REQUEST_DATA':
        return {
            ...state,
            isFetching: true,
            characters: action.payload
        };
    case 'GET_CHARACTERS':
        return {
            ...state,
            isFetching: false,
            characters: action.payload
        };
    case 'GET_SHIPS':
        return {
            ...state,
            ships: action.payload
        };
    default:
        return state;
    }
};

export default reducer;
