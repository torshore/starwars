const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_CHARACTERS':
            return {
                ...state,
                characters: action.payload
            }
        case 'GET_SHIPS':
            return {
                ...state,
                ships: action.payload
            }
        default:
            return state
    }
}

export default reducer