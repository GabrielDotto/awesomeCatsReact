import { GET_BREEDS_SUCCESS, GET_BREEDS_FAILURE } from "../actions/actionTypes";

export const getBreedsSuccess = (breedsResult) => {
    return {
        type: GET_BREEDS_SUCCESS,
        payload: breedsResult
    }
}

export const getBreedsFailure = () => {
    return {
        type: GET_BREEDS_FAILURE
    }
}


export const getBreeds = searchValue => {
    return dispatch  => { 
        fetch(`https://api.thecatapi.com/v1/breeds/search?q=${searchValue}`, {
            crossDomain: true,
            headers: {'x-api-key': "4280a662-af70-43f2-a2ba-2e75d4c0d76d"},
        })
        .then(response => response.json())  
        .then(data => {
            console.log(data);
            dispatch(getBreedsSuccess(data))
        })
        .catch( err => dispatch(getBreedsFailure()));
    }
};
