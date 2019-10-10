const reducer = (state = {isFetching: true}, action) => {
    switch (action.type) {
        case 'GET_CHARACTERS':
            return {
                ...state,
                isFetching: false,
                characters: action.payload
            }
        case 'GET_SHIPS':
            return {
                ...state,
                isFetching: false,
                ships: action.payload
            }
        default:
            return state
    }
}

export default reducer;
