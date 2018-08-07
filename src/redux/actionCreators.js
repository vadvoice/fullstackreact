import * as types from './types';

const host = 'https://andthetimeis.com'

export const fetchNewTime = ({ timezone = 'pst', str='now'}) => ({
  type: types.FETCH_NEW_TIME,
  payload: new Date().toString(),
  meta: {
    type: 'api',
    url: host + '/' + timezone + '/' + str + '.json'
  }
})

export const searchString = (e) => {
    return {
        type: types.SEARCH_STR,
        payload: e
    }
}

export const fetchPeople = (e) => {
    return {
        type: types.FETCH_PEOPLE,
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