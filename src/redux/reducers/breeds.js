import {
   GET_BREEDS_SUCCESS,
   GET_BREEDS_FAILURE,
   GET_IMAGE_SUCCESS,
   GET_IMAGE_FAILURE
  } from "../actions/actionTypes";

const initialState = {
  breeds: [],
  activeCatImage: ""
};

// TODO: Adicionar state Loading

export default function breeds(state = initialState, action) {
  
  switch (action.type) {
    case GET_BREEDS_SUCCESS: {
      return {
        ...state,
        breeds: action.payload
      };
    }
    case GET_BREEDS_FAILURE: {
      return { 
        ...state,
        breeds: []
      }
    }
    case GET_IMAGE_SUCCESS: {
      return {
        ...state,
        activeCatImage: action.urlImage
      }
    }
    case GET_IMAGE_FAILURE: {
      // Toast / mensagem ???
      return {
        ...state
      }
    }
    default:
      return state;
  }
}
