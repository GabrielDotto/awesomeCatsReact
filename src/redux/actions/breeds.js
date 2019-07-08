import { GET_BREEDS_SUCCESS, GET_BREEDS_FAILURE, GET_IMAGE_SUCCESS, GET_IMAGE_FAILURE } from "../actions/actionTypes";

const DEFAULT_BREED_SEARCH_URL = "https://api.thecatapi.com/v1/breeds/search?q=";
const IMAGE_SEARCH_URL = "https://api.thecatapi.com/v1/images/search?breed_ids=";
const DEFAULT_HEADERS =  {
    crossDomain: true,
    headers: {'x-api-key': "4280a662-af70-43f2-a2ba-2e75d4c0d76d"},
}

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
        fetch(`${DEFAULT_BREED_SEARCH_URL}${searchValue}`, DEFAULT_HEADERS)
        .then(response => response.json())  
        .then(data => dispatch(getBreedsSuccess(data)))
        .catch( err => dispatch(getBreedsFailure()));
    }
};


export const getImage = idCat => {
    return dispatch => {
        fetch(`${IMAGE_SEARCH_URL}${idCat}`, DEFAULT_HEADERS)
        .then(response => response.json())
        .then( data => {
            dispatch(getImageSuccess(idCat, data[0].url));
        })
        .catch(err => dispatch(getImageFailure()))
    }
}

export const getImageSuccess = (idCat, urlImage) => {
    return {
        type: GET_IMAGE_SUCCESS,
        idCat,
        urlImage
    }
}

export const getImageFailure = () => {
    return { 
        type: GET_IMAGE_FAILURE
    }
}