import { SET_BREEDS_SEARCHED } from "../actions/actionTypes";

export const getBreeds = searchValue => ({
    type: SET_BREEDS_SEARCHED,
    payload: { searchValue }
});
