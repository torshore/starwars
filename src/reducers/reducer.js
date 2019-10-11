import { combineReducers } from 'redux';

const reducer = (state = {}, action) => {
    switch (action.type) {
    case 'GET_CHARACTERS':
        return {
            ...state,
            characters: action.payload
        };
    case 'GET_SHIPS':
        return {
            ...state,
            ships: action.payload
        };
    case 'GET_SINGLE_CHARACTER':
        return {
            ...state,
            character: action.payload
        };
    default:
        return state;
    }
};

const fetchingReducer = (state = { isFetching: true }, action) => {
    switch (action.type) {
    case 'REQUEST_DATA':
        return {
            ...state,
            isFetching: true
        };
    case 'RECEIVED_DATA':
        return {
            ...state,
            isFetching: false
        };
    default:
        return state;
    }
};

const rootReducer = combineReducers({ reducer, fetchingReducer });

export default rootReducer;
