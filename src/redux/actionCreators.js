import * as types from './types';

export const fetchNewTime = (e) => {
    return {
        type: types.FETCH_NEW_TIME,
        payload: new Date().toString(),
    }
}

export const searchString = (e) => {
    return {
        type: types.SEARCH_STR,
        payload: e
    }
}

export const login = (user) => ({
    type: types.LOGIN,
    payload: user
})

export const logout = () => ({
    type: types.LOGOUT,
})