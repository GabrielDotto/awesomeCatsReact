import { SET_BREEDS_SEARCHED } from "../actionTypes";

const initialState = {
  breeds: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_BREEDS_SEARCHED: {
      const { content } = action.payload;
      return {
        ...state,
        breeds: content,
      };
    }
    default:
      return state;
  }
}
