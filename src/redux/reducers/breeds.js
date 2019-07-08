import { GET_BREEDS_SUCCESS, GET_BREEDS_FAILURE } from "../actions/actionTypes";

const initialState = {
  breeds: [],
};

export default function breeds(state = initialState, action) {
  
  switch (action.type) {
    case GET_BREEDS_SUCCESS: {
      const  content  = action.payload;
      console.log("REDUCER SUCCESS", action.payload);
      return {
        ...state,
        breeds:  content,
      };
    }
    case GET_BREEDS_FAILURE: {
      console.log("BREEDS FAILURE");
      return { 
        ...state,
        breeds: []
      }
    }
    default:
      return state;
  }
}
