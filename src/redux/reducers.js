import * as types from './types';

export const initialState = {
    currentTime: new Date().toString(),
    user: {},
    searchStr: 'start'
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_NEW_TIME:
            return { ...state, currentTime: action.payload }
        case types.SEARCH_STR:
            return { ...state, searchStr: action.payload }
        case types.FETCH_PEOPLE:
            return { ...state, people: action.payload }
        default:
            return state;
    }
}