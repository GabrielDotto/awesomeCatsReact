import {
   GET_BREEDS_SUCCESS,
   GET_BREEDS_FAILURE,
   GET_IMAGE_SUCCESS,
   GET_IMAGE_FAILURE
  } from "../actions/actionTypes";

const initialState = {
  breeds: [],
};

export default function breeds(state = initialState, action) {
  
  switch (action.type) {
    case GET_BREEDS_SUCCESS: {
      console.log("REDUCER SUCCESS", action.payload);
      return {
        ...state,
        breeds: action.payload
      };
    }
    case GET_BREEDS_FAILURE: {
      console.log("BREEDS FAILURE");
      return { 
        ...state,
        breeds: []
      }
    }
    case GET_IMAGE_SUCCESS: {
      let catBreed = state.breeds.find( breed => breed.id === action.idCat);
      catBreed.url = action.urlImage;
      console.log("state", state);
      return {
        ...state,
        breeds: state.breeds
      }
    }
    case GET_IMAGE_FAILURE: {
      console.log("IMAGE FAILURE");
      // Toast / mensagem ???
      return {
        state
      }
    }
    default:
      return state;
  }
}
