import { SET_BREEDS_SEARCHED } from './actionTypes';

export const setSearchedBreeds = content => ({
    type: SET_BREEDS_SEARCHED,
    payload: { content }
});
